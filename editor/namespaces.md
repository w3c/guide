---
title: URIs for W3C Namespaces
submenu: [publication-policies]
toc: true
---

## Status of this document  {#status}

This document describes the W3C policy for [XML namespace](https://www.w3.org/TR/xml-names11/) allocation in W3C Technical Reports. This document is part a series of documents that describe W3C Technical Report Publication Policies.

Exceptions to this policy **MAY** be authorized by the Technical Strategy Lead.

## Namespace URIs in Recommendation Track Documents, Group Notes, and other Working Drafts  {#allocation}

Groups **SHOULD** use namespace URIs that have the characteristics of uniqueness.

Technical Strategy Lead approval is **NOT REQUIRED** when a namespace URI in a Technical Report has any of the following forms:

- `http://www.w3.org/ns/ssss`
- `http://www.w3.org/YYYY/MM/ssss`
- `http://www.w3.org/YYYY/ssss`

where:

- `ns` is the literal string "`ns`"
- `YYYY` and `MM` are decimal digits corresponding to the year and month of URI allocation
- `ssss` is a short string not causing confusion, alarm, or embarrassment. For instance, the short string should not cause confusion when used in both `http://www.w3.org/TR/ssss` and `http://www.w3.org/ns/ssss` URIs.

A trailing "`/`" **MAY** be used and does not require Technical Strategy Lead approval.

The W3C Webmaster allocates and authorizes namespace URIs having the forms listed above. W3C provides the service of allocating and maintaining persistent URIs so that those URIs remain stable during discussions. Allocation does **not** imply any endorsement by W3C of the related specifications. The [W3C URI persistence policy](https://www.w3.org/policies/uri-persistence/) only applies to URIs of the above forms, and does not apply to other URIs within w3.org (e.g., those for lists.w3.org).

Technical Strategy Lead approval is **REQUIRED** for all other namespace URIs. In particular:

- The Technical Strategy Lead **MAY** authorize a group to use a namespace URI that does not begin with `http://www.w3.org/`. The Technical Strategy Lead expects the organization that allocates the URI to have a clear persistence policy associated with the URI, to make a commitment to longevity of service, and to provide information about how the URI will be maintained in the event of the demise of the host organization.

### Rationale for the http://www.w3.org/YYYY/MM/ssss syntax  {#syntax-rationale}

This syntax enables the W3C support staff to ensure very high level of persistence for namespace URIs, in terms of the non-reuse and the availability of any online materials (schemata etc).

The "`www.w3.org`" is used instead of "`w3.org`" (an internal decision made for the entire site many months ago) because:

- `www.w3.org` is in very common use and cannot be abandoned;
- to duplicate the site at both addresses would trash the efficiency of caches, indexes and archives all over the world.

The form "`http://www.w3.org/activity/date/foo`" cannot be readily implemented due to the diversity of policies governing each subtree of the W3C site. These policies vary in order to support the diversity of work styles and tools used across the Consortium. Therefore no consistent commitment to persistence can be made in such a sweeping way. Group participants should bear in mind that the W3C Team will be maintaining this Web space long after the groups have become more interested in other topics or have been closed.

## Namespace URIs in Member and Team Submissions  {#submissions}

Some Member and Team Submissions are designed to seed work on the Recommendation Track; others simply provide information or serve other purposes.

In all Member and Team Submissions:

1. Namespace URIs **MUST** be dereferenceable, and
2. [Namespace Documents](#nsdoc) **MUST** describe the [relationship between the defining specification and the namespace URI](#Policy)

When a Submission is designed to seed work on the Recommendation Track:

1. Namespace URIs **SHOULD** follow the conventions for [Recommendation Track documents](https://www.w3.org/2005/07/13-pubrules-about#rectrack) in order to ease the later transition to the Rec Track. If it does not, the URI publisher **MUST** have clear persistence policy (similar to W3C's, i.e., that the URI publisher will make every effort to service requests for the [Namespace Document](#nsdoc)).

## Namespace Document  {#nsdoc}

A Namespace Document describes the namespace, providing directly or by reference information for human and also, ideally, machine consumption. A Namespace Document is available for retrieval using a corresponding namespace URI.

When a namespace URI appears in a Recommendation Track document, the responsible group **MUST** publish a corresponding Namespace Document. In other contexts as well, groups **SHOULD** publish Namespace Documents. [RDFS](https://www.w3.org/TR/rdf-schema/) and/or [OWL](https://www.w3.org/TR/owl-ref/) are used for RDF namespaces.

## Namespace changes over time  {#Policy}

The [TAG finding](https://www.w3.org/2001/tag/findings) titled [The Disposition of Names in an XML Namespace](https://www.w3.org/2001/tag/doc/namespaceState.html) explains how the use of a particular namespace may evolve over time. At the W3C, it is important for a group to state clearly its expectations for how use of the namespaces it controls will or will not change over time. Groups **SHOULD** document those expectations in \[or clearly linked from] the [Namespace Document](#nsdoc). A draft TAG Finding [Associating Resources with Namespaces](https://www.w3.org/2001/tag/doc/nsDocuments/) provides additional guidance on the creation of such namespace documents. The namespace document could contain text along the following lines:

Example 1
: The definitions of names in this namespace will not change from those given in the June 13 2007 version of the Foonly spec \[ref. dated URI]. Subsequent versions of the Foonly spec which make any substantive changes will do so in a new namespace.

Example 2
: This namespace URI will be used to refer to this and future versions of this specification. The specification defines language extension mechanisms and how to handle changes such as the addition of new terms to the language. W3C reserves the right to determine which changes (backward compatible or not) are in the interest of the community at large.

Example 3
: This namespace URI will only be used to refer to this version of this specification: different URIs will be used for any and all new versions of the specification except as follows: This namespace URI may be reused in any update of the specification which is made for the purpose of clarification or bug fixes. These changes will be minor in that they do not (a) change the meaning or validity of existing documents written using the namespace, or (b) affect the operation of existing software written to process such documents.

Example 4 \[Before CR]
: Until the specification reaches W3C Candidate Recommendation (CR) status, this namespace URI may be reused by any update in such a way as to cause documents written using the namespace to become invalid or to change in meaning.

Example 5 \[Before CR]
: Until the specification reaches W3C Candidate Recommendation (CR) status, this namespace URI may be reused in such a way as to affect the operation of existing software written to process documents written according to this specification.

## About this document  {#about}

Discussion of this policy is appropriate in the [uri mailing list](https://lists.w3.org/Archives/Public/uri/) , [www-tag](https://lists.w3.org/Archives/Public/www-tag/), and various other lists.

- 20250814: Replace Director with Technical Strategy Lead
- 20060906: After [discussion on www-tag](https://lists.w3.org/Archives/Public/www-tag/2006Aug/0081.html) and with support from Director, announced http://www.w3.org/ns/. See [announcement to www-tag on 6 Sep](https://lists.w3.org/Archives/Public/www-tag/2006Sep/0039.html).
- 20050131: Revision announced to Chairs.
- 19991026: [First revision](https://www.w3.org/1999/10/nsuri) announced to the Chairs ([announcement](https://lists.w3.org/Archives/Member/chairs/1999OctDec/0019.html)).

More background:

- [This version and latest version URIs](https://www.w3.org/TR/#versioning) are described on the [TR page](https://www.w3.org/TR/).
- [URI persistence policy](https://www.w3.org/policies/uri-persistence/)
- [Hugo and Dan on this topic](https://www.w3.org/1999/10/20-namespace-uris) _(Team only)_
- [Architecture of the World Wide Web](https://www.w3.org/TR/webarch/); see the section on URI persistence
- ["Cool URIs don't change"](https://www.w3.org/Provider/Style/URI) - TimBL on persistence
