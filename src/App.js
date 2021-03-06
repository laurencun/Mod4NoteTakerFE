import {Component} from 'react'
import './App.css';
import Login from './components/Login';
import TodoForm from './components/TodoForm';
import EditTodoForm from './components/EditTodoForm';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer'
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {

  render(){


  return (
 
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/login' component={Login}/>
        {/* <Route path='/:id' component={Todo} /> */}
        <Route exact path='/new' component={TodoForm} />
        <Route path='/edit/:id' component={EditTodoForm} />
        <Route exact path='/' component={MainContainer}/>
      </Router>
      </div>

  );
  }
}

export default App;
