const Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// TypeError: member.getFullName is not a function
//Person.getFullName = () => `${this.firstName} ${this.lastName}`;

// werkt
/*Person.prototype = {
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};*/

// beter
Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};
// opmerking:
// geen "() =>" gebruiken want dit is statisch!

const member = new Person('Rizwan', 'Mushtaq');

console.log(member.getFullName());
