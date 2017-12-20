
*This is part of a [series of notes](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md) taken from [Learn You a Haskell](http://www.learnyouahaskell.com).*

## Recursion

### Maximum awesome

The function `maximum` returns the maximum element from a list of instances of the `Ord` typeclass.

### A few more recursive functions

`Num` is not a subclass of `Ord`, so both class constraints must be specified if doing addition or subtraction and also comparison.
