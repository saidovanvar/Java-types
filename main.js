// let name = "hello"
// let message = 98
// let messages = 9n
// let result = true

// console.log(name, message, messages, result)

// let nem = prompt("Hamma harajatlar 9732738.6 so'm")
// console.log(nem)
// if (nem>9732738.6){
//     console.log("Oq yul,Anvar!")
// }else {
//     console.log("Anvar,ozgina sabr qilish kerak bular ekan")
// }
// for (let i=0 ; i <= 20; i=i+2) {
//     console.log(i)
// }
// let number = prompt("Sonni kiriting: ");
//
// if (number > 0) {
//     alert("Musbat son");
// } else if (number < 0) {
//     alert("Manfiy son");
// } else {
//     alert("Bu nol");
// }
//
// let N = prompt("N sonini kiriting: ");
//
// let result = "";
// for (let i = 1; i <= N; i++) {
//     if (i % 3 === 0) {
//         result += i + "\n";
//     }
// }
//
// if (result) {
//     alert("3 ga bo'linadigan sonlar: \n" + result);
// } else {
//     alert("3 ga bo'linadigan sonlar yo'q.");
// }
let N = prompt("N sonini kiriting: ");

let result = "";
for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        result += i + " 3 va 5 ga bo'linadi\n";
    } else if (i % 3 === 0) {
        result += i + " 3 ga bo'linadi\n";
    } else if (i % 5 === 0) {
        result += i + " 5 ga bo'linadi\n";
    } else if (i % 2 === 0) {
        result += i + " juft son\n";
    } else {
        result += i + " toq son\n";
    }
}

alert(result);