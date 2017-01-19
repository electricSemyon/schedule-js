import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.js'

let itemsObj = localStorage.getItem('items');
let scheduleObj = localStorage.getItem('schedule');

const itemsIsReady = itemsObj === 'null' 
                    || itemsObj === null ? false : true;
const scheduleIsReady = scheduleObj === 'null'
                    || scheduleObj === null ? false : true;

const currentDay = new Date().getDay();

const items = itemsIsReady ? JSON.parse(itemsObj).items : [];

const parsedSchedule = scheduleIsReady 
                        ? JSON.parse(scheduleObj) 
                        : {};

const scheduleIsActual = Object.keys(parsedSchedule).length === 0
                          ? false
                          : (new Date(parsedSchedule.date).getDate() != new Date().getDate()
                            && new Date(parsedSchedule.date).getDay() === new Date().getDay())
                            ? false
                            : true;

const currentShedule = scheduleIsActual 
                        ? parsedSchedule.data
                        : createSchedule(items, (schedule) => {
                            localStorage.setItem('schedule', 
                              JSON.stringify({
                                data: schedule,
                                date: new Date()
                              }))
                          })

console.log(parsedSchedule)
console.log(currentShedule)

function createSchedule (items, callback) {
  const schedule = [];

  for(let i = 0; i < 7; i++) {
    schedule[i] = {
      ...(items[Math.floor(Math.random()*items.length)]),
      id: i
    }
  }

  callback(schedule);
  return schedule;
}

const update = (data) => {
  localStorage.setItem('items', JSON.stringify(data))
  localStorage.setItem('schedule', null)
  itemsObj = data;
}

export default ReactDOM.render(
  <App 
    notes={currentShedule}
    day={currentDay}
    update={update}
    items={items}
  />,
  document.getElementById('root')
)
