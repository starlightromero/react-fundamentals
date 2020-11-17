import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Title from './Components/Title/Title'
import POPOSList from './Components/POPOSList/POPOSList'
import POPOSDetails from './Components/POPOSList/POPOSSpace/POPOSDetails/POPOSDetails'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <Router className='App'>
      <Title />
      <Route exact path='/' component={POPOSList} />
      <Route exact path='/about' component={About} />
      <Route path='/details/:id' component={POPOSDetails} />
      <Footer />
    </Router>
  )
}

export default App
