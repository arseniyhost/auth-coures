import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar';
import ListShop from './Components/ListContainer';
import { Provider } from 'react-redux';
import store from './store/store';
import ItemsModal from './Components/ItemsModal';
import { Container } from 'reactstrap';
import { loadUser } from './store/actions/authActions';
import { Route } from 'react-router-dom';
import AddRecipeContainer from './Components/AddRecipe/AddRecipeContainer';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <NavBar />
          <Container>
            <Route path="/recipes" render={() => {
              return <div>
                <ItemsModal />
                <ListShop />
              </div>
            }} />
            <Route path="/addrecipe" render={() => {
              return <AddRecipeContainer />
            }} />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
