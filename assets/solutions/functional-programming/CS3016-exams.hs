{-
	Introduction to Functional Programming CS3016 Exam Haskell Code
	Geoffrey Natin 10/5/17 17:38

	This file contains attempts at the questions
	from the CS3016 Exams from 2013-2016.

  These are 'attemps'. Who knows how many marks they would go for...
  (and don't say Andrew Butterfield!)
-}
import Test.HUnit

--------------------------------2016-----------------------------------------

------------Q1--------------

--Q1a)
head :: [a] -> a
head (x:xs) = x

--Q1b)
init :: [a] -> [a]
init [x] = []
init (x:xs) = x : init xs

--Q1c)
last :: [a] -> a
last [x] = x
last (x:xs) = last xs

--1d)
span :: (a -> Bool) -> [a] -> ([a],[a])
span p [] = ([],[])
span p (x:xs) 	| p x = (x:a,b)
				        | otherwise = ([],x:xs)
				        where (a,b) = span p xs

--1e)
(!!) :: [a] -> Int -> a
(!!) (x:xs) 0 = x
(!!) (x:xs) n = (!!) xs $ n - 1

--1f)
fold1 :: (a -> a -> a) -> [a] -> a
fold1 _ [x] = x
fold1 op (x:xs) = op x (fold1 op xs)


------------Q2--------------

--2a)
hof :: a -> (a->a->a) -> [a] -> a
hof x fx [] = x
hof x fx (y:ys) = fx y (hof fx x ys)

--2b)
f1 = hof 1 (*)
f2 = hof 0 f2x
      where f2x x y = (1+y)
f3 = hof 0 (+)
f4 = hof [] (++)
f5 = hof 0 f5x
      where f5x x y = (x*x)+y

--2c)
{-
    There is no pattern for a 'Many' tree with 'x < i'. So if you are 
    searching a node that isn't a leaf, there will be a runtime error
    if the node's integer is greater than the integer you are searching
    for. This means node's left branches are never traversed.

    There is no pattern for searching an empty tree, so there will be a
    runtime error if this is attempted.

    The only pattern provided for searching a leaf node is for the case
    that the integer of the leaf node is equal to 'x'. Any searching of
    a leaf node where this is not the case will result in a runtime
    error.
-}


------------Q3--------------

--3a)
eval :: Dict -> Expr -> Maybe Int
eval _ (K i) = Just i
eval d (V s) = lkp s d
eval d (Add e1 e2) = case (eval d e1,eval e2) of
                      (Nothing,_) -> Nothing
                      (_,Nothing) -> Nothing
                      (Just x, Just y) -> Just (x+y)
eval d (Dvd e1 e2) = case(eval d e1,eval d e2) of
                      (Nothing,_) -> Nothing
                      (_,Nothing) -> Nothing
                      (Just x, Just y)
                      | y == 0
                      | otherwise = Just (div x y)
eval d (Let v e1 e2) = case (eval d e1) of
                      | Nothing -> Nothing
                      | Just i -> eval (ins v i d) e2

--3b)
{-
  Won't attempt to draw a tree in a .hs file. 
-}

--------------------------------2015-----------------------------------------

------------Q1--------------

--1a)
repeat :: a -> [a]
repeat x = x : repeat x

--1b)
replicate :: Int -> a -> [a]
replicate 0 _ = []
replicate n x = x : replicate (n-1) x

--1c)
concat :: [[a]] -> [a]
concat [] = []
concat (x:xs) = x ++ (concat xs)

--1d)
zip :: [a] -> [b] -> [(a,b)]
zip [] [] = []
zip (x:xs) (y:ys) = (x,y) : (zip xs ys) 

--1e)
unzip :: [(a,b)] -> ([a],[b])
unzip [] = ([],[])
unzip ((x,y):xs) = (x:a,y:b)
					where (a,b) = unzip xs
--1f)
minimum :: (Ord a) => [a] -> a
minimum [x] = x
minimum (x:y:xs)   | x < y = minimum (x:xs)
					         | otherwise = minimum (y:xs)


------------Q2--------------

--2a)
hof :: (a -> a -> b) -> [a] -> [a] -> [b]
hof _ [] _ = []
hof _ _ [] = []
hof fx (x:xs) (y:ys) = (fx x y) : (hof fx xs ys)

--2b)
{-
  hof :: (a -> b -> c) -> [a] -> [b] -> [c]
-}

--2c)
f1 x y = hof (*) x y
f2 x y = hof (+) x y
f3 x y = hof f3b x y
          where f3b x y = (x,y)
f4 x y = hof f4b x y
          where f4b x y = (y,x)
f5 x y = hof f5b x y
          where f5b x y = x

--2d)
{-
  Yes, hof is provided in the prelude under the name 'zipWith'.
-}


------------Q3--------------

--3a)
{-
  The 'lookup' function creates a hash of the string being searched
  for. 
  It then finds the bucket in the table who's key is the hash
  of the string being searched for. 
  It then finds the key-value pair in bucket who's key is the string
  that is being searched for.
  The value of this key-value pair is what is then returned.

  The function 'lookup' will produce an error if there is no bucket
  in 'table' who's key is the hash of the string being searched for.

  If a bucket who's key is the hash of the string being searched for
  is found in the table, then there will be an error if that bucket
  does not contain a key-value pair who's key is string being
  searched for.
-}

--3b)
lookup :: String -> (HashTable String String) -> Maybe String
lookup str table = 
  let hashValue = hash str
      bucketTuple = find (==hashValue) . fst) table
      valueTuple = case bucketTuple of
                        Nothing -> Nothing
                        Just (_,bucket) -> find (==str . fst) bucket
      value = case valueTuple of
                    Nothing -> Nothing
                    Just (_,v) -> Jsut v
  in value

--3c)
type Err = String
lookup2 :: String -> (HashTable String String) -> Either Err String
lookup2 str table = 
  let hashValue = hash str
      bucketTuple = find (==hashValue) . fst) table
      valueTuple = case bucketTuple of
                        Nothing -> Left "No Buckets present in hashtable for hash of string."
                        Just (_,bucket) -> Right (find (==str . fst) bucket)
      value = case valueTuple of
                    Left err -> err
                    Right Nothing -> Left "Key not found in bucket for hash of string."
                    Right (Just (_,v) -> Right v
  in value



--------------------------------2014-----------------------------------------

------------Q1--------------

--1a)
tail :: [a] -> [a]
tail (x:xs) = xs

--1b)
(++) :: [a] -> [a] -> [a]
(++) [] xs = xs
(++) (x:xs) ys = x : ((++) xs ys)

--1c)
init2 :: [a] -> [a]
init2 [x] = []
init2 (x:xs) = x : init2 xs

--1d)
break :: (a -> Bool) -> [a] -> ([a],[a])
break p (x:xs)	| p x = ([],xs)
				        | otherwise = (x:a,b)
				        where (a,b) = break p xs

--1e)
reverse :: [a] -> [a]
reverse [] = []
reverse (x:xs) = reverse xs ++ [x]

--1f)
maximum :: Ord a => [a] -> a
maximum [x] = x
maximum (x:y:xs)  | x > y = maximum (x:xs)
                  | otherwise =  maximum (y:xs)


------------Q2--------------

--2a)
hof :: (a -> b -> a) -> a -> [b] -> a
hof _ e [] = e
hof fx e (x:xs) = hof fx (fx e x) xs

--2b)
f1 e xs = hof (*) e xs 
f2 e xs = hof f2b e xs
          where f2b x y = (x+1) 
f3 e xs = hof (+) e xs 
f4 e xs = hof (++) e xs 
f5 e xs = hof f5b e xs
          where f5b x y = (x+y*y)

--2c)
{-
  Yes, hof is provided in the prelude under the name 'foldl'.
-}


------------Q3--------------

--3a)
{-
  In the first pattern, there is no case for when 'x < i', so
  searching a non-leaf node with a value bigger than x will 
  cause a run-time error.
  The searches of non-leaf nodes have no case that leads to
  the traversal of the left branch. The searching of a tree
  only ever deepens on the right hand side of the tree.

  There is no pattern for searching an Empty tree. Any attempt
  to search an Empty tree will result in a runtime error.

  The only case given for the pattern searching a leaf node is
  the case where 'x == i'. Any attempt to search a node where
  its value is not equal to x will result in a runtime error. 
-}

--3b)
search :: Tree -> Int -> Maybe String
search Empty -> Nothing
search x (Many left i s right)
  | x == i = Just s
  | x > i = search x right
  | x < i = search x left
search x (Single i s)
  | x == i = Just s

--3c)



--------------------------------2013-----------------------------------------

------------Q1--------------

--1a)
null :: [a] -> Bool
null [] = True
null _ = False

{- Commented as is duplicate in file
--1b)
(+) :: [a] -> [a] -> [a]
(++) [] xs = xs
(++) xs [] = xs
(++) (x:xs) ys = x : (++) xs ys
-}

--1c)
last2 :: [a] -> a
last2 [x] = x
last2 (x:xs) = last2 xs

--1d)
dropWhile :: (a -> Bool) -> [a] -> [a]
dropWhile _ [] = []
dropeWhile p (x:xs)	| p x = dropWhile p xs
					| otherwise = xs

--1e)
filter :: (a -> Bool) -> [a] -> [a]
filter _ [] = []
filter p (x:xs)	| p x = (x : (filter p xs))
				        | otherwise = (filter p xs)

--1f)
foldr1 :: (a -> a -> a) -> [a] -> a
foldr1 _ [x] = x
foldr1 op (x:xs) = op x (foldr1 op xs)


------------Q2--------------

--2a)
hof :: (a -> b -> b) -> b -> [a] -> b
hof _ e [] = e
hof fx e (x:xs) = fx x (hof fx e xs)

--2b)
f1 xs = hof (*) 1 xs
f2 xs = hof f2b 0 xs
        where f2b x y = (1+y)
f3 xs = hof (+) 0 xs
f4 xs = hof (++) [] xs
f5 xs = hof f5b 0 xs
        where f5b x y = (x*x+y)

--2c)
{-
  Yes, hof is provided by the prelude under the name 'foldr'.
-}








