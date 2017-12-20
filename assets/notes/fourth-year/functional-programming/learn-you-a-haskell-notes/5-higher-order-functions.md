
*This is part of a [series of notes](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md) taken from [Learn You a Haskell](http://www.learnyouahaskell.com).*

## Higher order functions

A **Higher Order Function** is a function that takes a function as a parameter, or returns a function (or both).

### Curried functions

Every function in Haskell officially only takes one parameter. Every function that takes multiple parameters is a *curried function*.

*Aside from the fact of what is 'official', generally you should probably talk about functions having multiple parameters if they conceptually really do*

The following two expressions are equal:  
```haskell  
max 4 5 == (max 4) 5
```

In Haskell, putting a space between two things is **function application**.

In Haskell, if one calls a function with too few parameters, one gets back a **partially applied** function.

**'Section'**-ing an infix function is a way of partially applying them. This is done by surrounding the infix function with parentheses and only supplying a parameter on one side:  
```haskell  
divideByTen :: (Floating a) => a -> a
divideByTen = (/10)
```

A catch with sections is that for convenience sake in Haskell, `(-4)` means negative four. So to section subtraction, you should use the `subtract` function instead of the `-` symbol.

### Some higher-orderism is in order

### Maps and filters

`map` takes a function and a list and applies that function to every element in the list, producing a new list.






















/
