
function checkAB(num) {
    for (var i = 0; i < num.length; i++) {
        if (num[i] == 'a') {
            if (num[i + 4] == 'b') {
                return true
            }
        } else if (num[i] == 'b') {
            if (num[i + 4] == 'a') {
                return true
            }
        }
    }
    return false
}



// ('CARA II')

// function checkAB(num) {
//     for (var i = 0; i < num.length; i++) {
//         if (num[i] == 'a' || num[i] == 'b') {
//             if (num[i + 4] == 'b' || num[i + 4] == 'a') {
//                 return true
//             }
//         }
//     }
//     return false
// }

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false