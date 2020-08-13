"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = exports.getAll = void 0;
const data = [
    {
        id: 1,
        name: "User 1"
    },
    {
        id: 2,
        name: "User 2"
    },
    {
        id: 3,
        name: "User 3"
    }
];
exports.getAll = (req, res) => {
    res.send(data);
};
exports.getId = (req, res) => {
    const { id } = req.params;
    res.send(data.find(x => x.id === Number(id)));
};
//# sourceMappingURL=index.js.map