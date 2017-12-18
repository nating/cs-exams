*These notes are based on slides by [François Pitié](https://francois.pitie.net/) that can be found [here](https://github.com/frcs/EE4C16/blob/master/handouts/handout-05-deep-feedforward-networks.pdf)*

# Deep Feedforward Neural Networks

Neural Networks are called **Networks** because they can be associated with a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) describing how the functions are composed together. Here is an example of what the network of operations could look like for logistic regression:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/logistic-regression-network.png" width="400"/>

Each node in the graph of a neural network is called a **Unit**.

The word **Neural** in Neural Networks comes from how the units in the graphs are like neurons.

Each **Neuron** unit in a neural network takes a linear combination of its inputs and applies a non-linear function to them.

An **Activation Function** is the function applied to the linear combination of inputs at each neural unit.

Activation functions don't have parameters.

The most frequently used activation functions are **ReLu**, **sigmoid** & **tanh**:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/relu.png" width="200"/>
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/sigmoid.png" width="200"/>
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/tanh.png" width="200"/>

A **Dense Layer** is a layer where every neuron in the layer is an input to every neuron in the next layer.

A **Feedforward Neural Network** is a neural network where connections between units do not form a cycle.

A **Hidden** unit is a node that is not an input or output node.

A **Deep Feedforward Neural Network** is a feedforward neural network with at least two hidden layers.

The **Universal Approximation Theorem** says that a single hidden layer neural network with a linear output unit can approximate any continuous function arbitrarily well, given enough hidden units.

Recent work in Machine Learning has shown that deeper neural networks require far fewer parameters than a single layer network approximating the same function.

The **Architecture** of a neural network is primarily concerned with how many units it should have and how these units should be connected to each other.

Neural Networks **evaluate** output(s) from inputs.

The graph of operations for training is the same as the graph for evaluation but with all output units connected to a loss function unit:  
<img src="https://github.com/nating/EE4C16/blob/master/assets/notes-images/training-operations-graph.png" width="400"/>

**Forward Propagation** is the process of evaluation in a neural network, working from the inputs across each layer to the output.

**Back Propagation** is a way of computing the gradient for gradient descent to optimise weights in a neural network.

< TODO Explain how back propagation works >

Back propagation has a worst case time complexity of *O(number_of_units<sup>2</sup>)*, but in practice is usually *O(number_of_units)*.

**Vanishing Gradients** is a difficulty with back propagation that arises from the gradient of a unit in the network being near zero.

**Mini-Batch Gradient Descent** is a gradient descent algorithm where the gradient is computed over *batches* of the training data. So the gradient used in the descent algorithm is only averaged over a batch size of *n* observations.

**Stochastic Gradient Descent** (SGD) is mini-batch gradient descent where the batch size is 1.

Smaller batch sizes in gradient descent means that the computed gradient is noisier and likely to change from batch to batch. This randomness can help escape from local minimums but can also lead to poor convergence.

Optimisation Strategies and Regularisation Techniques can help convergence of gradient descent.

An **Epoch** is a measure of the number of times all the training vectors are used once to update the weights.

After one epoch, the gradient descent will have done *n*/batch_size steps.

Usually after each epoch, the samples are shuffled so as to avoid cyclical repetitions.

Sometimes the learning rate **Decays** over time because the steepest descent of the gradient can take many changes of direction.

**Momentum Update** is a technique for averaging out the gradient direction in gradient descent over time.

**Adam** & **Nadam** are techniques for gradient descent that are known to perform well.

**L2 Regularisation** is the Tikhonov regularisation of least squares.

**L1 Regularisation** is another common form of regularisation.

A **Max Norm Constraint** enforces an upper bound on the magnitude of the weights by making sure *w<sub>i</sub>* has a maximum value.

**Dropout** is a regularisation technique where units in the neural network are are randomly switched off (their outputs set to zero).

**Layer Noise** is another term for dropout, as it can be looked at as adding a *multiplicative noise* to the layers.
