const btnAddTask = document.getElementById("btn-add-task")
const tBody = document.getElementById("list-task")
const btnTaskDoneConfirm = document.getElementById("btnTaskDoneConfirm")
const tasks = []

function deleteTask(index) {

    console.log(tasks)

    tasks.splice(index, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    tBody.innerHTML = ""

    for (let i = 0; i < tasks.length; i++) {

        const tr = document.createElement("tr")
        const taskTd = document.createElement("td")
        const tdStatusTask = document.createElement("td")
        const actionsTd = document.createElement("td")

        actionsTd.classList.add(
            "d-flex",
            "gap-1",
            "justify-content-end"
        )

        const btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Editar"
        btnEdit.classList.add(
            "btn",
            "btn-info",
            "btn-sm"
        )

        const btnDone = document.createElement("button")
          btnDone.addEventListener("click", function () {
            doneTask(tasks[i], i)
        })
        btnDone.innerHTML = "Concluir"
        btnDone.classList.add(
            "btn",
            "btn-success",
            "btn-sm"
        )

        const btnReject = document.createElement("button")

        btnReject.addEventListener("click", function () {
            deleteTask(i)
        })

        btnReject.innerHTML = "Excluir"

        btnReject.classList.add(
            "btn",
            "btn-danger",
            "btn-sm"
        )

        actionsTd.appendChild(btnEdit)
        actionsTd.appendChild(btnDone)
        actionsTd.appendChild(btnReject)

        taskTd.innerHTML = `${tasks[i].title}`
        if (tasks[i].status === "doing") {
            tdStatusTask.innerHTML = 'Em andamento'
        }

        if (tasks[i].status === "done") {
            tdStatusTask.innerHTML = 'Conclída'
        }

        tr.appendChild(taskTd)
        tr.appendChild(tdStatusTask)
        tr.appendChild(actionsTd)

        tBody.appendChild(tr)
    }
}

function doneConfirm(taskIndex) {
    console.log(taskIndex)

}


function doneTask(task, taskIndex) {
    const taskTitle = document.getElementById("taskDoneModalContent")
    const doneModal = document.getElementById("taskDoneModal")
    taskTitle.innerHTML = task.title
    const modal = new bootstrap.Modal(doneModal)
    modal.show()
    console.log("Atividade: ", task)
    console.log("Index da atividade", taskIndex)

    btnTaskDoneConfirm.addEventListener("click", function () {
    doneConfirm(taskIndex)
})
}

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"))

if (tasksLocalStorage && tasksLocalStorage.length > 0) {

    console.log(tasksLocalStorage)

    tasks.push(...tasksLocalStorage)

    for (let i = 0; i < tasksLocalStorage.length; i++) {

        const tr = document.createElement("tr")
        const tdTask = document.createElement("td")
        const tdStatusTask = document.createElement("td")

        const actionsTd = document.createElement("td")

        actionsTd.classList.add(
            "d-flex",
            "gap-1",
            "justify-content-end"
        )

        const btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Editar"
        btnEdit.classList.add(
            "btn",
            "btn-info",
            "btn-sm")



        const btnDone = document.createElement("button")
        btnDone.addEventListener("click", function () {
            doneTask(tasksLocalStorage[i], i)
        })
        btnDone.innerHTML = "Concluir"
        btnDone.classList.add(
            "btn",
            "btn-success",
            "btn-sm"
        )

        const btnReject = document.createElement("button")

        btnReject.addEventListener("click", function () {
            deleteTask(i)
        })

        btnReject.innerHTML = "Excluir"

        btnReject.classList.add(
            "btn",
            "btn-danger",
            "btn-sm"
        )

        actionsTd.appendChild(btnEdit)
        actionsTd.appendChild(btnDone)
        actionsTd.appendChild(btnReject)

        tdTask.innerHTML = `${tasksLocalStorage[i].title}`

        if (tasksLocalStorage[i].status === "doing") {
            tdStatusTask.innerHTML = 'Em andamento'
        }

         if (tasksLocalStorage[i].status === "done") {
            tdStatusTask.innerHTML = 'Concluída'
        }


        tdStatusTask.innerHTML = `${tasksLocalStorage[i].status}`

        tr.appendChild(tdTask)
        tr.appendChild(tdStatusTask)
        tr.appendChild(actionsTd)

        tBody.appendChild(tr)
    }

} else {

    console.log("Não há nada no localstorage")
}

btnAddTask.addEventListener("click", function () {

    const inputTask = document.getElementById("input-task")

    const tr = document.createElement("tr")
    const taskTd = document.createElement("td")
    const tdStatusTask = document.createElement("td")
    const actionsTd = document.createElement("td")

    actionsTd.classList.add(
        "d-flex",
        "gap-1",
        "justify-content-end"
    )

    const btnEdit = document.createElement("button")
    btnEdit.innerHTML = "Editar"
    btnEdit.classList.add(
        "btn",
        "btn-info",
        "btn-sm"
    )

    const btnDone = document.createElement("button")
    btnDone.innerHTML = "Concluir"
    btnDone.classList.add(
        "btn",
        "btn-success",
        "btn-sm"
    )

    const btnReject = document.createElement("button")
    btnReject.innerHTML = "Excluir"
    btnReject.classList.add(
        "btn",
        "btn-danger",
        "btn-sm"
    )

    actionsTd.appendChild(btnEdit)
    actionsTd.appendChild(btnDone)
    actionsTd.appendChild(btnReject)

    taskTd.innerHTML = inputTask.value
    tdStatusTask.innerHTML = 'Em andamento'
        

    const task = {
        title: inputTask.value,
        status: "doing"
    }
    const index = tasks.push(task)

      btnDone.addEventListener("click", function () {
            doneTask(inputTask.value, index -1)
        })

    btnReject.addEventListener("click", function () {
        deleteTask(index - 1)
    })

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    )

    tr.appendChild(taskTd)
    tr.appendChild(tdStatusTask)
    tr.appendChild(actionsTd)

    tBody.appendChild(tr)

    console.log(inputTask.value)
})