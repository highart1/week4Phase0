
// function tukarBesarKecil(kalimat) {

//     var gantiHuruf = ''

//     for (var i = 0; i < kalimat.length; i++) {
//         if (kalimat[i] == kalimat[i].toUpperCase()) {
//             gantiHuruf += kalimat[i].toLowerCase()
//         } else if (kalimat[i] == kalimat[i].toLowerCase()) {
//             gantiHuruf += kalimat[i].toUpperCase()
//         }
//     }
//     // console.log(gantiHuruf)
//     return gantiHuruf
// }

//CARA II :
function tukarBesarKecil(kalimat) {
    var hurufBesar = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var hurufKecil = ' abcdefghijklmnopqrstuvwxyz'
    var gantiHuruf = '';


    for (var i = 0; i < kalimat.length; i++) {
        for (var j = 0; j < hurufBesar.length; j++) {
            // var isFind = false;
            if (kalimat[i] == hurufBesar[j]) {
                gantiHuruf += hurufKecil[j]
                // isFind = true
                // break;
            } else if (kalimat[i] == hurufKecil[j]) {
                gantiHuruf += hurufBesar[j]
                // isFind = true
                // break;
            }
        }

    }
    return gantiHuruf
}


// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"