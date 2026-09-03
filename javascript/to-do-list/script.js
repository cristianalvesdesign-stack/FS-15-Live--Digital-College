const btnAddTask = document.getElementById("btn-add-task")
const tBody = document.getElementById("list-task")
const tasks = []

function deleteTask(index) {

    console.log(tasks)

    tasks.splice(index, 1)

    localStorage.setItem("tasks", JSON.stringify(tasks))

    tBody.innerHTML = ""

    for (let i = 0; i < tasks.length; i++) {

        const tr = document.createElement("tr")
        const taskTd = document.createElement("td")
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

        taskTd.innerHTML = `${tasks[i]}`

        tr.appendChild(taskTd)
        tr.appendChild(actionsTd)

        tBody.appendChild(tr)
    }
}

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"))

if (tasksLocalStorage && tasksLocalStorage.length > 0) {

    console.log(tasksLocalStorage)

    tasks.push(...tasksLocalStorage)

    for (let i = 0; i < tasksLocalStorage.length; i++) {

        const tr = document.createElement("tr")
        const tdTask = document.createElement("td")
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

        tdTask.innerHTML = `${tasksLocalStorage[i]}`

        tr.appendChild(tdTask)
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

    const index = tasks.push(inputTask.value)

    btnReject.addEventListener("click", function () {
        deleteTask(index - 1)
    })

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    )

    tr.appendChild(taskTd)
    tr.appendChild(actionsTd)

    tBody.appendChild(tr)

    console.log(inputTask.value)
})