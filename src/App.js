import {Component} from 'react'
import './App.css';
import Login from './components/Login';
import TodoForm from './components/TodoForm';
import EditTodoForm from './components/EditTodoForm';
import NavBar from './components/NavBar';
import MainContainer from './containers/MainContainer'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers/manageTodosAndUsers'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route} from 'react-router-dom';

const middleware = [thunk]

class App extends Component {

  render(){

    const store = createStore(
      rootReducer,
      compose(
        applyMiddleware(...middleware), 
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )


  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/login' component={Login}/>
        {/* <Route path='/:id' component={Todo} /> */}
        <Route exact path='/new' component={TodoForm} />
        <Route path='/' component={EditTodoForm} />
        <Route exact path='/' component={MainContainer}/>
      </Router>
    </div>
    </Provider>
  );
  }
}

export default App;
