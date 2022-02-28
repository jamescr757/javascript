// 1. write a function where given a name, it says hello to the name
// function hello(name) {
//     console.log(`Hello, ${name}!`);
// }
// hello("Mustache");

// 2. same as above except there can be a blank input that outputs Hello, world!
// function hello2(name="world") {
//     console.log(`Hello, ${name}!`);
// }
// hello2();

// 3. input a name and a subject, output sentence describing favorite subject
// function madlib(name, subject) {
//     return `${name}'s favorite subject in school is ${subject}.`;
// }
// console.log(madlib("Anushka", "art"));

// 4. given bill amount and level of service, return the dollar amount for the tip
// function tipAmount(bill, service) {
//     let tip;
//     switch (service) {
//         case "good":
//             tip = bill * 0.2;
//             return "$" + tip.toFixed(2);
//         case "fair":
//             tip = bill * 0.15;
//             return "$" + tip.toFixed(2);
//         default:
//             tip = bill * 0.1;
//             return "$" + tip.toFixed(2);
//     }
// }
// console.log(tipAmount(100, "good"));
// console.log(tipAmount(40, "fair"));

// 5. same as above except return the total amount
// function tipAmount(bill, service) {
//     let tip;
//     switch (service) {
//         case "good":
//             tip = bill * 0.2;
//             break;
//         case "fair":
//             tip = bill * 0.15;
//             break;
//         default:
//             tip = bill * 0.1;
//             break;
//     }
//     total_amount = tip + bill;
//     return `$${total_amount.toFixed(2)}`;
// }
// console.log(tipAmount(100, "good"));
// console.log(tipAmount(40, "fair"));

// 6. same as above except add an input for the number of bill splits
// function tipAmount(bill, service, splits=1) {
//     let tip;
//     switch (service) {
//         case "good":
//             tip = bill * 0.2;
//             break;
//         case "fair":
//             tip = bill * 0.15;
//             break;
//         default:
//             tip = bill * 0.1;
//             break;
//     }
//     total_amount = (tip + bill) / splits;
//     return `$${total_amount.toFixed(2)}`;
// }
// console.log(tipAmount(100, "good"));
// console.log(tipAmount(100, "good", 5));
// console.log(tipAmount(40, "fair", 2));

