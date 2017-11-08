
# Fuzzy Logic Notes

## Introduction to Fuzzy Logic & Control Systems

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

## Properties of Fuzzy Sets and Relationships amongst the sets

**Crips Sets** are sets governed by the rules of classical set theory.

A Fuzzy Set's **Membership Function** (or 'Characteristic Function') is the function that assigns each element a grade of membership to the set ranging between zero and one.

A Fuzzy Set is said to be **characterised** by its membership function.c

**Fuzzy Conditional Statements** are expressions of the form IF A THEN B, where A and B have fuzzy meaning, e.g.: IF x is small THEN y is large, where small and large are viewed as labels of fuzzy sets.

A **Fuzzy Algorithm** is an ordered sequence of instructions which may contain fuzzy assignment and conditional statements.

A **Fuzzy Restriction** is: <TODO: Enter definition of a Fuzzy Restriction here>.

A fuzzy set *A* of elements (the denominators in this representation [which happen to be numbers in this example]) that have degrees of membership (the numerators in this representation) of *A*, is usually be represented like this:
```
A =0/1+0/2+0/3+0/4+0/5+ 0.2/6 + 0.5/7 + 0.8/8 + 1/9 + 1/10
```

The numerators in the above representation of a fuzzy set are referred to as **grades of membership**.

The membership grade of an element *x* in a fuzzy set *A* is written 𝝻<sub>*A*</sub>(*x*) or A(*x*).

### Properties of Fuzzy Sets:

1. A fuzzy set *A* is considered equal to a fuzzy set *B*, if and only if:  
𝝻<sub>*A*</sub>(*x*) = 𝝻<sub>*B*</sub>(*x*).  

2. Let *X* and *Y* be fuzzy sets defined in the same universal space *U*. *X* is a subset of *Y* if and only if: For every *u* in the set *U* we have *X*(*u*) ≤ *Y*(*u*).

3. The **Cardinality** (or 'Sigma Count') of a fuzzy set *A* is given: CARD<sub>*A*</sub>=𝝻<sub>*A*</sub>(*x*<sub>1</sub>)+𝝻<sub>*A*</sub>(*x*<sub>2</sub>)+...+𝝻<sub>*A*</sub>(*x*<sub>n</sub>).

4. A fuzzy set *A* is empty if and only if 𝝻<sub>*A*</sub>(*x*)=0 for all *x* ∊ *X*.

5. An **Alpha-cut** (or 'A-level set') of a fuzzy set *A*⊂*X* is an ordinary set *A*<sub>𝜶</sub>⊂*X* such that *A*<sub>𝜶</sub>={*x*∊*X*;𝝻<sub>*A*</sub>(*x*)≥𝜶}.

A **Normal** fuzzy set *A* is a fuzzy set where there exists at least one element *x*∊*A* such that 𝝻<sub>*A*</sub>(*x*)=1.

A **Subnormal** fuzzy set is a fuzzy set that is not normal.

The **Height** of a fuzzy subset *A* is the largest membership grade of an element in *A*.

The **Support** of a fuzzy set *A*⊆*X* is the crisp subset of *X* whose elements all have non-zero membership grades in *A*.

The **Core** of a fuzzy set *A*⊆*X* is the crisp subset of *X* whose elements all have membership grades of 1 in *A*.

The **Universe of Discourse** is the range of all possible values for an input to a fuzzy system.

The **Crossover Point** of a fuzzy set is the element at which its membership function is 0.5.

A **Fuzzy Singleton** is a fuzzy set whose support is a single point in U with a membership function of one.

### Fuzzy Set Operations

1. The **Complement**, *cA*, of a fuzzy set *A* is: 𝝻<sub>*cA*</sub>(*x*)=1-𝝻<sub>*A*</sub>(*x*).

2. The **Union** of fuzzy subsets, A and B, of the set X is the set C, where 𝝻<sub>*C*</sub>(*x*<sub>i</sub>)=MAX(𝝻<sub>*A*</sub>(*x*),𝝻<sub>*B*</sub>(*x*)) for all *x*∊*X*.

3. The **Intersection** of fuzzy subsets, A and B, of the set X is the set C, where 𝝻<sub>*C*</sub>(*x*<sub>i</sub>)=MIN(𝝻<sub>*A*</sub>(*x*),𝝻<sub>*B*</sub>(*x*)) for all *x*∊*X*.

4. **Concentration** is an operation that reduces volume. In terms of fuzzy set theory, performing concentration on a fuzzy set *A*⊆*X* can involve creating a fuzzy set *B*⊆*A* where 𝝻<sub>*B*</sub>(*x*) = (𝝻<sub>*A*</sub>(*x*))<sup>𝜶</sup>, given that 𝜶≥1.

5. **Dilation** is an operation that makes things wider. In terms of fuzzy set theory, performing dilation on a fuzzy set *A*⊆*X* can involve creating a fuzzy set *B*⊇*A* where 𝝻<sub>*B*</sub>(*x*) = (𝝻<sub>*A*</sub>(*x*))<sup>𝜶</sup>, given that 𝜶≤1.

6. The **Level Set** operation involves: If we have a set *A*⊆*X*, we can define a new set *F* such that 𝝻<sub>*F*</sub>(*x*)=𝜶(𝝻<sub>*A*</sub>(*x*)) for all *x*∊*X*, given 0≤𝜶≤1.

Things might be easier to comprehend having read that Concentration and Dilation are the same operation, **Exponentiation**, except that 𝜶 is greater than or less than 1.

In most cases, the intersection of a fuzzy subset and its complement is not the null set.

<TODO: Should I put notes on different membership function types here? Or is that trivial information?>

The **Cross Product** (or *Cartesian Product*) of *A*⊆*X* and *B*⊆*Y* is denoted as *T*=*A*x*B*, and is given: 𝝻<sub>*T*</sub>(*x*,*y*)=MIN[𝝻<sub>*A*</sub>(*x*)𝝻<sub>*B*</sub>(*y*)].

Cross products facilitate the mapping of fuzzy subsets that belong to disparate quantities or observations.

A **Fuzzy Patch** is defined by a fuzzy rule: a patch is a mapping of two membership functions.

A rule in a fuzzy controller's ruleset generates the product of the input & output fuzzy sets.

**Primary Membership Terms**, are those such as *fat*, *weird* & *nice* (𝝻<sub>*fat*</sub>,𝝻<sub>*weird*</sub> & 𝝻<sub>*nice*</sub>), whereas terms such as *very fat*, *more or less weird* & *not nice* ((𝝻<sub>*fat*</sub>)<sup>2</sup>,(𝝻<sub>*weird*</sub>))<sup>1/2</sup> & (1-𝝻<sub>*nice*</sub>)) are **Non-Primary Membership Functions** as they can be made up from other terms.

The **Base Variable** of a fuzzy set e.g. *Young*, is the parameter type that the membership function is applied to e.g. *Age*.

## Knowledge Representation & Reasoning

**Fuzzification** is the mapping of information onto the term-set of a linguistic variable.

**Inference** is the invoking of rules in a knowledge base systematically to determine which rules are fired and to what degree.

**Composition** is an averaging procedure used to compute the effectiveness of each rule.

**Defuzzification** is the process of converting fuzzy values onto crisp numbers.

A **Knowledge Based** expert system is a computer program which, with its associated data, embodies organised knowledge concerning some specific area of human activity.

A **Production System** is a knowledge representation based on condition-action pairs, called production rules or just productions of the form "If this condition occurs, then do this action".

A **Fuzzy Knowledge-Based System** is a knowledge-based system that performs approximate reasoning.

A fuzzy knowledge base comprises vague facts and vague rules, such as *X* is 𝝻<sub>*x*</sub> or IF *X* is 𝝻<sub>*x*</sub> THEN *Y* is 𝝻<sub>*y*</sub>).






/
