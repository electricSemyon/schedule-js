import generate from '../utils/generateSchedule';

export default class Schedule {
  constructor(items) {
    const lsItem = localStorage.getItem('schedule');

    if(!localStorage.getItem('schedule') 
      || !this.isActual())
      this.update(items);
    else {
      this.schedule = JSON.parse(lsItem).schedule;
      this.date = JSON.parse(lsItem).date;
    }
  }

  isActual() {
    const currentDate = new Date().getDate();
    const currentDay = new Date().getDay();
    const lsItem = localStorage.getItem('schedule');
    const savedDate = JSON.parse(lsItem) ? JSON.parse(lsItem).date : new Date();

    return !(new Date(savedDate).getDay() === currentDay
      && new Date(savedDate).getDate() != currentDate)
  }

  update(items) {
    this.schedule = generate(items);
    this.date = new Date();

    localStorage.setItem('schedule', JSON.stringify({
      date: this.date,
      schedule: this.schedule
    }));
  }

  getAll() {
    return {
      schedule: this.schedule,
      date: this.date
    }
  }
}