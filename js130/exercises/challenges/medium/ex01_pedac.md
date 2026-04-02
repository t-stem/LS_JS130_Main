The diamond exercise takes as its input a letter, and outputs it in a diamond shape. Given a letter, it prints a diamond starting with 'A', with the supplied letter at the widest point.

The first row contains one 'A'.
The last row contains one 'A'.
All rows, except the first and last, have exactly two identical letters.
The diamond is horizontally symmetric.
The diamond is vertically symmetric.
The diamond has a square shape (width equals height).
The letters form a diamond shape.
The top half has the letters in ascending order.
The bottom half has the letters in descending order.
The four corners (containing the spaces) are triangles.
Examples

Diamond for letter 'A':

A


Diamond for letter 'C':


    A levelIndex = 0, levelWidth = 1, insideSpaces = 0, outsideSpaces = 0
   B B levelIndex = 1, levelWidth = 3, insideSpaces = 1, outsideSpaces = 0
  C   C levelIndex = 2, levelWidth = 5, insideSpaces = 3, outsideSpaces = 0
 D     D levelIndex = 3, levelWidth = 7, insideSpaces = 5, outsideSpaces = 0
E       E levelIndex = 4, levelWidth = 9, insideSpaces = 7, outsideSpaces = 0
 D     D 
  C   C 
   B B 
    A 



PEDAC

# PROBLEM
## Inputs
- string char: letter alphabet

## Outputs
- diamond shape starting in A ending in A 

## Explicit rules
- 

## Implicit rules
- diamondWidht = indexAlphabet * 2 + 1
- spaces at widest point - 0
  * every narrower step -> outsideSpaces += 2
- insideSpaces = diamondWidth - outsideSpaces - 2

## Questions
-

# EXAMPLES/TEST CASES


# DATA STRUCTURES
-[alphabet]
-[lineChars]

# ALGORITHM
- SET alphabet = string with all alphabetic chars
- SET charIndex = index of char in alphabet

- IF charIndex = 0
  PRINT char
  RETURN

- SET diamondWidth = charIndex * 2 + 1
- SET upperTriangle = []

WHILE levelIndex <= charIndex
- SET levelWidth = levelIndex * 2 + 1
- SET insideSpaces = levelWidth - 2 when levelIndex > 1, otherwise 0
- SET outsideSpaces = (diamondWidth - levelWidth) / 2
- IF index = 0
    ADD outsideSpaces + alphabet[levelIndex] + outsideSpaces TO upperTriangle
  ELSE
    ADD outsideSpaces + alphabet[levelIndex] + insideSpaces + alphabet[levelIndex] + outsideSpaces TO upperTriangle

- SET lowerTriangle = upperTriagle without last line and then reversed

- SET diamondArr = CONCAT upperTriangle and lowerTriangle
- SET diamondStr = JOIN diamondArr with new line
- RETURN diamondStr





    


# CODE