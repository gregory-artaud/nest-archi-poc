export type User = {
  id: string;
  firstName: string;
  lastName: string;
};

export abstract class UserRepository {
  abstract findById(id: string): Promise<User>;
}
