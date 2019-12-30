const squareArray = numbers => {
    !Array.isArray(numbers) ? null : numbers.map(index => index * index);
}