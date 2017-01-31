import {createNewSchedule} from './actions';
import equals from './utils/compareArrays';

const subscribe = (store, schedule, items) => {
  let prevItems = [];

  store.subscribe(() => {
    const state = store.getState();

    if(!equals(state.items)(prevItems)) {
      items.update(state.items);
      schedule.update(state.items);

      prevItems = state.items;

      store.dispatch(createNewSchedule(schedule.getAll().schedule))
    }
  })
}

export default subscribe;