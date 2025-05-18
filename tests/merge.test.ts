import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge three collections', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [6, 4, 2];
        const collection_3 = [0, 7, 8];
        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });

    it('should handle empty collections', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        const expected: number[] = [];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });

    it('should handle single element collections', () => {
        const collection_1 = [1];
        const collection_2 = [2];
        const collection_3 = [0];
        const expected = [0, 1, 2];
        expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
    });
});