function angkaPrima(angka) {
    var prime = true;

    if (angka < 2)
        prime = false
    for (var i = 2; i < angka; i++) {
        if (angka % i == 0) {
            prime = false;
            break;
        }

    }
    return prime;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false