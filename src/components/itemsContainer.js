import React from 'react';
import ReactDOM from 'react-dom';

class ItemsContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {droped: false};
  }

  render() {
    const itemsCount = this.props.items.length;

    const items = itemsCount > 0 ? this.props.items : [];
    const lastItemId = itemsCount > 0 ? items[items.length-1].id : 0;

    const deleteItem = this.props.deleteItem;
    const addItem = this.props.addItem;

    const droped = this.state.droped;

    console.log(itemsCount)
    const list = itemsCount > 0 
      ? <ul>{
            items.map((el, i) => {
              return (
                <li key={el.id}>
                  {el.body}
                  <a  className="delete" 
                      href="#"
                      onClick={() => {
                        if(items.length > 1) 
                          deleteItem(el.id)
                  }}>Delete</a>
                </li>
              )
            })
          }</ul>
      : <div></div>

    return (
      <div className="itemsContainer ">
        <a  className="itemsList" href="#" 
            onClick={() => this.setState({droped: !droped})}>
          Schedule items list
        </a>

        <div className={("interface") + (droped ? " droped" : "")}>
          <input type="text" ref='input'/>
          <input type="button" value="Add" 
            onClick={() => {
                addItem({
                  body:this.refs.input.value, 
                  id:lastItemId + 1
                })
                this.refs.input.value = '';
              }
            }
          />

          {list}
        </div>
      </div>
    )
  }
}

export default ItemsContainer;
