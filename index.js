const reduce = (array, reducer, init) => {
    if (!Array.isArray(array) && typeof array === 'object') array = Object.keys(array);

    return array.reduce((_reduced, value, index, thisArg) => {
        if (Array.isArray(value)) return reduce(value, reducer, _reduced);
        return reducer(_reduced, value, index, thisArg);
    }, init);
}
;
