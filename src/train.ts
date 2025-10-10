/** 
 * TASK G:

Yagona parametrga ega function tuzing.
Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
 **/

function getHighestIndex(list: number[]): number {
  return list.indexOf(Math.max(...list));
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));
