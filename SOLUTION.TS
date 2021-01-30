class task {
    public text: string
  
     public constructor (text:string){
          this.text = text;
      }
  }

const btn = document.querySelector('#todo-save')
const btn_del = document.querySelector('#todo-delall')
const btn_del_comp = document.querySelector('#todo-delcom')
const list = document.querySelector('#todo-list')
let arr = []