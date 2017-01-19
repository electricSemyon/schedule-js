import React from 'react';
import ReactDOM from 'react-dom';

import NotesContainer from './noteContainer.js';
import ItemsContainer from './itemsContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {items: props.items}
  }

  deleteItem(id) {
    const newArr = this.state.items.filter((el) => el.id != id);
    this.setState({items: newArr});
    this.props.update(newArr);
  }

  addItem(obj) {
    const newArr = {items: [
      ...this.state.items,
      obj
    ]};

    this.setState(newArr)
    this.props.update(newArr);
  }

  render() {
    return (
      <div>
        <ItemsContainer 
          items = {this.state.items}
          deleteItem = {this.deleteItem.bind(this)}
          addItem = {this.addItem.bind(this)}/>

        <NotesContainer 
          notes={this.props.notes}
          day={this.props.day}/>
      </div>
    )
  }
}

export default App;
