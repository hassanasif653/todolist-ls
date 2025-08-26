var todos = JSON.parse(localStorage.getItem("todos")) || [];

var updateButton = document.getElementById("update-btn");
var addButton = document.getElementById("add-btn");
var editIndex = null;

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo() {
  var inputElement = document.getElementById("todo");

  if (inputElement.value === '') {
    alert("Please write something!");
    return;
  }

  if (editIndex === null) {
    todos.push(inputElement.value);
  } else {
    todos[editIndex] = inputElement.value;
    editIndex = null;
    addButton.style.display = "inline-block";
    updateButton.style.display = "none";
  }

  inputElement.value = "";
  saveToLocalStorage();
  showList();
}

function showList() {
  var listItems = document.getElementById("todo-list");
  listItems.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {
    listItems.innerHTML += `
      <li> 
        <span>${todos[i]}</span>
        <div class="actions">
          <button onclick="editTodo(${i})" title="Edit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M535.6 85.7C513.7 63.8 478.3 63.8 456.4 85.7L432 110.1L529.9 208L554.3 183.6C576.2 161.7 576.2 126.3 554.3 104.4L535.6 85.7zM236.4 305.7C230.3 311.8 225.6 319.3 222.9 327.6L193.3 416.4C190.4 425 192.7 434.5 199.1 441C205.5 447.5 215 449.7 223.7 446.8L312.5 417.2C320.7 414.5 328.2 409.8 334.4 403.7L496 241.9L398.1 144L236.4 305.7zM160 128C107 128 64 171 64 224L64 480C64 533 107 576 160 576L416 576C469 576 512 533 512 480L512 384C512 366.3 497.7 352 480 352C462.3 352 448 366.3 448 384L448 480C448 497.7 433.7 512 416 512L160 512C142.3 512 128 497.7 128 480L128 224C128 206.3 142.3 192 160 192L256 192C273.7 192 288 177.7 288 160C288 142.3 273.7 128 256 128L160 128z"/></svg>
          </button>
          <button onclick="deleteTodo(${i})" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/></svg>
          </button>
        </div>
      </li>`;
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveToLocalStorage();
  showList();
}

function editTodo(index) {
  var inputElement = document.getElementById("todo");
  inputElement.value = todos[index];
  editIndex = index;
  addButton.style.display = "none";
  updateButton.style.display = "inline-block";
}
showList();
