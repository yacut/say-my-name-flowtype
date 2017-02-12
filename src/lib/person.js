/* @flow */

class FullName {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    if (this.firstName == null || this.lastName == null) { return ''; }

    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports.FullName = FullName;
