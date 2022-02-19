console.log('Task 5')

const ask = (question, yes, no) => {
    confirm(question) ? yes() : no()
}

ask('Вы согласны?', () => {
    console.log('Вы согласились')
},  () => {
    console.log('Вы отменили выполнение.')
})

console.log('Task 6')

const str = 'my-short-string'
let arr = str.split("-")
console.log(arr)

console.log('Task 7')
const arr2 = ['JavaScript', 2015]
console.log(arr2.join(' '))

console.log('Task 8')
let users = 
[
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5},

]

const fltr = users.filter(item => item.age < 20)
console.log(fltr)

console.log('Task 9')

let users2 = [
    {id: 1, name: "Vic", age: 21}, 
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5},
];
// console.log(users2)

// const names = (array, name) => {
//     let result = []
//     for(let i = 0 ; i < array.length ; i++) {
//         result.push(array[i][name])
//     }
//     return result
// }
// console.log( names(users2, 'name') );

let names = users2.map(item => {
    return item.name
}).join(',').split(',')
console.log(names)

console.log('Task 10')

const filterRangeInPlace = (arr, a, b) => {
  for(let i = 0; i < arr.length; i++) {
      let res = arr[i]

      if(res < a || res > b) {
          arr.splice(i, 1)
          i--
      }
  }
}

let arr3 = [5, 3, 8, 1]
filterRangeInPlace(arr3, 1, 4)
console.log(arr3)

console.log('Task 11')

// const arrStr = (str) => {
//     let mass = []
//     for(let i = 0; i < str.length; i++) {
        
//         mass.push(str[i])
//     }
//     return mass
  
// }

const arrStr = (string, seprarator) => {
    console.log(string.split(seprarator))
}


arrStr('hello Dima', "")

console.log('Task 12')
const  slArray = (arr, startIndex, endIndex) => {
    return arr.splice(startIndex , endIndex)
}

let arr4 = [5, 3, 8, 1]
let range = slArray(arr4, 1, 4)
console.log(range)

console.log('task 13')
const reduce = (...param) => {
    return param.reduce((total, number) => total + number)
}

console.log(reduce(2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,11,1,1,1,1,1))