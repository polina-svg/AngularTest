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
  firstName: string,
  lastName: string
  login: string,
  password: string,
  confirmPassword: string,
  role: Role,
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
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  online: boolean;
  photo: string;
  university: string[];
}

export type PostUser = Omit<registerFrom, 'confirmPassword'| 'lastName' | 'firstName'> & {id: string} ;

export type Role = 'user' | 'admin';


export interface User {
  username: string;
  password: string;
  id: number;
  token: string;
  firstName: string;
  lastName: string;
}
