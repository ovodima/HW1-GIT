class Worker {
    constructor(name, lastName,age, salary, days) {
        this.name = name
        this.lastName = lastName
        this.age = age
        this.salary = salary
        this.days = days
    }

    getName() {
        return `${this.name} ${this.lastName}`
    }

    getAge() {
        return this.age
    }

    getSalary() {
        return this.salary
    }

    setDays(days) {
        this.days = days
    }

    changeSalary() {
        this.salary = this.salary * 1.1
    }
}

class Company {
    constructor(name,workers = []) {
        this.name = name
        this.workers = workers
    }

    addWorker(worker) {
        this.workers.push(worker)
    }

    getWorkers() {
        return this.workers
    }
}

const worker1 = new Worker('Dima', 'Tsymbal', 22, 1000, 28)
const worker2 = new Worker('Dima', 'Petrov', 52, 2000, 23)
const worker3 = new Worker('Dima', 'Ivanov', 32, 1200, 22)

const company = new Company('EPAM', [worker2, worker3])
console.log(company.getWorkers())
company.addWorker(worker1)
console.log(company.getWorkers())