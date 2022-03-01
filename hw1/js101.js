// 1. print numbers - write a function that prints a range of numbers given a start and end
// write the function with a while loop and then a for loop
// function printNumbers(startNum, endNum) {
//     let count = startNum;
//     if (startNum <= endNum) {
//         while (count <= endNum) {
//             console.log(count);
//             count++;
//         }
//     } else {
//         while (count >= endNum) {
//             console.log(count);
//             count--;
//         }
//     }
// }
// printNumbers(1, 10);
// printNumbers(1, -10);

// printNumbers using a for loop
// function printNumbers(startNum, endNum) {
//     if (startNum <= endNum) {
//         for (let num = startNum; num <= endNum; num++) {
//             console.log(num);
//         }
//     } else {
//         for (let num = startNum; num >= endNum; num--) {
//             console.log(num);
//         }
//     }
// }
// printNumbers(1, 10);
// printNumbers(1, -10);

// 2. print a square given the size of the square
// function printSquare(size) {
//     for (let i = 0; i < size; i++) {
//         let line = "";
//         for (let j = 0; j < size; j++) {
//             line += "*";
//         }
//         console.log(line);
//     }
// }
// printSquare(5);

// 3. print a hollow box given a width and height using dashes
// function printBox(width, height) {
//     for (let h = 0; h < height; h++) {
//         let line = "";
//         for (let w = 0; w < width; w++) {
//             if ((w === 0 || w === width - 1) && (h === 0 || h === height - 1)) line += " ";
//             else if (h === 0 || h === height - 1) line += "-";
//             else {
//                 if (w === 0 || w === width - 1) line += "|";
//                 else line += " ";
//             }
//         }
//         console.log(line);
//     }
// }
// printBox(6, 4);

// 4. print a banner given some text - the function should wrap a box around the text
// function printBanner(text) {
//     const border = new Array(text.length + 4).fill("-");
//     console.log(border.join(""));
//     console.log(`- ${text} -`);
//     console.log(border.join(""));
// }
// printBanner("Welcome to DigitalCrafts"); 

// 5. convert text to its leetspeak version by substituting various letters to numbers
// function leetspeak(string) {
//     let leetString = [];
//     for (let i = 0; i < string.length; i++) {
//         switch (string[i]) {
//             case "a" || "A":
//                 leetString.push(4);
//                 break;
//             case "e" || "E":
//                 leetString.push(3);
//                 break;
//             case "g" || "G":
//                 leetString.push(6);
//                 break;
//             case "i" || "I":
//                 leetString.push(1);
//                 break;
//             case "o" || "O":
//                 leetString.push(0);
//                 break;
//             case "s" || "S":
//                 leetString.push(5);
//                 break;
//             case "t" || "T":
//                 leetString.push(7);
//                 break;
//             default:
//                 leetString.push(string[i]);
//                 break;
//         }
//     }
//     return leetString.join("");
// }
// console.log(leetspeak("Leet"));


// better method for 5. using a translator map
// const translator = {
//     A: 4,
//     E: 3,
//     G: 6,
//     I: 1,
//     O: 0,
//     S: 5,
//     T: 7
// }

// function leet(string) {
//     const leetString = [];
//     for (const letter of string) {
//         if (letter.toUpperCase() in translator) {
//             leetString.push(translator[letter.toUpperCase()]);
//         } else {
//             leetString.push(letter);
//         }
//     }
//     return leetString.join("");
// }
// console.log(leet("Leet"));

// 6. long-long vowels - given a string, return a string with long vowels extended to length 5
// function longLongVowels(word) {
//     let newWord = []
//     for (let i = 0; i < word.length; i++) {
//         if (i < word.length - 1 && "aeoiu".includes(word[i])) {
//             if ("aeoiu".includes(word[i + 1])) {
//                 newWord.push(word[i], word[i], word[i], word[i], word[i]);
//             } else if (i < word.length - 2 && "aeoiu".includes(word[i + 2])) {
//                 newWord.push(word[i], word[i], word[i], word[i], word[i]);
//             } else newWord.push(word[i]);
//         } else newWord.push(word[i]);
//     }
//     return newWord.join("");
// }
// console.log(longLongVowels("Good"));
// console.log(longLongVowels("Cheese"));
// console.log(longLongVowels("Man"));

// 7. given an array of numbers return a new array containing only the positive values
// function positiveNums(array) {
//     newArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] >= 0) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }
// console.log(positiveNums([1, -3, 5, -3, 0]));
// console.log(positiveNums([1, 2, 3]));
// console.log(positiveNums([-1, -2, -3]));

// 8. caesar cipher - given a string and offset, return translated string
// function cipher(string, offset) {
//     let cipher = [];
//     for (let i = 0; i < string.length; i++) {
//         let unicodeNum = string[i].charCodeAt();
//         if (unicodeNum === 32) {
//             cipher.push(" ");
//             continue
//         }
//         unicodeNum += offset;
//         while (unicodeNum > 122) {
//             unicodeNum -= 26;
//         }
//         cipher.push(String.fromCharCode(unicodeNum));
//     }
//     return cipher.join("");
// }
// console.log(cipher("Genius without education is like silver in the mine", 13));

// 9. caesar cipher - given a string and offset, return original message
// function cipher(string, offset) {
//     let cipher = [];
//     for (let i = 0; i < string.length; i++) {
//         let unicodeNum = string[i].charCodeAt();
//         if (unicodeNum === 32) {
//             cipher.push(" ");
//             continue
//         }
//         unicodeNum += offset;
//         while (unicodeNum < 97) {
//             unicodeNum += 26;
//         }
//         cipher.push(String.fromCharCode(unicodeNum));
//     }
//     return cipher.join("");
// }
// console.log(cipher("travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", -13));