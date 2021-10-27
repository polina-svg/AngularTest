export interface UsersModel {
  id: string,
  login: string,
  password: string,
  info?: {
    firstName: string,
    lastName: string,
    age: string,
    studyPlase: string[]
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
