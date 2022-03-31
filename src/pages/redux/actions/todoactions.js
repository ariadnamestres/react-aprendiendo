export const addList = (taski) => {
  return {
    type: "ADD_LIST",
    payload: taski,
  };
};
export const resetList = () => {
  return {
    type: "RESET_LIST",
  };
};
