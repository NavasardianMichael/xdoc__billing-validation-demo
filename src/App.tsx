import { Typography } from 'antd'
import { Validation } from './components/Validation'
import './App.css'

function App() {

  return (
    <>
      <Typography.Title style={{textAlign: 'center'}} level={2}>Billing Validation Demo</Typography.Title>
      <Validation />
    </>
  )
}

export default App
