// !!! parol
// let i = true;
// let pass = 123;
// while (i) {
//   const user = prompt('Please enter the password: ')
//   if (user == pass) {
//     i = false;
//     alert(pass)
//   }
// }


// ! 1
// ! 1 dan n gacha sonlarni chiqarish

// for (let n = 0; n <= 10; n++) {
//   console.log(n);
// }

// ! 2
// ! n dan 1 gacha sonlarni chiqarish

// for (let n = 10; n >= 0; n--) {
//   console.log(n);
// }
// ! 3
// ! 1 dan n gacha sonlar yi'g'indisi

// let sum = 0;
// for (let n = 0; n <= 10; n++) {
//   if (sum += n) {
//   }
// }
// console.log(sum);

// ! 4
// ! 1 dan n gacha juftlani chiqarish va yi'g'indisi

// let sum = 0;
// let n = 0
// for (; n < 10; n++) {
//   if (n % 2 === 0) {
//     console.log(n);
//     sum += n
//   }
// }
// console.log(sum);

// if (num % 2 === 0) {
//   console.log(true);
// }


// ! 5
// ! 1 dan n gacha toqlarini chiqarish va yi'g'indisi

// let sum = 0;
// for (n = 0; n <= 10; n++) {
//   if (n % 3 === 0) {
//     console.log(n);
//     sum +=n
//   }
// }
// console.log(sum);

// ! 6
// ! sonning boluvchilarini chiqarish

// let tub = '';
// for (let i = 2; i < 100; i++) {
//   let dividers = 0;
//   for (let d = 2; d < 100; d++) {
//     if (i % d == 0) {
//       dividers++;
//     }
//   }
//   if (dividers == 1) {
//     tub += `${i} `;
//   }
// }
// console.log(tub);

// ! 6-2-variyant
// ! sonning boluvchilarini chiqarish

// for (let i = 1; i <= 10; i++) {  // 1 dan 10 gacha bo'lgan sonlarni tekshiramiz
//   let boluvchilar = '';  // Bo‘luvchilarni saqlash uchun bo‘sh satr
//   for (let d = 1; d <= i; d++) {  // i soniga qadar bo‘luvchilarni tekshiramiz
//     if (i % d === 0) {  // Agar qoldiqsiz bo‘linayotgan bo‘lsa
//       boluvchilar += d + ' ';  // Bo‘luvchini satrga qo‘shamiz
//     }
//   }
//   console.log(`${i} ning bo‘luvchilari: ${boluvchilar} `);
// }

// ! 6-3-variyant
// ! sonning boluvchilarini chiqarish

// for (let i = 1; i <= 20; i++) {
//   let boluvchilar = '';
//   for (let d = 1; d <= i; d++) {
//     if (i % d === 0) {
//       boluvchilar += d + ' ';
//     }
//   }
//   console.log(`${i} ning boluvchilari: ${boluvchilar} `);
// }


// ! 7
// ! sonning boluvchilarini chiqarish va yi'g'indisini chiqarish

// let sum = 0;
// for (let i = 1; i <= 7; i++) {
//   let boluvchilar = '';
//   let boluvchilarSum = 0;
//   for (let d = 1; d <= i; d++) {
//     if (i % d === 0) {
//       boluvchilar += d + " ";
//       boluvchilarSum += d;
//     }
//   }
//   console.log(`${i} ning boluvchilari: ${boluvchilar} (yi'gindisi: ${boluvchilarSum})`);
//   sum += boluvchilarSum;
// }
// console.log(`Ummumiy yi'g'indisi: ${sum} `);


// ! 7 2-variant
// ! sonning boluvchilarini chiqarish va yi'g'indisini chiqarish

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   let boluvchilar = '';
//   let boluvchilarSum = 0;
//   for (let d = 1; d <= i; d++) {
//     if (i % d === 0) {
//       boluvchilar += d + ' ';
//       boluvchilarSum += d;
//     }
//   }
//   console.log(i, boluvchilar, boluvchilarSum);
//   sum += boluvchilarSum;
// }
// console.log(sum);


// ! 8
// ! sonning tub yoki tub emasligini aniqlash

// for (let i = 2; i < 20; i++) {
//   let tub = true;
//   for (let d = 2; d < i; d++) {
//     if (i % d === 0) {
//       tub = false;
//       break;
//     }
//   }
//   if (tub) {
//     console.log(i);
//   }
// }



// ! masala: foydalanuvchidan musbat son kiritishini so'rang. Agar manfiy son kiritsa, takror so'rashda davom eting.
// ! natija: faqat musbat son kiritilganida tugashi kerak.

// let number;
// while (true) {
//   number = parseInt(prompt("Iltimos, musbat son kiriting: "));
//   if (number > 0) {
//     console.log("Siz musbat son kiridingiz  Uraaaaaa:", number);
//     break;
//   } else {
//     console.log("Iltimos, faqat musbat son kiriting.");
//   }
// }

// ! manfiy son kiriting

// let num;
// while (true) {
//   num = parseFloat(prompt("manfiy son kiriting: "));
//   if (num < 0) {
//     console.log("manfiy son kiridingiz  Uraaaaaa: ", num);
//     break;
//   } else {
//     console.log("faqat manfiy son kiriting.");
//   }
// }

// !!! parol
// let i = true;
// let pass = 123;
// while (i) {
//   const user = prompt('Please enter the password: ')
//   if (user == pass) {
//     i = false;
//     alert(pass)
//   }
// }

// ! For. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let chocolatePrice = 12_999;
// for (let i = 1; i <= 10; i++) {
//   let kg = i / 10;
//   let price = chocolatePrice * kg;
//   console.log(`${kg} kg konfet narxi: ${price} so'm`);
// }

// ! For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.

// let n = 5;
// let S = 0;
// for (let i = 0; i <= n; i++) {
//   S += (n + i) ** 2;
//   console.log(n + i);
// }
// console.log(S);

// ! For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.

// let n = 5;
// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += (i + 1) ** (n - i);
// }
// console.log(sum);


// ! For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let A = 5;
// let B = 10;
// for (let i = 0; i < B; i++) {
//   for (let b = 0; b < i; b++) {
//     console.log(i);
//   }
// }

// ! For6. Sonning bo’luvchilarini topish;

// let n = 120;
// let dividers = '';

// for (let i = 0; i <= n; i++) {
//   if (n % i == 0) {
//     dividers += `${i} `;
//   }
// }
// console.log(dividers);

// ! While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// let n = 10;
// let k = 3;
// let butun = 0;
// while (n > k) {
//   butun++;
//   n -= k;
// }
// console.log(butun);
// console.log(n);

// ! While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// ! Input: 128
// ! Output: 7

// let k = 128;
// let n = 0;
// while (k >= 2) {
//   k -= k / 2;
//   n++;
// }
// console.log(n);

// ! For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// ! n^2=1+3+5+... + (2*n-1)

// let n = 10;
// for (let i = 0; i < n; i++) {
//   console.log(i ** 2);
// }

// ! For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// ! 1
// ! 1 2
// ! 1 2 3
// ! 1 2 3 4
// ! 1 2 3 4 5

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   let s = '';
//   for (let b = 0; b < i; b++) {
//     s += `${i} `;
//   }
//   console.log(s);
// }
