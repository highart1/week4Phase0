function urutkanAbjad(str) {
    //CARA I :
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var urutan = '';

    for (var i = 0; i < alphabet.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (alphabet[i] == str[j]) {
                urutan += alphabet[i]
            }
        }
    }
    return urutan

    // CARA II:
    // return str.toString().split('').sort().join('')

}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'