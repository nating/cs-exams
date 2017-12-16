
*This is part of a [series of notes](https://github.com/nating/trinity-cs-website/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md) taken from [Learn You a Haskell](http://www.learnyouahaskell.com).*

## Types and TypeClasses

### Believe the type

In GHCI, typing `:t` followed by any expression tells you the type of the expression.

In Haskell, `::` is read as: _"Has the type of"_.

In Haskell, explicit types are always denoted with the first letter in capital case.

It is generally good practice to give functions explicit type definitions in Haskell.

The type `[Char]` is synonymous with `String`.

Some common types include `Int`, `Integer`, `Char`, `Float`, `Double`, `Bool`.

The difference between `Int` and `Integer` is that `Integer` is not bounded by -2147483647 to 2147483647. `Int` is more efficient though.

A `Char` is denoted by a character in single quotes.

An empty tuple, `()`, is also a type.

### Type Variables

The lowercase single characters found in function type declarations are called **Type Variables**. In the following function, `a` can be of any type:  
```haskell
head :: [a] -> a
```

Functions that have type variables are called **Polymorphic Functions**.

### Type Classes 101

If a type is a part of a **typeclass**, that means that it supports and implements the behaviour the typeclass describes.

If a function is comprised only of special characters, it's considered an infix function by default.

To use an infix function as a prefix one, it is surrounded by brackets:  
```haskell
(+) 3 2 == 5
```

Everything before `=>` in a function definition is called a **class constraint**. For example, the following function definition means that in the function `(==)`, the type `a` has to be of the class `Eq`:  
```haskell
(==) :: (Eq a) => a -> a -> Bool  
```

Members of the `Eq` typeclass implement the functions `==` & `/=`.

Members of the `Ord` typeclass implement the functions `<`,`>`,`<=` & `>=`

The function `compare` takes two `Ord`s and returns an `Ordering` (`GT`,`LT` or `EQ`).

Members of the `Show` typeclass can be presented as strings.

Members of `Read` can be read from a string using the function `read`.

Type annotations are a way of explicitly saying what the type of an expression should be, and are specified using `::`:  
```haskell
ghci> read "5" :: Int  
5  
ghci> read "5" :: Float  
5.0  
ghci> (read "5" :: Float) * 4  
20.0  
ghci> read "[1,2,3,4]" :: [Int]  
[1,2,3,4]  
```

Members of the `Enum` typeclass are sequentially ordered types. They can be used in list ranges.

Members of the `Bounded` typeclass have an upper and lower bound.

Members of the `Num` typeclass *"act like numbers"*.

The typeclass `Integral` only contains whole numbers, and the typeclass `Floating` only contains floating point numbers.
