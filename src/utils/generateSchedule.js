const generateSchedule = (items) => {
  const currentShedule = [];

  for(let i = 0; i < 7; i++) {
    currentShedule[i] = {
      body: items[Math.floor(Math.random()*items.length)].body,
      id: i
    };
  }

  return currentShedule;
}

export default generateSchedule;
