var task = /** @class */ (function () {
    function task(id, text) {
        this.id = id;
        this.text = text;
    }
    return task;
}());
var array = [];
var btn = document.querySelector('#todo-save');
var btn_del = document.querySelector('#todo-delall');
var list1 = document.querySelector('#todo-list');
btn_del.addEventListener("click", function () {
    localStorage.clear();
    array = [];
    list1.innerHTML = "";
});
function mark(n) {
    n.parentElement.classList.add('done');
    console.log(n.parentElement);
}
btn.addEventListener("click", function () {
    var text = document.querySelector('#todo-item').value;
    var todo_mis = new task(0, text);
    /*  if(localStorage.length !=0)
      id = JSON.parse(localStorage.array).length;
      else
      id=0;*/
    array.push(todo_mis);
    console.log(todo_mis);
    localStorage.setItem('array', JSON.stringify(array));
    create(todo_mis);
});
function create(item) {
    var div = document.createElement('div');
    div.classList.add('todo-row');
    // div.classList.add('todo-item')
    var pText = document.createElement('p');
    pText.classList.add('todo-item');
    var btnPlus = document.createElement('button');
    btnPlus.classList.add('todo-ok');
    btnPlus.innerText = 'v';
    pText.innerText = item.text;
    div.appendChild(pText);
    div.appendChild(btnPlus);
    list1.appendChild(div);
    btnPlus.addEventListener("click", function (e) {
        mark(e.target);
    });
}
window.onload = function () {
    if (localStorage.length != 0) {
        var item = (JSON.parse(localStorage.array));
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var iterator = item_1[_i];
            array.push(iterator);
            create(iterator);
        }
    }
};
