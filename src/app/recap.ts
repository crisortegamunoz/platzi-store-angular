const username: string = 'crisortega';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1, 4);

class Person {
  constructor(private age: number, public lastName: string) {
    this.age = age;
    this.lastName = lastName;
  }
  getAge() {
    return this.age;
  }
}

const cristian = new Person(15, 'Ortega');
cristian.getAge();
