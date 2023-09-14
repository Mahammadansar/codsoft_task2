
        
        function addTask() {
            const taskInput = document.getElementById("task");
            const taskText = taskInput.value.trim();

            if (taskText !== "") {
                const taskList = document.getElementById("taskList");
                const taskItem = document.createElement("li");
                taskItem.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
                taskList.appendChild(taskItem);

                // Save tasks to local storage
                saveTasksToLocalStorage(taskText);

                taskInput.value = "";
            }
        }

        // Function to delete a task
        function deleteTask(button) {
            const taskList = document.getElementById("taskList");
            const taskText = button.parentNode.innerText.trim();

            // Remove the task from the list
            taskList.removeChild(button.parentNode);

            // Remove the task from local storage
            removeTaskFromLocalStorage(taskText);
        }

        // Function to save tasks to local storage
        function saveTasksToLocalStorage(task) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Function to remove a task from local storage
        function removeTaskFromLocalStorage(task) {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks = tasks.filter((t) => t !== task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Load tasks from local storage on page load
        function loadTasks() {
            const taskList = document.getElementById("taskList");
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            tasks.forEach((task) => {
                const taskItem = document.createElement("li");
                taskItem.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
                taskList.appendChild(taskItem);
            });
        }

        // Call the loadTasks function on page load
        window.onload = loadTasks;
  