import { toSnakeCase } from '../parser';

describe('test if toSnakeCase work correctly', () => {
  
  it('should return helloWorld for all words in the array', () => {
    const values = ['hello_world', 'hello-world', 'helloWorld', 'hello world', '  Hello  World  '];
    const expected = new Array(values.length).fill('hello_world');
    
    expect(toSnakeCase(values)).toEqual(expected);
  });

  it('should return helloWorld for string', () => {
    const expected = 'hello_world';

    expect(toSnakeCase('hello_world')).toEqual(expected);
    expect(toSnakeCase('hello-world')).toEqual(expected);
    expect(toSnakeCase('helloWorld')).toEqual(expected);
    expect(toSnakeCase('hello world')).toEqual(expected);
    expect(toSnakeCase('  hello   world  ')).toEqual(expected);
  });

  it('should throw an error if the data type is not a string or an array of string', () => {
    const values = [1, true, {}, null, undefined, () => {}];
    const errorMessage = 'Invalid data type! Please provide a string or an array of string.';

    values.forEach(value => {
      // @ts-ignore
      expect(() => toSnakeCase(value)).toThrowError(errorMessage);
    });
  });
});
