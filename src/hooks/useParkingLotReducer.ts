import { useReducer } from "react";
import { ParkingLot } from "../types/ParkingLot";
import { ActionType, reducerStateType } from "../types/ParkingLotReducer";

const initialState = {
  goodLots: [] as ParkingLot[],
  badLots: [] as ParkingLot[],
  parkingLots: [] as ParkingLot[],
  nextOffset: 5,
};

function reducer(state: reducerStateType, action: ActionType) {
  switch (action.type) {
    case "ADD_GOOD_LOT":
      return { ...state, goodLots: [...state.goodLots, action.payload] };
    case "ADD_BAD_LOT":
      return { ...state, badLots: [...state.badLots, action.payload] };
    case "SET_PARKING_LOTS":
      return { ...state, parkingLots: action.payload };
    case "INCREMENT_OFFSET":
      return { ...state, nextOffset: state.nextOffset + 1 };
    default:
      return state;
  }
}

const useParkingLotReducer = () => {
  const [reducerState, dispatch] = useReducer(reducer, initialState);
  return { reducerState, dispatch };
};

export default useParkingLotReducer;
