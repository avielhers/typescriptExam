var task = /** @class */ (function () {
    function task(text) {
        this.text = text;
    }
    return task;
}());
var btn = document.querySelector('#todo-save');
var btn_del = document.querySelector('#todo-delall');
var btn_del_comp = document.getElementById('todo-delcom');
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
btn.addEventListener("click", function () {
    var text = document.querySelector('#todo-item').value;
    var todo_mis = new task(text);
    arr.push(todo_mis);
    create(todo_mis);
    localStorage.setItem('array', JSON.stringify(arr));
});
btn_del.addEventListener("click", function () {
    var delete_all = confirm("Delete tasks?");
    if (delete_all) {
        localStorage.clear();
        arr = [];
        list.innerHTML = "";
    }
});
btn_del_comp.addEventListener("click", function () {
    var array_list = document.querySelectorAll('.todo-row');
    var ar = [];
    var b = 0;
    for (var _i = 0, array_list_1 = array_list; _i < array_list_1.length; _i++) {
        var iterator = array_list_1[_i];
        if (iterator.lastElementChild.classList == 'todo-cx') {
            ar.push(b);
            iterator.remove();
        }
        b += 1;
    }
    var new_array = JSON.parse(localStorage.getItem("array"));
    for (var o = ar.length - 1; o >= 0; o--)
        new_array.splice(ar[o], 1);
    createarr(new_array);
    arr = new_array;
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
function createarr(new_array) {
    if (new_array.length == 0)
        localStorage.clear();
    else
        localStorage.setItem('array', JSON.stringify(new_array));
}
