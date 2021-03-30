import { getRepository, Repository } from "typeorm";
import { Game } from "../../../games/entities/Game";
import { GamesRepository } from "../../../games/repositories/implementations/GamesRepository";

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    // ORM
    return this.repository.findOneOrFail({
      relations: ["games"],
      where: { id: user_id },
    });
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    // Raw query
    return this.repository.query(`SELECT * FROM USERS ORDER BY FIRST_NAME`);
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User[] | undefined> {
    // Raw query
    return this.repository.query(
      `SELECT email, first_name, last_name FROM users WHERE LOWER(users.first_name) LIKE LOWER('%${first_name}%') AND LOWER(users.last_name) LIKE LOWER('%${last_name}%')`
    );

  }
}
