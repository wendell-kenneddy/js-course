const Storage = {
  get() {
    return JSON.parse(localStorage.getItem('tasklist: list')) || [];
  },

  set(key) {
    localStorage.setItem('tasklist: list', JSON.stringify(key));
    return
  }
}

const taskList = {
  tableContainer: document.querySelector('#task-table tbody'),
  tasks: Storage.get(),

  clearTableContainer() {
    taskList.tableContainer.innerHTML = '';
    return
  },

  printTasks() {
    for (const task in taskList.tasks) {
      const tr = document.createElement('tr');
      tr.innerHTML =
        `
      <td>${taskList.tasks[task]}</td>
      <td><button onClick="taskList.removeTask(${task})">Remover</button></td>
      `;

      taskList.tableContainer.appendChild(tr);
    }

    return;
  },

  addTask(task) {
    taskList.tasks.push(task);
    App.reload();
    taskAddHandler.clearTaskInput()
    return;
  },

  removeTask(index) {
    taskList.tasks.splice(index, 1);
    App.reload()
    return;
  }
}

const taskAddHandler = {
  task: document.getElementById('task'),
  addBtn: document.getElementById('add-task'),

  validateTask() {
    if (taskAddHandler.task.value.replace(/\s/g, '') == '') {
      throw new Error('Por favor, digite o nome da tarefa.')
    }

    return
  },

  clearTaskInput() {
    taskAddHandler.task.value = '';
    taskAddHandler.task.focus();
    return;
  },

  confirmTaskAdd(e) {
    e.preventDefault()

    try {
      taskAddHandler.validateTask();
      taskList.addTask(taskAddHandler.task.value);
    } catch (error) {
      window.alert(error.message);
    }

    return
  },

  watchTaskAdd() {
    taskAddHandler.addBtn.addEventListener('click', taskAddHandler.confirmTaskAdd);
    return;
  }
}

const App = {
  init() {
    Storage.set(taskList.tasks)
    taskList.printTasks()
    taskAddHandler.watchTaskAdd()
    return
  },

  reload() {
    taskList.clearTableContainer()
    App.init()
    return
  }
}

App.init()
