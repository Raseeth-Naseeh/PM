import * as Router from 'react-router-dom'
import * as RoutePage from 'src/routes'
import './App.css'

function App() {
  return (
    <Router.BrowserRouter>
      <RoutePage.RoutePath />
    </Router.BrowserRouter>
  )
}

export default App
