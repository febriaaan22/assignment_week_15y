import { fetchControllerDeletey, fetchControllerGety, fetchControllerPosty, fetchControllerPuty } from './controllers/controllerMake'

import './App.css'

function App() {
  return (
    <>
      <button onClick={fetchControllerGety}>GET-Y</button>
      <button onClick={fetchControllerPosty}>POST-Y</button>
      <button onClick={fetchControllerPuty}>PUT-Y</button>
      <button onClick={fetchControllerDeletey}>DELETE-Y</button>
    </>
  )
}

export default App