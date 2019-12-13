function getArrayBounds(bounds) {
    if (!Array.isArray(bounds)) {
        return null;
    }
    return [bounds.length, bounds[0], bounds[bounds.length - 1]];

}