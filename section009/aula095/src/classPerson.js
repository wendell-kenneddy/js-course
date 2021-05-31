export default class Person {
  constructor(name, nickname) {
    this.name = name;
    this.nickname = nickname;
  }

  greeting() {
    console.log(`Hello, my name is ${this.name} ${this.nickname}. How are you?`)
  }
}
