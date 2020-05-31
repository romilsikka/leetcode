  function twoSumBest(array, target) {
    let storage = new Map();
    let length = array.length - 1;
    for (let i = 0; i <= length; i++) {
      let currentItem = array[i];
      let compliment = target - currentItem
      if (storage.has(compliment)) {
        return [storage.get(compliment), i];
      } else {
        storage.set(currentItem, i);
      }
    }
    return "No result found";
  }
  let result = twoSumBest([2,234,346,3], 349);
