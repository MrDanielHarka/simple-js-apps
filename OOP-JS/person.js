class Person {
    constructor({ firstName, lastName, job }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = [];
        Person._amount = Person._amount || 0;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/test(fN)) {
            [this.firstName, this.lastName] = fN.split(' ');
        } else {
            throw Error("Incorrect full name!")
        }
    }
    learn(skill) {
        this.skills.push(skill);
    }
}

class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}