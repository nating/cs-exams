
# Notes on the Fly! Going off the grid. Freestyle!


[.](https://www.schoolofhaskell.com/user/commercial/content/monad-transformers#lift-vs-liftio)  
In the following code snippet, `lift` puts the IO action `getLine` into the MaybeT transformer:  
```haskell
getPassword :: MaybeT IO String
getPassword = do
  password <- lift getLine
  guard (isValid password)
  return password
```

very good link for monad transformers: https://www.schoolofhaskell.com/user/commercial/content/monad-transformers#lift-vs-liftio

Parallelism is when tasks are executing at the exact same instance in time (i.e. on different cores etc.).

Concurrency doesn't necessarily mean tasks are running at the exact same time. (their instructions can be spliced by a round robin task manager etc.)

`par :: a -> b -> b` indicates that it may be beneficial to evaluate the first argument in parallel with the second. Returns the value of the second argument.

If you do not order your parameters properly when calling `par`, it may be disastrous (causing the program to slow down a lot). But you can specify what needs to be evaluated first by using `pseq`.

A type constructor is a Constructor with a type parameter: `Maybe a = Nothing | Just a` as opposed to `Maybe Int = Nothing | Just Int`.


The three Monad Identities:
* Left identity: `return a >>= f = f a`
* Right identity: `m >>= return = m`
* Associativity: `(m >>= f) >>= g = m >>= (\x -> f x >>= g)`
