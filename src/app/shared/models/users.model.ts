export interface UserConfirmedModel {
  "login": string,
  "password": string,
}

export interface PrivateUserModel {
  "id": string,
  "login": string,
  "password": string,
  "role": Role
}

export interface registerFrom  {
  "name": string,
  "login": string,
  "password": string,
  "confirmPassword": string,
  "role": Role,
}


export interface CurrentUser {
  id: string;
  role: string;
  info: {
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    studyPlace: string[]
  }
}

export interface UsersModel {
  userId: string,
  name: string,
  age: string,
  online: boolean,
  university: {name: string, region: string}[]
}

export type PostUser = Omit<registerFrom, 'confirmPassword'| 'name'>;

export type Role = 'user' | 'admin';


export interface User {
  username: string;
  password: string;
  id: number;
  token: string;
  firstName: string;
  lastName: string;
}
