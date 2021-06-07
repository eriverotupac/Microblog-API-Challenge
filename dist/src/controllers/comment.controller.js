<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> master
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.readComment = exports.deleteComment = exports.updateComment = exports.createComment = exports.getComments = void 0;
<<<<<<< HEAD
//import { ErrorHandler } from '../interfaces/error.interface'
var commentService = __importStar(require("../services/comment/crudCommentService"));
var getComments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allComments, e_1;
=======
var commentService = __importStar(require("../services/comment/crudCommentService"));
var getComments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allComments, err_1;
>>>>>>> master
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
<<<<<<< HEAD
                return [4 /*yield*/, commentService.getAllComments(req.params.id)
                    //.lean()
                    //.exec()
                ];
            case 1:
                allComments = _a.sent();
                //.lean()
                //.exec()
                res.status(allComments.status).json({ data: allComments.result });
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(e_1.status).json({ data: e_1.result });
=======
                return [4 /*yield*/, commentService.getAllComments(req.params.id)];
            case 1:
                allComments = _a.sent();
                if (allComments.result.length == 0) {
                    res.status(allComments.status).json({
                        data: 'no comments for user',
                    });
                }
                else {
                    res.status(allComments.status).json({ data: allComments.result });
                }
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(err_1.status).json({ data: err_1.message });
>>>>>>> master
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getComments = getComments;
var createComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
<<<<<<< HEAD
    var e_2;
=======
    var create, err_2;
>>>>>>> master
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.createComment(req.body)];
            case 1:
<<<<<<< HEAD
                _a.sent();
                res.status(204).end();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                console.error(e_2);
                res.status(400).end();
=======
                create = _a.sent();
                res.status(create.status).end();
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(err_2.status).json({ data: err_2.message });
>>>>>>> master
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createComment = createComment;
var updateComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
<<<<<<< HEAD
    var e_3;
=======
    var update, err_3;
>>>>>>> master
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.updateComment(req.params.id, req.params.content)];
            case 1:
<<<<<<< HEAD
                _a.sent();
                res.status(204).end();
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                console.error(e_3);
                res.status(400).end();
=======
                update = _a.sent();
                res.status(update.status).end();
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(err_3.status).json({ data: err_3.message });
>>>>>>> master
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateComment = updateComment;
var deleteComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
<<<<<<< HEAD
    var e_4;
=======
    var deletion, err_4;
>>>>>>> master
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.deleteComment(req.params.id)];
            case 1:
<<<<<<< HEAD
                _a.sent();
                res.status(200).end();
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                console.error(e_4);
                res.status(400).end();
=======
                deletion = _a.sent();
                res.status(deletion.status).json({ data: deletion.result });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(err_4.status).json({ data: err_4.message });
>>>>>>> master
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteComment = deleteComment;
var readComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
<<<<<<< HEAD
    var e_5;
=======
    var read, err_5;
>>>>>>> master
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.readComment(req.params.id)];
            case 1:
<<<<<<< HEAD
                _a.sent();
                res.status(204).end();
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                console.error(e_5);
                res.status(400).end();
=======
                read = _a.sent();
                res.status(read.status).json({ data: read.result });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(err_5.status).json({ data: err_5.message });
>>>>>>> master
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.readComment = readComment;
<<<<<<< HEAD
=======
=======
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.readComment = exports.getComments = exports.deleteComment = exports.updateComment = exports.createComment = void 0;
var commentService = __importStar(require("../services/comment/crudCommentService"));
var createComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var create, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.createComment(req.params.id, req.body)];
            case 1:
                create = _a.sent();
                res.status(create.status).end();
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                res.status(err_1.status).json({ data: err_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.createComment = createComment;
var updateComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var update, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.updateComment(req.params.id, req.params.CommentId, req.body)];
            case 1:
                update = _a.sent();
                res.status(update.status).json({ data: update.status });
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                res.status(err_2.status).json({ data: err_2.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.updateComment = updateComment;
var deleteComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var deletion, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.deleteComment(req.params.id, req.params.CommentId)];
            case 1:
                deletion = _a.sent();
                res.status(deletion.status).json({ data: deletion.result });
                return [3 /*break*/, 3];
            case 2:
                err_3 = _a.sent();
                res.status(err_3.status).json({ data: err_3.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.deleteComment = deleteComment;
var getComments = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allComments, err_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.readPublishedComments()];
            case 1:
                allComments = _a.sent();
                res.status(allComments.status).json({ data: allComments.result });
                return [3 /*break*/, 3];
            case 2:
                err_4 = _a.sent();
                res.status(err_4.status).json({ data: err_4.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getComments = getComments;
var readComment = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var read, err_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, commentService.readComment(req.params.id)];
            case 1:
                read = _a.sent();
                res.status(read.status).json({ data: read.result });
                return [3 /*break*/, 3];
            case 2:
                err_5 = _a.sent();
                res.status(err_5.status).json({ data: err_5.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.readComment = readComment;
>>>>>>> d05cf65faf79eaa900f52fccb39000eca39aa186
>>>>>>> master