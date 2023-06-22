import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import MealDetails from './components/MealDetails/MealDetails'
import Shop from './components/Shop/Shop'

function App() {
  const [count, setCount] = useState(0)
  const [searchText, setSearchText] = useState('s')
  const handleSearch = (text) => {
    if (!text) {
      setSearchText('s')
    } else {
      setSearchText(text)
    }
  }
  return (
    <div className="App">
      <Header handleSearch={handleSearch}></Header>
      <Shop searchText={searchText} setSearchText={setSearchText}></Shop>
    </div>
  )
}

export default App
