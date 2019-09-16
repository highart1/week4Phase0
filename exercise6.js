function digitPerkalianMinimum(angka) {
    var arrBaru = [];
    var gabung = ''; //'124'
    for (var i = 1; i <= angka; i++) {
        if (angka % i == 0) {
            gabung += i
            gabung += angka / i
            arrBaru.push(gabung)
        }
        gabung = ''
    }

    // console.log(arrBaru)
    // console.log(Number(undefined))
    var angka = []
    for (var i = 0; i < arrBaru.length; i++) {
        angka.push(Number(arrBaru[i]))
    }
    // console.log(angka)


    for (var i = 0; i < angka.length; i++) {
        for (var j = i + 1; j < angka.length; j++) {
            if (angka[i] > angka[j]) {
                // tampungan sementara   
                var temp = angka[i]
                angka[i] = angka[j]
                angka[j] = temp // tampungan sementara
            }
        }
    }
    // console.log(angka)
    return String(angka[0]).length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2