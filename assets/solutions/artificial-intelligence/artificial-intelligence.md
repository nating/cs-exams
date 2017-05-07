# Artificial Intelligence Question Compilation

(Courtesy of [Sean McGroarty](https://github.com/McGizzle))

## Q1 (theory parts)

### 1a)
What is the Symbol System Hypothesis & what does it have to do with (✝)?
- The hypothesis states that all reasoning can be expressed as symbol manipulation. This relates to (✝), as an intelligent agent can manipulate symbols. Therefore based on the hypothesis it is proposed that an intelligent agent can reason.

### 1b)
What does search have to do with non-determinism?
- When searching a graph node by node, the next node in the graph is non-deterministic. There is no way of telling what the next node traversed will be.

### 1c) 
State precisely the sense in which Cantors theorem says that
the set of infinite bit strings cannot be searched.
- There are too many infinite bit strings to be searched one at a time. There is no function from the natural numbers onto the set of infinite bit strings.

### 1d)
What is the problem SAT of Boolean satisfiability, and what does it have to do with finite bit strings?
- SAT is the problem of seeing whether a boolean expression is satisfiable. A boolean expression, with a finite amount of boolean variables a,b,c,d,e,f.... is like a finite bit string, where each variable can take one of two values. The SAT problem is finding out if there is a combination of values these variables can take (like a combination of 1s and 0s) so that the expression will be satisfied.

### 1e)
How is exponentiation relevant to SAT and polynomial time computability?
- The process for finding assignments which satisfy an expression takes exponential time, as there are 2<sup>n</sup> combinations of values for the boolean variables.

### 1f)
What is a binary decision diagram (BDD), and what does it mean to be ordered and reduced?
- A BDD is a rooted, acyclic graph with terminal nodes of the values 0/1. Branching depends on the boolean variable value of the node.
- Ordered: A nodes variable index must be less than that of any of its children.
- Reduced: High and Low children of a node cannot be the same. They must be opposite in order to arrive at a terminal node.

### 1g)
Give an ordered and reduced tree for the following Boolean expression: 
```
( x ∨ y ) ∧ ( x' ∨ y' )
```

### 1h)
What is a Turing Machine and what does it have to do with (✝)?
- A Turing machine is a hypothetical machine that can determine a result from a set of input variables. A Turing machine can be seen as an agent acting intelligently in its environment, thinking of the set of input variables as its environment and its action as the result.

### 1i)
What is the Halting Problem and how is it relevant to (✝)?
- The Halting Problem states: HP(P,D) := (1 if P halts on D, 0 otherwise)
- There exists no program (HP) that given another program (P) and data (D) as input that will output 1 if the program halts or 0 otherwise.
- An Intelligent Agent which is given a goal, may take forever to determine whether that goal can be satisfied.

### 1j)
What is SAT and how is it relevant to (✝)?
- SAT is the problem of seeing whether a boolean expression is satisfiable. 
- The agent might be tasked with the computation. Boolean expressions are ways of expressing the computation of the agent.

### 1k)
What is P vs NP and how is SAT relevant to it?
- P are all the problems a determinisitic Turing machine can solve in polynomial time.
- NP are are the problems a non-deterministic Turing machine can solve in polynomial time.

- Checking whether an assignment satisfies a boolean expression is a P problem.
- Finding the assignments which satisfy the boolean expression is a NP problem.

### 1l)
What is the Church-Turing thesis and what does it add to Symbol-System hypothesis in addressing (✝)?
- The thesis states that any symbol manipulation can be carried out by a Turing machine. This means that a Turing machine can be seen as an intelligent agent, since it can manipulate symbols, and therefore reason.

### 1m)
What are the ingredients of a CSP?
1) Variables
2) Domain
3) Constraints

### 1n)
What is the generate and test approach in CSP?
- This is a brute force approach in which every possible solution is generated. Then these solutions are all tested to see if they satisfy the criteria.

### 1o)
What does it mean for A`*` to be admissable, and what three things are necessary for A`*` to be admissable?
- If there in a solution, A* will find the optimal solution.
1) Branching factor must be finite
2) Arc costs must be bounded above 0
3) The heuristic must be an underestimate 

### 1p)
When is an ordered BDD satisfiable?
- Precisely when it is not equal to 0.

### 1q)
What do non-determinism and search have to do with (✝)?
- Intelligent action comes with the need to make a choice based on a heuristic.
- When searching, the intelligent agent will need to be non-determinsitc in its approach and make choices based on the heuristic.

### 1r)
What is non-determinism?
- A nondeterministic algorithm is an algorithm that, even for the same input, can exhibit different behaviors on different runs.
