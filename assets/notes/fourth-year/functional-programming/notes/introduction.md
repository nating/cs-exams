
# Introduction

## Course Overview

In this course, we will be exploring:
* Programming with parallelism
* Modern typing
  * Hindley-Milner type inference
  * Dependent types (with Agda and Idris)
* Functional programming techniques
  * Domain specific languages
  * GADT’s
  * Monad transformers
  * Arrows
  * Reactive functional programming

## Haskell Refresher

An expression is said to be **referentially transparent** if it can be replaced with its corresponding value without changing the program's behaviour.

People describe Haskell as a **[pure](https://stackoverflow.com/questions/11607927/what-does-pure-mean-in-the-context-of-programming-languages-and-paradigms)** language because of its referential transparency.

**Lazy Evaluation**, is an evaluation strategy which delays the evaluation of an expression until its value is needed. This is the opposite of **Strict** evaluation.

Haskell is a lazy language.

Types for functions can be inferred or supplied explicitly.

This is how you define a **Type** in haskell:
```haskell
data Tree a = Empty
              | Leaf a
              | Branch (Tree a) (Tree a)
```

When the `IO` action is run, anything could happen.

The `IO String` value is a first-class value in Haskell. It is the ay that it is used that causes the actions.

IO actions are combined using *monad combinators*:  
```haskell  
class Monad m where  
    (>>=)  ::  m a -> (a -> m b) -> m b
    (>>)   ::  m a -> m b -> m b
    return ::  a -> m a
    fail   :: String -> m a
```

The `>>=` operator means `bind`
