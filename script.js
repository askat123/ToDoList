const first = document.querySelector(".first")
const last = document.querySelector(".last")
const btn = document.querySelector(".btn")
const table = document.querySelector("#tbody")


first.addEventListener("keydown",(e)=>{
    if (e.key === "Enter"){
        addTask()
    }
})
last.addEventListener("keydown",(e)=>{
    if (e.key === "Enter"){
        addTask()
    }
})





function view() {
    const task = JSON.parse(localStorage.getItem("task")) || []
    task.map(el => {
        table.innerHTML += `
    <tr>
    
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td><button class="del btn btn-danger">DELETE</button></>
    </tr>`
    })
    delBtn()
}
view()

function addTask(){
    if (first.value === "" || last.value === ""){
        alert ("NOT FOUND!!!")
    }else{
        table.innerHTML = ''
        const task = JSON.parse(localStorage.getItem("task")) || []
        const newTask = {
            firstName: first.value,
            lastName: last.value,
        }
        const result = [...task, newTask]
        localStorage.setItem("task",JSON.stringify(result))
        view()
        first.value = ''
        last.value = ''
    }


}

btn.addEventListener("click",()=>{
    addTask()
})

function delBtn() {
    let task = JSON.parse(localStorage.getItem("task")) || []
    const buttons = document.querySelectorAll('.del')
    buttons.forEach((el, index) => {
        el.addEventListener('click', () => {
        task = task.filter((btn, idx)=> {
            return idx !== index
        })
        localStorage.setItem('task', JSON.stringify(task))
        table.innerHTML = ''
        view()
        })
    })
}
delBtn()


// function deleteTask(index){
//     let task = JSON.parse(localStorage.getItem("task")) || []
//     task = task.filter((el,idx)=>{
//         return idx !== index
//     })
//     localStorage.setItem("task",JSON.stringify(task))
//     table.innerHTML = ""
//     view()
// }
//
//
// function delBtn() {
//     let task = JSON.parse(localStorage.getItem("task")) || []
//     const buttons = document.querySelectorAll('.del')
//     buttons.forEach((el, index) => {
//        el.addEventListener("click",()=>{
//            deleteTask(index)
//        })
//     })
// }
// view()