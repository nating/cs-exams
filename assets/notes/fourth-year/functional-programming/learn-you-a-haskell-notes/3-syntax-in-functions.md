
*This is part of a [series of notes](https://github.com/nating/cs-exams/blob/master/assets/notes/fourth-year/functional-programming/learn-you-a-haskell-notes/README.md) taken from [Learn You a Haskell](http://www.learnyouahaskell.com).*

## Syntax in Functions

### Pattern Matching

This is how you throw a runtime error in Haskell:
```haskell
error "you just tried to do something you shouldn't have"
```

The pattern `xs@(x:y:ys)` will match exactly the same thing as `x:y:ys` but you can easily get the whole list via `xs` instead of repeating yourself by typing out `x:y:ys` in the function body again.

In Haskell, you can not use `++` in pattern matches.

### Guards, guards!

Guards are used to see if a property of a value is true or false.

Here is an example of the use of guards in Haskell:  
```haskell  
bmiTell :: (RealFloat a) => a -> String  
bmiTell bmi  
    | bmi <= 18.5 = "You're underweight, you emo, you!"  
    | bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= 30.0 = "You're fat! Lose some weight, fatty!"  
    | otherwise   = "You're a whale, congratulations!"  
```

The last guard is usually `otherwise` which is the same as `True`.

Functions can be defined using backticks:  
```haskell
myCompare :: (Ord a) => a -> a -> Ordering  
a `myCompare` b  
    | a > b     = GT  
    | a == b    = EQ  
    | otherwise = LT  
```

### Where!?

The use of `where` can allow a program not to have to computer a value over and over again:  
```haskell
bmiTell :: (RealFloat a) => a -> a -> String  
bmiTell weight height  
    | bmi <= 18.5 = "You're underweight, you emo, you!"  
    | bmi <= 25.0 = "You're supposedly normal. Pffft, I bet you're ugly!"  
    | bmi <= 30.0 = "You're fat! Lose some weight, fatty!"  
    | otherwise   = "You're a whale, congratulations!"  
    where bmi = weight / height ^ 2
```

It is possible to pattern match inside 'where' blocks:  
```haskell  
initials :: String -> String -> String  
initials firstname lastname = [f] ++ ". " ++ [l] ++ "."  
    where (f:_) = firstname  
          (l:_) = lastname
```

It is also possible to define functions inside of 'where' blocks:  
```haskell  
calcBmis :: (RealFloat a) => [(a, a)] -> [a]  
calcBmis xs = [bmi w h | (w, h) <- xs]  
    where bmi weight height = weight / height ^ 2  
```

### Let it be

A 'let' block is written like: `let <bindings> in <expression>`:  
```hasksell  
cylinder :: (RealFloat a) => a -> a -> a  
cylinder r h =
    let sideArea = 2 * pi * r * h  
        topArea = pi * r ^2  
    in  sideArea + 2 * topArea  
```

The 'let' blocks can be used inline. Each expression in the 'let' block can not be lined up together when used inline though, so the ';' is used instead:  
```haskell  
let a = 100; b = 200; c = 300 in a*b*c
```

'let' bindings can not be used across multiple guards, like 'where' bindings can.

### Case expressions

The following two blocks of code do the same thing:  
```haskell  
head' :: [a] -> a  
head' [] = error "No head for empty lists!"  
head' (x:_) = x  
```  
```hasekell  
head' :: [a] -> a  
head' xs = case xs of [] -> error "No head for empty lists!"  
                      (x:_) -> x  
```
