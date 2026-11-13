---
title: In-place modification of W3C Technical Reports
published_at: https://www.w3.org/guide/standards-track/republishing
toc: true
---

_This is the W3C Communications Team's policy regarding the in-place modification of some W3C Technical reports. See also the [Persistence Policy for technical reports](https://www.w3.org/policies/uri-persistence/)._

## Classes of documents that may be modified  {#classes}

1. Only "end state" documents may be modified in place at any time: Recommendations and Working Group Notes. See [permitted classes of modifications for "end state" documents](#endstate-modification)
2. Revised Working Drafts (not First Public Working Drafts) may be modified in place *on the day of publication*. See [Modifications for ordinary Working Drafts](#ordinary-wds)
3. Other classes of documents are corrected through republication.
4. If a document has been superseded, it should not be modified in place.

## Permitted classes of modifications for "end state" documents  {#endstate-modification}

The only modifications allowed in place are:

1. Fixes to broken markup (e.g., invalid markup)
1. Fixed to broken links (i.e., URIs)
1. Fixes to broken style sheets
1. Some visible status updates, such as indicating newer versions
1. [An individual's name upon request to a W3C Ombudsperson](https://www.w3.org/2016/02/trans-rec-edit.html)

Except for those changes required by this policy in section four, no in-place changes to the text of a document, besides some visible status updates, are permitted, however minor.

## Availability of the original version for "end state" documents  {#availability}

The Webmaster must ensure that the original version of the document (i.e., before the in-place modification) is available in CVS.

**Note:** The public should have access to the original version through a public read-only CVS server. One approach is to rename the original files and link to them from the status section of the new doc. The old docs should have updated status to indicate that they have been superseded and why.

## Indication of changes in the document for "end state" documents  {#indication}

1. The title page publication date must not be changed
1. There must be a "reprinting" date in addition to the title page publication date. Example:
   
   *W3C Recommendation 15 March 2003 (Format and link errors corrected 1 Jan 2004)*
1. The status section should provide further information about the nature of the changes.
1. The status section should explain that the Team has kept a copy of the original draft.

Examples:

- [https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/](https://www.w3.org/TR/2000/REC-DOM-Level-2-Views-20001113/)
- [https://www.w3.org/TR/2003/REC-xptr-framework-20030325/](https://www.w3.org/TR/2003/REC-xptr-framework-20030325/)
- [https://www.w3.org/TR/2016/NOTE-url-1-20161206/](https://www.w3.org/TR/2016/NOTE-url-1-20161206/)

## Requesting an in-place modification for "end state" documents  {#requesting}

Editors (or others) send a request to the Webmaster, cc'ing the project management lead, webreq, and w3t-comm. The request must include:

1. A detailed list of changes
1. Revised document(s) (including revised status section)

If these conditions are met, the Webmaster will replace the published documents with the modified ones.

## Modifications for ordinary Working Drafts  {#ordinary-wds}

A revised Working Draft may be modified in-place only if the modifications are done on the *same day* of the original publication (Boston time). There are no restrictions on the set of permitted modifications and there is no need to indicate the changes in the document. Republication is achieved using the [W3C automatic publishing system](https://github.com/w3c/echidna/wiki).
