import { createNumberArray, removeDuplicateObjects } from './arrays';

test('createNumberArray', () => {
    const expected = [0,1,2]
    expect(createNumberArray(3)).toEqual(
        expect.arrayContaining(expected),
      )
});

test('removeDuplicateObjects', () => {
    const expected = [ { name: 'a' }, { name: 'c'} ]
    const input = [ { name: 'a' }, { name : 'a' }, { name: 'c' } ]
    expect(removeDuplicateObjects(input, 'name')).toEqual(
        expect.arrayContaining(expected),
    )
})