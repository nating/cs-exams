*These notes are based on slides by [François Pitié](https://francois.pitie.net/) that can be found [here](https://github.com/frcs/EE4C16/blob/master/handouts/handout-02-logistic-regression.pdf)*

# Logistic regression

**Logistic Regression** is a regression model where the dependent variable is categorical.

Logistic Regression does more than linear regression, as it considers the case where variables are binary.

< TODO Define what a general linear model is "A family of classifiers"-Francois >

In a general linear model, we try to find a linear combination of the data *x<sup>T</sup>y* so that the sign of *x<sup>T</sup>y* tells us about the outcome *y*: *y=[x<sup>T</sup>y+𝜀>0]*

The quantity *x<sup>T</sup>y*, which is a scalar value, is called the **Risk Score**.

In logistic regression the error, *𝜀*, is assumed to follow a logistic distribution and the risk score is called the **logit**.

In **Probit regression** the error, *𝜀*, is assumed to follow a normal distribution and the risk score is called the **probit**.

For the purposes of this course, there is not much difference between *logistic* and *logit* regression. The main difference is that logistic regression is numerically easier to solve.

A **Cumulative Distribution Function** is a function whose value is the probability that a corresponding continuous random variable has a value less than or equal to the argument of the function.

The Cumulative Distribution Function is also called the **Logistic Function** or **Sigmoid**.

In linear regression, the model is a direct prediction of the outcome. In logistic regression, the model is an estimation of the likelihood of the outcome.

```
Linear Regression: *"What is the Value of y given x?"*
Logistic Regression: *"What is the probability that y=1, given x?"*
```

**Cross Entropy** is the error function (*loss function*) one needs to minimise to get the maximum likelihood in logistic regression.

**Gradient Descent** is a general method for nonlinear optimisation and which will be at the core of neural networks optimisation.

The idea of gradient descent is that some starting values of *w* are input. Then each *w<sub>i</sub>* is updated to be one step in the direction of the steepest slope again and again until a local minima is found.

The **Learning Rate** is the size of the step in gradient descent and it is represented by *𝝶*.  

**One-vs-All** is an strategy for training binary classifiers in a problem with more than two classes. For each class *k*, a single binary classifier is trained (*y=1* for *k* and *y=0* for every other class).

**Multinomial Logistic Regression** is an extension of binomial logistic regression to allow for a dependent variable with more than two categories.
