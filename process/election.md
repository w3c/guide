---
title: How to organize an Advisory Board or Technical Architecture Group election
toc: true
---

> The Advisory Board and a portion of the Technical Architecture Group are elected by the Advisory Committee. The election process begins when the Team sends a call for nominations to the Advisory Committee...  
> - [Section 3.3.3.3 "Advisory Board and Technical Architecture Group Elections"](https://www.w3.org/policiies/process/#AB-TAG-elections) of the Process Document.

This document explains in detail how the Team organizes AB and TAG elections. As explained in the Process Document, TAG terms begin on 1 February and AB terms begin on 1 July.

## Summary of steps  {#summary}

1. Team determines whose seats are up for election or appointment (team-internal)
   
   - For AB: 15 February
   - For TAG: 31 August.
1. Advance notice of nominations
   
   - For AB: 1 March
   - For TAG: mid-September (4 weeks before nomination)
1. [Call for nominations](#nominations)
   
   - For AB: 1 April
   - For TAG: the Tuesday nearest to 10 October (between 7-13 October, for 4 weeks)
1. [Call for votes](#votes)
   
   - For AB: 1 May
   - For TAG: the Tuesday following the end of the Call for nominations (between 11-17 November, for 4 weeks)
1. [Announce results](#announce) (about three weeks before terms start)
   
   - For AB: 7 June (for 1 July term start date)
   - For TAG: the Tuesday following the end of the voting period (for 1 February term start date).
1. [The Team Appointment(s)](https://www.w3.org/policiies/process/#TAG-appointments)
   
   - The Team will make appointment(s) once the results of the elections are known.
1. [Welcome new participants](#welcome)
1. [Thank departing participants](#departing)

The Comm Team prepares announcements, tracks reviews, and publishes the appropriate documents.

2021-02-18: Note on the TAG election period: The W3C Process Community Group raised the [TAG nomination and election period at poor times of the year](https://github.com/w3c/process/issues/487) as an issue. By adjusting the 9-week nominations and elections between 7-13 October and 9-15 December depending on the year, the US Thanksgiving takes place in the middle of the election - but not at the very end of the election and the election completes before the major December vacations.

## Call for nominations  {#nominations}

1. One form for AC Representatives ([sample](https://www.w3.org/wbs/33280/tag-201411/) and see below for summary of [information in a nomination form](#nomination-info))
   
   - **April 2015 update:** Include information on the nomination form, so that the candidate has more context for what they're writing as *statement*, e.g. link to past public statements. The form should set the expectation that statements are sent to the AC as part of the Call for Votes and is the candidate's biggest chance to communicate.
   - **January 2021 update:** The announcement and form includes guidance on considering diversity when proposing people to run in the election.
1. One from for nominees ([sample](https://www.w3.org/wbs/1/tagnom-201411/))
   
   - At each election, make sure to update the link in the AC form (last section) that refers to the nominee form.
   - **April 2015 update:** Because there is no IPP form for joining the TAG, the team needs to gather commitments via a WBS form. The appointee(s) should fill out the most recent of the nominee forms.
1. [Sample of email sent to AC](https://lists.w3.org/Archives/Member/w3c-ac-members/2014AprJun/0000.html)

### During the nomination period

1. WBS automatically sends a reminder to the AC (e.g., one week prior to nomination period end)
1. Track nominations. In the 2002 nomination period, we received some nominations without comments on the nominees, so we asked the nominees to provide us with text. When it seems like a nominee may not be aware of having been nominated, contact that person.
1. Double-check whether any [related Members](https://lists.w3.org/Archives/Member/relation-disclosure/) have both sent nominations.
1. **2022-12-15 Update** ([member-only link](https://github.com/w3c/AB-memberonly/issues/142)): To respect the value of transparency and allow sufficient time to stabilize nomination statements, AB agreed on the common practice for AB and TAG elections, as follows:
   
   - During the nomination period: All nominations (e.g., who nominates whom) will be made available publicly on a rolling basis.
   - When the nomination period ends: All nomination statements will be collectively publicized and further edits to the statements may not be allowed.

### Note: Single "nominator"

There should be a single "nominator." In case there are more than one, the nominee should choose which nomination to accept, probably talking with the nominators. Other nominators are free to endorse the nominee \[for example in w3c-ac-forum conversation].

## Call for votes  {#votes}

- [STV Meeks](https://en.wikipedia.org/wiki/Meek%27s_method) used as Tabulation system; [OpenSTV 1.7](https://github.com/Conservatory/openstv) used to perform the computation.
- One form for AC Representatives ([sample](https://www.w3.org/wbs/33280/tag-20141201/) and summary of [information in a call for votes form).](#cfv-info)
- [Sample of email sent to AC](https://lists.w3.org/Archives/Member/w3c-ac-members/2014OctDec/0045.html).

During AB and TAG elections, it is appropriate for candidates to campaign and for AC Representatives to discuss candidates positions on various issues on w3c-ac-forum ([archive](https://lists.w3.org/Archives/Member/w3c-ac-forum/)).

**Note:** The team ensures that each candidate may post to and receive email from w3c-ac-forum@w3.org during the election period.

### Using RFC3797  {#using-rfc3797}

1. To prepare for using RFC3797, include the following information to resolve ties:
   
   1. Reference date (usually, the day the election ends). **NOTE:** Do not choose a weekend day.
   1. Three sources of randomness.
      
      - Ensure that the sources are *very precisely identified* (e.g., which S&P 500 price index, which Numbers game draw since there may be more than one on the day, how values will be formatted)
      - Make sure the sources still exist if you are reusing sources from the previous election
   1. Order of names:
      
      - In case of a tie, indicate that the order is that specified in the email, only for those who tied.
1. In case of a tie, RFC3797 reorders names, after which, available seats are filled in that order (i.e., first person gets a seat, etc.). In the case of a tie among those eligible for a short term: after all elected individuals have been identified, when N people are eligible for M (less than N) short terms. In this case, only the names of those N individuals are provided as input to the procedure. The short terms are assigned in result order.
1. You can use the [online RFC3797 calculator](https://www.gerv.net/hacking/vrs/) to calculate results after the election. An ordered list of three specific sources of randomness to use:
   
   - [Standard & Poor's 500 index](https://www.spglobal.com/spdji/en/indices/equity/sp-500/) for the reference day: e.g., 6,101.24
   - [Massachusetts Lottery "Numbers" game](https://www.masslottery.com/games/lottery/numbers-game.html) for the reference day: e.g., 8.4.7.0
   - [Sea Level Pressure in Hg in San Jose, California](https://www.wunderground.com/history/daily/KSJC/date/2001-12-6) for the reference day: e.g., 30.36

### During the vote period

1. WBS automatically sends a reminder to the AC (e.g., one week prior to voting period end)
1. On the date announced in the call for votes, gather the data for the RFC3797 calculation.
1. Double-check whether any [related Members](https://lists.w3.org/Archives/Member/relation-disclosure/) have both sent votes.
1. Once an election has closed, re-sort the candidates on the nominations page alphabetically by family name.

## Announce the election results  {#announce}

1. The shortest incomplete term is assigned to the elected candidate ranked lowest by the tabulation of votes, the next shortest term to the next-lowest ranked elected candidate, and so on. In the case of a tie among those eligible for a short term, we use RFC3797 to resolve the tie as described above.
1. Update group home pages with new participants and data about length of terms. This makes it easier for everyone to remember who is up for election in a year. Update the group in the DB as well ([TAG](https://www.w3.org/admin/othergroups/34270/edit), [AB](https://www.w3.org/admin/othergroups/7756/edit)). Typically we update this information before the announcement so that the newly elected participants receive the mail. We also tend to leave both new and departing participants in the database until the next face-to-face meeting, as a transition period.
1. As a personal courtesy, notify candidates (in the case of both outcomes) by email 24h to 2h before the official announcement. Make it clear this is to be kept confidential until results are released.
1. Announce results to w3c-ac-members. Indicate:
   
   - Names of winners.
   - Names of people who tied.
   - Names of people who got short terms.
   - Results of RFC3797 calculations, if any.
   - Term start date.
   - List continuing participants.
   - Do **not** report the number of votes for each candidate.
1. Announce election results on the W3C Home page ([sample](https://www.w3.org/news/2015/w3c-advisory-committee-elects-technical-architecture-group-2/)).
1. It is customary for the CEO to contact each departing participant to thank them for participating.

## Welcome new participants  {#welcome}

1. Have Chair send welcome message to new participants cc the group telling them about access, next meeting.
1. Add new people / remove departing people from the group in the DB: ([TAG](https://www.w3.org/admin/othergroups/34270/edit), [AB](https://www.w3.org/admin/othergroups/7756/edit)). As of June 2023 the [AB requests](https://lists.w3.org/Archives/Group/ab/2023AprJun/0219.html) that new people be added as soon as the election results are announced. Check with the TAG as to their preference. This gives them ACL access rights and subscribes them to mailing lists. **Note:** Generally, departing participants and new participants should both attend the next face-to-face meeting. After that meeting, unsubscribe departing participants from list, and for the AB, remove them from the ACL group, the [Member AB home page](https://www.w3.org/Member/Board/), and move them to the "Alumni" section of the [public AB home page](https://www.w3.org/2002/ab/).

## Departing Participants  {#departing}

- Per resolution from the AB ([2019-11-20](https://www.w3.org/2019/11/20-ab-minutes.html#item07)), **past members of the AB are given read and write access to w3c-ac-forum at the discretion of the CEO**.
  
  - The Comm Team adds departing participants to the [AB alumni group in the DB](https://www.w3.org/admin/othergroups/145687/show), which is subscribed to w3c-ac-forum
  - At the start of the new term the Comm Team or AB Team Contact removes departing participants from the [group that controls access](https://www.w3.org/admin/tf/147348/show) to the ab-private email archive and adds the new participants to this same group
  - ... and informs the CEO that this has been done.
  - (Then, if the CEO has not already concluded that the AB alum wants and expects this to have been done, the CEO can ex-post-facto confirm with said alum that this has been done and (thereby) give them the opportunity to decline.)
- The Comm Team prepares certificates to recognize departing participants.

## Appendix  {#appendix}

### Information in WBS Nomination Forms  {#nomination-info}

1. End date and time (23:59 ET) of nomination period, usually **4 weeks**.
1. Instruction to send nominations to board-nomination@w3.org. There is an auto-responder set up for this list; adjust as necessary.
1. Number of seats up for election (and who holds them currently). Also, list names of people whose terms are not ending.
1. Each AC representative may nominate **one person**. Nominees **must** be informed of their nomination.
1. Specify the minimum and maximum number of available seats:
    
    - In the case of regularly scheduled elections of the **TAG**, the minimum and maximum number of available seats are the same: the 4 seats of the terms expiring that year, plus the number of other seats that are vacant or will be vacant by the time the newly elected members take their seats. For N available seats:
      
      - If exactly N people are nominated, those individuals are thereby elected.
      - If more than N are nominated, we will organize an election.
      - If fewer than N are nominated, we will renew the nomination period for a fixed duration.
    - In the case of regularly scheduled elections of the **AB**, the minimum and maximum number of available seats differ: The maximum (N) number is the 5 or 6 seats of the terms expiring that year, plus the number of other seats that are vacant or will be vacant by the time the newly elected members take their seats; the minimum (M) number is such that when added to the occupied seats from the prior year, the minimum size of the AB (9) is reached. For N available seats:  
      
      - If M-N people are nominated, those individuals are thereby elected.
      - If more than N are nominated, we will organize an election.
      - If fewer than M are nominated, we will renew the nomination period for a fixed duration.
1. Term start date and duration of terms (may be one or two years in order to stagger).
1. A nominee must be nominated by an AC representative (who can be a candidate). Nominees need not be employees of a Member organization. Nominations must be made with the agreement of the nominee, and should include a short statement about the nominee. These statements are made available to the Membership and the public whether or not there is an election.
1. Ask for nominee contact information (to be kept Team-confidential): email and phone numbers.
1. For the TAG: ask for information required by section 3.3.3.3 of the Process Document
1. Reminder of participation criteria, for example:
    
    Please recall that participants on the AB, while representing their company, are expected to perform their duties as unbiased representatives of the W3C community. The participation commitment for the \[AB or TAG] includes \[adjust this accordingly]:
    
    1. a weekly teleconference
    1. three to four face-to-face meetings per year
    1. participation in group mailing list discussions
    1. participation at AC meetings and Technical Plenary meetings (encouraged, but not required):
1. Date of next scheduled face-to-face meeting. Nominees should be prepared to attend that meeting.
1. Link to group home page.
1. Reminder to indicate related members, per Process Document.

### Information in Call for Votes  {#cfv-info}

1. End date and time (23:59 ET) of voting period, usually **4 weeks**.
1. Send votes to board-vote@w3.org. There is an auto-responder set up for this list; adjust as necessary.
1. List of nominees. Indicate that the order of names is authoritative, and used in RFC3797 calculations. (Aim for alphabetical order by last name with affiliation next to name). Thank nominees and AC reps who nominated them.
1. Link to a public page with statements about nominees ([sample](https://www.w3.org/2014/12/01-tag-nominations)). (Update that page to link to the WBS form for voting.)
1. Number of seats up for election (and who holds them currently). Also, list names of people whose terms are not ending.
1. Each AC representative may vote for up to the number of available seats. State that:
    
    - The results of the vote are only visible to the Team, but that information will be archived.
    - When RFC 3797 is used in case of a tie, the names of candidates who tied will be listed.
1. Term start date and duration of terms (may be one or two years in order to stagger).
1. Include relevant [data for RFC3797](#using-rfc3797).
1. Date of next scheduled face-to-face meeting for that group.
1. Link to group home page.
1. Reminder of requirement that Members disclose related Member relationships; that has an impact on who can vote in these elections.
