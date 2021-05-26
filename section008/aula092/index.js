class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  printToTable() {
    const tableContainer = document.querySelector('#person-container tbody');
    const tr = document.createElement('tr');

    for (const prop in this) {
      const td = document.createElement('td');
      td.innerText = this[prop];
      tr.appendChild(td);
    }

    tableContainer.appendChild(tr);
  }
}

const init = async () => {
  try {
    const request = await axios('./data.json');
    const personArray = request.data;

    for (const { name, age, occupation } of personArray) {
      const person = new Person(name, age, occupation);
      person.printToTable();
    }
  } catch (error) {
    alert(error)
  }
};

init();
