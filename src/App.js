import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateBlog from './components/CreateBlog'

function App() {
  return (
    <Router>
      <main className='text-gray-900 body-font'>
        <Navbar />
        <div className=' p-5 max-w-2xl mt-10 mb-10 mr-auto ml-auto'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={CreateBlog} />
          </Switch>
        </div>
      </main>
    </Router>
  )
}

export default App
