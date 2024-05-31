import { expect } from 'chai';
import { sayHello } from '../src/helloWorld';

describe('sayHello function', () => {
  it('should return "Hello, World!"', () => {
    expect(sayHello()).to.equal('Hello, World!');
  });
});
