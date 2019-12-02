"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_api_bootstrap_1 = require("express-api-bootstrap");
const UserServiceToken = new express_api_bootstrap_1.Token();
exports.UserServiceToken = UserServiceToken;
let UserService = class UserService {
    createUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(Object.assign({ id: new Date().getTime() }, user));
                }, 100);
            });
        });
    }
};
UserService = tslib_1.__decorate([
    express_api_bootstrap_1.Service(UserServiceToken)
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map