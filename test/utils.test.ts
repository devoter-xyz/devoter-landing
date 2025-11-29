import { cn } from "../src/lib/utils";

describe('cn', () => {
  // Happy path
  it('should combine class names correctly', () => {
    expect(cn('text-red-500', 'bg-blue-200')).toBe('text-red-500 bg-blue-200');
    expect(cn('p-4', 'm-2', 'flex')).toBe('p-4 m-2 flex');
    expect(cn('font-bold', { 'text-lg': true, 'text-sm': false })).toBe('font-bold text-lg');
  });

  // Edge cases: empty input
  it('should return an empty string for no arguments', () => {
    expect(cn()).toBe('');
  });

  it('should return an empty string for empty arrays or objects', () => {
    expect(cn([], {}, null, undefined)).toBe('');
    expect(cn('', null, '  ')).toBe('');
  });

  // Edge cases: invalid values
  it('should ignore null and undefined values', () => {
    expect(cn('text-green-500', null, 'bg-yellow-100', undefined)).toBe('text-green-500 bg-yellow-100');
  });

  it('should handle mixed valid and invalid inputs', () => {
    expect(cn('p-1', false, 'm-1', 0, 'block')).toBe('p-1 m-1 block');
  });

  it('should correctly merge tailwind classes', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    expect(cn('font-bold', 'font-normal')).toBe('font-normal');
  });

  // Additional edge cases
  it('should handle objects with mixed boolean and non-boolean values', () => {
    expect(cn('base', { 'active': true, 'disabled': false, 'priority': 'high' })).toBe('base active priority');
  });

  it('should handle deeply nested arrays', () => {
    expect(cn(['one', ['two', ['three', 'four']]])).toBe('one two three four');
  });

  it('should ignore number values as standalone arguments', () => {
    expect(cn('class-a', 123, 'class-b')).toBe('class-a 123 class-b');
    expect(cn(0, 'class-a')).toBe('class-a');
  });

  it('should handle falsey values within arrays and objects', () => {
    expect(cn(['a', 0, false, null, undefined, 'b'])).toBe('a b');
    expect(cn({ 'c': 0, 'd': false, 'e': null, 'f': undefined, 'g': 'valid' })).toBe('g');
  });

  it('should correctly process a combination of various input types', () => {
    expect(cn(
      'initial',
      true && 'conditional-true',
      false && 'conditional-false',
      ['array-item-1', null, { 'obj-item': true, 'obj-false': false }],
      { 'final-obj': 1 },
      0,
      undefined
    )).toBe('initial conditional-true array-item-1 obj-item final-obj');
  });
});
