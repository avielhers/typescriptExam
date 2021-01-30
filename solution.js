var task = /** @class */ (function () {
    function task(text) {
        this.text = text;
    }
    return task;
}());
var btn = document.querySelector('#todo-save');
var btn_del = document.querySelector('#todo-delall');
var btn_del_comp = document.querySelector('#todo-delcom');
var list = document.querySelector('#todo-list');
var arr = [];
window.onload = function () {
    if (localStorage.length != 0) {
        var item = (JSON.parse(localStorage.array));
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var iterator = item_1[_i];
            arr.push(iterator);
            create(iterator);
        }
    }
};
btn_del.addEventListener("click", function () {
    var delete_all = confirm("Delete tasks?");
    if (delete_all) {
        localStorage.clear();
        arr = [];
        list.innerHTML = "";
    }
});
btn.addEventListener("click", function () {
    var text = document.querySelector('#todo-item').value;
    var todo_mis = new task(text);
    arr.push(todo_mis);
    create(todo_mis);
    localStorage.setItem('array', JSON.stringify(arr));
});
function create(item) {
    var div = document.createElement('div');
    div.classList.add('todo-row');
    var pText = document.createElement('p');
    pText.classList.add('todo-item');
    var btn_done = document.createElement('button');
    btn_done.classList.add('todo-ok');
    btn_done.innerText = 'v';
    pText.innerText = item.text;
    div.appendChild(pText);
    div.appendChild(btn_done);
    list.appendChild(div);
    btn_done.addEventListener("click", function (e) {
        mark(e.target);
    });
}
function mark(n) {
    (n.parentElement.firstElementChild).classList.add('done');
    n.classList.remove("todo-ok");
    n.classList.add("todo-cx");
}
