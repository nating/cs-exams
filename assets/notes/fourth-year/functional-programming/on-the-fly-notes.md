
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
