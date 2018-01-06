
*This document contains notes on CS4051 Human Factors*

# CS4051 Human Factors

These notes will be kept brief and to the point with a focus on what might be necessary for succeeding in exam questions. (I'm no authority on what is, but that's all I'm looking for!)

If the language in some of the notes does not make sense, it means I didn't re-write the language of that bit!

---

## Introduction

Interaction can be **Direct** or **Indirect**. An example of indirect interaction is automatic doors, or lights that come on when you enter a room.

**HCI** stands for Human Computer Interaction.

Helpful systems are:

|      |   |
|------|---|
|**Useful**|Help users accomplish their goal.
|**Usable**|Are easy to use and not dangerous.
|**Used**  |People want to use them.

There are things called **Cognitive Dimensions** that Gavin refers to as if we know them. These are essentially design principals, but specifically [14 ones that two guys came up with](https://en.wikipedia.org/wiki/Cognitive_dimensions_of_notations).

A system is not considered usable if a user can't use it, or if human error is highly likely.

A User is **NOT** happy if they:  
* Can't work out how to do something
* Are not able to do something
* Make the same error over and over
* Make an error with a massive consequence
* Do something that takes longer than it should
* Are not happy with the way the system looks

Three questions to ask yourself before designing system interaction:  
* Who are the users?
* What activities are being carried out?
* Where is the interaction taking place?

**Usability Goals 😍:**  
* Effective
* Efficient
* Safe
* Useful
* Easy
* Easy to remember how to use (*git is easy but it can be hard to remember commands as a newbie*)

Human Factors include:  
* Cognitive Capabilities
* Physical Capabilities
* Social & Cultural Influences

Environmental Factors include:  
* Lighting
* Noise
* Time Constraints

Disadvantages of automation may include:  
* Increased probability of system error
* Operators become less skilled at low level tasks
* Operators become bored or complacent (may lose situation awareness)
* Can increase operator workload

**Dialogue** is a term that is used for the interaction between a system and a user.

**User goals** are to solve a problem or to accomplish a task.

Good Design could be:  
* Focused specifically for the particular user of the system
* Focused on supporting specific tasks of the user
* Consistent
* Including Informative feedback & error messages
* Offering easy reversal of actions
* Reducing the short term memory load of the user

Measurable factors of success include:  

|||
|---|---|
|Ease of Learning|How much time & training is required for a new user to perform competently with the system?|
|Productivity|How quickly and efficiently can tasks be performed?|
|Error rates|How many errors do users make using the system?|
|User Satisfaction|How satisfied are users with the system?|
|Market Share|What share of the market do you have?|
|Customer Support|How much customer support is needed?|

---

## Users

A lack of whitespace can make it difficult for the user to perceive structure in the interface and which can make it difficult to find information.

Audio can be useful in interfaces for getting the user's attention, confirmation or notifying them of errors.

**STM** stands for short term memory, & **LTM** for long term memory.

Consistency is a way of reducing the memory load for users.

**PIM** (Personal Information Management) refers to how people have to manage all of their information.

For novice users of a system, their main concern is ease of learning. For expert users, their main concern is ease of use.

Systems used on a daily basis by many people are more likely to have a majority of expert users.

An important question to ask yourself is: "Will this design decision exclude a section of the user population?"

"Key Points" about users are:
* Cognition: attention, memory, perception, & learning.
* Interface effects the above

---

## Interaction

A **Domain** (in Gavin's contexts) includes the area of work under study, the tasks & the goals of each task.

**Norman's Theory of action** is these 7 stages of an activity:  
* Establish a goal
* Form an intention
* Specify an action sequence
* Execute an action
* Perceive the system state
* Interpret the state
* Evaluate the system state with respect to the goals and intentions

In the above, a **goal** could be *get more light* but an **intention** could be *switch on the lamp*.

Gavin's slides say that Norman's theory is not realistic because:  
* Human activity is not as orderly & sequential
* Stages are usually missed or repeated
* Humans do not always have a goal in mind
* It is greatly simplified

Gavin writes that Norman's theory helps designers to think about how to help users monitor their actions.

**Gulfs** refer to gaps that exist between what the user wants/expects and what the system actually does/has/allows.

Two **Human Errors** are slips and mistakes.

A **Slip** is when a user correctly understands the system and formulates the action, but then performs an incorrect action.

A **Mistake** is when *"may not even have right goal"* - Gavin.

To minimise slips, design a better interface design.

To minimise mistakes, give users a better understanding of the system.

Examples of **Ergonomics** in design are:  
* Arrangement of controls and displays
* Seating
* Color of UI elements

A touch screen interface is cheaper and more flexible than a mechanical one, but may *"lose context"*(?).

**WIMP** stands for 'Windows, Icons, Menus, Pointers'.

---

## Design Process

According to Gavin: Design is *"Achieving goals within constraints"*.

**Interaction Design** has four basic activities:  
* Identify needs and establish requirements for the UX.
* Develop versions of designs to meet the requirements.
* Build interactive versions of the designs so they can be communicated & assesed.
* *"Evaluate what is being built throughout the process and the user experience it offers."*

**Characteristics of the user population** include:  
* Types of user
* Frequency of use
* Discretion about use
* Experience of the task
* Level of training
* Experience of computer systems

**Requirements Gathering** involves:  
* Determining characteristics of the user population.
* Determining characteristics of the tasks.
* Determining constraints and objectives.

The ISO Usability Standard 9241 adopts three traditional usability categories: effectiveness, efficiency & satisfaction.

**Scenarios** are step-by-step descriptions of a user's actions that can be used as a tool in requirements gathering, interface design and evaluation.

When Gavin refers to **Ethnography** he is talking about participating in users interacting with the systems (asking questions etc.).

---

## Requirements Analysis

When establishing requirements, ask yourself:  
What do users want?  
What do users need?

**Functional Requirements** are what the system should do.

**Non-Functional Requirements** are how well the system will do what it should.

**Personas** are not real people but are synthesised by real user characteristics.

Gavin says that personas are useful for avoiding building what users ask for rather than what they will actually use. And that the design efforts can be prioritised based on what is most important to users.

Ways of gathering data for requirements include:  
* Interviews
* Focus Groups
* Questionnaires
* Researching similar products
* Direct observation
* Indirect observation
* Studying documentation

|Process|Pros|Cons|
|---|---|---|
|Interviews|Good for exploring issues|Time consuming & may be infeasable
|Focus Groups|Good for gaining consensus view|Can be dominated by individuals
|Questionnaires|Good for answering specific questions from a dispersed group of people|Should be used in conjunction with other techniques
|Researching similar products|Good for prompting requirements quickly|
|Direct observation|Good for gaining insight into stakeholder tasks|Requires time commitment from a member of the design team & can result in a huge amount of data
|Indirect observation|*"Good for logging current tasks"*?|*"Not often used in requirements activity"*?
|Studying documentation|Good source of data about steps involved in an activity, takes no stakeholder time|Not to be used in isolation

Problems with data gathering include:
* Domain knowledge is distributed and implicit
* Some knowledge is difficult to articulate
* Political problems in organisations can interfere
* Functional & Usability demands have to be balanced
* The economic & business environment can change during the process

Guidelines for gathering requirements:
* Focus on identifying stakeholders' needs
* Involve all stakeholder groups
* Involve more than one representative from each stakeholder group
* Use a combination of data gathering techniques
* Support the process with props such as prototypes & task descriptions

A **Scenario** is a simple, informal narrative and is not generalisable.

Scenarios include:
* Actors
* Background information on actors
* Assumptions about the environment
* Goals & Objectives
* Sequences of action and events

The advantages of scenarios are:
* They are linear
* They are easy to understand
* They are concrete (less likely to have errors in their creation)

The disadvantages of scenarios are:
* They have no choice/branches/special conditions

An **Essential Use Case** will *"abstract away from the details"* and *"Does not have the same assumptions as use cases"*.

A **Task Model** is a detailed breakdown of steps involved & should avoid committing to implementation details.

In **Task Analysis**, you must ask yourself: *"What are people trying to achieve?"* & *"Why are they trying to achieve it?"*.

**Task Decomposition** is splitting tasks into ordered subtasks.

**HTA** stands for Hierarchical Task Analysis, and focuses on physical and observable actions not related to software *"or an interaction device"*(?).

Here's a good example of how to do a HTA:  
<img src="https://blogs.city.ac.uk/dimitrakopoulo-inm452-2016/files/2017/01/HTA-Mrs.-Owen-29hifve.png"/>

To **Afford** is to provide or supply an opportunity or facility. (A handle affords grasping etc.)

**Perceived Affordance** refers to what a person think can be done with an object.

---

## Prototyping

Prototypes are useful for:
* Getting evaluation and feedback for interaction design
* Allowing stakeholders to interact with the design
* Testing out ideas
* Helping designers to choose between designs

The **Breadth** of a prototype is how much of the feature set it covers.

The **Depth** of a prototype is the degree of functionality there is for each feature.

**Low-fidelity Prototyping** uses a medium which is unlike the final medium. It is quick, cheap & easily changed.

Paper Prototypes are good because:
* They can be put together fast.
* The are easy to change.
* Designers don't waste time on details.
* People who can't code can still help.

**Wizard-of-Oz** prototyping is where *"the user thinks they are interacting with a computer but a developer is responding to output rather than the system."*

**High-fidelity Prototyping** uses materials that you would expect to be in the final product.

In **Participatory Design** a *"user is an active member of the design team."*

---

## Evaluation

**Evaluation** involves testing the usability and functionality of a system.

Evaluation should be considered at every stage of the design life cycle.

All evaluations need goals and questions to guide them.

An example of the questions needed to guide an evaluation are:  
"The goal of finding out why some customers prefer to purchase paper train tickets rather than e-tickets can be broken down into sub-questions:
– What are customers’ attitudes to these new tickets?
– Are they concerned about them being accepted?
– Is the interface for obtaining them poor?"

The **Evaluation Approach** influences the **Evaluation Method**.

Practical issues with evaluation involve:  
* Selecting users
* Staying on budget
* Staying on schedule
* Finding evaluators
* Selecting equipment

There are ethical issues concerning evaluation, and an informed consent form needs to be developed.

Participants in an evaluation have a right to:
* Know the goals of the study
* Know what will happen to the findings
* Privacy of personal information
* Leave when they wish
* Be treated politely

Considerations to be made when evaluating include:
* Can this study be replicated? (Is it reliable)
* Is the process creating biases?
* Can the findings be generalised?
* Is the environment influencing the findings?

|Study|Advantages|Disadvantages|Appropriate when|
|---|---|---|---|
|Laboratory Studies|Specialist equipment available & uninterrupted environment|"Lack of context"|It is impractical to observe features of interest in a real setting|
|Field Studies|Natural Environment, context|Distractions|Appropriate where context is crucial or evaluation occurs over a long period|

**Heuristic Evaluation** involves examining a design to see if usability criteria (*heuristics*) are violated.

Heuristic Evaluation is said to 'debug' design.

#### Nielsen's Heuristics
1. Visibility of system status
2. Match between system & the real world
3. User control & freedom
4. Consistency & Standards
5. Error Prevention
6. Recognition rather than recall
7. Flexibility & efficiency of use
8. Aesthetic and minimalist design
9. Help users recognise, diagnose, and recover from errors
10. Help & document

In order to evaluate a design, there must be a simulation, prototype or full implementation.

In experimental evaluation, specific aspects of interactive behaviour are evaluated by differing some experimental conditions while also having control variables.

In experimental evaluation, a sufficient sample of subjects are representative of users.

Examples of **Independent Variables** (*IVs*)are interface style and number of menu items.

Examples of **Dependent Variables** (*DVs*) are time taken and number of errors.

The **Null Hypothesis** states that there is no difference between conditions.

When doing experimental evaluation, the conditions can be changed 'within subjects' or 'between subjects'.

When conditions are changed within subjects, the process is cheaper and less likely to suffer from user variation, but a transfer of learning is possible from the first condition to the second.

When conditions are changed between subjects, there is no possibility for transfer of learning but more users are required and the variation of users can bias the results.

After doing evaluation, there needs to be an analysis of the data.

**Observation Methods** include:
* Think Aloud
* Cooperative Evaluation
* Protocol Analysis

The **Think Aloud** observation method / protocol involves a user describing what they are doing, why they are doing it and what they think is happening.

Advantages: Think aloud requires little expertise, can provide useful insight and can show how the system is actually used.

Disadvantages: Think aloud can be subjective and selective and the act of describing may alter the performance of the task.

Think aloud is very useful because
* The observer can correlate the actions and statements of the participant.
* It results in rapid high-quality user feedback.
* Data is retrieved from both observing what the subject is doing & hearing what the subject is trying to do.
* The experiment may easily be steered by the observer.
* The presence of two people allows meaningful direct dialogue.
* Quantitative content analysis can be done by examining video evidence after the experiment.

When performing the Think Aloud protocol, make sure that the user realises that the interface is under scrutiny (not them).

Note taking is still important when videoing the experiment as there is no way of clarifying ambiguities when watching a video.

The observer should try to help the subject as little as they can.

**Cooperative Evaluation** is a variation of Think Aloud where the user collaborates in the evaluation. Both the user and evaluator are encouraged to ask each other questions throughout.

An advantage of Cooperative Evaluation over Think Aloud is that the user is encouraged to criticise the system.

**Protocol Analysis** is the record of the evaluation session.

|Protocol Analysis method|Advantages|Disadvantages|
|---|---|---|
|Paper & Pencil|Cheap|Limited to writing speed|
|Audio|Good for thinking aloud|No record of things that don't make a sound|
|Video|Accurate & Realistic|Obtrusive & needs special equipment|
|Computer Logging|Automatic & Unobtrusive|Large amounts of data that can be difficult to analyse|
|User notebooks|Useful insights|Subjective|
|Post task walkthroughs|Analyst has time to focus on incidents & avoids excessive interruption of tasks|Lack of freshness & post-hoc interpretation of events|

A mixture of protocol analysis methods are used in practice.

**Query Techniques** include **Interviews** & **Questionnaires**.

**Interviews** can be varied to suit context, issues can be explored fully, and can elicit user views and identify unanticipated problems. But they are also subjective and time consuming.

**Questionnaires** are quick & reach large user groups, but are less flexible, need to be carefully designed and don't afford the same probing as interviews.

The **System Usability Scale** is ten questions that users are asked to scale from Strongly Agree to Strongly Disagree.  
- I think that I would like to use this system frequently.
- I found the system unnecessarily complex.
- I thought the system was easy to use.
- I think that I would need the support of a technical person to be able to use this system.
- I found the various functions in this system were well integrated.
- I thought there was too much inconsistency in this system.
- I would imagine that most people would learn to use this system very quickly.
- I found the system very cumbersome to use.
- I felt very confident using the system.
- I needed to learn a lot of things before I could get going with this system.

When **choosing your evaluation method**, one should ask oneself:  
* When in the cycle is the evaluation to be carried out?
* Should the evaluation be a field evaluation or a laboratory evaluation?
* How objective should the technique be?
* Should the measures be qualitative or quantitative?
* What level of information is required?
* Should the evaluation be obtrusive or unobtrusive?
* What resources are available? (Time? Subjects? Equipment? Expertise?)

**HCT** stands for the **Human Computer Trust Scale**.

The Human Computer Trust scale is a list of points to be ticked off for a system about how users feel about it.

---

## Usability Testing

Usability involves recording performance of typical users doing typical tasks.

*"Usability is applied experimentation."*

**Usability Testing**:  
* Is done to improve products.
* Has only a few participants.
* Informs design.
* Is not usually replicable.
* Has conditions controlled as much as possible.
* Has a planned procedure.
* Has its results reported back to developers.

With Usability Testing, the focus is on:  
* The time it takes users to complete a task.
* The amount of errors that are made completing tasks.
* The types of errors that are made completing tasks.

Usability Testing is done in a **Usability Lab** or some other controlled space.

An emphasis is put on selecting representative users and developing representative tasks.

Usually only 5-10 users are selected and the tasks last no longer than 30 minutes.

The test conditions should be the same for every participant.

Some types of data that can be recorded during Usability Testing include:  
* Time to complete a task
* Time to complete a task after a specified time away from the product
* Number and type of errors per task
* Number of errors per unit time
* Number of navigations to online help or manuals
* Number of users making a particular error
* Number of users completing a task successfully
* Eye Fixations & Scan Path

Usability Testing find the current level of performance which becomes the minimum acceptable level of performance.

The amount of participants depends on:  
* The schedule
* The availability of participants
* The cost of running tests

*"Some experts argue that testing should continue until no new insights are gained."*

There are three types of **Experimental Design**: Different-Participants, Same-Participants & Matched-Participants.

**Matched Participants** is where participants are matched based on *"expertise, gender, etc."* across the change in condition of the experiment.

Here are the advantages & disadvantages of the different types of experimental design:  

|Design|Advantages|Disadvantages|
|---|---|---|
|Different|The order doesn't effect the experiment|Different subjects introduce biases|
|Same|There are fewer participants & no differences|The ordering of the experiment may bias it|
|Matched|The order doesn't matter, but there are less differences between subjects|Can not be sure of perfect matching|

---

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

---

## Cooperative Work

**Computer-Supported Cooperative Work** (*CSCW*) addresses how collaborative activities and their coordination can be supported by means of computer systems.

Gavin talks about CSCW as *"The field of study that examines design, adoption and use of groupware"* *"NOT restricted to 'cooperation' or 'work' but also examines competition, socialising and play"*.

Ease-of-use must be better for groupware because the pace of use of an application is often driven by the pace of a conversation.

The motivation for groupware is:  
* To make communication faster & clearer.
* Te enable communication where it wouldn't otherwise be possible.
* To enable telecommuting (people working from home).
* To cut down travel costs.
* To bring together multiple perspectives and expertise.
* To form groups with common interests where it wouldn't be possible to gather a sufficient number of people face-to-face.
* To save time and cost in coordinating group work.
* To facilitate group problem solving.
* To enable new modes of communication. (such as anonymous changes or structured interactions)

Groupware can be classified according to when & where the participants are performing the cooperative work:

||Same Place|Different Place|
|---|---|---|
|Same Time|Face-to-Face conversation|Telephone|
|Different Time|Post-it note|Letter|

Groupware can also be classified by its function:

||Co-Located|Remote|
|---|---|---|
|Synchronous|Meeting Rooms with shared PC's & windows|Video Conferences with shared windows|
|Asynchronous|Shared Whiteboard|Email|

**WYSIWIS** stands for *What you see is what I see* and refers to a paradigm in the design of multiuser interfaces where multiple users, interacting with a multiuser software system, share the same visual perception of the work area.

There are different levels of sharing, with WYSIWIS being the highest level.

**Awareness** in collaborative systems refers to having an idea of what other participants are doing or have been doing. It refers to aspects that demand little conscious effort or attention as opposed to something that allows you to explicitly find out what others are doing.

Cooperative work involves:  
* **Participants** who are working.
* **Artefacts** upon which they work.

*"All computer systems have group impact - not just groupware!"*

**Deictic** means relating to or denoting a word or expression whose meaning is dependent on the context in which it is used.

**Deixis** is the function or use of deictic words, forms, or expressions.

A **Back Channel** is a sound or gesture made to give continuity to a conversation by a person who is listening to another.

Restricting media restricts back channels.

There are two types of context in conversation:  
* **External Context**: Reference to the environment. *"(thing being pointed to)"*
* **Internal Context**: Reference to the environment. *('"that"')*

Resolving context depends on sharing meaning.

Context is essential for disambiguation.

**Speech Act** theory is a form of conversational analysis where utterances are considered to be *acts* characterised by what they do. E.g. "I'm hungry" has a propositional meaning: -> "get me some food".

An **Illocutionary Point** is the basic purpose of a speaker in making an utterance.

**MDT** stands for **Multi-Disiplinary Team**.

**Text Based Communication** is the most common media for asynchronous groupware.

Successful **Grounding** in communication requires parties "to coordinate both the content and process"

There are several **Grounding Constraints** present in some forms of communication:  

|Grounding Constraint|Meaning|
|---|---|
|Contemporality|Utterance is heard as soon as it is made|
|Simultaneity|Speaking together|
|Sequence|Utterances are ordered|
|Reviewability|Previous utterances can be reviewed|
|Revisability|A message can be revised before being sent|
|Visibility|Group members can see eachother|
|Audibility|Group members can see eachother speak|
|Copresence (or *colocation*)|Group members are in the same location|

Strategies to increase granularity include:
* **Eagerness**: Looking ahead in conversation. "Cup of tea? One sugar?"
* **Multiplexing**: Several topics in one utterance. "No thanks. Cold isn't it?"

A **Co-ordination Mechanism** is the combination of an artefact & a protocol surrounding its use.

**Ethnography** is the scientific description of peoples and cultures with their customs, habits, and mutual differences.

In participatory design, workers enter into design context. In ethnography, designers enter into work context. Both of these make workers feel valued in design, encouraging them to "own" the products and work hard to ensure they are as good as can be.

The benefits and effort put into groupware can be disproportionate. For example, with a shared diary the secretaries and subordinates enter data and so it is easy for the manager to arrange meetings. As a result the groupware falls into disuse.

 **Critical Mass** is the minimum amount of resources required to start or maintain some venture.

 It is difficult to measure the benefits or success of groupware.

 Gavin on groupware: *"Developers cannot rely on their own individual informed intuition when gropu processes are concerned."* ... *"Involve real users early on in the design process."*

---

## User Interface Architecture

Code that is constructed better (with a proper UI architecture) reduces the impact of small changes to the interface.

A **Software Architecture** is a method by which software systems are decomposed into components and a specification of how those components interact.

Separation between semantics and interface:  
* **Portability** refers to the ability for the same application to be used on different systems.
* **Reusability**: If components are separated, it is likely that they can be reused.
* **Multiple Interfaces**: *"several interfaces, same functionality"*.
* **Customisation**: *"by both the designer and the user, without altering underlying application"*.

**Windowing Systems** (*WS*) are GUIs that implement the WIMP paradigm for a user interface.

Windowing systems provide device independence, management, & isolation of individual applications.

The **Seeheim Model** of UI Architecture involves a Presentation System, A Dialogue Control System, & Application Interface model.

UI is subject to many changes, and different *"look & feel"* should not affect functional core.

Gavin says that there are three options for **Object Based Architectures**:  
* Containers
* Inheritance
* Aggregation *"(MVC)"*

The **Model View Controller** (*MVC*) UI Architecture is an architectural design pattern that separates the User Interface from the application.

MVC organises interactive systems into a collection of interaction objects made up of Model-View-Controller triples.

Model-View-Controller triples:  
* The **Model** is any object. It encapsulates application-specific data & functionality.
* The **View** is an object which provides a visual representation of a model.
* The **Controller** is an object which handles input actions sending messages to the view or model.

Views & Controllers comprise UI.

A single model can be associated with different views and controllers.

**Listeners** are set up to listen to changes in the controller, to update the model.

TODO: Create advantages and disadvantages of MVC

Advantages of the MVC Architecture include:  
* It distributes the handling of presentation, control and application linkage.
* *"Each MVC triple is organised around a part of the display"*
* Model updates its views directly, which is easier to handle.
* Multiple view have the same model.
* There is immediate *"semantic"* feedback.
* It implements direct manipulation style interfaces.

Disadvantages of the MVC Architecture include:  
* The dependency mechanism may lead to a spaghetti network of links.
* *"There is no notion of interface-application separation"*.
* There is complexity for simple *"interactors"*.
* There can potentially be excessive updates and messages.
