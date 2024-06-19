# Todo App

A simple, interactive, and visually appealing Todo App built with React and Tailwind CSS. This app allows users to add, edit, delete, and mark tasks as completed.

## Features

- Add new tasks
- Edit existing tasks inline
- Delete tasks
- Mark tasks as completed
- Responsive and visually appealing design

## Demo

![Todo App Screenshot](/src/assets/screenshot.png)

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/putluruaravindareddy/todo-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```


### Running the App

1. Start the development server:
    ```bash
    npm run dev
    ```

2. Open your browser and go to `http://localhost:5173/` to see the app in action.

## Usage

1. Enter a task in the input field and click "Add Task" to add it to the list.
2. Click the checkbox to mark a task as completed.
3. Click "Edit" to modify a task. Make changes and click "Save" to update the task or "Cancel" to discard changes.
4. Click "Delete" to remove a task from the list.

## Project Structure

The project is structured as follows:

```
todo-app/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── TaskItem.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
├── package.json
└── ...
```


- `public/`: Contains the static files, including the main HTML file.
- `src/`: Contains the React components and main application logic.
- `components/`: Contains reusable React components, such as `TaskItem.js`.
- `App.js`: The main React component that renders the Todo App.
- `index.js`: The entry point of the React application.

## How It's Made

### React

React is a JavaScript library for building user interfaces. It allows us to create reusable components, manage the state efficiently, and handle user interactions easily.

### Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It provides a set of CSS classes that can be composed to build any design directly in the markup.

### UUID

UUID (Universally Unique Identifier) is used to generate unique IDs for each task. This ensures that each task can be uniquely identified and manipulated.

### Key Components and Logic

1. **Task Management**:
    - The tasks are managed using React's `useState` hook.
    - Each task is represented as an object with `task` and `id` properties.
    - Tasks can be added, edited, deleted, and marked as completed.

2. **Add Task**:
    - The `addTodo` function adds a new task to the list by updating the state with a new task object.

3. **Edit Task**:
    - The `editTodo` function updates an existing task by mapping over the tasks and replacing the task with the matching `id`.

4. **Delete Task**:
    - The `deleteTodo` function removes a task from the list by filtering out the task with the matching `id`.

5. **Mark Task as Completed**:
    - The `checkTodo` function toggles the completion status of a task by updating the `task` property.

### Code Example

Here's a brief code example of the main components:

```jsx
    const [todoValue, setTodoValue] = useState("");
const [tasks, setTasks] = useState([{ task: "Hello", id: uuidv4() }]);

const handleChange = (event) => setTodoValue(event.target.value);

const addTodo = () => {
    if (todoValue.trim() === "") return;
    setTasks([...tasks, { task: todoValue, id: uuidv4() }]);
    setTodoValue("");
};

const deleteTodo = (id) => setTasks(tasks.filter(task => task.id !== id));

const editTodo = (id, newValue) => setTasks(tasks.map(task =>
    task.id === id ? { ...task, task: newValue } : task
));

const toggleComplete = (id) => setTasks(tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
));

```