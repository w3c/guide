---
title: Mailing list maintenance
toc: true
---

W3C's mailing lists are managed using a customized version of SmartList.

## E-mail command interface

Many W3C lists allow people to subscribe and unsubscribe using an [e-mail command interface](https://www.w3.org/email/).

## Web interface

The [List management tool](https://lists.w3.org/admin/manage) allows list maintainers to add or remove subscribers, view info about the list's configuration, and view recent log entries.

If you need more info about a list that is not provided by the list management tool, please contact [sysreq@w3.org](mailto:sysreq@w3.org).

## Moderating messages

Some mailing lists restrict posting to a specific set of addresses, for example subscribers to the list or addresses previously authorized to post to a W3C list. See [accept lists](#accept-lists) below for more details. Messages from unknown addresses or messages that exceed the list's size limit are queued for manual approval by a moderator.

Mailing list maintainers can review and approve or reject messages using the [Mailing list moderation](https://lists.w3.org/admin/moderate) tool.

If you would like someone to be able to post directly to a given list without having their messages queued for moderation, use the [List management tool](https://lists.w3.org/admin/manage) to add their email address to the "accept2" file for the list in question. Future messages from their address will be distributed directly to the list without needing to be moderated. This happens automatically when messages are approved using the [Mailing list moderation](https://lists.w3.org/admin/moderate) tool.

## Accept lists

Most mailing lists are configured to accept mail from subscribers to that list, at a minumum. Many lists also accept mail from a list of extra addresses, referred to in the [List management tool](https://lists.w3.org/admin/manage) as `accept2`.

In addition to these primary accept lists, a list can be configured to use one of our global accept lists:

- all addresses authorized to post to team lists (`accept.team`)
- all addresses authorized to post to team and member lists (`accept.member`)
- all addresses authorized to post to any of our lists (`accept.all`)

Details about which accept list(s) are in place for a given mailing list are in the *Accept lists* section of the [List management tool](https://lists.w3.org/admin/manage).

## Related links

- [General info on mailing lists at W3C](https://www.w3.org/email/)
- [Email guidelines and policies](https://www.w3.org/email/#policies)
- [Mailing list policies](https://www.w3.org/policies/email/)

