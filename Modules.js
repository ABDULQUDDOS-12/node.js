//commonJS, every file is module(by default)
//Modules - Encapsulated Code (only share minimum)

const john = 'john'
const peter = 'peter'

const sayHi =(name)=>{
    console.log(`Hello there ${name}`)
}

sayHi('susan')
sayHi(john)
sayHi(peter)