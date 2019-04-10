export enum ETodoStatus {
  TODO = "TODO",
  DOING = "DOING",
  DONE = "DONE"
}

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: ETodoStatus;
}
