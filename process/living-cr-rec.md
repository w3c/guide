---
title: Considerations on the final maturity stage of group deliverables
toc: yes
---

The W3C Process defines maturity stages on the [Recommendation track](https://www.w3.org/policies/process/#rec-track) — Working Draft, Candidate Recommendation (Snapshot and Draft), Recommendation — and transition requirements for entering each stage.

Some Working Groups choose to publish the latest state of their work as a Candidate Recommendation (with Snapshots) and set expectations that they do not plan to advance to Recommendation. This document describes practical considerations for Working Groups when choosing between advancing to Recommendation or publishing the latest state of their work as a Candidate Recommendation.

## Considerations on the final stage of a document {#considerations}

### Targeted audience {#audience}

Recommendations are endorsed by W3C as standards for the Web. Candidate Recommendation Snapshots are not endorsed by W3C as standards.

Endorsement by W3C as a standard may be a requirement for others to adopt or otherwise refer to a specification. Regulations, industries such as those that produce consumer electronic products, etc., may require organization-level endorsement, guarantees provided by the standards development process, and commitments to the stability of a technical specification. For example, a W3C specification needs to be a Recommendation to be referred to by an ISO standard, or to become an ISO/IEC standard itself through the [PAS Submission mechanism](https://www.w3.org/2010/04/pasfaq).

On the other hand, some groups may find that the Candidate Recommendation stage aligns more naturally with implementation work that informs the specification development, and with the prioritization mechanisms in multiple codebases. Keep in mind that organizations will still want to refer to these specifications.


### Wide review {#widereview}

The Recommendation and Candidate Recommendation Snapshot statuses both signal that the document has received [wide review](https://www.w3.org/policies/process/#wide-review).

In the interest of updating stale documents in a timely manner, the Process notes that a Candidate Recommendation Snapshot may be published even though issues raised during wide review have yet to be addressed, with the understanding that the Working Group will address these issues over time.

*Note:* The W3C Process empowers the W3C staff to reject publication of a Candidate Recommendation Snapshot if there is inadequate evidence of progress addressing outstanding issues. Thus, CR Snapshots should not been seen as a way of delaying the handling of potentially contentious issues.


### Stability/Availability signals {#stability}

A Recommendation signals a stable set of features with [adequate implementation experience](https://www.w3.org/policies/process/#implementation-experience), and a test suite that anyone may use to check alignment of an implementation with the Recommendation.

On the other hand, there is no adequate implementation experience requirement to publish a Candidate Recommendation Snapshot. It may contain features that are still up for changes, that are not yet available across implementations, and/or that have limited interoperability across implementations. Test cases may not yet be available.

Adequate implementation experience is key for detecting issues (including privacy and security issues) with a given feature, or lack of support. The web community at large also benefits from clear signals on features. Groups working on specifications that are expected to be, or have been, at Candidate Recommendation stage for a long time should consider adopting a change policy in the "Status of this Document" section of the document, that sets expectations in terms of adopting, testing and gathering implementation experience for new features. For example, on top of mandatory tests, groups may require explicit support by implementers before adopting a change.

### Revisions / Maintenance {#maintenance}

Three mechanisms may be used to revise a specification that was published as a Recommendation:

1. *Candidate amendments*. A Working Group may include [candidate amendments](https://www.w3.org/policies/process/#candidate-amendments) in a Recommendation at any time, and without further review. These are conspicuously labeled within the specification, and the specification retains its status as a "Recommendation." In order for the group to publish the document as a "clean" Recommendation, there are review steps, after which conspicuous labels are removed, and the candidate amendments are merged. Note: A Recommendation may only include new features provided the text of the original Recommendation set the expectation that this would be permitted.
2. *Backing up*. A Working Group may republish the Recommendation [at a lower maturity stage](https://www.w3.org/policies/process/#rec-track-regression) by fulfilling the requirements to transition to that maturity stage.
3. *Full revision*. A Working Group may create a new version/level of the document, published on the Recommendation track and that eventually supersedes the previous Recommendation.
    
To revise a specification published as a Candidate Recommendation Snapshot:    

1. A Working Group may publish Candidate Recommendation Drafts at any time and without further review. The drafts can integrate changes directly, there is no need to track substantive changes as candidate amendments. Substantive changes still need to be tracked *somehow* to [publish another Candidate Recommendation Snapshot](https://www.w3.org/policies/process/#update-reqs): they must go through wide review and be publicly documented; for example, through a detailed list of changes, ideally with links from each change to the issue that motivated it. Publication of a new Candidate Recommendation Snapshot should happen within 24 months of the group making the substantive changes.

The Process places no restrictions on the number of revisions that may go through these mechanisms. Feedback from Working Groups that have gone through either of these options is mixed:

- With Candidate Amendments, groups value the possibility to preserve the Recommendation status. Some like the need to identify, categorize and track changes thoroughly and to assess support for them within implementations, which eases wide review. Others miss the flexibility of being able to update the document as a regular draft, and dislike the need to identify and track changes within the document itself in particular. Some changes may be hard to isolate in the source for identification purpose. Commonly used specification editing tools do not currently help with candidate amendments management. The WebRTC Working Group uses a [post-processing module](https://lists.w3.org/Archives/Public/spec-prod/2024JulSep/0008.html) along with a JSON file that tracks amendments to ease the process.
- For some groups, the "backing up" approach feels like a downgrade after having made the effort to reach Recommendation.
- The full revision path enables groups to progress features in different levels at once, and newer levels may be published as delta specifications, as is sometimes done by the CSS Working Group. Maintenance of multiple levels is more demanding. Using multiple branches as [done by the Pointer Events Working Group](https://lists.w3.org/Archives/Member/chairs/2025AprJun/0059.html) can work for groups who want to keep the source of a document in a single folder in their repository.
- Groups going through Candidate Recommendation Drafts before publishing a new Candidate Recommendation Snapshot appreciate the flexibility, but may struggle with the identification and documentation of substantive changes when they again seek wide review. Once the Candidate Recommendation status has been reached, groups should consider tracking substantive changes more thoroughly, e.g., through labels on issues and pull requests, by documenting technical design decisions, and/or by maintaining a separate document to record substantive changes.

Beyond possible Process updates, tooling and practices will likely continue to evolve to better align the edition of specifications with downstream needs.


## How to state the intended approach {#intent}

The W3C Process asks Working Groups to set expectations for the document's next steps in its "Status of this Document" section.

A Working Group charter also sets expectations about the group's Recommendation track documents. Working Groups intending to publish the latest state of their work as Candidate Recommendation (with Snapshots) should set appropriate provisions in their charter. See the [charter template](https://w3c.github.io/charter-drafts/charter-template.html) for details.
