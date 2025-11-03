document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('maintenance-form');
    const taskList = document.getElementById('task-list');

    // Load saved tasks from localStorage when the page is loaded
    showTasks();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const taskInput = document.getElementById('task');
        const dateInput = document.getElementById('date');

        const task = taskInput.value;
        const date = dateInput.value;

        if (task && date) {
            // Add task to list
            addTaskToList(task, date);
            // Save task in localStorage
            saveTask(task, date);

            // Clear input fields
            taskInput.value = '';
            dateInput.value = '';
        }
    });