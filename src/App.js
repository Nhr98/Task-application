import { useState } from 'react'
import Header from '../src/components/Header'
import Tasks from '../src/components/Tasks'
import AddTask from '../src/components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb, 5th at 2:30pm',
            reminder: true,
        },{
            id: 2,
            text: 'Meeting at School',
            day: 'Feb, 6th at 1:30pm',
            reminder: true,
        },{
            id: 3,
            text: 'Food Shopping',
            day: 'Feb, 5th at 2:30pm',
            reminder: false,
        }
    ]
    
)

// add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

// function delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show here !'}
    </div>
  );
}


export default App;
