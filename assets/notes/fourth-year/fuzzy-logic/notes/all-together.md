
*This document is a compilation of a series of notes on fuzzy logic that can be found [here](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/fuzzy-logic/)*

# Fuzzy Logic Notes

## 1. Introduction to Fuzzy Logic & Control Systems

**Soft computing** is an umbrella term for disciplines such as:
* Fuzzy logic and fuzzy control,
* Neural networks based computing and machine learning
* Genetic algorithms
* Chaos theory in mathematics.

An example of a fuzzy set is the set of animals. A badger is an animal, a rock is not an animal, but it is not certain whether starfish or bacteria are animals.

A **Fuzzy Set** is a set whose elements have degrees of membership.

The term **Deviant Logic** is used to describe some systems of logic that are different to standard logic.

**Fuzzy Logic** is a form of multi-valued logic derived from fuzzy set theory to deal with reasoning that is approximate rather than precise.

[This video](https://www.youtube.com/watch?v=J_Q5X0nTmrA) is a very good quick introduction to what this module involves.

A **Fuzzy Control** system is a control system based on fuzzy logic—a mathematical system that analyses analog input values in terms of logical variables that take on continuous values between 0 and 1, in contrast to classical or digital logic, which operates on discrete values of either 1 or 0.

**Heuristic** is an adjective that means 'Enabling a person to discover or learn something for themselves'.

When referring to **Heuristic Information**, what is meant is information based on ‘rules of thumb’.

One can be sure of the truth of an assertion such as "Jack is tall", as they can have confidence in the truth of a vague assertion, just because of its vagueness.

One can not be sure of the truth of an assertion such as "Jack is 1.876m tall", as the laws of physics acquire this minuteness of detail by sacrificing the fixed absolute certainty that comes with vagueness.

**Linguistic Variables** are variables whose values are words or sentences in a natural or artificial language.

An example of a linguistic variable: If tall, not tall, very tall, very very tall, etc. are values of HEIGHT, then HEIGHT is a linguistic variable.

Linguistic variables, such as 'Angry' and 'Fearful' have **Term Sets** such as {Very Angry (VA), Angry(A), Not Angry (NA)} and : {Very Fearful (VF), Fearful(F), Not Fearful (NF)}.

The guiding principle of Soft Computing is: Exploit the tolerance for imprecision, uncertainty, partial truth, and approximation to achieve tractability, robustness and low solution cost.

It is important to remember that {0,1} is the set of both 0 and 1, while [0,1] is the set of all real numbers in the interval from 0 to 1.

The term 'null set' is sometimes used as a synonym for 'empty set'.

---

---

## 2. Properties of Fuzzy Sets and Relationships amongst the sets

**Crips Sets** are sets governed by the rules of classical set theory.

A Fuzzy Set's **Membership Function** (or 'Characteristic Function') is the function that assigns each element a grade of membership to the set ranging between zero and one.

A Fuzzy Set is said to be **characterised** by its membership function.

**Fuzzy Conditional Statements** are expressions of the form IF A THEN B, where A and B have fuzzy meaning, e.g.: IF x is small THEN y is large, where small and large are viewed as labels of fuzzy sets.

A **Fuzzy Algorithm** is an ordered sequence of instructions which may contain fuzzy assignment and conditional statements.

A **Fuzzy Restriction** is: <TODO: Enter definition of a Fuzzy Restriction here>.

A fuzzy set *A* of elements (the denominators in this representation [which happen to be numbers in this example]) that have degrees of membership (the numerators in this representation) of *A*, is usually be represented like this:
```
A =0/1+0/2+0/3+0/4+0/5+ 0.2/6 + 0.5/7 + 0.8/8 + 1/9 + 1/10
```

The numerators in the above representation of a fuzzy set are referred to as **grades of membership**.

The membership grade of an element *x* in a fuzzy set *A* is written 𝝻<sub>*A*</sub>(*x*) or A(*x*).

---

### Properties of Fuzzy Sets:

|Property|Definition|Explanation
|---|---|---
|1) Equality of two fuzzy sets|A fuzzy set *A* is considered equal to a fuzzy set *B*, if and only if: <code>𝝻<sub>*A*</sub>(*x*) = 𝝻<sub>*B*</sub>(*x*)</code>.  |Sets are equal only when their  membership functions are equal.
|2) Inclusion of one fuzzy set into another fuzzy set|Let *X* and *Y* be fuzzy sets defined in the same universal space *U*. *X* is a subset of *Y* if and only if: <code>For every *u* in the set *U* we have *X*(*u*) ≤ *Y*(*u*)</code>.|If every element is always more in Y than X then X is a subset of Y.
|3) Cardinality of a fuzzy set|The **Cardinality** (or 'Sigma Count') of a fuzzy set *A* is given: <code>CARD<sub>*A*</sub>=𝝻<sub>*A*</sub>(*x*<sub>1</sub>)+𝝻<sub>*A*</sub>(*x*<sub>2</sub>)+...+𝝻<sub>*A*</sub>(*x*<sub>n</sub>)</code>.|The cardinality of a fuzzy set is the sum the membership grades of all its elements.
|4) An empty fuzzy set|A fuzzy set *A* is empty if and only if <code>𝝻<sub>*A*</sub>(*x*)=0</code> for all *x* ∊ *X*.|A fuzzy set is empty if the membership grade of every element in the set is zero.
|5) Alpha-cuts|An **Alpha-cut** (or 'A-level set') of a fuzzy set *A*⊂*X* is an ordinary set *A*<sub>𝜶</sub>⊂*X* such that <code>*A*<sub>𝜶</sub>={*x*∊*X*;𝝻<sub>*A*</sub>(*x*)≥𝜶}</code>.|The 'Alpha level cut' of a fuzzy set is the crisp set of elements in the set with membership grades above a value '𝜶'.

A **Normal** fuzzy set *A* is a fuzzy set where there exists at least one element *x*∊*A* such that 𝝻<sub>*A*</sub>(*x*)=1.

A **Subnormal** fuzzy set is a fuzzy set that is not normal.

The **Height** of a fuzzy subset *A* is the largest membership grade of an element in *A*.

The **Support** of a fuzzy set *A*⊆*X* is the crisp subset of *X* whose elements all have non-zero membership grades in *A*.

The **Core** of a fuzzy set *A*⊆*X* is the crisp subset of *X* whose elements all have membership grades of 1 in *A*.

The **Universe of Discourse** is the range of all possible values for an input to a fuzzy system.

The **Crossover Point** of a fuzzy set is the element at which its membership function is 0.5.

A **Fuzzy Singleton** is a fuzzy set whose support is a single point in U with a membership function of one.

---

### Fuzzy Set Operations

1. The **Complement**, *cA*, of a fuzzy set *A* is: 𝝻<sub>*cA*</sub>(*x*)=1-𝝻<sub>*A*</sub>(*x*).

2. The **Union** of fuzzy subsets, A and B, of the set X is the set C, where 𝝻<sub>*C*</sub>(*x*<sub>i</sub>)=MAX(𝝻<sub>*A*</sub>(*x*),𝝻<sub>*B*</sub>(*x*)) for all *x*∊*X*.

3. The **Intersection** of fuzzy subsets, A and B, of the set X is the set C, where 𝝻<sub>*C*</sub>(*x*<sub>i</sub>)=MIN(𝝻<sub>*A*</sub>(*x*),𝝻<sub>*B*</sub>(*x*)) for all *x*∊*X*.

4. **Concentration** is an operation that reduces volume. In terms of fuzzy set theory, performing concentration on a fuzzy set *A*⊆*X* can involve creating a fuzzy set *B*⊆*A* where 𝝻<sub>*B*</sub>(*x*) = (𝝻<sub>*A*</sub>(*x*))<sup>𝜶</sup>, given that 𝜶≥1.

5. **Dilation** is an operation that makes things wider. In terms of fuzzy set theory, performing dilation on a fuzzy set *A*⊆*X* can involve creating a fuzzy set *B*⊇*A* where 𝝻<sub>*B*</sub>(*x*) = (𝝻<sub>*A*</sub>(*x*))<sup>𝜶</sup>, given that 𝜶≤1.

6. The **Level Set** operation involves: If we have a set *A*⊆*X*, we can define a new set *F* such that 𝝻<sub>*F*</sub>(*x*)=𝜶(𝝻<sub>*A*</sub>(*x*)) for all *x*∊*X*, given 0≤𝜶≤1.

Things might be easier to comprehend having read that Concentration and Dilation are the same operation, **Exponentiation**, except that 𝜶 is greater than or less than 1.

*The Concentration and Dilation may seem mixed up, but a membership function less than one, to the power of alpha which is less than one, causes the membership function to **increase**. ie: `(0.5)^(0.5)==(~0.7)`*

In most cases, the intersection of a fuzzy subset and its complement is not the null set.

Non-primary terms can be computed like this:  

* <code>𝝻<sub>*very young*</sub> = (𝝻<sub>*young*</sub>)<sup>2</sup></code>
* <code>𝝻<sub>*more or less young*</sub> = (𝝻<sub>*young*</sub>)<sup>1/2</sup></code>
* <code>𝝻<sub>*not very young*</sub> = 1 - (𝝻<sub>*young*</sub>)<sup>2</sup></code>

Membership functions can have different shapes. It is very important to know these for the exam:    
<img src="./assets/membership-functions.png" width="500"/>

In the above image, an example of a symmetric triangular membership function was shown. Not all triangular membership functions are symmetric, and the generic way to calculate triangular membership functions is:  
<img src="./assets/trimf-1.png" width="400"/>

The triangular membership function is also sometimes represented as:  
<img src="./assets/trimf-2.png" width="400"/>

The **Cross Product** (or *Cartesian Product*) of *A*⊆*X* and *B*⊆*Y* is denoted as *T*=*A*x*B*, and is given: 𝝻<sub>*T*</sub>(*x*,*y*)=MIN[𝝻<sub>*A*</sub>(*x*),𝝻<sub>*B*</sub>(*y*)].

Cross products facilitate the mapping of fuzzy subsets that belong to disparate quantities or observations.

A **Fuzzy Patch** is defined by a fuzzy rule: a patch is a mapping of two membership functions (e.g: 'IF WARM THEN FAST').

A rule in a fuzzy controller's ruleset generates the product of the input & output fuzzy sets.

**Primary Membership Terms**, are those such as *fat*, *weird* & *nice* (𝝻<sub>*fat*</sub>,𝝻<sub>*weird*</sub> & 𝝻<sub>*nice*</sub>), whereas terms such as *very fat*, *more or less weird* & *not nice* ((𝝻<sub>*fat*</sub>)<sup>2</sup>,(𝝻<sub>*weird*</sub>))<sup>1/2</sup> & (1-𝝻<sub>*nice*</sub>)) are **Non-Primary Membership Functions** as they can be made up from other terms.

The **Base Variable** of a fuzzy set e.g. *Young*, is the parameter type that the membership function is applied to e.g. *Age*.

---

---

## 3. Knowledge Representation & Reasoning

**Fuzzification** is the mapping of information onto the term-set of a linguistic variable.

**Inference** is the invoking of rules in a knowledge base systematically to determine which rules are fired and to what degree.

**Composition** is an averaging procedure used to compute the effectiveness of each rule.

**Defuzzification** is the process of converting fuzzy values onto crisp numbers.

In Fuzzification, the membership functions defined on the input variables are applied to their actual values to determine the degree of truth for each rule premise.

A **Knowledge Based Expert System** is a computer program which, with its associated data, embodies organised knowledge concerning some specific area of human activity.

A **Production System** is a knowledge representation based on condition-action pairs, called production rules or just productions of the form "If this condition occurs, then do this action".

A **Fuzzy Knowledge-Based System** is a knowledge-based system that performs approximate reasoning.

A fuzzy knowledge base comprises vague facts and vague rules, such as <code>*X* is 𝝻<sub>*x*</sub></code> or <code>IF *X* is 𝝻<sub>*x*</sub> THEN *Y* is 𝝻<sub>*y*</sub></code>.

*Fuzzy* or *vague* rules are linguistic rules that an antecedent/premise and consequent/conclusion. (e.g: `IF WARM THEN FAST`)

---

**MIN** and **PRODUCT** are two inference methods.

**MAX** and **SUM** are two composition techniques.

**Centre of Gravity** (*Centre of Area, Centroid, COA, COG*) and **Mean Of Maxima** (*Maximum*) are two defuzzification techniques.

There is more computation involved in COG than MOM, but COG is more widely used. COG usually gives higher results.

(TODO describe how to do the last three methods in exam questions as well as possible)

---

So far the notes have discussed **Mamdani** calculus.  

**Mamdani** calculus involves computation of consequent fuzzy variables. This is complicated and is not always possible for real-time systems.

A **Piecewise linear function** is a function that is made up of straight lines when graphed.

A **Non-decreasing monotonic function** is a function where every output value is larger for every larger input value. *(The graph goes up and up and doesn't come back down the y-axis further on the x-axis x)*

For a rule with IF THIS **AND** THAT THEN SOMETHING, the rule fires to the extent: <code>max(𝝻<sub>*THIS*</sub>(x),𝝻<sub>*THAT*</sub>(x))</code>

For a rule with IF THIS **OR** THAT THEN SOMETHING, the rule fires to the extent: <code>min(𝝻<sub>*THIS*</sub>(x),𝝻<sub>*THAT*</sub>(x))</code>

For a rule with IF THIS THEN SOMETHING, the rule fires to the extent: <code>𝝻<sub>*THIS*</sub>(x)</code>

If only one rule fires, then composition is unnecessary.

---

---

## 4. Fuzzy Control Systems

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

---

---

## 4. Mamdani & Takagi-Sugeno Systems

**Mamdani Controllers**' rules have membership functions for the antecedants & consequents.

**Takagi-Sugeno Controllers**' rules contain membership functions for the antecedants & linear functions in the consequents.

TSK's output is obtained by defuzzification using COG. It's simple really. Rules will fire to certain extents, and each will have an output. You take the average of the `extent * output` as your output value!

Takagi & Sugeno recognise two important points:  
1. Complex processes can be described in terms of simpler interacting sub processes. Like fitting a piece-wise linear equation to a complex curve.
2. If the output variable of a complex system can be divided into distinct regions, the input variable can be related to it in a linear manner.

**Mamdani** is used for capturing expert knowledge and creates an intuitive description of that knowledge, but:  
* It involves integrating across a continuously varying function, so it can be computationally expensive.
* Every rule needs membership functions for the antecedents and consequents.
* The membership functions for the consequents have to be computed during inference, composition & defuzzification for every rule.
* It is difficult to find the membership functions for linguistic variables in the consequents because their relationship with the input is non-linear.

A Mamdani Controller's rule base will look like this:
IF TEMP is COLD THEN SPEED is MINIMAL
IF TEMP is COOL THEN SPEED is SLOW
IF TEMP is PLEASANT THEN SPEED is MEDIUM
IF TEMP is WARM THEN SPEED is FAST
IF TEMP is HOT THEN SPEED is BLAST

A **Zero-Order** TSK Controller's rule base will look like this:
IF TEMP is COLD THEN SPEED = k<sub>1</sub>
IF TEMP is COOL THEN SPEED = k<sub>2</sub>
IF TEMP is PLEASANT THEN SPEED = k<sub>3</sub>
IF TEMP is WARM THEN SPEED = k<sub>4</sub>
IF TEMP is HOT THEN SPEED = k<sub>5</sub>

A **First-Order** TSK Controller's rule base will look like this:
IF TEMP is COLD THEN SPEED = j<sub>1</sub> + k<sub>1</sub> * T
IF TEMP is COOL THEN SPEED = j<sub>2</sub> + k<sub>2</sub> * T
IF TEMP is PLEASANT THEN SPEED = k<sub>3</sub>
IF TEMP is WARM THEN SPEED = j<sub>4</sub> + k<sub>4</sub> * T
IF TEMP is HOT THEN SPEED = k<sub>5</sub>

For a **SISO** (Single Input, Single Output) system, the rule base looks like:  
**Mamdani**: <code>IF X is <sub>X</sub>(X) THEN Y is <sub>𝝭</xub>(Y)</code>  
**TSK**: <code>IF X is <sub>X</sub>(X) THEN Y = f(X)</code>  

For a **SISO** system, the values of the constants that relate the inputs to the outputs are:  
**Mamdani**: <code><sub>X</sub>(X)</code> & <code><sub>𝝭</xub>(Y)</code> are membership functions of the terms X & Y.
**TSK**: <code><sub>X</sub>(X)</code> is a membership function of term X, and Y is a linear function of X.

**FLC** stands for Fuzzy Logic Controller.

An **Unconditioned** term is a term that is *always* true to the same extent. (As opposed to being a **Conditioned** term)  

Unconditioned terms are left out of the antecedent.

*"Typically TSK Controllers only use 'AND' connectives in the antecedent of rules, and the relationship between inputs and outputs is strictly linear."*

The key difference between a Mamdani-type fuzzy system and the TSK system is:  
A Zero-Order TSK model can be viewed as a special case of a Mamdani system where each rule is specified by fuzzy singleton or a pre-defuzzified consequent.  
In TSK, each rule has a crisp output, the overall input is obtained by a weighted average - avoiding the time consuming defuzzification in Mamdani.

TSK is an approximation of Mamdani, as it ignores fuzziness in the consequent but accounts for fuzziness in the antecedent while Mamdani takes into account fuzziness in both the antecedent and the consequent.


**Advantages of TSK:**  
* It is computationally efficient.
* It works well with linear techniques (e.g., PID control).
* It works well with optimization and adaptive techniques.
* It has guaranteed continuity of the output surface.
* It is well suited to mathematical analysis.

**Disadvantages of TSK:**  
* It is an approximation of a Mamdani model.
* It is less intuitive than Mamdani.

**Advantages of Mamdani:**  
* It is intuitive.
* It has widespread acceptance.
* It is well suited to human input.

**Disadvantages of Mamdani:**
* It is elaborate
* It can be computationally expensive.

---

---

## 5. Neuro-Fuzzy Models
