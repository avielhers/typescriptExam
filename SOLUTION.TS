class task {
    public text: string
  
     public constructor (text:string){
          this.text = text;
      }
  }

const btn = document.querySelector('#todo-save')
const btn_del = document.querySelector('#todo-delall')
let btn_del_comp = document.getElementById('todo-delcom')
let list = document.querySelector('#todo-list')
let arr = []


window.onload = () => {
    if(localStorage.length !=0){
        let item = (JSON.parse(localStorage.array))
        for (const iterator of item) {
            arr.push(iterator)
            create(iterator)
        }
    }
}

btn.addEventListener("click", () => {
        let text:string = (<HTMLInputElement>document.querySelector('#todo-item')).value;
        const todo_mis:object = new task (text)
        arr.push(todo_mis)
        create(todo_mis)
        localStorage.setItem('array', JSON.stringify(arr))         
})

btn_del.addEventListener("click", () => {
    let delete_all:boolean = confirm("Delete tasks?");
    if(delete_all){
        localStorage.clear()
        arr = []
        list.innerHTML =""; 
    }
})
btn_del_comp.addEventListener("click", () => {
    let array_list:any = document.querySelectorAll('.todo-row')
    let ar = []
    let b =0;
    for (const iterator of array_list) {
        if(iterator.lastElementChild.classList == 'todo-cx'){
            ar.push(b)
            iterator.remove()
        }
        b+=1;
    }
    let new_array = JSON.parse(localStorage.getItem("array"));
    for(let o=ar.length-1;o>=0;o--)
        new_array.splice(ar[o], 1);
    createarr(new_array)
    arr = new_array
})

function create(item:any):void{
    let div = document.createElement('div')
    div.classList.add('todo-row')
    let pText = document.createElement('p')
    pText.classList.add('todo-item')    
    let btn_done = document.createElement('button')
    btn_done.classList.add('todo-ok')
    btn_done.innerText = 'v'
    pText.innerText = item.text
    div.appendChild(pText)
    div.appendChild(btn_done)
    list.appendChild(div)
    btn_done.addEventListener("click", (e) => {
        mark(e.target)
    })
}

function mark(n):void{
    (n.parentElement.firstElementChild).classList.add('done')
    n.classList.remove("todo-ok")
    n.classList.add("todo-cx")
}
              
function createarr(new_array):void{
    if(new_array.length ==0)
    localStorage.clear()
    else
    localStorage.setItem('array', JSON.stringify(new_array))         
}
