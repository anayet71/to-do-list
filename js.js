let input = document.querySelector('.input')
let btn = document.querySelector('.btn')
let list = document.querySelector('.list')
let update = document.querySelector('.update')
let id

let toDo = []
btn.addEventListener("click", () => {
    toDo.push(input.value)
    addToDo()
    // console.log(toDo)

})

update.addEventListener('click', ()=>{
    toDo[id] = input.value
   if( input.value){
    addToDo()
   }
})

console.log(id);


function addToDo() {
    input.value = ''
    list.innerHTML = ''
    toDo.map((item) => {

        if (!item) {
            return
        }
        else {
       
            list.innerHTML += `<li>${item} <button  class= 'edit'>Edit</button>
                <button class= 'delete'>Delete</button> </li>`
            let deleteArr = document.querySelectorAll('.delete')
            let deleteConvert = Array.from(deleteArr)
            deleteConvert.map((dele, index) => {
                dele.addEventListener('click', () => {
                    toDo.splice(index, 1)
                    addToDo()
                })
            })
    
            let editArr  = document.querySelectorAll('.edit')
            let editConvert = Array.from(editArr)
            editConvert.map((edit, index) =>{
               edit.addEventListener('click', ()=>{
                input.value = toDo[index]
                id = index
                
               })
            })
        }

        
    })
}


