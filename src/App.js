import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import './App.css';

class App extends Component {
  state = { 
    counters: [
        {id:1, value:0},
        {id:2, value:0},
        {id:3, value:0},
        {id:14, value:0}
        
    ]
    
 }; 
    handleIncrement = counter => {
      const counters = [... this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });
      console.log(counter);
  }

  handleDecrement = counter => {
    const counters = [... this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index] <= 0){
      counters[index].value--;
    }
    alert("Out of Range!");
    
    this.setState({ counters });
    console.log(counter);
}

  handleReset = () => {
      const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
        
  });
  this.setState({ counters });
  };
  handleDelete = (counterId) => {
      const counters = this.state.counters.filter(c => c.id !== counterId);
      this.setState({ counters });
      console.log("Event handler called",counterId);
  };
  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <main className='container'>
          
          <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} onDecrement={this.handleDecrement}/>
        </main>
      </React.Fragment>
    );
  }
}
 


export default App;
