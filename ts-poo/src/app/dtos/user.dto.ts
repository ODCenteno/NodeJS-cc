import { User } from "../models/user.model";

export interface UserDto extends Omit<User , "id" | "creationAt" | "updatedAt">  {
  //
}

// export interface UpdateUserDto extends Omit<User , "id">  {
//   //
// }
