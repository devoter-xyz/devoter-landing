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
});
