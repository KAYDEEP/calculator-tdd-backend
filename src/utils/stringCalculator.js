function add(numbers) {
    if (numbers === "") return 0;
    const nums = numbers
        .replace(/\n/g, ",") // Replace newline with a comma
        .split(",")
        .map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
