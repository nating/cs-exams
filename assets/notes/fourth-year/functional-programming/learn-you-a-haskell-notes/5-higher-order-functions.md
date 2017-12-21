
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

`filter` is a function that takes a predicate and a list and then returns the list of elements that satisfy the predicate

The function `takeWhile` takes a predicate and a list and then returns the first elements of the list until the predicate doesn't hold true for one.

You can map functions that take two parameters across a single list of single elements and get a list of functions:  
```haskell  
map (*) [0..] == [(0*),(1*),(2*),(3*),(4*),(5*)...
```

### Lambdas

A Lambda looks like: `\` then parameters separated by spaces, then `->` and then the body of the function, all enclosed in parentheses.

Here is a simple (and unnecessary/stupid) example of a lambda:  
```haskell  
filter (\x -> x > 15) [19,23,4,1,67,39]
```

One can pattern match in lambdas, but only with one pattern for one parameter. If a pattern matching fails in a lambda, a runtime error occurs.

This is an illustration of currying that uses lambdas:  
```haskell  
addThree :: (Num a) => a -> a -> a -> a  
addThree x y z = x + y + z  
```  
is the same as...
```haskell  
addThree :: (Num a) => a -> a -> a -> a  
addThree = \x -> \y -> \z -> x + y + z  
```  

Here is a clever example of the coolness of lambdas:  
```haskell  
flip' :: (a -> b -> c) -> b -> a -> c  
flip' f = \x y -> f y x
```

### Only folds and horses

Folds are like 'map's except they reduce the list down to a single value.

A fold takes a binary function, an accumulator, and a list of elements to fold.

`foldl` folds a list starting the application of the accumulation to the element at the head of the list. The accumulator is the first argument of the binary function.

Generally, if you have a function like `foo a = bar b a`, you can rewrite it as `foo = bar b`, because of currying.

This is a genius example of a foldl with a lambda to produce the `elem` function:  
```haskell  
elem' :: (Eq a) => a -> [a] -> Bool  
elem' y ys = foldl (\acc x -> if x == y then True else acc) False ys
```

`foldr` folds a list starting the application of the accumulation to the element at the tail of the list. The accumulator is the second argument of the binary function.

Left folds do not work on infinite lists, whereas right folds do. (Starting at a particular index, it will reach the head of the list)

"Whenever you want to traverse a list to return something, chances are you want a fold."

The `foldl1` and `foldr1` work like `foldl` and `foldr`, but they assume the first (or last) element of the list to be the starting value and then start the fold with the element next to it. (they have no accumulator parameter)

`scanl` and `scanr` are like `foldl` and `foldr`, only they report all the intermediate accumulator states in the form of a list:  
```haskell  
scanl (+) 0 [3,5,2,1] == [0,3,8,10,11]
```

There are also `scanl1` & `scanr1` that correspond to `foldl1` & `foldr1`.

`filter` does not work on infinite lists, so one can use `takeWhile` instead.

### Function application with $

The `$` is called *function application*.

When a `$` is encountered, the expression on its right is applied as the parameter to the function on its left.

`$` allows one to get rid of parentheses when specifying the order functions are executed in, but also can be used to treat function application like any other function:  
```haskell  
ghci> map ($ 3) [(4+), (10*), (^2), sqrt]  
[7.0,30.0,9.0,1.7320508075688772]
```

### Function composition

The `.` operator performs function composition:  
```haskell  
(.) :: (b -> c) -> (a -> b) -> a -> c  
f . g = \x -> f (g x)
```

Function composition is a way of making more concise code than can be done with lambdas:  
```haskell  
map (\x -> negate (abs x)) [5,-3] == map (negate . abs) [5,-3]
```

The *'point free'* or *'pointless'* style of defining functions leaves the parameters out from either side of the `=`. (One can imagine how this can be done using partial application)
