import React from 'react';
import Item from './item';
import generateKey from '../utils/keyGenerator';

class ItemsContainer extends React.Component {

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

  render() {
    const {items, deleteItem} = this.props;

    return (
      <div className="interface">
        <input type="text" ref="input"/>
        <input type="button" onClick={() => this.handleClick()}/>

        <div className="itemsList">
          {items.map(el => {
            return <Item body={el.body} id={el.id} key={el.id} onDelete={deleteItem}/>
          })}
        </div>
      </div>
    )
  }
  
}

export default ItemsContainer;