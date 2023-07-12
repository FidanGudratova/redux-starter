let addGood = (myId) => {

   return {
      type: 'ADD_GOOD_TO_CART',
      payload: {
        id: myId
        }
    };

}
export default addGood; 
