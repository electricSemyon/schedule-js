import { connect } from 'react-redux';
import ItemsContainer from '../components/itemsContainer';
import { addItem, deleteItem } from '../actions';

const mapStateToProps = (store) => {
  return ( {items: store.items} )
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer); 
