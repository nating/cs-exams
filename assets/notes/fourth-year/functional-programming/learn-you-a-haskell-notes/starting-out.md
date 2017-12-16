
*This is part of a [series of notes](https://github.com/nating/trinity-cs-website/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md) taken from [Learn You a Haskell](http://www.learnyouahaskell.com).*

## Starting Out

`+` only works on Numbers.

`==` only works on things of the same type.

Functions are generally prefix in Haskell, and of the form:  
```
functionName param0 param1 ...
```

Function application has a higher precedence than operations such as `*` or `+`.

Functions can be made infix by surrounding them with backticks:  
```haskell
93 `div` 3
```

### Baby's First Functions

In Haskell, basic functions that are obviously correct are created and combined to create more complex functions.

Functions do not have to be defined in a particular order in Haskell.

*"An expression is basically a piece of code that returns a value."*

If statements in Haskell look like this:  
```haskell
doubleSmallNumber x = if x > 100  
                        then x  
                        else x*2   
```
or  
```haskell
doubleSmallNumber x = if x > 100 then x else x*2  
```

The `else` part of an if statement in Haskell is required.

The `'` character is valid in function names, and is used at the end of a function name to denote a strict version of the function or a slightly modified version of the function.

A function with out any parameters is called a '**definition**'.

Function names in Haskell begin with lowercase.

### An Intro To Lists

A **homogenous** data structure stores data which is all of the same type.

Lists in Haskell are homogenous data structures.

In Haskell, a `String` is a list of `Char`s.

The `++` operator concatenates two lists in Haskell.

When concatenating something to the end of a list with the `++` operator, the entire first list is walked through. So this can be slow:  
```haskell
['1','2','3'] ++ [4]
```
Adding an element to the start of a list can be done with the `:` operator in Haskell, and is instantaneous:  
```haskell
4 : ['1','2','3']
```

In Haskell, `[1,2,3]` is actually just syntactic sugar for `1:2:3:[]`.

In Haskell, lists can be indexed with the `!!` operator:  
```haskell
"Steve Buscemi" !! 6 == 'B'
```

Haskell indexes from 0.

Lists can be compared if their elements can be compared. When using <, <=, > and >= to compare lists, they are compared in lexicographical order. First the heads are compared. If they are equal then the second elements are compared and so on:  
```haskell
[3,2,1] > [2,1,0] == True

[3,2,1] > [2,10,100] == True  

[3,4,2] > [3,4] == True

[3,4,2] > [2,4] == True

[3,4,2] == [3,4,2] == True
```

#### Some List Functions:

`head` takes a list and returns its head.

`tail` takes a list and returns its tail.

`last` takes a list and returns its last element.

`init` takes a list and returns everything except its last element.

`length` takes a list and returns its length.

`null` checks if a list is empty.

`reverse` reverses a list.

`take` extracts that n elements from the beginning of the list.

`drop` drops n elements from the beginning of a list.

`maximum` takes a list of elements that can be ordered and returns the largest element.

`minimum` takes a list of elements that can be ordered and returns the smallest element.

`sum` takes a list of numbers and returns their sum.

`product` takes a list of numbers and returns their product.

`elem` checks that x is an element of list y.

### Texas Ranges

Ranges are a way of making lists that are arithmetic sequences of elements that can be enumerated:  
```haskell
[1..20] == [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
[3,6..20] == [3,6,9,12,15,18]
```

*"My advice is not to use floating point numbers in list ranges."* This is because they yield *"Funky"* results.

Ranges can be used to create infinite lists by not specifying an upper limit.

`cycle` takes a list and cycles it into an infinite list:  
```haskell
take 10 (cycle [1,2,3]) == [1,2,3,1,2,3,1,2,3,1]
```

`repeat` takes an element and produces an infinite list of that element.

`replicate` creates a list of length x of element y.

### I'm a list comprehension

A **list comprehension** is a more complex way of specifying a set.

List comprehensions are a list with are made up of output functions and predicates before and after the pipe inside square brackets:  
```haskell
[x*2 | x <- [1..10]] == [2,4,6,8,10,12,14,16,18,20]
```

List comprehensions can have multiple predicates:  
```haskell
[ x | x <- [50..100], x `mod` 7 == 3]  == [52,59,66,73,80,87,94]  
```

**Filtering** is the term used for cutting down the elements of a list using predicates.

The output function of list comprehensions can contain if statements:  
```haskell  
boomBangs xs = [ if x < 10 then "BOOM!" else "BANG!" | x <- xs, odd x]  
```

List comprehensions can draw from several lists:  
```haskell
[ x*y | x <- [2,5,10], y <- [8,10,11]]  
```

Nested list comprehensions can be used on lists of lists etc.:  
```haskell
let xxs = [[1,3,5,2,3,1,2,4,5],[1,2,3,4,5,6,7,8,9],[1,2,4,2,1,6,3,1,3,2,3,6]]
[ [ x | x <- xs, even x ] | xs <- xxs] == [[2,2,4],[2,4,6,8],[2,4,2,6,2,6]]  
```

### Tuples

Tuples are non-homogenous structures that contain multiple elements.

Tuple's types are inferred from the types of their elements. A good application of them is having a list of name & age pairs. Each element of a list must be of the same type, and the elements of this list can be of type `(String,Int)`.

Like lists, tuples can be compared with each other if their components can be compared.

A **pair** is a tuple with two elements.

`fst` takes a **pair** and returns its first component.

`snd` takes a **pair** and returns its second component.

`fst` & `snd` only work on **pairs**.

`zip` takes two lists and then zips them together into one list by joining the matching elements into pairs:  
```haskell
zip [1 .. 5] ["one", "two", "three", "four", "five"] == [(1,"one"),(2,"two"),(3,"three"),(4,"four"),(5,"five")]
```

If `zip` is applied to lists of different lengths, the longer list gets cut off to match the length of the shorter one.
