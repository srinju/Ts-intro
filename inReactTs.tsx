
import './App.css'

function App() {
  

  return (
    <div>
      <Todo title='going to the gym'  description='go to gym from 7 am to 9 am ' />
    </div>
  )
}

interface TodoProps {
  title : string,
  description : string,
  done ?: boolean
}

function Todo(props : TodoProps) {
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>
}

export default App
