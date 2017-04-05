# Statistic Notes
---

# About the Module
|Sections|Topics|
|---|---|
|**Random events**|Counting, Events, Axioms of Probability, Bayes & Independence|
|**Random variables**|Discrete RVs, Mean and Variance, Correlation & Conditional Expectation|
|**Inequalities and Laws of large numbers**|Markov, Chebyshev, Chernoff bounds, Sample mean, Weak law of large numbers, Central limit theorem, Confidence intervals & Bootstrapping|
|**Statistical models**|Continuous random variables, Logistic regression & Least squares|

___

# Random Events

## Counting
Probability is the likelyhood of something happening.

The **Sum Rule of Counting** is that the likelyhood of an outcome in either A or B happening when no outcome is in both, is the number of outcomes in A added to the number of outcomes in B.

The **Product Rule of Counting** is that the likelyhood of a pair of outcomes from A and B happening when no outcome is in both, is the product of the number of outcomes in A and the number of outcomes in B.

The **Inclusing Exclusion Principle** is that the number of possible outcomes from A and B when some outcomes may be in either is the sum of the number of outcomes in A and the number of outcomes in B, minus the number of outcomes that are in both A and B.

## Permutations
The number of permutations of the word pepper, is 6! divided by 3!x2!x1!  
_(there are 3 'p's, 2 'e's & 1 'r')_

There are n(n − 1)(n − 2)· · ·(n − k − 1) to select k elements from n elements when order matters.

There are n! / (n - k)!k! ways to select k elements from n elements when order does not matter.

The number of combinations of k elements _(order does not matter)_ from n elements is 'n *choose* k'.

Power set of S: the set of all subsets of S, including the empty set
and S itself. Sometimes written 2<sup>s</sup>.

## Axioms of Probability
The **Sample Space** is the set of all possible outcomes for an experiment.

An **Event** is a subset of the sample space of an experiment.

The Axioms of Probability are:  

 1. 0 ≤ P(E) ≤ 1
 2. P(S) = 1 _(where S is the sample space)_
 3. If E and F are mutually exclusive then P(E ∪ F) = P(E) + P(F).

## Conditional Probability and Bae's Rule
**Conditional probability** is the probability that event E occurs given that event F has already occurred. Call this “conditioning” on F. Written as P(E|F).

**Bayes Rule** is P(E|F) = P(F|E)P(E) / P(F)

## Independance
Two events E and F are **Independent** if P(E ∩ F) = P(E)P(F).

Three events E, F and G are independent if they are pairwise
independent **and** triply independent.

Independent events can become dependent when we condition on additional information. Also dependent events can become independent.

Two events E and F are called **Conditionally Independent** given G if: P(E ∩ F|G) = P(E|G)P(F|G)

---

# Random Variables

## Random Variables
An **Indicator Random Variable** takes value 1 if event E occurs and 0 if event E does not occur.

A **Random Variable** is a function that maps from the sample space S to the real line ℝ.  
(Write X(ω), where ω ⊂ S is an event.)

A random variable X(ω) can often be written X for convenience sake.

A **Discrete Random Variable** is a random variable that can only take discrete values. Otherwise it is a **Continuous Random Variable**.

**Marginalisation:**  
If a discrete random variable Y takes values on {y<sub>0</sub>, y<sub>1</sub>, ..., ym}.  
Then P(X=x) = The sum of all P(X=x and Y=y<sub>i</sub>) from i=0 to i=m.

Two discrete random variables X and Y are independent if  
P(X=x and Y=y) = P(X=x)P(Y=y) _(for all x and y)_.

The **Probability Mass Function** (PMF) of X is:  
P(X=x<sub>1</sub>), P(X=x<sub>2</sub>), . . . , P(X=x<sub>n</sub>)

The **Cumulative Distribution Function** (CDF) of a random variable X is defined as:  
F(a) = P(X ≤ a) _(where a is real-valued)_.


## Bernoulli & Binomial RVs
A **Bernoulli Random Variable** is an indicator random variable where:  
P(X=1)=p and P(X=0)=p-1

A **Binomial Random Variable** is the sum of n Bernoulli Random Variables.

## Mean & Variance
The **Expected Value** of discrete random variable X taking values in {x<sub>0</sub>, x<sub>1</sub>, ..., x<sub>n</sub>} is defined to be: E[X] = the sum of x<sub>i</sub>P(X = x<sub>i</sub>) from i=0 to i=n.

The Expected Value is also referred to as the **mean** or the **average**.

The **Linearity of Expected value** is:  
For any random variable X and constants a and b:  
E[aX + b] = aE[X] + b

The **Variance** of an RV X with a mean µ is Var(X) = E[(X − µ)<sup>2</sup>].

Standard deviation is square root of variance p sqroot(Var(X)).


## Correlation & Conditional Expectation
