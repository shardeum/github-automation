"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helloWorld_1 = require("../src/helloWorld");
describe('sayHello function', () => {
    it('should return "Hello, World!"', () => {
        (0, chai_1.expect)((0, helloWorld_1.sayHello)()).to.equal('Hello, World!');
    });
});
