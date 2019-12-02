import { RestController, PostMapping, RequestBody, Inject } from 'express-api-bootstrap'

import { UserService, UserServiceToken, IUser } from '@/src/services/userService'

@RestController()
class AccountControler {
  @Inject(UserServiceToken)
  private userService: UserService

  @PostMapping('/users')
  async createUser(@RequestBody() user: IUser) {
    return await this.userService.createUser(user)
  }
}
