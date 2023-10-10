import { toCamelCase } from '../parser';

describe('test if toCamelCase work correctly', () => {
  
  it('should return helloWorld for all words in the array', () => {
    const values = ['hello_world', 'hello-world', 'helloWorld', 'hello world'];
    const expected = new Array(values.length).fill('helloWorld');
    
    expect(toCamelCase(values)).toEqual(expected);
  });

  it('should return helloWorld for string', () => {
    const expected = 'helloWorld';

    expect(toCamelCase('hello_world')).toEqual(expected);
    expect(toCamelCase('hello-world')).toEqual(expected);
    expect(toCamelCase('helloWorld')).toEqual(expected);
    expect(toCamelCase('hello world')).toEqual(expected);
  });

  it('should throw an error if the data type is not a string or an array of string', () => {
    const values = [1, true, {}, null, undefined, () => {}];
    const errorMessage = 'Invalid data type! Please provide a string or an array of string.';

    values.forEach(value => {
      // @ts-ignore
      expect(() => toCamelCase(value)).toThrowError(errorMessage);
    });
  });
});
