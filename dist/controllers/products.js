"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const getProducts = (_req, res) => {
    res.status(200).json({ message: 'PING' });
};
exports.getProducts = getProducts;
