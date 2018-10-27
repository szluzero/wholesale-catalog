import React, { Component } from 'react';
import Cards from './items/cards.json'
import Apparel from './items/apparel.json'
import Pins from './items/pins.json'
import './style.css'
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
     // 1 = intro, 2 = cards 3 = apparel 4 = pins
     page: 1
   }
  }

  changePage(num) {
    // here you know which component is that, so you can call parent method
    this.setState({
      page: num
    })
  }

  render() {
    if (this.state.page == 1) {
      return(
        <div class="site">
        <div class="container-fluid">
        <div class="sidenav">
          <img class="img-responsive logo" src="./images/cafelogo.webp" />
          <div class="btm-border">
          <a href="#" onClick={() => this.changePage(2)}>CARDS</a>
          </div>
          <div class="btm-border">
          <a href="#" onClick={() => this.changePage(3)}>APPAREL</a>
          </div>
          <div class="btm-border">
          <a href="#" onClick={() => this.changePage(4)}>PINS</a>
          </div>
        </div>
        <div class="panel panel-default">
        <div class="panel-body">
        <div class="paneltext"> CAFE DE YUME </div>
        </div>
        </div>
        </div>
        </div>
      )
    } else {
      if (this.state.page == 2) {
        var items = [];
        Object.keys(Cards).forEach(function(key) {
          items.push(Cards[key]);
        });
      }
      if (this.state.page == 3) {
        var items = [];
        Object.keys(Apparel).forEach(function(key) {
          items.push(Apparel[key]);
        });
      }
      if (this.state.page == 4) {
        var items = [];
        Object.keys(Pins).forEach(function(key) {
          items.push(Pins[key]);
        });
      }
      return(
          <div class="site">
          <div class="container-fluid">
          <div class="sidenav">
            <img class="img-responsive logo" src="./images/cafelogo.webp" />
            <div class="btm-border">
            <a href="#" onClick={() => this.changePage(2)}>CARDS</a>
            </div>
            <div class="btm-border">
            <a href="#" onClick={() => this.changePage(3)}>APPAREL</a>
            </div>
            <div class="btm-border">
            <a href="#" onClick={() => this.changePage(4)}>PINS</a>
            </div>
          </div>
          <div class="panel panel-default">
          <div class="panel-body">
          <div class="paneltext"> CAFE DE YUME </div>
          </div>
          </div>
          <div class="item-area">
            {items.map(item =>
              <div class="item-border">
              <div id='items'>
                <img class="img-responsive" src={item.Img} />
                <div>
                <p>{item.Name}</p>
                <p>{item.Price}</p>
                <p>{item.Description}</p>
                </div>
                {/* <hr />*/}
            </div>
            </div>)}
         </div>
         </div>
         </div>
      );
    }
  }
}
export default App;
