
# CS4012 Topics in Functional Programming

## Notes

1. Introduction
2. Parallelism
3. Monads
4. Embedded Domain Specific Languages
5. Monad Transformers
6. Concurrency
7. Implementing Type Inference
8. Advanced Type Systems
9. GUIs in Threepenny, & Arrows

## Resources
* [Notes taken from 'Learn You a Haskell'](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md)
* All questions from past papers in one document (TODO)
* Solutions to the above document (TODO)

## "Must Knows" (Put together by Sean McGroarty)

**Types:**  
* Phantom Types
* GADTs
* Dependant Types
* Existential Types

**Ts:**  
* StateT
* WriterT
* ErrorT
* ReaderT
* MaybeT

**Questions:**  
* An explanation of Lift
* Why can IO not be transformer?
* Discuss the relation of Functor, Applicative & Monad
* 'Applicative Functors compose, and Monads do not...''
* Create a channel from MVars
* Discuss STM and its limitations
* Why no IO inside STM? How does STM prevent you from using IO inside it? ("Short answer is Its a own monad with no transformer defined. Since monads are not naturally composable it cant be done")
* Compare and contrast 'par' 'seq'
