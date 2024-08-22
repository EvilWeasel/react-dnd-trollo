export type Column = {
  id: Id;
  title: string;
};
export type Id = string | number;

export type Task = {
  id: Id;
  content: string;
  columnId: Id;
};
