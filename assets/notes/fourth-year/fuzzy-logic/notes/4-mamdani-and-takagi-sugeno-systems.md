
## Mamdani & Takagi-Sugeno Systems

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
**Mamdani**: <code>IF X is <sub>X</sub>(X) THEN Y is <sub>𝝁</xub>(Y)</code>  
**TSK**: <code>IF X is <sub>X</sub>(X) THEN Y = f(X)</code>  

For a **SISO** system, the values of the constants that relate the inputs to the outputs are:  
**Mamdani**: <code><sub>X</sub>(X)</code> & <code><sub>𝝁</xub>(Y)</code> are membership functions of the terms X & Y.
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
