*This document is part of a series of notes for CS4051 Human factors that can be found [here](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/human-factors/notes)*

## Human Error

A **Slip** is a failure in the execution of an action as planned.

A **Lapse** is an omission to execute an action as planned due to a failure of memory.

A **Mistake** is an error in planning an action irrespective of whether an action is carried out correctly.

**Mode Error** is when an intention is executed in a way appropriate for one mode, when in fact the system is in a different mode.

Modes increase the demand on situation awareness.

To decrease mode failures:
* Eliminate unnecessary modes
* Increase the tolerance for mode error
* Provide better indications of mode status
* Provide better feedback about mode changes

The **Keyhole Property** refers to how the display space in computer based display systems is small relative to the amount of data to be displayed.

#### Types of Error

A **Capture Error** is a frequently used action which overrides the intended action. (i.e. the user goes to do something, but does what they always do by mistake [*presses withdraw when they meant to check their balance*])

A **Description Error** is when the correct action is carried out on the wrong object.

A **Data-Driven Error** is when the unconscious processing of external data interferes with what the user intended to do.

An **Associative Error** is when internal thoughts interfere with what the user was supposed to do.

A **Loss of Activation Error** is when the user forgets to do something mid-flow of an activity.

A **Mode Error** is when the user thinks they are in a certain state, but are in another.

Some generic ways systems respond to errors include:  
* *"Forcing Functions"*
* *"Gag"*
* Warning the user
* Doing nothing
* Self Correcting

A **Forcing Function** is an aspect of a design that prevents the user from taking an action without consciously considering information relevant to that action.

Forcing functions deliberately disrupt the efficient or automatised performance of a task.

The **Skills, Rules, Knowledge (*SRK*) Framework** defines three types of behaviour, and is used to determine how information should be displayed to take advantage of human perception and psychomotor abilities.

A **Skill-Based Behaviour** represents a type of behaviour that requires very little or no conscious control to perform once an intention is formed. (e.g. riding a bicycle is considered a skill-based behaviour in which very little attention is required for control once the skill is acquired)

A **Rule-Based Behaviour** is characterised by the use of rules to select a course of action.

A **Knowledge-Based Behaviour** involves the user knowing the fundamental principles and laws by which the system is governed. This type of control must be employed when the situation is novel and unexpected.

Gavin talks about there being three *levels* (the S, the R, & the K level). (Doesn't really explain how they are levels)

The inventor of the SRK Framework (*Rasmussen*) argued that good design needs to support all three levels of operation (the three types of behaviour listed above), not just one.

|Level|Errors|Reasons|
|---|---|---|
|Skill-Based|Slips & Lapses|Usually errors of inattention or misplaced attention|
|Rule-Based|Mistakes|Picking the wrong rule or having a wrong view of the system state|
|Knowledge-Based|Mistakes|Lack of understanding of the system|

*"Errors can result from operating at wrong level
- humans are reluctant to move from RB to KB level even if rules aren't working"*

Humans perform more SB tasks than RB and more RB tasks than KB.

Apparently of **Error Frequencies**:  
- 61% of errors are at the Skill-Based level
- 27% of errors are at the Rule-Based level
- 11% of errors are at the Knowledge-Based level

A KB task is more likely to result in error than an RB or SB task.

A **Generic Error Modelling System**:  
<img src="./generic-error-modelling-system.png"/>

**Automation** addresses the easy SB & RB tasks leaving the complex KB tasks for humans.

Automation decreases the system visibility and increases the system complexity.

Automation can hinder an operator's understanding of the system.

Automation shifts the errors from the operators to the designers.

Error is occasions in which a planned sequence of mental or physical activities fails to achieve its intended outcome.

**Latent Failure** is failures of design that contribute to the occurrence of errors.

*"Systems or processes that depend on perfect human performance are flawed."*

**High Reliability Organisations** are preoccupied with the possibility of failure.

In a **Blame Culture**, errors are punished severely.

In a **Safety Culture**, the comprehensive reporting of errors and near misses is encouraged.

In a **Just Culture**, blame cultures are acknowledged as counterproductive, but accountability is required for cases where neglect or fitness to practice is an issue.

#### Designing for Error

Create a **Consistent Design** to get across a good conceptual model of the system to the user.

Design tasks to match human abilities. (*"working memory, problem solving abilities"*)

Make options and their consequences visible to users.

*"Exploit natural mappings: between intentions and possible actions, actual state and what is perceived,..."*

Use constraints to guide the user to their next action or decision.

Design for errors (assume their occurrence). Make it easy to reverse actions and make it hard to perform irreversible actions.

*"When all else fails, standardise: ease of use more important, only standardise as last resort"*

Provide feedback on what the impact of an action will be, before carrying it out. (4,763,271 records will be deleted)

Provide feedback on what the impact of an action has been, after carrying it out. (4,763,271 records deleted)
