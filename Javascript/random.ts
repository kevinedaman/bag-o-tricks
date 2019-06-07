  // gets random int between two numbers.
  const getRandomInt = (max: number, min: number = 0) => {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt)) + minInt;
  }

  // returns a random item from the array
  const findRandomItem = (array: any) => {
    const arrayIndex = getRandomInt(0, array.length);
    return array[arrayIndex];
  }

  // sorts items in array randomly
  export const sortItemsRandomly = (array: any) => {
    const arr = array.slice();
    let length = arr.length;

    while(length){
        const i = Math.floor(Math.random() * length--);
        const temp = arr[length];
        arr[length] = arr[i];
        arr[i] = temp;
    }

    return arr;    
  }