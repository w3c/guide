---
title: How to close a work Group - Implementation
toc: true
---

_This is the Team documentation detailing the various steps when [closing a group](closing-wg.md)._

## Group Successfully Completed  {#success}

- Relevant Contact raises awareness to TiLT. Awareness includes:
  
  - Short assessment of success
  - Status of any Rec-track work that has not completed
  - Next steps
- TiLT approves closure
- Relevant Contact notifies the Group (preferably using its publicly available mailing list).
- Relevant Contact works with Comm Team by writing a draft closure announcement to w3t-comm (you may use the [template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2F&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fgroup-closed.html&submit=Continue...)).
- Comm Team sends announcement to w3c-ac-members, cc: chairs@w3.org and the Working Group's mailing-list(s) \[so there is a breadcrumb in the group's archive(s)]; and then [implements closure on the Web site](#after)

## Group Under-resourced, Unsuccessful, Detrimental or Finished Early  {#unsuccessful}

- TAG, AB, or Relevant Contact raises awareness to TiLT. Awareness includes:
  
  - Short assessment of reasons for failure
  - Status of any Rec-track work that has not completed
  - Next steps
- TiLT starts [AC Review of proposed group closure](https://www.w3.org/policies/process/#GeneralTermination).
- TiLT approves closure
- Relevant Contact notifies the Group (preferably using its publicly available mailing list).
- Relevant Contact works with Comm Team by writing a draft closure announcement to w3t-comm (you may use the [template](https://www.w3.org/new-doc-from-template?location=%2FTeam%2F&template=%2Fafs%2Fw3.org%2Fpub%2FWWW%2FTeam%2FTemplates%2Fgroup-closed.html&submit=Continue...)).
- Comm Team sends announcement to w3c-ac-members, cc: chairs@w3.org and the Working Group's mailing-list(s) \[so there is a breadcrumb in the group's archive(s)]; and then [implements closure on the Web site](#after)

**Note:** In the case of a controversial closure, W3M MAY opt to give the Advisory Committee the opportunity to respond to a *proposal to closure*.

## Implementing the Closure  {#after}

The Contact:

- Requests publication of any WD, CR, PER as terminating Notes. The document is *very short* with any rationale in the status. (Alternatively, it is also possible for the Webmaster to mark documents as obsolete without republication, but this is an inferior approach. The "stub" approach is intended to be lightweight and address long-term goals of useful "latest version" URIs.)
- Ensures the group's home page indicates that it is closed. Point people to useful pages for more information or next steps;
- Modify the group's charter: end date, a pointer to a closure announcement to the group's mailing list (usually from the public archive);
- Identifies related groups (e.g. Chairs group, Coordination Group) that should be closed by the Comm team;
- Updates any relevant mailing list archives with the [List Archive Customizer](https://lists.w3.org/admin/customize) with updated archive header information indicating that the list used to be the list for the Foo WG (with a link);
- Is the mailing list to be kept open following the closure of the group? If so:
  
  1. Obtain a copy of the subscribers who were subscribed to the list due to their membership in the group, by copying the addresses listed in the 'Non auto removable' portion of the subscriber list on the [list admin page](https://lists.w3.org/admin/manage) for the list in question.
  1. Add that list of addresses to the 'Distribution auto removable' portion of the distribution list by copying it into the textarea at the bottom and submitting the form.
  1. [Ask the Systems Team](mailto:sysreq@w3.org) to dissociate the DB group from the mailing list.
- If the list is to be closed:
  
  1. Deactivate the mailing list via the [list admin page](https://lists.w3.org/admin/manage) *"deactivate this list"* menu entry;
  1. If you would like a custom autoreply to be sent back instead of the generic one, [write to sysreq](mailto:sysreq@w3.org?subject=custom%20autoreply%20for%20LIST-NAME) and provide text that informs people where the discussion has moved.
- If the WG has a wiki, contact systeam if the wiki should be archived (closed for good).
- Should contact systeam in case of issues.
- Update [FTEMS](https://www.w3.org/2005/09/manage/Overview.php3?uastate=showuas) to reflect the change, in coordination with the Function lead.

The Comm team:

- Closes the [group(s)](https://www.w3.org/admin/) by setting their `Closed Date`. The WG/IG closing dates are available as an API data point.

   This automaticly moves the group(s) from [the public list of groups](https://www.w3.org/groups/) to the list of closed groups.

