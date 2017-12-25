*This document is part of a series of notes for CS4051 Human factors that can be found [here](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/human-factors/notes)*

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
