import Person from "./Person"


class Teacher extends Person {
    constructor(name, age, gendor, interests, subject) {
        super(name, age, gendor, interests)
        this.subject = subject
    }

    sayAboutMe() {
        console.log(`hello, my name is ${this.name} i'm ${this.age} year old, ${this.gendor}, long time i'm doing ${this.interests}, i worked ${this.subject} teacher in school`)
    }
}

export default Teacher