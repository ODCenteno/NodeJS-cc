import { base, faker } from "@faker-js/faker";
import { UserDto } from "../dtos/user.dto";
import { IsAvailable, User } from "../models/user.model";
import { baseUrl } from "../utils/base-url";
import axios from "axios";

export class UserService<UserDto> {
  private _newUsersId: number[] = [];

  constructor() {}

  async getAllUsers(): Promise<User[]> {
    const { data } = await axios.get(`${baseUrl}/users/`);
    console.log(data.length);
    return data;
  }

  async findOne(id: number): Promise<User> {
      const response = await axios.get(`${baseUrl}/users/${id}`)
      if (response.data) return response.data;
      return response.data;
  }

  async createUser(userDetails: UserDto): Promise<User> {
    const newUser = {
      ...userDetails,
      id: faker.number.int({ min: 300 })
    }
    const { data } = await axios.post(`${baseUrl}/users/`, newUser)
    console.log(`New user:\n ${data}`)
    return data;
  }

  async checkEmail(email: IsAvailable): Promise<IsAvailable> {
    const { data } = await axios.post(`${baseUrl}/users/is-available`, email);
    return data;
  }
}

(async () => {
  const users = new UserService();
  users.getAllUsers();
  const user21 = await users.findOne(1);
  console.log(user21);
})()
