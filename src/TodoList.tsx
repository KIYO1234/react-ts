// 一つのコンポーネントで完結
import React, {useState} from 'react'

interface Todo {
    id: number;
    title: string;
    isDone: boolean;
}

const todos: Todo[] = [
    // {
    //     id: 1,
    //     title: '会議',
    //     isDone: false
    // },
    // {
    //     id: 2,
    //     title: '出張',
    //     isDone: false
    // },
    // {
    //     id: 3,
    //     title: '面接',
    //     isDone: true
    // },
]

const TodoList: React.FC = () => {
    const [inputTitle, setInputTitle] = useState('')
    const [id, setId] = useState(1)
    const [tasks, setTasks]  = useState(todos)

    
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }
    
    const addTodo = (newTask: Todo) => {
        console.log(newTask)
        setTasks([...tasks, newTask])
    }
    const handleSubmit = () => {
        const newTask: Todo = {
            title: inputTitle,
            id: id,
            isDone: false,
        }
        addTodo(newTask)
        setId(id + 1)
        setInputTitle('')
        console.log(todos)
    }
    const deleteTodo = (selectedTask: Todo) => {
        setTasks(tasks.filter(task => task.id !== selectedTask.id))
    } 

    return(
        <React.Fragment>
            <h1>Todo List with TypeScript</h1>
            <input type="text" value={inputTitle} onChange={handleInputChange} />
            <button onClick={handleSubmit}>追加</button>
            <ul>
                {tasks.map(item => 
                    <li>【ID】 {item.id} 【TASK】 {item.title}<button onClick={() => deleteTodo(item)}>削除</button></li>
                )}
            </ul>
        </React.Fragment>

    )
}

export default TodoList