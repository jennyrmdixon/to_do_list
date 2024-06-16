export const uId= () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const findById  = (array, idNum) => {
    return array.findIndex(x => x.id === idNum);
    
  }