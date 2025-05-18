export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[],
): number[] {
    //partition and swap from max to min -> min to max
    const asColection_2 = collection_2.slice().reverse();

    const mergedCollection = (a: number[], b: number[]) => {
        const result: number[] = [];
        let i=0, j=0;

        while (i < a.length && j < b.length) {
            if (a[i] < b[j]) {
                result.push(a[i]);
                i++;
            } else {
                result.push(b[j]);
                j++;
            }
        }
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }
    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    return result;
    }

    const mergedCollection_1_2 = mergedCollection(collection_1, asColection_2);
    return mergedCollection(mergedCollection_1_2, collection_3);
}