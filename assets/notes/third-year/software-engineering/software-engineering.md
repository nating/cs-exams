# Software Engineering
---

## Requirements Engineering

##### Requirements cover:
 - Functional requirements
 - Non-functional requirements
 - Constraints on design (must operate with existing software/hardware)
 - Constraints on implementation (must be written in Javascript)

##### Requirements engineering includes:
 - Elicitation
 - Analysis
 - Representation
 - Validation

**Different Elicitation techniques**:
<img src="Screen Shot 2017-05-01 at 15.32.07.png"></img>

Having users write down requirements can result in bad requirements.

##### Bad requirements are:
 - Ambiguous
 - Non-atomic
 - Non-Independant

##### Good requirements are:
 - Clear
 - Measurable
 - Concise
 - Feasible
 - Necessary
 - Prioritized
 
---

## Use Case Modelling

**Use Cases** document the behaviour of a system by describing the sequences involved with interactions with the system.

##### Use Cases include:
 - Actors (one primary actor)
 - Goal
 - Pre-Conditions
 - Post-Conditions
 - Definition of success
 - Failure Conditions
 - Failure handling
 - 'Stakeholders' if your really going for it

When you're going to come up with use cases, create a list of goals and then decide which of them are in scope.

---

## Estimation

An **Estimate** is a tentative evaluation or a rough calculation.

Estimates should be unbiased.

To make estimates more sophisticated you can provide a bestcase and worstcase estimate.

**To make a good estimate:**
|Mechanism|Process
|---|---
|Count|Count things that are highly correlated with the size of the software being estimated.
|Compute|Use historical data to turn the count into an estimate.
|Judge|Divide the project into smaller parts, estimate those, then add them all up.
|Analogy|Estimate by referring to similar projects
|Consult|Talk to experts to see what they think.

---

## Architecture

The **Software Architecture** of a system is a depiction of the system that aids the understanding of how it will behave.

**Architecture Views** are represenations of the architecture that are meaningful to certain stakeholders.

The Architecture can be described to different stakeholders through different archtitecture views.

Architecture views enable the architecture to be communicated to all stakeholders so they can verity the system addresses all their concerns.

**Different kinds of Architecture view:**
|View|Stakeholder
|---|---
|Business view|Business Management
|Data view|Database designers
|Application view|Software Engineers
|Technology view|System Administrators

Things that need to be considered in an architecture include, Security, Scalability, Availability, & Privacy.

Architecture is about tradeoffs, and solving issues from one aspect of the architecture can have negative impacts on the other.

There are such things as **Architectural Styles** so that there is a common language for sets of patterns and principles that may be used in different systems.

|Architecture Style ||
|---|---
|Client Server|Distributed systems talk to one server.|
|Layered|Where functionalities of the system are grouped into layers that are stacked on top of eachother and can only communicate with the layer above or below.|
|Message Bus|System is comprised of interacting components that only need to know how to interact with the interface of the bus.|
|Model View Controller|Model deals with data, View displays information & Controller handles the go between|
|Blackboard|Split into B,K & C. Blackboard is a structured memory with objects from the solution space, Knowledge sources are different sources of data, & Control selects configures and executes Knowledge sources.|
|Service Oriented|Services are provided to different components through a communication protocol over a network.|

---

## Design Patterns
**Design Patterns** allow for certain elegant solutions in the presence of common problems.

##### Some Design Principles:
 - Identify aspects of your application that vary and separate them from what stays the same.
 - Make Classes open for extension but closed for modification.

The **Strategy Pattern** encapsulates algorithms and behaviours so that they can vary independantly from the client who uses them.

The **Observer Pattern** defines a one-to-many relationship between objects so that one object's state changes, all of its dependants are notified automatically.

The **Decorator Pattern** allows behaviours to be added to an individual object without affecting the behaviour of other objects from the same class.

The **Adapter Pattern** converts the interface of a class into another interface that the client expects.

---

## Usability
Usability concentrates on goal achievement, whereas user interface is about presentation.

**Characteristics of Usability include:**

|Effective|Completely & Accurately help users achieve their goals
|Efficient|Speedily help users achieve their goal
|Error Tolerant|Prevention and recovery from errors
|Engaging|Pleasing and satisfying interface
|Easy|Supports initial and continued learning

Part of usability is having good error messages.

Usability testing involves selecting, demographics, users, tasks and time spent for a user, methods of recording the usage by a tester (screen-recording/paper/audio).

|Measuring Usability||
|---|---
|Task time|Time taken to get a task done.
|Number problems|Record a list of all problems encountered.
|Emotional State of User|See how they feel using the system.
|User opinions|Make surveys and questionnaires.
|Report Analysis|Organize problems by severity.

Good design minimizes Cognitive work, Memory work & Physical work when performing a task.

---

## Development Process
A **Software Development Process** is a structure imposed on the development of software.

**Software Lifecycle** is another way of saying Software Development Process.

##### The activities involved in the Software Development Process are:
 - Requirements
 - Architecture
 - Implementation
 - Testing
 - Maintenance

Development Process models can be linear or non-linear.

The **Waterfall Model** involves phases that are completed sequentially.  
It is easy to use, understand & manage, and has well specified deliverables for each phase.  
It is not suited for long projects, and you can't go back from one phase to a previous phase.

The **V Model** is a sequential model that focuses on Verification and Validation for feedback on each phase. It explicitly separates the acceptance of Architecture & the acceptance of Design.  
It is simple, and the design is tested before coding begins so defects do not propagate down.  
Any change requires the entire model to be restarted.

The **Incremental Model** is waterfall models for incremental versions of the system. Each iteration builds on the previous one integrating new functionality.  
It is easy to test and debug, initial product delivery is fast, and changes can be made to the product before final delivery.  
Expert planning is needed, the Architecture can be effected badly, and it is more costly than the Waterfall model.

The **Prototype Model** creates deliberately incomplete versions to achieve fast user feedback.  
Active involvement from the user prevents future disappointment, and missing functionality is identified easily.  
Leads to 'Implementing then Repairing' way of building, and maybe an inadequate analysis of the problem.

The **Spiral Model** has multiple phases, each of which can adopt any of the linear models. Every phase is concerned with eliminating the most dominant risks.  
It actively avoids risks, and functionality can be added later.  
It needs specialized expertise, is very costly, and only works for relatively large projects.

---

## Agile Manifesto

##### The **Agile Manifesto is:
 - Individuals & interactions over processes and tools.
 - Working software over comprehensive documentation.
 - Customer collaboration over contract negotiation.
 - Responding to change over following a plan.

##### Agile Methods include
 - Scrum
 - XP
 - Kanban
 - FDD
 - TDD, AUP, DSDM, & Crystal

The stages in an **XP (Extreme Programming)** project include Planning, Design, Coding, & Testing.

XP projects can be quantified by: Scope, Resources available, Time, & Quality.

With XP, user stories are created. The customer decides which story has the highest priority.

**Scrum** has a Product Owner, a Scrum Master and a Self-Organising team.

Work products in Scrum include a product backlog, sprint backlogs & a definition of 'done'.

The Product Owner takes care of the Product Backlog.

A **Sprint Planning Meeting** creates the Sprint Backlog and Definition of Done. Items from the Product Backlog are selected to be delivered in the current sprint cycle.

A **Sprint Review Meeting** updates the Sprint Backlog. What went well, what went badly, and what could be done differently to improve is discussed.

Risks are identified on a **ROAM Board (Resolved, Owned, Accepted, Mitigated)**.

Daily Scrums are limited to 15 minutes. Each person says what they did yesterday to achieve the Sprint Goal, what they will do today to meet the Sprint goal and if they see any risk that would prevent them from meeting the sprint goal.

---

## Risk Management
A **Risk** is a potential problem that may or may not occur in the future.

Risks can be Internal or External, depending on whether they are under the control of the project manager.

Risks can also be categorized as known knowns, known unknowns & unknown unknowns.

|Risk Management Process||
|---|---
|Identification|Listing all potential risks.
|Analysis|Defining probability and impact of risks.
|Planning|Thinking of preventive measures to reduce probability or impact of risks.
|Monitoring|Match measures to the re-calculated probabilities.

**Risk Exposure** can be calculated by multiplying the probability of the risk by its impact.

**Risk Leverage** can be calculated by subtracting the exposure after the mitigation from the exposure before the mitigation and dividing it by the cost of the mitigation.

---

## Software Testing
Tests should be done from very early on in the process of a project and should be automated as much as possible.

With **Whitebox Testing** the tester can see all the code and logic as they test, and try all possible paths through program logic.

In **Blackbox Testing** the tester only knows what the expected outputs are for their inputs.

The scale of testing increases. The small components are tested first before testing the components that are comprised of them.

One way to tell how well software is tested is through measuring **Code Coverage**.

In **Integration Testing** modules are tested, combined, then tested as a group.

In **System Testing** the behaviour of the entire system is tested to match the user requirements.

**Acceptance Testing** is run in the customer's environment and are carried out by the customer. Literally the software is tested to see if it will be accepted.

Other types of testing include Regression testing (re-testing things as modifications are made), and Beta-testing.
