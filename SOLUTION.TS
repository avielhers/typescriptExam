class task {
    public id: number
    public text: string
  
      constructor (id:number,text:string){
          this.id = id;
          this.text = text;
      }
  }

  let array:string []=[]
const btn = document.querySelector('#todo-save')
const btn_del = document.querySelector('#todo-delall')
let list1 = document.querySelector('#todo-list')

btn_del.addEventListener("click", () => {
    localStorage.clear()
    array = []
    list1.innerHTML ="";
})

function mark(n){
    n.parentElement.classList.add('done')
    console.log(n.parentElement)
}




btn.addEventListener("click", () => {
    let text:string = (<HTMLInputElement>document.querySelector('#todo-item')).value;
    const todo_mis:object = new task (0,text)

  /*  if(localStorage.length !=0)
    id = JSON.parse(localStorage.array).length;
    else
    id=0;*/

    array.push(todo_mis)
    console.log(todo_mis)
    localStorage.setItem('array', JSON.stringify(array))
    create(todo_mis)
})

function create(item){
    let div = document.createElement('div')
    div.classList.add('todo-row')
    // div.classList.add('todo-item')
    let pText = document.createElement('p')
    pText.classList.add('todo-item')
    let btnPlus = document.createElement('button')
    btnPlus.classList.add('todo-ok')
    btnPlus.innerText = 'v'
    pText.innerText = item.text
    div.appendChild(pText)
    div.appendChild(btnPlus)
    list1.appendChild(div)

    btnPlus.addEventListener("click", (e) => {
        mark(e.target)
    })
}

window.onload = () => {
    if(localStorage.length !=0){
        let item = (JSON.parse(localStorage.array))
        for (const iterator of item) {
            array.push(iterator)
            create(iterator)        
        }
    }
}