/*
 Project standarts
    -Loging standarts
    -Naming standarts
        function, method, variables => CAMEL
        class => PASKAL
        folder => KEBAB
        css => SNAKE
    -Error handling
    
 */

/** 
 * TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
 **/

// function getHighestIndex(list: number[]): number {
//   return list.indexOf(Math.max(...list));
// }

// console.log(getHighestIndex([5, 21, 12, 21, 8]));

/** 
 * H-TASK: 

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

 **/

// function getPositive(list: number[]): string {
//   return list.filter((num) => num > 0).join("");
// }
// console.log(getPositive([1, -4, 2]));

/*
H2-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141" 

**/

// function getDigits(list: string): string {
//   return list
//     .split("")
//     .filter((item) => item >= "0" && item <= "9")
//     .join("");
// }
// console.log(getDigits("m194i1t"));

/*

I-TASK:

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

**/

// function majorityElement(numberList: number[]) {
//   const counts: Record<number, number> = {};
//   let maxCount = 0;
//   let maxNumber = 0;
//   numberList.forEach((number, i) => {
//     if (!counts[number]) {
//       counts[number] = 1;
//     } else {
//       counts[number] += 1;
//     }
//   });
//   for (const key in counts) {
//     const value = counts[key];
//     if (value > maxCount) {
//       maxCount = value;
//       maxNumber = Number(key);
//     }
//   }
//   return maxNumber;
// }

// console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4]));

// function majorityElement(numberList: number[]): number {
//   numberList.sort((a, b) => a - b);
//   return numberList[Math.floor(numberList.length / 2)];
// }

// console.log(majorityElement([1, 2, 3, 3, 5, 4, 2, 4]));

/**
 J-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"
 */

// function findLongestWord(str: string): string {
//   return str.split(" ").sort((a, b) => b.length - a.length)[0];
// }
// console.log(findLongestWord("I come from Uzbekistan"));

/*
*K-TASK: 
Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
MASALAN: countVowels("string") return 1;
 */

// function countVowels(str: string) {
//   const list: string = "aeiou";
//   return str.split("").filter((char) => list.includes(char.toLowerCase()))
//     .length;
// }

// console.log(countVowels("Assalomu alaykum Sherxon aka yaxshimisiz😁"));

/**
 L-TASK: 

Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";
 */

// function reverseSentence(str: string) {
//   return str
//     .split(" ")
//     .map((word) => word.split("").reverse().join(""))
//     .join(" ");
// }

// console.log(reverseSentence("we like coding"));

/*
M-TASK: 

Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
*/

// type NumSquare = {
//   number: number;
//   square: number;
// };

// function getSquareNumbers(numberList: number[]): NumSquare[] {
//   const result = numberList.map((num) => {
//     return { number: num, square: num ** 2 };
//   });
//   return result;
// }

// console.log(getSquareNumbers([1, 2, 3]));

/**
 N-TASK: 

Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
 */

// function palindromCheck(input: string): boolean {
//   return input.split("").reverse().join("") === input;
// }
// console.log(palindromCheck("dad"));

/**
 O-TASK:

Shunday function yozing, u har xil valuelardan iborat array qabul qilsin va array ichidagi sonlar yigindisini hisoblab chiqqan javobni qaytarsin.
MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]) return 45

 */

function calculateSumOfNumbers(list: unknown[]): number {
  return list
    .filter((item) => typeof item === "number")
    .reduce((acc, curVal) => acc + curVal, 0);
}
console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));
