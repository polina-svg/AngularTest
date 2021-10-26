export interface UsersModel {
  id: string,
  login: string,
  password: string,
  info?: {
    name: string,
    age: string,
    studyplase: string[]
  }
}

export type PostUser = Omit<UsersModel, "id">;


export interface User {
  username: string;
  password: string;
  id: number;
  token: string;
  firstName: string;
  lastName: string;
}
