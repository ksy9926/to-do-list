export interface DayType {
  [key: number]: string,
}

export interface TodoType {
  completed: boolean;
  content: string;
  createdAt: string;
  todoid: number;
  updatedAt: string;
  __v: number;
  _id: string;
}