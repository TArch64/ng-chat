export class UserModel {
  static fromDefaults(): UserModel {
    return new UserModel('');
  }

  constructor(public name: string) {}
}
