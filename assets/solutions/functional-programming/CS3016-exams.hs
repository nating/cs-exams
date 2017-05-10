{-
	Introduction to Functional Programming CS3016 Exam Haskell Code
	Geoffrey Natin 10/5/17 17:38

	This file contains attempts at the questions
	from the CS3016 Exams from 2013-2016.

	There are also tests which can be run to verify
	that the code works, if you are skeptical x
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
init (x:xs) = x : Main.init xs

--Q1c)
last :: [a] -> a
last [x] = x
last (x:xs) = Main.last xs

--1d)
span :: (a -> Bool) -> [a] -> ([a],[a])
span p [] = ([],[])
span p (x:xs) 	| p x = (x:a,b)
				        | otherwise = ([],x:xs)
				        where (a,b) = Main.span p xs

--1e)
(!!) :: [a] -> Int -> a
(!!) (x:xs) 0 = x
(!!) (x:xs) n = (Main.!!) xs $ n - 1

--1f)
fold1 :: (a -> a -> a) -> [a] -> a
fold1 _ [x] = x
fold1 op (x:xs) = op x (Main.fold1 op xs)


--------------------------------2015-----------------------------------------

------------Q1--------------

--1a)
repeat :: a -> [a]
repeat x = x : Main.repeat x

--1b)
replicate :: Int -> a -> [a]
replicate 0 _ = []
replicate n x = x : Main.replicate (n-1) x

--1c)
concat :: [[a]] -> [a]
concat [] = []
concat (x:xs) = x Main.++ (Main.concat xs)

--1d)
zip :: [a] -> [b] -> [(a,b)]
zip [] [] = []
zip (x:xs) (y:ys) = (x,y) : (Main.zip xs ys) 

--1e)
unzip :: [(a,b)] -> ([a],[b])
unzip [] = ([],[])
unzip ((x,y):xs) = (x:a,y:b)
					where (a,b) = Main.unzip xs
--1f)
minimum :: (Ord a) => [a] -> a
minimum [x] = x
minimum (x:y:xs)   | x < y = Main.minimum (x:xs)
					         | otherwise = Main.minimum (y:xs)


--------------------------------2014-----------------------------------------

------------Q1--------------

--1a)
tail :: [a] -> [a]
tail (x:xs) = xs

--1b)
(++) :: [a] -> [a] -> [a]
(++) [] xs = xs
(++) (x:xs) ys = x : ((Main.++) xs ys)

--1c)
init2 :: [a] -> [a]
init2 [x] = []
init2 (x:xs) = x : Main.init2 xs

--1d)
break :: (a -> Bool) -> [a] -> ([a],[a])
break p (x:xs)	| p x = ([],xs)
				        | otherwise = (x:a,b)
				        where (a,b) = Main.break p xs

--1e)
reverse :: [a] -> [a]
reverse [] = []
reverse (x:xs) = Main.reverse xs Main.++ [x]

--1f)
maximum :: Ord a => [a] -> a
maximum [x] = x
maximum (x:y:xs)  | x > y = Main.maximum (x:xs)
                  | otherwise =  Main.maximum (y:xs)


--------------------------------2013-----------------------------------------

------------Q1--------------

--1a)
null :: [a] -> Bool
null [] = True
null _ = False

{- Commented as is duplicate

--1b)
(+) :: [a] -> [a] -> [a]
(++) [] xs = xs
(++) xs [] = xs
(++) (x:xs) ys = x : (Main.++) xs ys
-}

--1c)
last2 :: [a] -> a
last2 [x] = x
last2 (x:xs) = Main.last2 xs

--1d)
dropWhile :: (a -> Bool) -> [a] -> [a]
dropWhile _ [] = []
dropeWhile p (x:xs)	| p x = Main.dropWhile p xs
					| otherwise = xs

--1e)
filter :: (a -> Bool) -> [a] -> [a]
filter _ [] = []
filter p (x:xs)	| p x = (x : (Main.filter p xs))
				        | otherwise = (Main.filter p xs)

--1f)
foldr1 :: (a -> a -> a) -> [a] -> a
foldr1 _ [x] = x
foldr1 op (x:xs) = op x (Main.foldr1 op xs)


-------------------------------Tests-------------------------------------- 

---          (Not finished !! Not done making compile yet...)

my_array = [1,2,3,4,5,6,7] :: [Integer]
my_array2 = [1,2,3] :: [Integer]
my_array3 = [4,5,6,7] :: [Integer]
my_array4 = [1,2,3,4,5,6] :: [Integer]
my_seven = 7 :: Integer
my_four = 4 :: Integer
my_twentyeight = 28 :: Integer
my_three = 3 :: Integer
my_one = 1 :: Integer

lessThanFour :: (Ord a, Num a) => a -> Bool
lessThanFour x  | (x < 4) = True
		            | otherwise  = False

greaterThanFour :: (Ord a, Num a) => a -> Bool
greaterThanFour x 	| (x > 4) = True
		                | otherwise = False

add :: (Num a) => a -> a -> a
add x y	= (x + y)

test_2016_1a = TestCase (assertEqual "for 2016 1a): (head [1,2,3,4,5,6,7])," my_one (Main.head my_array))
test_2016_1b = TestCase (assertEqual "for 2016 1b): (init [1,2,3,4,5,6,7])," my_array4 (Main.init my_array))
test_2016_1c = TestCase (assertEqual "for 2016 1c): (last [1,2,3,4,5,6,7])," my_seven (Main.last my_array))
test_2016_1d = TestCase (assertEqual "for 2016 1d): (span [1,2,3,4,5,6,7])," (my_array2,my_array3) (Main.span lessThanFour my_array))
test_2016_1e = TestCase (assertEqual "for 2016 1e): ((!!) [1,2,3,4,5,6,7] 3)," my_four ((Main.!!) my_array 3))
test_2016_1f = TestCase (assertEqual "for 2016 1f): (fold1 add [1,2,3,4,5,6,7])," my_twentyeight (Main.fold1 add my_array))

test_2015_1b = TestCase (assertEqual "for 2015 1b): (replicate 3 'A')," ['A','A','A'] (Main.replicate 3 'A'))
test_2015_1c = TestCase (assertEqual "for 2015 1c): (concat [[1,2],[3]])," my_array2 (Main.concat [[1,2],[3]]))
test_2015_1d = TestCase (assertEqual "for 2015 1d): (zip [1,2] ['a','b'])," ([(1,'a'),(2,'b')]) (Main.zip [1,2] ['a','b']))
test_2015_1e = TestCase (assertEqual "for 2015 1e): (unzip [(1,4),(2,5),(3,6)])," 4 (([1,2,3],[4,5,6])))
test_2015_1f = TestCase (assertEqual "for 2015 1f): (minimum [1,2,3,4,5,6,7])," 1 (Main.minimum my_array))

test_2014_1a = TestCase (assertEqual "for 2014 1a): (tail [1,2,3,4,5,6,7])," 7 (Main.tail my_array))
test_2014_1b = TestCase (assertEqual "for 2014 1b): ((++) [1,1,1] [1,2,3,4,5,6,7])," [1,1,1,1,2,3,4,5,6] ((Main.++) [1,1,1] my_array))
test_2014_1c = TestCase (assertEqual "for 2014 1c): (init2 [1,2,3,4,5,6,7])," [1,2,3,4,5,6] (Main.init2 my_array))
test_2014_1d = TestCase (assertEqual "for 2014 1d): (break greaterThanFour [1,2,3,4,5,6,7])," ([1,2,3,4],[5,6,7]) (Main.break greaterThanFour [1,2,3,4,5,6,7]))
test_2014_1e = TestCase (assertEqual "for 2014 1e): (reverse 3 [1,2,3,4,5,6,7])," [7,6,5,4,3,2,1] (Main.reverse my_array))
test_2014_1f = TestCase (assertEqual "for 2014 1f): (maximum [1,2,3,4,5,6,7])," 7 (Main.maximum my_array))

test_2013_1a = TestCase (assertEqual "for 2013 1a): (null [1,2,3,4,5,6,7])," False (Main.null my_array))
test_2013_1ai = TestCase (assertEqual "for 2013 1ai): (null [])," True (Main.null []))
test_2013_1b = TestCase (assertEqual "for 2013 1b): ((++) [1,1,1] [1,2,3,4,5,6,7])," [1,1,1,1,2,3,4,5,6] ((Main.++) [1,1,1] my_array))
test_2013_1c = TestCase (assertEqual "for 2013 1c): (last2 [1,2,3,4,5,6,7])," 7 (Main.last2 my_array))
test_2013_1d = TestCase (assertEqual "for 2013 1d): (dropWhile lessThanFour [1,2,3,4,5,6,7])," [4,5,6,7] (Main.dropWhile lessThanFour my_array))
test_2013_1e = TestCase (assertEqual "for 2013 1e): (filter lessThanFour [1,2,3,4,5,6,7])," [1,2,3] (Main.filter lessThanFour my_array))
test_2013_1f = TestCase (assertEqual "for 2013 1f): (foldr1 add [1,2,3,4,5,6,7])," 28 (Main.foldr1 add my_array))


tests =  [testGroup "\n2016" 
      [ TestCase "1a" $ test_2016_1a
      , TestCase "1b" $ test_2016_1b
      , TestCase "1c" $ test_2016_1c
      , TestCase "1d" $ test_2016_1d
      , TestCase "1e" $ test_2016_1e
      , TestCase "1f" $ test_2016_1f
      ]
    , testGroup "2015" 
      [ TestCase "1b" $ test_2016_1b
      , TestCase "1c" $ test_2016_1c
      , TestCase "1d" $ test_2016_1d
      , TestCase "1e" $ test_2016_1e
      , TestCase "1f" $ test_2016_1f
      ]
    , testGroup "2014" 
      [ TestCase "1a" $ test_2016_1a
      , TestCase "1b" $ test_2016_1b
      , TestCase "1c" $ test_2016_1c
      , TestCase "1d" $ test_2016_1d
      , TestCase "1e" $ test_2016_1e
      , TestCase "1f" $ test_2016_1f
      ]
    , testGroup "2013" 
      [ TestCase "1ai" $ test_2016_1a
      , TestCase "1ai" $ test_2016_1ai
      , TestCase "1b" $ test_2016_1b
      , TestCase "1c" $ test_2016_1c
      , TestCase "1d" $ test_2016_1d
      , TestCase "1e" $ test_2016_1e
      , TestCase "1f" $ test_2016_1f
      ]
    ]