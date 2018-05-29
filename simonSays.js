const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]]
let k = 0
for (k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]
    
    if (currentLocation[0] > 2) {
        const invalidLocation = true
        console.log("This location is invalid")
    }
}
console.log(`There were ${k} locations displayed`)