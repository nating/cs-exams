*These notes are based on slides by [François Pitié](https://francois.pitie.net/) that can be found [here](https://github.com/frcs/EE4C16/blob/master/handouts/handout-03-classic-classifiers.pdf)*

# Classic Classifiers

**K-Nearest Neighbours** is a classic machine learning technique where, for an input *x*, you retrieve the k-nearest neighbours in the training data and return the average of the corresponding *y* values.

**Decision Trees** is a classic machine learning technique where each node of a tree of decisions is associated with a region of the input space. Each input is mapped to a value by following these nodes in the tree to a leaf.

**Support Vector Machines** (SVMs) is a classic machine learning technique that is like logistic regression, except that instead of the loss function being based on cross entropy, it is based on the *Hinge Loss* function.

A vague explanation of SVM is that it seeks to find the hyperplane that maximises the separation between two classes.  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/svm-example.png" width="400"/>

The **Kernel Trick** is a solution for introducing functions to transform features into so that they are optimal for linearly separating the classes without having to compute the functions.

The **Radial Basis Function** (RBF) is one of the most commonly used Kernels.

**Kernel Methods** are algorithms that can avail of the kernel trick, such as SVM and Logistic Regression.
