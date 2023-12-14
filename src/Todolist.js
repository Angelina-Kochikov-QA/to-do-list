import { Component } from "react";
import check from './checklist.png'
import checklist from './checklist_7293517.png'

export class Todolist extends Component{
    state = {
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    addItem(input) {
        if (input === '') {
            alert ('Please enter a new task')
        } else {
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ""})
    }
}

deleteItem() {
    let listArray = this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})

}

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit(e) {
        e.preventDefault();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <img src={checklist} width="120px" alt="checklist" />
            <input type="text" 
            placeholder="Add a new task" 
            onChange={(e) => {this.onChangeEvent(e.target.value)}}
            value={this.state.userInput}/> 
        </div>
        <div>
            <div className="container">
            <button className="btn-add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
            </div>
            <ul>
                {this.state.toDoList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}> <img src={check} width="40px" alt="check"/>{item}</li>
                ))}
            </ul>
            <div className="container">
            <button className="btn-delete" onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>
            </div>
        </div>
        </form>
        </div>
        )
        
    }
}

