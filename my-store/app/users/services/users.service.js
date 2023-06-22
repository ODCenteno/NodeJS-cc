/* eslint-disable import/no-extraneous-dependencies */
const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class UsersService {
  static instance;

  constructor(size = 20) {
    this.usersList = [];
    this.createUsersList(size);
  }

  createUsersList(size) {
    if (!UsersService.instance) {
      for (let i = 0; i < size; i += 1) {
        const user = {
          userId: faker.string.uuid(),
          name: faker.person.fullName(),
          jobTitle: faker.person.jobTitle(),
          birthday: faker.date.birthdate(),
        };
        this.usersList.push(user);
      }
      UsersService.instance = this;
      return UsersService.instance;
    }
    return UsersService.instance;
  }

  async find() {
    if (!UsersService.instance) {
      return new UsersService();
    }
    return this.usersList;
  }

  async findOne(id) {
    const searchedUser = this.usersList.find((user) => user.userId === id);
    if (searchedUser === -1) {
      throw boom.notFound('User not found');
    } else {
      return searchedUser;
    }
  }

  async create(userData) {
    const newUSer = {
      userId: faker.string.uuid(),
      ...userData,
    };

    this.usersList.push(newUSer);
    return newUSer;
  }

  async update(id, changes) {
    const index = this.usersList.findIndex((user) => user.userId === id);
    if (index === -1) {
      throw boom.notFound('User not found');
    }

    const user = this.usersList[index];
    this.usersList[index] = {
      ...user,
      ...changes,
    };

    return this.usersList[index];
  }

  async delete(id) {
    const index = this.userList.findIndex((user) => user.userId === id);
    if (index === -1) {
      throw new Error('User not found');
    }

    this.userList = this.userList.splice(index, 1);
    return 'Product deleted succesfully';
  }
}

module.exports = UsersService;
