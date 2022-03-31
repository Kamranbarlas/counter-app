import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value:this.props.counter.value,
        // id : this.props.id,
        tags:[]
        // tags: ['tag1','tag2','tag3']
    };
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement = e => {
    //     console.log(e);
    //     this.setState({value: this.state.value + 1})
    //     console.log("Increment Handled", this.state.value);
    // }

    // doHandleIncrement = () => {
    //     this.handleIncrement({id : 1})
    // }

    // renderTags(){
    //     if (this.state.tags.length === 0) return <p>There are no render Tags</p>;

    //     return <ul>{this.state.tags.map(tag => <li>{tag}</li>)}</ul>;
    // }
    render() { 
    console.log("props",this.props);
        return (
            <div>
                <h4>{this.props.counter.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={ () => this.props.onDecrement(this.props.counter)} className="btn-secondary btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;