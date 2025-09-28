import './App.css'

// import UncontrolledForm from './lessons/UncontrolledForm'
// import Form from './lessons/Form'
// import ClassComponent from './problems/ClassComponent'
// import PureToJsx from './problems/PureToJsx'
import FuncComponent from './lessons/FuncComponent'
import { Context } from './lessons/hooks/Context'

function App() {
  return (
    <Context>
      {/* <ClassComponent />
      <PureToJsx /> */}
      {/* <UncontrolledForm /> */}
      <FuncComponent />
    </Context>
  )
}

export default App
