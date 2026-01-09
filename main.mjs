function todo_app(smit) {
    smit.preventDefault()

    const input = document.querySelector(".userInput")
    const result = document.querySelector(".result")

    if (input.value === "") return

    result.innerHTML += `
        <div class="singleTodo">
            <p>${input.value}</p>

            <div class="todo-actions">
                <button class="edit" onclick="edit_todo(event)">Edit</button>
                <button class="delete" onclick="delete_todo(event)">Delete</button>
            </div>
        </div>
    `

    input.value = ""
}

function delete_todo(event) {
    event.target.closest(".singleTodo").remove()
}

function edit_todo(event) {
    const para = event.target.closest(".singleTodo").querySelector("p")
    const newText = prompt("Edit your task", para.innerText)

    if (newText) {
        para.innerText = newText
    }
}
