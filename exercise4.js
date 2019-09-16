function cariModus(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var duplicate = false;
        for (var j = 0; j < result.length; j++) {
            if (arr[i] == result[j][0]) {
                duplicate = true;
                result[j][1]++;
            }
        }
        if (duplicate == false) {
            result.push([arr[i], 1])
        }
    }
    if ((result.length == arr.length) || (result.length == 1)) {
        return -1
    } else {
        result.sort((a, b) => b[1] - a[1]);
        return result[0][0];
    }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1