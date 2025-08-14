---
title: Version Management in W3C Technical Reports
submenu: [publication-policies]
toc: true
---

## Status of this Document  {#status}

This document is part a series of documents that describe W3C Technical Report Publication Policies.

## Introduction  {#intro}

As W3C has matured, more and more technologies are undergoing major revisions (as seen with "SVG 2.0", "HTML 5.2", "DOM 4.1", "CSP 3", etc.). Working Groups typically find they need to address several high-level versioning issues when starting to revise a Recommendation:

1. What will be the relationship between the Recommendations? Does the new one supersede or outdate the old one or will the two co-exist, each with an appropriate audience? What is the impact of these changes on authors? On implementers?
1. Should the version number change? What will the marketing impact be of a particular version number change?
1. What is the impact on XML namespaces defined in one or both specifications?
1. Beyond the technical issues related to forwards and backwards compatibility, what about the branding and naming issues?

There are also numerous operational issues to consider:

1. What does "Canonical URL" mean when W3C has published Recommendations "1.x" and "2.x" of a technology?
1. What conventions should a Working Group choose to facilitate future management of multiple versions?

This document provides some rules and guidance on a few of these topics, based on experience with W3C publications. This document is far from an exhaustive treatise on version management; it is intended to help raise awareness about a handful of common W3C publication issues. Please also consult the list of [TAG findings](https://www.w3.org/2001/tag/findings) for discussion of versioning from a technical perspective.

## Version Numbers  {#versionnbs}

W3C Working Groups have adopted several approaches to versioning, including:

- Major and minor version numbers (e.g., "SMIL 2.1")
- Levels ("CSS 3", "DOM 3")

**Note:** Current W3C practice is to reserve the phrase "Nth Edition" for editorial revisions of a Recommendation.

The remainder of this document focuses on the choice of using major and minor version numbers, as this is scheme most groups have adopted.

Branding, magnitude of changes, relationships to other specifications, and other factors have an impact on the choice of version number. Please also note the different classes of change described in [section 6.2.3 of the W3C Process Document](https://www.w3.org/policies/process/#substantive-change). This document does not address all of the factors that go into the choice of a version number. However, one common expectation when using the major/minor version scheme is that, for a given major version number, the Recommendation with the highest minor version number supersedes all others sharing that major version number. By supersede, we mean that authors and implementers should stop using the old version and start using the new version; in effect the new version masks the old one. The status section of a minor version should state clearly that it supersedes the previous minor version.

The expectation that version `N.2` supersedes `N.1` leads to other suggestions in this document. Therefore, if a Working Group does not expect this to be the case for their documents, they should contact the Communications Team.

Please recall that W3C's persistence policy ensures that a superseded document will always be identifiable by its "This version URL".

### Tracking Version Numbers  {#tracking}

Each W3C technical report includes several URLs to make it easier for readers to track the evolution of a specification. There are other ways to find information about W3C technical reports, including on the W3C [Technical Reports index](https://www.w3.org/TR/), on Working Group pages, and through a search engine. The URL with shortnames has proved a useful companion to the "This (dated) version URL".

In the linear world of a document series that starts with a First Public Working Draft and ends with a Recommendation, it is easy to understand the semantics of a "Latest version URL". When a Working Group is managing multiple versions of a specification in parallel, some clarification is required. When a "Latest version URL" appears in an "ExampleML 2.0" specification, does the URL identify the latest version of ExampleML? of ExampleML 2.x? of ExampleML 2.x Recommendation? Something else?

The following proposal -- for multiple "Latest version URLs" -- strikes a balance between brevity in the document front matter and useful additions to help readers find important resources. This proposal will not address the needs of all readers or users of a specification. We therefore encourage Working Groups to advise readers (e.g., in the status section, or in the section on changes) to consult the Working Group's public pages for the complete revision history of related specifications.

### Versioned URL Semantics  {#versioned-urls}

W3C recommends that groups use the following versioned URLs: For a set of minor versions that are part of the same major version branch, one URL designates the most recent minor version, whatever its maturity level (Working Draft, Recommendation, etc.). The label for this URL should be "`Latest [Acronym] 1 version`", as in "`Latest ExampleML 1 version`".

We recommend this syntax for version number URLs:

`/TR/<shortname-N>` (or `/TR/<shortnameN>`)

Those versioned URLs provides quick access to the latest work within a given major version. `N` is a number, not interpreted by the underlying system except for its sequence order. You may use for example `2`, `2.0`, `2018`.

When a Working Group follows this scheme, approval from the [transitions team](https://github.com/orgs/w3c/teams/transitions) of new version number is not required.

Working Groups wishing to adopt this scheme even though they already have allocated their short name should contact webreq@w3.org.

Here is an example of how W3C manages these URLs over time.

|  | ExampleML 1.0 WD published | ExampleML 1.0 REC published | ExampleML 1.1 WD published | ExampleML 1.1 REC published | ExampleML 2.0 WD published | ExampleML 2.0 REC published |
|---|---|---|---|---|---|---|
| **"Latest ExampleML 1" URL identifies** | ExampleML 1.0 WD | ExampleML 1.0 REC | ExampleML 1.1 WD | ExampleML 1.1 REC | ExampleML 1.1 REC | ExampleML 1.1 REC |
| **"Latest ExampleML 2" URL identifies** | N/A | N/A | N/A | N/A | ExampleML 2.0 WD | ExampleML 2.0 REC |


Some groups have suggested that additional latest version URLs may help them manage their work. For instance, some Working Groups would like to use "latest minor version" URLs while working towards a new Recommendation. We advise against "latest minor version URLs" because their utility is short-lived, in light of the premise that minor versions supersede one another. For example, as soon as the ExampleML 1.2 is published, the "latest ExampleML 1.1 URL" will become a dead-end; one will not be able find the new 1.2 minor version directly from the 1.1 version. Rather than publish "latest minor version URLs", we recommend simply using the group's home page to track the latest draft of a minor version.

## Short Names and canonical URLs  {#shortnames}

For each set of specifications, a URL designates the most relevant of a given technology, whatever the major version number. The label for this URL should be "Canonical URL".

We use this syntax for those URLs:

`/TR/<shortname>/`

As an example, see the [HTML specification](https://www.w3.org/TR/html/) which uses `/TR/html/`.

The canonical URL designates the most relevant specification approved by a Group for a given technology. It may designate the most mature Recommendation of a given technology or the most agreeing-on version depending on the choices of the Group. The label for this URL should be "Canonical URL".

In practice, this "Canonical URL" returns the document provided in [Latest URLs](#latest) or in [Upcoming URLs](#upcoming). Working Groups wishing to pick their most relevant specification for the purpose of this "Canonical URL" should contact webreq@w3.org.

### Alternative canonical URLs

The "Canonical URL" and the version numbers dp not address all of the needs that go into the choice of a link for a technology. Consequently, several URLs are created automatically based on the "Canonical URL".

#### Latest URLs  {#latest}

"Latest" will return the most "stabilized" document available. We use this syntax for those URLs:

`/TR/<shortname>/latest/`

For example, [`/TR/CSP/latest/`](https://www.w3.org/TR/CSP/latest/) points to the latest Recommendation for CSP.

More precisely, the algorithm to determine this URL will return the **first document** found in the following ordered list:

1. the **highest** level being a CR, an Edited CR, an Edited PR
1. a REC that is not obsolete/superceded/rescinded/retired/outdated
1. the **highest** level being a Note if not retired
1. the **lowest** level being a WD
1. the obsolete/superceded/rescinded REC
1. the retired Note

#### Upcoming URLs  {#upcoming}

"upcoming" will return the "tip" document agreed by the Group. We use this syntax for those URLs:

`/TR/<shortname>/upcoming/`

For example, [`/TR/CSP/upcoming/`](https://www.w3.org/TR/CSP/upcoming/)

As such, it points to the **first document** found in the following ordered list:

1. the **highest** level that is not obsolete/superceded/rescinded/retired/outdated
1. the obsolete/superceded/rescinded/retired document

#### Editor drafts URLs  {#ed}

**If provided in the published document**, those URLs will redirect to the editor's draft of the upcoming document, which may or may not have review from the Working Group. We use this syntax for those URLs:

`/TR/<shortname>/ed/`

For example, [`/TR/CSP/ed/`](https://www.w3.org/TR/CSP/ed/) redirects to `https://w3c.github.io/webappsec-csp/`.

If the editing workmode of your Group guarantees its agreement to the content of the editor draft (this is the case if your Group uses a pull request review process), we highly recommend **at the minimum** that the document be automatically published to ensure that the editor draft URLs and the [Upcoming URLs](#upcoming) return the same main content. An even better approach in such case is to redirect the "editor draft URL" to the "Upcoming URL" (this avoids returning 404 on the editor draft URL).

#### Example  {#example}

CSP1 is a Working Group Note. CSP2 is a Recommendation. CSP3 is a Working Draft. This would imply the following URLs:

- `/TR/CSP1/` returns the CSP1 Working Group Note
- `/TR/CSP2/` returns the CSP2 Recommendation
- `/TR/CSP3/` returns the CSP3 Working Draft
- `/TR/CSP/upcoming/` returns the same document as `/TR/CSP3/`
- `/TR/CSP/latest/` returns the same document as `/TR/CSP2/`
- `/TR/CSP/` returns the same document as `/TR/CSP/upcoming/` (since the Working Group favors the "tip")
- `/TR/CSP/ed/` redirects to the CSP3 editor draft, ie `https://w3c.github.io/webappsec-csp/`

## Dated URLs and outdating  {#dated}

W3C is automatically outdating a dated document if it is used as a previous version link from a more recent one. This allows the community to be aware that they're potential looking at an old draft. For example, see the [W3C Working Draft, 1 September 2016 for CSP3](https://www.w3.org/TR/2016/WD-CSP3-20160901/).

## URLs and Normative References  {#normative}

At this time (read: we know this is suboptimal nowadays), we still recommend that you **not** create normative references from a W3C Recommendation to resources (published inside or outside W3C) that are likely to change over time and where those changes might affect the meaning of, or conformance to, the W3C Recommendation. It follows that if you wish to create a normative reference to a W3C technical report, you should use a "this version" URL instead of a canonical URL (or their alternative forms).

In general, if the Working Group has expectations about the evolution of a normative reference (however it is identified), the group should state those expectations in prose in the technical report.

See the [Manual of Style](../manual-of-style/) and the considerations for [normative references](../process/tilt/normative-references.md) for additional discussion of references to resources that change over time and when references to these resources are are appropriate.

## Namespace Management  {#nsmgt}

It is important to specify clearly the relationship between a Namespace URL and the specification that defines it. Each group should explain that relationship in the defining specification and/or schema; see [URIs for W3C Namespaces](namespaces.md) for more information.
