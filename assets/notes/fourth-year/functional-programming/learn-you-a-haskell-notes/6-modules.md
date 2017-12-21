
*This is part of a [series of notes](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md) taken from [Learn You a Haskell](http://www.learnyouahaskell.com).*

## Modules

### Loading Modules

A Haskell Module is a collection of relation functions, types and typeclasses.

A Haskell program is a collection of modules where the main module loads up the other modules and then uses the functions defined in them to do something.

The syntax for importing a Haskell module is `import <module name>`.

Module imports have to be done before defining any functions in a Haskell script.

When you import a module, all of its exports become available in the global namespace.

To selectively import from a module: `import <module name> (<export name, export name)`

Qualified imports are used to stop name clashes:  
`import qualified Data.List` or `import qualified Data.List as M`

### Data.List

`intersperse` takes an element and a list and then puts that element in between each pair of elements in the list:  
```haskell  
ghci> intersperse '.' "MONKEY"  
"M.O.N.K.E.Y"  
```

`intercalate` takes a list of lists and a list. It then inserts that list in between all those lists and then flattens the result:  
```haskell  
ghci> intercalate " " ["hey","there","guys"]  
"hey there guys"
```

`transpose` transposes a list of lists.

The result of a fold is also called a *thunk*.

`foldl'` and `foldl1` are strict versions of `foldl` & `foldl1`.

`concat` flattens a list of lists into a list of elements. (It only removes one level of nesting.)

`concatMap` is like performing `map` and then `concat` on the result.

`and` takes a list of Boolean values and returns `True` if they are all true.

`or` takes a list of Boolean values and returns `True` if any of them are true.

`any` and `all` take a predicate and then check if any or all of the elements in a list satisfy the predicate.

... Don't have time to go over the functions of every module ...












































/
