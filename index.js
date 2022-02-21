//suzdavane na masiv data
let data=[
    10,
    12,
    34,
    67,
    5,
    34,
    100
]

//obhojdame stoinostite v masiva < 60
const filteredArray = data.filter((element) => {
    if (element <100){
        return element;
    }
})

//console.log(filteredArray)

//tursi element i ako nameri takuv, vrushta purviq nameren
const foundElement = data.find((element) => {
    if (element === 34) {
        return element
    }
})

console.log(foundElement)

//promenqm daden element
const mappedData=data.map((element)=> {
    if (element === 10) {
        element = 16
        return element
    }
    return element
})

//console.log(mappedData)

/*
const result = data.map((georgi) => {
    if (georgi ===5) {
        georgi = 15
    }
    return georgi
})

console.log(result)
 */

/*
const filtereedArray = data.filter((element) => {
    if (element>= 10 && element <= 20) {
        return element
    }
})

console.log(filteredArray)
 */