// localStorage.setItem('Name','Shakib Khan')
// localStorage.setItem('Age',40)

const name = localStorage.getItem('Name')
const age = localStorage.getItem('Age')
// console.log(name,age)

  localStorage.removeItem('FullName')
//  localStorage.removeItem('person')


const object = {firstName:'Abraham', lastName: 'Linkon'}
const person = localStorage.setItem('fullName',JSON.stringify(object))

const nam = localStorage.getItem('fullName')
const namStringify = JSON.parse(nam)
console.log(namStringify)




