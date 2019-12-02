import { Token } from 'express-api-bootstrap';
declare const UserServiceToken: Token<UserService>;
declare class UserService {
    createUser(user: IUser): Promise<IUser>;
}
interface IUser {
    id?: number;
    name?: string;
}
export { UserService, UserServiceToken, IUser };
