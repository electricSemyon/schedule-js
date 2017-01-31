import { connect } from 'react-redux';
import NoteContainer from '../components/noteContainer';

const mapStateToProps = (store) => ( {schedule: store.schedule} );

export default connect(mapStateToProps)(NoteContainer); 
