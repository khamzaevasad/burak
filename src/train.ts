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

function getDigits(list: string): string {
  return list
    .split("")
    .filter((item) => item >= "0" && item <= "9")
    .join("");
}
console.log(getDigits("m194i1t"));
