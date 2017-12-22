
## Knowledge Representation & Reasoning

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
