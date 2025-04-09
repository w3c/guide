---
title: How to transition work from a Community Group to a Working Group
toc: yes
---

From time to time a Community Group that has been [incubating a technology](../incubation.md) seeks to advance it to the W3C Recommendation track in a Working Group. Our goal through this document is to ease that transition. 
This [document is on GitHub](https://github.com/w3c/guide/blob/main/process/cg-transition.md).

## Preparation

The following questions can help a Community Group to prepare for the transition of work to a Working Group.

### Is the work ready for standardization?

Please see elsewhere in the Guide: [W3C Recommendation Track Readiness Best Practices](../standards-track/).

### What is the target Working Group and the relation to the CG?

If the Working Group does not yet exist, the Community Group can prepare by [drafting a Working Group charter](charter.md). Otherwise, if the group exists but the new work is not within its scope W3C needs to [recharter the group](charter.md) to accommodate the new work.

The charter of the target Working Group should address two topics:

- The list of any deliverables transferred from a Community Group.
- The nature of the working relationship between the Working Group and the Community Group (if any) for any deliverable originated by the Community Group.

@@@TODO extract more from [charter template discussion](https://github.com/w3c/charter-drafts/issues/262)

Community Group chairs should keep the Community Group participants aware of the progress on the transition roadmap, in particular if it involves chartering or re-chartering a Working Group.

### Is there a record of Community Group support for the transition?

It is useful to record whether and how the Community Group reached consensus on the transition (in a manner consistent with its practices). The consensus should include expectations about the working relationship with the Working Group moving forward.

### Are IPR commitments in place?

When a Working Group plans to take up a Community Group specification, it is important that there be "IPR safety" around the resulting Working Group specification.

If significant contributors (see [tool](#contributor-list)) below) have not joined the Working Group or don't plan to, then steps should be taken to secure IPR commitments from them. There are three ways for CG contributors to make patent licensing commitments for the specification managed by the Working Group:
{:#ipr-commitments}

1. They can join the Working Group(if they haven't already).
1. They can sign the non-participant licensing agreement for the Working Group.
1. They can make a commitment (via [tools](https://www.w3.org/community/about/faq/#fsa-mechanics)) to the Community Group specification under the [W3C Community Final Specification Agreement (FSA)](https://www.w3.org/community/about/process/final/). Note that the main difference between the FSA and the [W3C Community Contributor Licensing Agreement (CLA)](https://www.w3.org/community/about/process/cla/) is that patent licensing commitments under the CLA are for one's own contributions, while commitments under the FSA are for the full text of the specification.

Once the work transitions to a Working Group, that Working Group's patent policy becomes the "primary" patent policy. Contributions to the work are henceforth made under the W3C Patent Policy. When a contributor cannot join the Working Group, W3C will provide tools so that Working Groups can ensure that substantive contributions from non-participants are made under the terms of the W3C Patent Policy.

### How can Community Group Participants remain involved in the work after the transition?

In many cases, Community Group participants will want to continue their involvement in discussions about a work after it has been transferred to a Working Group.

- If a Community Group participant works for a [W3C Member](https://www.w3.org/membership/list/), the participant can ask their Advisory Committee Representative to join the Working Group.
- Otherwise, please contact [Member Relations](mailto:membership@w3.org) to explore [W3C Membership](https://www.w3.org/membership/). During that exploration, [Community Group participants may continue participating in the Working Group as Invited Experts](https://www.w3.org/community/about/faq/#how-do-community-groups-make-it-easier-to-move-to-the-standards-track).

## Operations

### GitHub Repository Management

W3C has a number of GitHub mechanisms in place for specification development and to help manage IPR commitments for contributions.

If a Community Group repository is hosted in a GitHub organization not yet used by W3C to host Recommendation work:

- Will the repository itself be transitioned to the [W3C GitHub organization](https://github.com/w3c)?
- If not, is the repository owner willing to grant admin rights to @w3cbot (which is used to help with managing operational matters on W3C work, including for horizontal review and IPR management)?

Is the repository already being monitored by [W3C's IPR Repo Manager](https://labs.w3.org/repo-manager/)?

- If not, evaluate even more carefully the IPR considerations described above.
- If yes:
    - Use the list of substantive contributors tracked by the tool for the repository (linked from the [repository list](https://labs.w3.org/repo-manager/repos)) to ensure all such contributors have made the expected [IPR commitments](#ipr-commitments).
    {:#contributor-list}
    - once the transition is enacted (e.g., when the new Working Group is launched), the IPR manager will need to be updated to reflect the new IPR status of the work (contact [dom@w3.org](mailto:dom@w3.org) or [plh@w3.org](mailto:plh@w3.org)); if the repo is being moved or renamed at the time of transition, please coordinate specifically with [dom@w3.org](mailto:dom@w3.org) as this operation requires special handling at the moment.

Other repository admin for the target Working Group:

- If not already set up that way, consider [moving away from using `master` as the name of the default branch](https://lists.w3.org/Archives/Public/spec-prod/2021JanMar/0017.html)

Other repository admin for W3C staff.

- Request that the systems team back up the org repositories.
- Update or add `LICENSE.md`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md` to reflect the new contribution framework.
- Configure the repository with the [labels used for tracking horizontal reviews](../documentreview/#working-with-horizontal-review-labels).
- If not already set up, make sure members of the `horizontal-admin` team have triage access to the repo.
- Make w3cbot a co-owner of the org (useful for integrating the IPR manager among other things).
- Update [validate-repo to monitor the repos of that org](https://github.com/w3c/validate-repos/blob/main/validate.js#L9).
