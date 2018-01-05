
## Fuzzy Control Systems

**Control** is a mechanism used to guide or regulate the operation of a system.

**Feedback Control** is a mechanism for guiding or regulating a system by returning a fraction of the output to the input.

The signal returned to the input from the output in feedback control can be called the **Error Signal**.

In classical operation of process control one has to solve the non-linear equation *u* for the output, and also must have found the constants involved in the equation *u*. The function may be unknown or difficult to obtain.

In a fuzzy controller, the non-linear equation for the process is represented by a fuzzy mapping

A **Fuzzy Controller** is a device that models a vaguely described process.

There are two types of fuzzy controller: **Mamdani Controllers** and **Takagi-Sugeno-Kang Controllers**.

**Feedback** mode is where the fuzzy controller is used for controlling.  
**Feedforward** mode is where the fuzzy controller is used for predicting.

All inputs to, and outputs from, a fuzzy controller are in the form of linguistic variables.

**Regulation** is the process of keeping the output close to a set reference point.

**Coarse** is a synonym of rough.

A clever way of representing a rule base where the linguistic variables have large term sets is to put them in a table. Consider SPEED x SIZE -> THREAT:  

|      |SLOW|AVERAGE|FAST|
|------|---|---|---|
|SMALL |FRIENDLY|FRIENDLY|ALRIGHT|
|MEDIUM|FRIENDLY|ALRIGHT|ALRIGHT|
|LARGE |ALRIGHT|DANGEROUS|DANGEROUS|

As the term sets get bigger, it makes sense to put them in a table like above with single letters representing the words and some of the entries blank.
