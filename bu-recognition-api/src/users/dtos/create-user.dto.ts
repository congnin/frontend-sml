export class CreateUserDto {
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  projectRole: string;
  joinedAt?: Date;
  isFemale: boolean;
  isAdmin: boolean;
}
