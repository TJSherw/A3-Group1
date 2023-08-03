// Get references to elements
const todoInput = document.getElementById('todo-input');

const addButton = document.getElementById('add-button');

const todoList = document.getElementById('todo-list');

// Event listener for the Add button
addButton.addEventListener('click', function() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        todoInput.value = '';
    }
});

// Function to add a new to-do item
function addTodoItem(text) {

    // Create a new list item for the to-do
    const listItem = document.createElement('li');

    // Create a checkbox for the to-do
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span to display the to-do text
    const todoTextSpan = document.createElement('span');
    todoTextSpan.textContent = text;

    // Create a delete button for the to-do
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    // Add event listener for the checkbox
    checkbox.addEventListener('change', onCheckboxChange);

    // Add event listener for the delete button
    deleteButton.addEventListener('click', deleteTodoItem);

    // Append checkbox, to-do text, and delete button to the list item
    listItem.appendChild(checkbox);

    listItem.appendChild(todoTextSpan);

    listItem.appendChild(deleteButton);

    // Append the new to-do item to the todoList
    todoList.appendChild(listItem);
}

// Event listener for checkbox change
function onCheckboxChange(event) {
    
    // Check if the checkbox is checked or unchecked
    // Apply appropriate styles and move the item to the bottom of the list
    const checkbox = event.target;
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.classList.add('checked'); // Apply the CSS class for line-through style
        todoList.appendChild(listItem); // Move the item to the bottom of the list

       // Play the 'ding' sound by calling the createDingSound function from ding.js
       createDingSound();
    } else {
        listItem.classList.remove('checked'); // Remove the line-through style
    }
}

// Function to delete a to-do item
function deleteTodoItem(event) {
    // Remove the respective to-do item from the list
    const deleteButton = event.target;
    const listItem = deleteButton.parentElement;
    todoList.removeChild(listItem);
}
