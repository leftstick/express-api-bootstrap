import { Service, Token } from 'express-api-bootstrap'

const UserServiceToken = new Token<UserService>()

@Service(UserServiceToken)
class UserService {
  async createUser(user: IUser) {
    return new Promise<IUser>(resolve => {
      setTimeout(() => {
        resolve({
          id: new Date().getTime(),
          ...user
        })
      }, 100)
    })
  }
}

interface IUser {
  id?: number
  name?: string
}

export { UserService, UserServiceToken, IUser }
