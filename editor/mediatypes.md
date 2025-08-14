---
title: Register an Internet Media Type for a W3C Specification
submenu: [publication-policies]
toc: true
---

All formats defined by W3C specifications are of general interest to the Internet Community and are therefore registered in the standards tree (formerly IETF tree), which requires approval by the IESG.

## Status of This Document

This document explains the procedures available to register an Internet Media Type for a format defined by a W3C specification in the [IANA registry](https://www.iana.org/assignments/media-types/media-types.xhtml). It is being maintained by [Philippe Le Hégaret](mailto:plh@w3.org) who, together with Simone Onofri, is serving as IETF/W3C liaison.

A new process, [BCP 13](https://www.rfc-editor.org/info/bcp13), for registering Mime media types is defined in [Media Type Specifications and Registration Procedures](https://datatracker.ietf.org/doc/html/rfc6838) together with [Multipurpose Internet Mail Extensions (MIME) Part Four: Registration Procedures](https://datatracker.ietf.org/doc/html/rfc4289), which covers IANA registration procedures for MIME external body access types and content-transfer-encodings. While the first document hasn’t been formally approved, it is our understanding that this is the process followed by the IETF and the IESG.

The TAG refers to this document in its April 2004 Finding [Internet Media Type registration, consistency of use](https://www.w3.org/2001/tag/2004/0430-mime):

> W3C Working Groups engaged in defining a format follow How to Register a Media Type with IANA to register an Internet Media Type (defined in [\[RFC2046\]](https://datatracker.ietf.org/doc/html/rfc2046)) for the format.

## Registration process

This procedure is based on [Media Type Specifications and Registration Procedures](https://datatracker.ietf.org/doc/html/rfc6838).

*Note:* Once a media type has been published by the IANA, the owner may request a change to its definition. The same procedure that would be appropriate for the original registration request is used to process a change request. See also [Section 5.5, Change Procedures](https://datatracker.ietf.org/doc/html/rfc6838/#section-5.5) in RFC 6838.

1. Draft a proposal for the Media Type registration as a normative part of your specification, following the instructions in [Media Type Specifications and Registration Procedures](https://datatracker.ietf.org/doc/html/rfc6838), section 4, and the template in section 10. Make sure that this part of the specification is readable on its own, without the context of the specification. For Additional Media Type Structured Syntax Suffixes, such as `+xml` or `+json`, see [RFC 6839](https://datatracker.ietf.org/doc/html/rfc6839) and [RFC 7303](https://datatracker.ietf.org/doc/html/rfc7303) requirements and section [4.5.7 Media types for XML](https://www.w3.org/TR/webarch/#xml-media-types) of the [World Wide Web Architecture](https://www.w3.org/TR/webarch/) as well. In the introduction to the relevant section, say that this registration is for community review and will be submitted to the IESG for review, approval, and registration with IANA.
1. One to two months prior to Candidate Recommendation: Send an email to the mailing list [media-types@iana.org](mailto:media-types@iana.org) asking for comments on the Media Type section of your specification:
   
   - Include a pointer to and a plaintext copy (not just an attachment) of the Media Type registration section in your email to [media-types@iana.org](mailto:media-types@iana.org).
   - Make sure you address and reply to comments and questions on [media-types@iana.org](mailto:media-types@iana.org). If you change the registration in your specification as a result of comments on ietf-type (or for any other reason), send the revised version to [media-types@iana.org](mailto:media-types@iana.org).
   - If you are registering an XML-based format, you may want to cc: [ietf-xml-mime@imc.org](mailto:ietf-xml-mime@imc.org).
   - Note that you need to be [subscribed to the list](https://www.ietf.org/mailman/listinfo/media-types) to post to it.
   - To make it easier for your WG to track comments on the Media Type section, you may cross-post the comments list for your specification.
3. In preparation for Candidate Recommendation:
   
   - Change the introduction to the registration information to say that it is being submitted to the IESG for review, approval, and registration with IANA.
   - Fill the [IANA form](https://www.iana.org/form/media-types), listed in [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). The IANA Services Specialist will check with [Philippe Le Hégaret](mailto:plh@w3.org) and [Simone Onofri](mailto:simone@w3.org) to validate the request on behalf ot W3C.
4. In preparation for Recommendation:
   
   1. Check on progress of registration, first directly at [IANA](https://www.iana.org/assignments/media-types/), and if your type is not yet registered there, contact [iana-mime-comment](mailto:iana-mime-comment@iana.org).
   1. Update the introduction to the registration information in your specification to say either “registered with IANA at…” or “under review by the IESG…”, as applicable.
   1. If your registration points to a dated version, request update of the registration via [iana-mime-comment](mailto:iana-mime-comment@iana.org).

W3C Community Groups may also request to register a provisional media type through W3C. All requests for W3C media types submitted to IANA get checked by W3C.

## History of this Document

- Updated in December 2019 to take the IANA form into account. Removed the (unmaintained) list of media types under W3C control.
- Updated in September 2015 to point to Process 2015.
- Updated in July 2014 in preparation for the adoption of the 2014 Process, which merged Last Call with Candidate Recommendation. Removed the former process involving registration with an RFC.
- See [TAG discussion](https://lists.w3.org/Archives/Public/www-tag/2006Aug/0012.html) from August 2006.
- Status table and new process added, mostly during 2004, by [Martin Dürst](https://www.w3.org/People/D%C3%BCrst/)
- Created 28 June 2002 by [Joseph Reagle](https://www.w3.org/People/Reagle/)

