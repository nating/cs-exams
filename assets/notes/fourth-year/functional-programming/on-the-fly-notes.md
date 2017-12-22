
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
