*These notes are based on slides by [François Pitié](https://francois.pitie.net/) that can be found [here](https://github.com/frcs/EE4C16/blob/master/handouts/handout-01-linear-regression.pdf)*

# Least Squares (*Linear Regression*)

The aim of machine learning is to approximate models.

**Linear Regression** is a model that assumes a linear relationship between input variables and a single output variable.

**Least Squares** is a type of supervised learning, that falls under the category of linear regression.

Least Squares works well with continuous data, but not categorical data.

A **Feature** is an individual measurable property or characteristic of a phenomenon being observed.

An **Observation** is a vector of features.

In Linear Regression:
* The **Input** is a vector of *p* features, *(x<sub>1</sub>,x<sub>2</sub>,...,x<sub>p</sub>)*.
* The **Output** is a scalar, *y*.
* The **Model** is a linear relationship linking the output, *y*, with the input feature vector, *(x<sub>1</sub>,x<sub>2</sub>,...,x<sub>p</sub>)*: *y=w<sub>0</sub>+w<sub>1</sub>x<sub>1</sub>+w<sub>2</sub>x<sub>2</sub>+w<sub>3</sub>x<sub>3</sub>+...+w<sub>p</sub>x<sub>p</sub>*

In practice, you have *n* observations for which you have extracted *p* features.

The model is a linear combination of all the features plus a constant term which can be called *the bias* (w<sub>0</sub>). Each *w* represents a *model parameter*. f(x<sub>1</sub>,x<sub>2</sub>,...,x<sub>p</sub>) = w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> +...+ w<sub>p</sub>x<sub>p</sub> + w<sub>0</sub>


The model can not explain everything, so an error term, *𝜀*, is introduced:  
y<sub>1</sub> = w<sub>0</sub>+w<sub>1</sub>x<sub>11</sub>+w<sub>2</sub>x<sub>12</sub>+w<sub>3</sub>x<sub>13</sub>+...+w<sub>p</sub>x<sub>1p</sub>+*𝜀*<sub>1</sub>  
y<sub>2</sub> = w<sub>0</sub>+w<sub>1</sub>x<sub>21</sub>+w<sub>2</sub>x<sub>22</sub>+w<sub>3</sub>x<sub>23</sub>+...+w<sub>p</sub>x<sub>2p</sub>+*𝜀*<sub>2</sub>  
y<sub>3</sub> = w<sub>0</sub>+w<sub>1</sub>x<sub>31</sub>+w<sub>2</sub>x<sub>32</sub>+w<sub>3</sub>x<sub>33</sub>+...+w<sub>p</sub>x<sub>3p</sub>+*𝜀*<sub>3</sub>  
...  
y<sub>p</sub> = w<sub>0</sub>+w<sub>1</sub>x<sub>p1</sub>+w<sub>2</sub>x<sub>p2</sub>+w<sub>3</sub>x<sub>p3</sub>+...+w<sub>p</sub>x<sub>pp</sub>+*𝜀*<sub>p</sub>  

The error is a vector, but the error terms are combined to a single value called the **Loss Function** (or *Error function / Objective function*).

To calculate the Loss Function in Linear Regression, the **Mean Squared Error** (MSE) (The average of [predicted outcome - actual outcome]<sup>2</sup> over all observations) is used:  

<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/mean-squared-error-algorithm.png" width="500"/>

The ideal model has the minimum error, so differentiation is used to calculate the parameters that give the lowest error.

< TODO Some of the maths has been skipped over here in the notes. >

The observations and model create a system of linear equations that can be represented using matrix notations.

**Notation Conventions**:
* Cursive letters are used for scalars.
* Upright letters are used for vectors.
* Capital letters are used for matrices.

The **Design Matrix** is the matrix of all the observations. Each column contains all the instances for a particular feature.

< TODO take not of the definition of the *Gradient*  "Matrix notation for the partial derivative is called the gradient"-me >

< TODO Add in how to derive the gradient in matrix notations, as it is marked as **important** >

< TODO Define the normal equation >

**Underfitting** is when a model is too simple. It occurs when the MSE is too high, there are not enough features or the model is too regularised:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/underfitting-example.png" width="400">

**Overfitting** is when a model corresponds too closely to a particular set of data. In this case, the model is too complex. A symptom of overfitting is a very low MSE, and you will see there is an error in the model when adding data far from the points in the training set:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/overfitting-example.png" width="400">

The first course of action to combat overfitting is to add more data to the training set. Another way to combat overfitting is *regularisation*.

[**Regularisation**](https://www.quora.com/What-is-regularization-in-machine-learning) is a technique to be applied when creating a model to favour weights closer to zero.

Regularisation biases the estimation, so it is avoided in practice. The more data you have, the less likely it is you will have to use regularisation.

**Tikhonov Regularisation** is a natural regularisation technique that minimises a modified expression from the MSE:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/tikhonov-expression.png" width="500">

The **Maximum Likelihood** estimate of *w*, is the value of *w* that maximises the likelihood of *y* given *X* and *w*. i.e. It is the value of *w* that maximises the likelihood *p(y|X,w)*.

If the error is assumed to be Gaussian, then the Least Square Estimate is the Maximum Likelihood.

A **Singular Matrix** is a matrix that doesn't have an inverse.
