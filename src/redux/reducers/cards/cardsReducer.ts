import { IAction } from '../../models/redux';

const CHANGE_COLOR = "CHANGE_COLOR";

interface IState {
  colors: string[];
  selectedColor: string;
}

const initialState: IState = {
  colors: [
    "Red",
    "Pink",
    "Purple",
    "DeepPurple",
    "Indigo",
    "Blue",
    "Cyan",
    "Teal",
    "Green",
    "LightGreen",
    "Lime",
    "Yellow",
    "Amber",
    "Orange",
    "DeepOrange",
    "Brown"
  ],
  selectedColor: "Red"
};
export default function reducer(state = initialState, action: IAction<any>): IState {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        colors: state.colors,
        selectedColor: action.payload
      };

    default:
      return state;
  }
}

export const changeColor = (color: string) => ({
  type: CHANGE_COLOR,
  payload: color
});
