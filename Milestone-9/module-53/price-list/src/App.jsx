import './App.css'
import Dashboard from './Dashboard/Dashboard'
import Gimemaker from './Gimemaker/Gimemaker'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Gimemaker />
      <Dashboard/>
    </div>
  )
}

export default App
