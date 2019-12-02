"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_api_bootstrap_1 = require("express-api-bootstrap");
const userService_1 = require("@/src/services/userService");
let AccountControler = class AccountControler {
    createUser(user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.userService.createUser(user);
        });
    }
};
tslib_1.__decorate([
    express_api_bootstrap_1.Inject(userService_1.UserServiceToken),
    tslib_1.__metadata("design:type", userService_1.UserService)
], AccountControler.prototype, "userService", void 0);
tslib_1.__decorate([
    express_api_bootstrap_1.PostMapping('/users'),
    tslib_1.__param(0, express_api_bootstrap_1.RequestBody()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountControler.prototype, "createUser", null);
AccountControler = tslib_1.__decorate([
    express_api_bootstrap_1.RestController()
], AccountControler);
//# sourceMappingURL=accountController.js.map