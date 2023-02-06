import { togol_Brand } from "../actionTypes/actionTypes";
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
      if (!state.filter.brand.includes(action.payload)) {
        return {
          ...state,
          filter: {
            brand: [...state.filter.brand, action.payload],
            stoke: state.filter.stoke,
          },
        };
      } else {
        return {
          ...state,
          filter: {
            brand: [state.filter.brand.filter((b) => b !== action.payload)],
            stoke: state.filter.stoke,
          },
        };
      }

    case "toggle_stock":
      return {
        ...state,
        filter: {
          brand: state.filter.brand,
          stoke: !state.filter.stoke,
        },  
      };

    default:
      return state;
  }
};
