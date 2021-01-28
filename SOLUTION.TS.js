var task = /** @class */ (function () {
    function task(id, text) {
        this.id = id;
        this.text = text;
    }
    return task;
}());
var array = [];
var btn = document.querySelector('#todo-save');
btn.addEventListener("click", function () {
    var text = document.querySelector('#todo-item').value;
    var todo_mis = new task(0, text);
    /*  if(localStorage.length !=0)
      id = JSON.parse(localStorage.array).length;
      else
      id=0;*/
    array.push(todo_mis);
    localStorage.setItem('array', JSON.stringify(array));
    // create(x)
});
