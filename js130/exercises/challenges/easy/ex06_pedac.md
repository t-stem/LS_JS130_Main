The Greek mathematician Nicomachus devised a classification scheme for natural numbers (1, 2, 3, ...), identifying each as belonging uniquely to the categories of abundant, perfect, or deficient based on a comparison between the number and the sum of its positive divisors (the numbers that can be evenly divided into the target number with no remainder, excluding the number itself). For instance, the positive divisors of 15 are 1, 3, and 5. This sum is known as the Aliquot sum.

Perfect numbers have an Aliquot sum that is equal to the original number.
Abundant numbers have an Aliquot sum that is greater than the original number.
Deficient numbers have an Aliquot sum that is less than the original number.

Examples:

6 is a perfect number since its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
28 is a perfect number since its divisors are 1, 2, 4, 7, and 14 and 1 + 2 + 4 + 7 + 14 = 28.
15 is a deficient number since its divisors are 1, 3, and 5 and 1 + 3 + 5 = 9 which is less than 15.
24 is an abundant number since its divisors are 1, 2, 3, 4, 6, 8, and 12 and 1 + 2 + 3 + 4 + 6 + 8 + 12 = 36 which is greater than 24.
Prime numbers 7, 13, etc. are always deficient since their only divisor is 1.
Write a program that can tell whether a number is perfect, abundant, or deficient.

PEDAC

# PROBLEM
## Inputs
- integer: inputInt

## Outputs
- string: either
  - perfect if inputInt has an Aliquot sum that is equal to the original number
  - abundant if inputInt has an Aliquot sum that is greater than the original number
  - deficient if inputInt has an Aliquot sum that is less than the original number

## Explicit rules
- Aliquot sum of inputInt: sum of its positive divisors (the numbers that can be evenly divided into the target number with no remainder, excluding the number itself)

## Implicit rules
-

## Questions
-

# EXAMPLES/TEST CASES


# DATA STRUCTURES
- [divisors]
- 

# ALGORITHM
- IF inputInt < 0
  RAISE error

- SET aliquotSum = calcAliquot(inputInt)

- IF aliquotSum > inputInt
  RETURN 'abundant'

- IF aliquotSum < inputInt
  RETURN 'deficient'

- RETURN 'perfect'

calcAliquot
- get the divisors
- LOOP through all positive ints smaller than inputInt
  IF currInt divides evenly into inputInt
    APPEND to divisors
- RETURN sum of divisors

# CODE