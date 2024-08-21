// test/helloWorld.test.ts

import { helloWorld } from '../src/helloWorld';

test('should return greeting with provided name', () => {
    const name = 'World';
    const result = helloWorld(name);
    expect(result).toBe('Hello, World!');
});

test('should return greeting with another name', () => {
    const name = 'TypeScript';
    const result = helloWorld(name);
    expect(result).toBe('Hello, TypeScript!');
});
