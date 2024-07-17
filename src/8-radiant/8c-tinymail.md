---
isOriginal: true
icon: mug-hot
category:
  - Tiny
  - Mail
---

# 8C.TinyMail Component

Based on Spring Mail, provides database-centric mail send service

* sync/async, single/batch send
* limited frequency, send wait by error type
* Stop sending by success staus or failure count
* concurrent or isolated send for multiple applications
* Support multiple email accounts
* Support dryrun, send by app, by runmode

## 8C.1.Design Requirement

Sending emails with small transaction guarantees, ability to limit frequency and handle common errors

* Spring Mail as core, its compatibility and enhancement
* Avoid full scan of database by timed task for misfired/failed emails
* Handle common mail providers errors, eg. frequency limit, account lock
* Stop or delay sending according to exception type
* Support multiple accounts, eg.  overseas and domestic
* Support business email Header to locate data when receiving

## 8C.2.Core Service

Core features and components send mail without transaction or database.

* MailNotice - non-transaction sync/async mail notification
* MailConfigProvider - provides spring.mail compatible configuration by name
* MailSenderProvider - provide singleton JavaMailSender by the configuration
* MailSenderManager - manage mail sending, handle host level frequency limit
* MailWaitException - need to delay the mail sending
* MailStopException - stop sending, e.g. format error
* MailRetryException - retry at next schedule time

Database based , transactional mail send service, can auto handle some mail exceptions .

* TinyMailService - sync/async, retry/batch resend
* TinyMail - typed mail
* TinyMailLazy - lazy edit mail

## 8C.3.General Usage

For unimportant email notifications, mainly without transaction, you can use MailNotice directly.
Those with certain transaction, eg. no misfire and failure-retry, use TinyMailService.

Both provide 3 types of methods with the same behavior to meet sync/async, database transaction or performance requirements.

* send - sends synchronously, throws exceptions, affects the current thread and transaction
* post - sends synchronously, logs exceptions, affects the current thread, but not transactions
* emit - sends asynchronously, does not affect the current thread or transactions

When using the transactional TinyMailService, the following execution logic is followed.

* mails are first stored in database, but no unique check, multiple copies may exist
* Before sending, check optimistic lock (netxLock), send if successful, ignore if not
* On first try, send single piece. On retry, async bulk send
* Handle exceptions to determine wait time based on host and mail
* Update database, mainly for count, current result, next send time
* If retry is required, add to priority queue and schedule async sending

## 8C.4.Resend Mail

If mails are not sent successfully, eg. service down, program hung, etc., the following mechanism is used to resend them,

* Manually invoke the TinyMailService.scan method
* TinyMailServiceImpl will auto scans once on the application startup.

The resending is not done by scheduled tasks, mainly based on the following situations where there is no need to scan regularly

* All mails are sent through TinyMailService
* If there is no downtime or stop, mail will be sent eventually or terminated normally
* Short-term downtime, the application will restart with a resend scan
* The application cannot restart, and can be resent by another application

The following cases will not be resent, mainly due to the mail format problem.

* Mail parsing exceptions, such as to and from errors, etc.
* Exceptions with stopRetry markers

## 8C.5.Frequency Limit

Mail service providers generally have a frequency limit mechanism, and the paid ones have a big threshold
than the free ones, such as gmail mailbox

> You may see this message if you send an email to a total of more than 500 recipients in
> a single email and or more than 500 emails sent in a day.
> When you get this error, you should be able to send emails again within 1 to 24 hours.
> To prevent this from happening in the future, try creating a Google Group of all your
> email recipients and sending the message to that group's email address.

Trigger frequency limit, can be by the number of email and the number of visits, both are not equal.

* For single sending, one mail per visit, connect, login, send, close
* For bulk sending, one bulk per visit, connect, login, send xN, close

wings use bulk sending when async emit and resend to reduce the number of logins.
In addition you can set the waiting interval between two logins, single or bulk
send will wait automatically.

Waiting interval, within the threshold is sleep, otherwise MailWaitException is thrown

## 8C.6.Error Handling

Email exceptions, mainly have three categories

* Format error - the mail itself problem, the same error when resending.
* Account error - by mail provider, such as frequency limit, account lock, can resend when unlocked.
* Network error - depending on the network, usually can retry soon

according to the above types and the server response message,
throw the following exception  and leave it to the caller to handle.

* MailStopException - shoul stop sending
* MailWaitException - retry after waiting
* MailRetryException - retry at next schedule

## 8C.7.Status Hook

use StatusHook to handle success/failure status when sending emails with TinyMailService,

* stop() - true, it will stop retrying the email and set NextSend to empty.

## 8C.8.Lazy Mail

normally, tinymail only responsible for sending mail, not care about mail information
(subject, content, attachment, sender and receiver, etc.)
That is, the mail is pre-generated and saved, and the information for the sender is read-only.

But in most business, emails are only notification phase and should not affect the main business
(e.g., network connectivity leading to long transactions, errors leading to database rollbacks, etc.).
Such case of email should send async or edit lazily, even if the error, can be repaired and resend after.

* `content == null` - identifies lazy editing
* `setMailLazy(bean, para)` - sets the lazy editing function and parameters.
* `TinyMailLazy` - interface of lazy editing email

Lazy emails that meet all of the above, will be edited only for the following before sending,

* subject - not recommended lazy, should be set in advance
* content - may be lazy, considering template errors
* attachments - dynamic attachments may be lazy
