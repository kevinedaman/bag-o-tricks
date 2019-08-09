/**
 * creates array of numbers from a number.
 */
export const createNumberArray = (number: number) => {
    // @ts-ignore
    return Array.from(Array(number).keys());
}


/**
 * sort array alphabetically
 */
export const sortArrayAlphabetically = (objArray: any[]) => {
    return objArray.sort(function(a, b) {
        var textA = a.DepartmentName.toUpperCase();
        var textB = b.DepartmentName.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
}

/**
 * sort array by 2 conditions
 */
export const sortArrayByTwoConditions = (c1: string, c2: string, objArray: any[]) => {
    return objArray.sort((a: any, b: any) => {
    if (a[c1] < b[c1]) {
        return -1;
    }
    if (a[c1] > b[c1]) {
        return 1;
    }
    if (a[c1] === b[c1]) {
        if (a[c2] < b[c2]) {
            return -1;
        }
        if (a[c2] > b[c2]) {
            return 1;
        }
    }
    return 0
});
}
/**
 * removes duplicate objects from an array of objects 
 * @param: array of object
 * @param: key that is going to be compared
 */
export const removeDuplicateObjects = (array: any[], key: string) => {
    return array.reduce((acc, el) => {
        const found = acc.find((e: any) => e[key ] === el[key]);
        if (found) {
            return acc;
        }
        return [ ...acc, el ];
    }, []);
};

/**
 * 
 * @param {*} array 
 * @param {*} index 
 * @param {*} item - pass in either an array of items or a single item
 */
export const addToArrayByIndex = (array: any[], index: number, item: any) => {
    const itemArray = Array.isArray(item) ? item : [item];
    return [ ...array.slice(0, index), ...itemArray, ...array.slice(index) ];
}