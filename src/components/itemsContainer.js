import React from 'react';
import Item from './item';
import generateKey from '../utils/keyGenerator';

class ItemsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {droped: false}
  }

  handleClick() {
    const addItem = this.props.addItem;
    const keySize = 10;

    if(this.refs.input.value) {
      addItem({
        id: generateKey(keySize), 
        body: this.refs.input.value
      });
      
      this.refs.input.value = '';
    }
  }

  switchDrop() {
    this.setState({droped: !this.state.droped})
  }

  render() {
    const {items, deleteItem} = this.props;
    const className = "interface" + (this.state.droped ? " droped" : "");

    return (
      <div className="interfaceWrapper">
        <a href="#" onClick={() => this.switchDrop()}>Show itemsList</a>

        <div className={className}>
          <form onSubmit={() => this.handleClick()}>
            <input type="text" ref="input"/>
            <button type="submit">Add</button>
          </form>

          <div className="itemsList">
            {items.map(el => {
              return <Item body={el.body} id={el.id} key={el.id} onDelete={deleteItem}/>
            })}
          </div>
        </div>
      </div>
    )
  }
  
}

export default ItemsContainer;