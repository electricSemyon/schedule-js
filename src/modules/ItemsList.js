export default class ItemsList {
  constructor(items) {
    if(!localStorage.getItem('items'))
      this.update(items);
    else
      this.update(JSON.parse(localStorage.getItem('items')));
  }

  update(items) {
    this.items = items;
    localStorage.setItem('items', JSON.stringify(items));
  }

  getAll() {
    return this.items;
  }
}