import { togol_Brand, togol_stock } from "../actionTypes/actionTypes";
const intuilValue = {
  filter: {
    brand: [],
    stoke: false,
  },
  keywords: "",
};

export const filterReducer = (state = intuilValue, action) => {
  switch (action.type) {
    case togol_Brand:
      return {
        ...state,
        filter: {
          brand: [...state.filter.brand, action.paylode],
          stoke: state.filter.stoke,
        },
        keywords: "",
      };
    case togol_stock:
      return;

    default:
      return state;
  }
};
