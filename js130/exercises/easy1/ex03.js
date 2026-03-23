/*
The following list contains the names of individuals who are pioneers in the field of computing 
or that have had a significant influence on the field. 

The names are in an encrypted form, though, using a simple (and incredibly weak) form of encryption called Rot13.
Write a program that deciphers and prints each of these names.
*/
const names = Object.freeze([
"Nqn Ybirynpr",
"Tenpr Ubccre",
"Nqryr Tbyqfgvar",
"Nyna Ghevat",
"Puneyrf Onoontr",
"Noqhyynu Zhunzznq voa Zhfn ny-Xujnevmzv",
"Wbua Ngnanfbss",
"Ybvf Unvog",
"Pynhqr Funaaba",
"Fgrir Wbof",
"Ovyy Tngrf",
"Gvz Orearef-Yrr",
"Fgrir Jbmavnx",
"Xbaenq Mhfr",
"Fve Nagbal Ubner",
"Zneiva Zvafxl",
"Lhxvuveb Zngfhzbgb",
"Unllvz Fybavzfxv",
"Tregehqr Oynapu"
]);

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function decryptRot13(str) {
  let decrptyedStr = '';

  for (let char of str) {
    if (!alphabet.includes(char.toLowerCase())) {
      decrptyedStr += char;
      continue;
    }

    let decap = char.toLowerCase() !== char;

    if (decap) {
      char = char.toLowerCase();
    }

    let charIndex = alphabet.indexOf(char);
    let deltaIndex = charIndex < 13 ? 13 : -13;

    let decryptedChar = alphabet[charIndex + deltaIndex];
    
    if (decap) {
      decryptedChar = decryptedChar.toUpperCase();
    }

    decrptyedStr += decryptedChar;
  }

  return decrptyedStr;
}

function decryptNames(namesArr) {
  return namesArr.map(name => decryptRot13(name));
}

console.log(decryptNames(names));