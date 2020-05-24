import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import Header from './components/Header.jsx';
import FoodList from './components/FoodList.jsx';
import Image from './components/Image.jsx';
import Ingredients from './components/Ingredients.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentURL:'',
      currentName:'',
      items: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items',
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (
    <div className="app">
      <Header/>
      <Search/>
      <div className="row m-5 content">
        <div className="col-md-8 container">
          <Image image = {this.state.currentURL}/>
          <Ingredients/>
        </div>
        <div className = "col-md-4 aside">
          <FoodList/>
        </div>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));