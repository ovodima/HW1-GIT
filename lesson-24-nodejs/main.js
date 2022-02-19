class Person {
    constructor(name, age, gendor, interests) {
        this.name = name
        this.age = age
        this.gendor = gendor
        this.interests - interests
    }
}

class Student extends Person {
    constructor() {
        super()
        this.name = 'John'
    }

    sayHello() {
        console.log(this.name)
    }
}

exports.Student = Student