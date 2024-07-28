//* Muellim ve mentorun tapsirdigi tasklar

//!  tasklari yoxlamaq ucun bir-bir yorumdan cixarib yoxlayin , novbeti taska kecende bir onceki taski yoruma alin

// Todo Muellim task

// ? Problem 1

// let saat = prompt("Enter The time");

// if (saat > 0 && saat < 24) {
//   if (saat < 12) {
//     console.log("sabahiniz xeyir");
//   } else if (saat >= 12 && saat < 17) {
//     console.log("gunortaniz xeyir");
//   } else if (saat >= 17) {
//     console.log("axsaminiz xeyir");
//   }
// } else {
//   console.log("bele bir saat movcud deyil");
// }

//! hell edildi

// ? Problem 2

// let oneNumber = +prompt("enter the oneNumber"),
//   twoNumber = +prompt("Enter the twoNumber"),
//   threeNumber = +prompt("Enter the threeNumber"),
//   arithmeticMean = (oneNumber + twoNumber + threeNumber) / 3;

// if (arithmeticMean < 20) {
//   console.log("aktiv");
// } else if (arithmeticMean > 20) {
//   console.log("deaktiv");
// }

// ! Hell edildi

// ? tapsiriq - 1 - 2

// let sideOne = +prompt("enter the sideOne"),
//   sideTwo = +prompt("enter the sideTwo"),
//   sideThree = +prompt("enter the sideThree");

// if (
//   sideOne > Math.abs(sideTwo - sideThree) &&
//   sideOne < sideTwo + sideThree &&
//   sideTwo > Math.abs(sideOne - sideThree) &&
//   sideTwo < sideOne + sideThree &&
//   sideThree > Math.abs(sideOne - sideTwo) &&
//   sideThree < sideOne + sideTwo
// ) {
//   if (sideOne === sideTwo && sideOne === sideThree && sideTwo === sideThree) {
//     console.log("beraber terefli");
//   } else if (
//     sideOne === sideTwo ||
//     sideOne === sideThree ||
//     sideTwo === sideThree
//   ) {
//     console.log("beraber yanli");
//   } else if (
//     sideOne !== sideTwo &&
//     sideOne !== sideThree &&
//     sideTwo !== sideThree
//   ) {
//     console.log("muxtelif terefli");
//   }
// } else {
//   console.log("bele bir ucbucaq movcud deyil");
// }

// ! hell edildi

// ? tapsiriq - 3

// let hava = prompt("havanin veziyyet : gunesli,  yagisli , qarli");
// let tovsiye;

// switch (hava) {
//   case "gunesli":
//     console.log("nazik geyin bisersen");
//     break;

//   case "yagisli":
//     console.log("cetir gotur evden cixanda");
//     break;

//   case "qarli":
//     console.log("elcek gotur , belke qartopu oynadin");
//     break;
//   default:
//     console.log("ozun bilersen");
//     break;
// }

// ! hell edildi

// ? Tapsiriq 4

// let eded = +prompt("ededi daxil edin");

// if (eded >= 1 && eded <= 12) {
//   switch (eded) {
//     case 1:
//       console.log("yanvar");
//       break;

//     case 2:
//       console.log("fevral");
//       break;

//     case 3:
//       console.log("mart");
//       break;

//     case 4:
//       console.log("aprel");
//       break;
//     case 5:
//       console.log("may");
//       break;

//     case 5:
//       console.log("iyun");
//       break;

//     case 6:
//       console.log("iyul");
//       break;

//     case 7:
//       console.log("iyul");
//       break;

//     case 8:
//       console.log("avqust");
//       break;

//     case 9:
//       console.log("sentyabr");
//       break;

//     case 10:
//       console.log("oktyabr");
//       break;

//     case 11:
//       console.log("noyabr");
//       break;
//     default:
//       console.log("dekabr");
//       break;
//   }
// } else {
//   console.log("bele ay movcu deyil");
// }

// ! hell edildi

// ? Tapsiriq 5

// let number = +prompt("enter the number");

// let result = number > 0 ? "musbet eded" : number < 0 ? "menfi eded" : "sifir";

// console.log(result);

// ! hell edildi

//Todo   Mentro-saati task

//? task- 1

// let oneNumber = +prompt("Enter the oneNumber"),
//   twoNumber = +prompt("Enter The twoNumber"),
//   emel = prompt("etmek istediyiniz riyazi emeli daxil edin (+ , - , * , /)");

// if (emel === "+") {
//   console.log(oneNumber + twoNumber);
// } else if (emel === "-") {
//   console.log(oneNumber - twoNumber);
// } else if (emel === "/") {
//   console.log(oneNumber / twoNumber);
// } else if (emel === "*") {
//   console.log(oneNumber * twoNumber);
// }

// ! hell edildi

//? task- 2

// let havaninTemperaturu = +prompt("reqem daxil edin"),
//   fizikiVahid = prompt("hansi vahid ile ? (K , C , F)");

// if (fizikiVahid === "K" || fizikiVahid === "C" || fizikiVahid === "F") {
//   switch (fizikiVahid) {
//     case "K":
//       console.log(havaninTemperaturu + " " + "K");
//       console.log(havaninTemperaturu - 273.15 + " " + "C");
//       console.log(((havaninTemperaturu - 273.15) * 9) / 5 + 32 + " " + "F");
//       break;

//     case "F":
//       console.log(((havaninTemperaturu - 32) * 5) / 9 + 273.15 + " " + "K");
//       console.log(((havaninTemperaturu - 32) * 5) / 9 + " " + "C");
//       console.log(havaninTemperaturu + " " + "F");
//       break;

//     default:
//       console.log(havaninTemperaturu + 273.15 + " " + "K");
//       console.log(havaninTemperaturu + " " + "C");
//       console.log((havaninTemperaturu * 9) / 5 + 32 + "F");
//       break;
//   }
// } else {
//   console.log("duzgun daxil etdiyinizden emin olun");
// }

// ! hell edildi

// ? task -3

// let input = Number(prompt("eded daxil et"));

// console.log(Number(input) - parseInt(input));
// console.log(parseInt(input));

// ! hell edildi
