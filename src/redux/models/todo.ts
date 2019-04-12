export enum ETodoStatus {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE"
}

export enum ETodoColors {
  RED = "Red",
  PINK = "Pink",
  PURPLE = "Purple",
  DEEPPURPLE = "DeepPurple",
  INDIGO = "Indigo",
  BLUE = "Blue",
  CYAN = "Cyan",
  TEAL = "Teal",
  GREEN = "Green",
  LIGHTGREEN = "LightGreen",
  LIME = "Lime",
  YELLOW = "Yellow",
  AMBER = "Amber",
  ORANGE = "Orange",
  DEEPORANGE = "DeepOrange",
  BROWN = "Brown"
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  color: ETodoColors;
  status: ETodoStatus;
}
