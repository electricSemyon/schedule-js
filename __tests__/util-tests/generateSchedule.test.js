import generateSchedule from '../../src/utils/generateSchedule.js';
import itemsJSON from '../fixtures/scheduleItems.json';

test('generates schedule, based on array of items', () => {
  const schedule = generateSchedule(itemsJSON.items);

  expect(schedule).toMatchSnapshot();
});
