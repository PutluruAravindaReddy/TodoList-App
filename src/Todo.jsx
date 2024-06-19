import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo() {
    const [todoValue, setTodoValue] = useState("");
    const [tasks, setTasks] = useState([{ task: "Hello", id: uuidv4(), completed: false }]);
    const [editId, setEditId] = useState(null); 
    const [editValue, setEditValue] = useState("");

    const handleChange = (event) => {
        setTodoValue(event.target.value);
    };

    const addTodo = () => {
        if (todoValue.trim() === "") return; 
        setTasks((prevTasks) => [...prevTasks, { task: todoValue, id: uuidv4(), completed: false }]);
        setTodoValue("");  
    };

    const deleteTodo = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const startEditing = (id, currentTask) => {
        setEditId(id);
        setEditValue(currentTask);
    };

    const handleEditChange = (event) => {
        setEditValue(event.target.value);
    };

    const saveEdit = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, task: editValue } : task
            )
        );
        setEditId(null);
        setEditValue("");
    };

    const cancelEdit = () => {
        setEditId(null);
        setEditValue("");
    };

    return (
        <div className="max-w-xl mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">Todo App</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    value={todoValue}
                    onChange={handleChange}
                    placeholder="Enter your task"
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <button
                    onClick={addTodo}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-md"
                >
                    Add Task
                </button>
            </div>
            <ul className="divide-y divide-gray-300">
                {tasks.map((eachTask) => (
                    <li
                        key={eachTask.id}
                        className={`flex items-center justify-between p-3 ${eachTask.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
                    >
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={eachTask.completed}
                                onChange={() => toggleComplete(eachTask.id)}
                                className="h-6 w-6 mr-3 rounded-full border-gray-300 focus:ring focus:border-blue-300"
                            />
                            {editId === eachTask.id ? (
                                <input
                                    type="text"
                                    value={editValue}
                                    onChange={handleEditChange}
                                    className="flex-grow px-2 w-[41%] lg:w-[20rem] py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                                />
                            ) : (
                                <span className="text-lg">{eachTask.task}</span>
                            )}
                        </div>
                        <div>
                            {editId === eachTask.id ? (
                                <div className="flex">
                                    <button
                                        onClick={() => saveEdit(eachTask.id)}
                                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2 rounded-lg"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <button
                                        onClick={() => startEditing(eachTask.id, eachTask.task)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-3 rounded-lg"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(eachTask.id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
