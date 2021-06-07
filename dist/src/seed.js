"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
var client_1 = require("@prisma/client");
var users = [
    {
        email: 'ana@mundo.com',
        nickname: 'burbuja',
        firstName: 'ana',
        lastName: 'Zevallos',
        visibleEmail: false,
        visibleName: true,
        password: 'contrasena123',
        emailVerified: true,
        bio: 'estoy feliz de la vida',
        hashActivation: 'caracteresaleatorios1',
    },
    {
        email: 'rocio@mundo.com',
        nickname: 'bombom',
        firstName: 'rocio',
        lastName: 'Sanqui',
        visibleEmail: false,
        visibleName: true,
        password: 'contrasena456',
        emailVerified: false,
        bio: 'me gustan los chocolates',
        hashActivation: 'caracteresaleatorios2',
    },
];
var date = new Date(2021, 1, 12);
var posts = [
    {
        title: 'mi primer postre',
        createdAt: date,
        content: 'mi primer postre que hice fue chocotorta',
        published: true,
        likesQuantity: 0,
        authorId: 1,
    },
    {
        title: 'manualidades',
        createdAt: date,
        content: 'realizar una almohada',
        published: true,
        likesQuantity: 0,
        authorId: 2,
    },
];
var comments = [
    {
        createdAt: date,
        content: 'delicioso',
        published: true,
        likesQuantity: 0,
        authorId: 1,
        postId: 1,
    },
    {
        createdAt: date,
        content: 'pasame la receta',
        published: true,
        likesQuantity: 0,
        authorId: 2,
        postId: 1,
    },
];
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var _i, posts_1, post, _a, comments_1, comment;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _i = 0, posts_1 = posts;
                    _b.label = 1;
                case 1:
                    if (!(_i < posts_1.length)) return [3 /*break*/, 4];
                    post = posts_1[_i];
                    return [4 /*yield*/, prisma.post.create({ data: post })];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    _a = 0, comments_1 = comments;
                    _b.label = 5;
                case 5:
                    if (!(_a < comments_1.length)) return [3 /*break*/, 8];
                    comment = comments_1[_a];
                    return [4 /*yield*/, prisma.comment.create({ data: comment })];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    _a++;
                    return [3 /*break*/, 5];
                case 8: return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });