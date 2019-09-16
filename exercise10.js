function changeMe(arr) {
    var birth = '';

    for (var i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i][3] == undefined || arr[i] > 2019) {
            birth = 'Invalid Birth Year'
        } else {
            birth = 2019 - arr[i][3]
        }

        console.log((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1] + ': ')
        // console.log(birth, typeof (birth))
        var obj = {
            firstName: arr[i][0],
            lastName: arr[i][1],
            gender: arr[i][2],
            age: birth
        }
        console.log(obj)
    }
}

// TEST CASES
changeMe([
    ['Christ', 'Evans', 'Male', 1982],
    ['Robert', 'Downey', 'Male']
]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // "