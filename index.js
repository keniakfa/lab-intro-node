class SortedList {
  constructor(){
    this.items = [];
    this.length= this.items.length
  };

  add(item) {
    this.items.push(item);
    this.length++
    this.items.sort((a, b) => a - b);
  
    return this.items

  }

  get(pos) {
    if (!this.length || pos > this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
    
  }

  max() {
    if (!this.length){
    throw new Error('EmptySortedList');
    }
    return this.items[this.length-1]
  }

  min() {

    if (!this.length){
      throw new Error('EmptySortedList');
      }
      return this.items[0]
    
  }
  sum() {}

  avg() {}

 
}

module.exports = SortedList;

