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
      currentURL:'https://images.all-free-download.com/images/graphiclarge/food_picture_02_hd_pictures_167520.jpg',
      currentName:'sandwich',
      items: []
    }
  }

  componentDidMount() {
    this.getFoodata();
  }

  getFoodata(){
    $.ajax({
      url: '/food',
      method:'GET',
      contentType:'applicatoin/json',
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

  submitSearch(e){
    e.preventDefault();
    console.log('clicked')
    $.ajax({
      url:'/food',
      method:'POST',
      contentType:'application/json',
      data: JSON.stringify({
        name:this.state.currentName,
        url:this.state.currentURL
      }),
      success: (res) =>{
        console.log(res);
      },
      error:(err) =>{
        console.log('err',err)
      }
    })
  }

  render () {
    return (
    <div className="app">
      <Header/>
      <Search search={this.submitSearch.bind(this)}/>
      <div className="row m-5 content">
        <div className="col-md-8 container">
          <Image image = {this.state.currentURL}/>
          <Ingredients/>
        </div>
        <div className = "col-md-4 aside">
          <FoodList foodLists ={this.state.items}/>
        </div>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));