const initialState = ["uno", "dos"];
const todoReducer = (state = initialState, action) => {
  let copy = [...state];
  switch (action.type) {
    case "ADD_LIST":
      copy.push(action.payload);
      return copy;

    case "RESET_LIST":
      return [];

    default:
      return state;
  }
};
export default todoReducer;
