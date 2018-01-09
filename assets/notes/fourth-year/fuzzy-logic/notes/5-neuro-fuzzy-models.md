
## Neuro-Fuzzy Models

A fuzzy inference system can be shown to be functionally equivalent to a class of adaptive networks.

Using adaptive networks, an algorithm can be used to learn the values of the parameters for a fuzzy inference system.

In Fuzzy Logic, rules are fired if the aggregation of the antecedents’ membership functions is non-zero. Therefore, the **threshold value** is any number greater than zero.

(TODO: maybe slide 13 is important?)

Any logical function can be duplicated by a network of all-or-none neurons.

An **Adaptive Network** is a network structure whose overall input-output behaviour is determined by a collection of modifiable parameters:

* A network typically comprises a set of nodes connected by directed links.

* Each node performs a static node function on its incoming signals to generate a single node output.

* Each link specifies the direction of signal flow from one node to another.

Neural Networks 'learn' by adapting in accordance with a training regimen.

The three types of training regimen for neural networks are **Supervised**, **Un-Supervised** and **Reinforcement** ( or *'Graded'*).

A supervised learning regimen involves the network being supplied with a sequence of desirable input output pairs.

In unsupervised learning, there are no examples for the network of what the outputs should be.

In reinforcement learning the network receives only a score or grade that tells it how well it has done over a sequence of input/output trials.

The focus in this module is on supervised learning with networks that use the back-propogation algorithm and comprise hidden layers between the input and output layers.

A **Perceptron** is a computer model devised to simulate the ability of the brain to recognise and discriminate.

**Rosenblatt's Perceptron** has the following properties:
* It can receive inputs from other neurons.
* The 'recipient' neuron can integrate the input.
* The connection weights are modelled:
  * If x<sub>i</sub> caused the perceptron to fire: w<sub>i</sub> will be positive.
  * If x<sub>i</sub> does not cause the perceptron to fire: w<sub>i</sub> will be negative.
* The output function of the neuron is all or none.
* Learning is a process of modifying the weights.

A **Logic Gate** is a digital circuit that implements an elementary logical operation. It has one or more inputs and only one output.

A **Digital Circuit** is a circuit that responds to discrete values of input and produces discrete values of output.

**Logic Circuits** are designed to perform a particular function based on AND, OR and NOT.

A **Logic Element** is part of a logic circuit, such as a logic gate.

**NOT**  

A|X
---|---
0|1
1|0

**AND**  

A|B|X
---|---|---
0|0|0
0|1|0
1|0|0
1|1|1

**OR**  

A|B|X
---|---|---
0|0|0
0|1|1
1|0|1
1|1|1

**NAND**  

A|B|X
---|---|---
0|0|1
0|1|1
1|0|1
1|1|0

**NOR**  

A|B|X
---|---|---
0|0|1
0|1|0
1|0|0
1|1|0

**XOR**  

A|B|X
---|---|---
0|0|0
0|1|1
1|0|1
1|1|0

Frank Rosenblatt was an American psychologist notable in the field of Artificial Intelligence.

Rosenblatt proved that for two linearly separable classes, the perceptron algorithm converges  and positions the decision surface in the form of a hyperplane between the two classes.

The single layer perceptron can not perform the XOR operation, because a single layer perceptron can only classify two classes if the are sufficiently separated from each other so that the decision surface consists of a hyperplane.

The **XOR Problem** is that the simple perceptron can not learn a linear decision surface to separate the different outputs because no such decision surface exists.

The **XOR Solution** involves using two perceptrons, where the output of the first is the input of the second. If the first perceptron sees both inputs as '1' it sends an inhibitory signal to the second perceptron to output '0'. The second perceptron outputs '1' if either of the inputs are '1'.

The weight adjusting from the *"perceptron learning algorithm"* can adjust weights between inputs and outputs, but not *between* perceptrons. This means that for the multilayer perceptron designed for solving the XOR problem, the back-propogation algorithm needs to be used.

/

These notes go as far as slide 90 in the Neuro-Fuzzy Model Slides.
