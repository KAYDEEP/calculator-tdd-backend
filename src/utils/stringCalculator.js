function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n");
        delimiter = parts[0].slice(2); // Extract custom delimiter
        numbers = parts[1]; // Remaining part after custom delimiter
    }

    const nums = numbers
        .replace(/\n/g, delimiter) // Replace newline with custom delimiter
        .split(delimiter)
        .map(Number);
    return nums.reduce((sum, num) => sum + num, 0);
}


module.exports = { add };
