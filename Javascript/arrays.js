/**
 * creates array of numbers from a number.
 */
Array.from(Array(length).keys());

/**
 * sort array alphabetically
 */
objArray.sort(function(a, b) {
    var textA = a.DepartmentName.toUpperCase();
    var textB = b.DepartmentName.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
});

/**
 * sort array by 2 conditions
 */
objArray.sort((a, b) => {
    if (a.c1 < b.c1) {
        return -1;
    }
    if (a.c1 > b.c1) {
        return 1;
    }
    if (a.c1 === b.c1) {
        if (a.c2 < b.c2) {
            return -1;
        }
        if (a.c2 > b.c2) {
            return 1;
        }
    }
    return 0
});