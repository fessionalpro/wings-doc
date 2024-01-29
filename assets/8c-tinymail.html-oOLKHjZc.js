import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,f as a}from"./app-mN42Vc4a.js";const t={},l=a('<h1 id="_8c-tinymail-component" tabindex="-1"><a class="header-anchor" href="#_8c-tinymail-component"><span>8C.TinyMail Component</span></a></h1><p>Based on Spring Mail, provides database-centric mail send service</p><ul><li>sync/async, single/batch send</li><li>limited frequency, send wait by error type</li><li>Stop sending by success staus or failure count</li><li>concurrent or isolated send for multiple applications</li><li>Support multiple email accounts</li><li>Support dryrun, send by app, by runmode</li></ul><h2 id="_8c-1-design-requirement" tabindex="-1"><a class="header-anchor" href="#_8c-1-design-requirement"><span>8C.1.Design Requirement</span></a></h2><p>Sending emails with small transaction guarantees, ability to limit frequency and handle common errors</p><ul><li>Spring Mail as core, its compatibility and enhancement</li><li>Avoid full scan of database by timed task for misfired/failed emails</li><li>Handle common mail providers errors, eg. frequency limit, account lock</li><li>Stop or delay sending according to exception type</li><li>Support multiple accounts, eg. overseas and domestic</li><li>Support business email Header to locate data when receiving</li></ul><h2 id="_8c-2-core-service" tabindex="-1"><a class="header-anchor" href="#_8c-2-core-service"><span>8C.2.Core Service</span></a></h2><p>Core features and components send mail without transaction or database.</p><ul><li>MailNotice - non-transaction sync/async mail notification</li><li>MailConfigProvider - provides spring.mail compatible configuration by name</li><li>MailSenderProvider - provide singleton JavaMailSender by the configuration</li><li>MailSenderManager - unified management of mail sending, handling the host level frequency limit</li><li>MailWaitException - need to delay the mail sending</li></ul><p>Database based , transactional mail send service, can auto handle some mail exceptions .</p><ul><li>TinyMailService - sync/async, retry/batch resend</li></ul><h2 id="_8c-3-general-usage" tabindex="-1"><a class="header-anchor" href="#_8c-3-general-usage"><span>8C.3.General Usage</span></a></h2><p>For unimportant email notifications, mainly without transaction, you can use MailNotice directly. Those with certain transaction, eg. no misfire and failure-retry, use TinyMailService.</p><p>Both provide 3 types of methods with the same behavior to meet sync/async, database transaction or performance requirements.</p><ul><li>send - sends synchronously, throws exceptions, affects the current thread and transaction</li><li>post - sends synchronously, logs exceptions, affects the current thread, but not transactions</li><li>emit - sends asynchronously, does not affect the current thread or transactions</li></ul><p>When using the transactional TinyMailService, the following execution logic is followed.</p><ul><li>mails are first stored in database, but no unique check, multiple copies may exist</li><li>Before sending, check optimistic lock (netxLock), send if successful, ignore if not</li><li>On first try, send single piece. On retry, async bulk send</li><li>Handle exceptions to determine wait time based on host and mail</li><li>Update database, mainly for count, current result, next send time</li><li>If retry is required, add to priority queue and schedule async sending</li></ul><h2 id="_8c-4-resend-mail" tabindex="-1"><a class="header-anchor" href="#_8c-4-resend-mail"><span>8C.4.Resend Mail</span></a></h2><p>If mails are not sent successfully, eg. service down, program hung, etc., the following mechanism is used to resend them,</p><ul><li>Manually invoke the TinyMailService.scan method</li><li>TinyMailServiceImpl will auto scans once on the application startup.</li></ul><p>The resending is not done by scheduled tasks, mainly based on the following situations where there is no need to scan regularly</p><ul><li>All mails are sent through TinyMailService</li><li>If there is no downtime or stop, mail will be sent eventually or terminated normally</li><li>Short-term downtime, the application will restart with a resend scan</li><li>The application cannot restart, and can be resent by another application</li></ul><p>The following cases will not be resent, mainly due to the mail format problem.</p><ul><li>Mail parsing exceptions, such as to and from errors, etc.</li><li>Exceptions with stopRetry markers</li></ul><h2 id="_8c-5-frequency-limit" tabindex="-1"><a class="header-anchor" href="#_8c-5-frequency-limit"><span>8C.5.Frequency Limit</span></a></h2><p>Mail service providers generally have a frequency limit mechanism, and the paid ones have a big threshold than the free ones, such as gmail mailbox</p><blockquote><p>You may see this message if you send an email to a total of more than 500 recipients in a single email and or more than 500 emails sent in a day. When you get this error, you should be able to send emails again within 1 to 24 hours. To prevent this from happening in the future, try creating a Google Group of all your email recipients and sending the message to that group&#39;s email address.</p></blockquote><p>Trigger frequency limit, can be by the number of email and the number of visits, both are not equal.</p><ul><li>For single sending, one mail per visit, connect, login, send, close</li><li>For bulk sending, one bulk per visit, connect, login, send xN, close</li></ul><p>wings use bulk sending when async emit and resend to reduce the number of logins. In addition you can set the waiting interval between two logins, single or bulk send will wait automatically.</p><p>Waiting interval, within the threshold is sleep, otherwise MailWaitException is thrown</p><h2 id="_8c-6-error-handling" tabindex="-1"><a class="header-anchor" href="#_8c-6-error-handling"><span>8C.6.Error Handling</span></a></h2><p>Email exceptions, mainly have three categories</p><ul><li>Format error - the mail itself problem, the same error when resending.</li><li>Account error - by mail provider, such as frequency limit, account lock, can resend when unlocked.</li><li>Network error - depending on the network, usually can retry soon</li></ul><p>according to the above types and the server response message, throw MailWaitException and leave it to the caller to handle.</p><h2 id="_8c-7-status-hook" tabindex="-1"><a class="header-anchor" href="#_8c-7-status-hook"><span>8C.7.Status Hook</span></a></h2><p>use StatusHook to handle success/failure status when sending emails with TinyMailService,</p><ul><li>stop() - true, it will stop retrying the email and set NextSend to empty.</li></ul>',38),s=[l];function o(r,c){return i(),n("div",null,s)}const u=e(t,[["render",o],["__file","8c-tinymail.html.vue"]]);export{u as default};
