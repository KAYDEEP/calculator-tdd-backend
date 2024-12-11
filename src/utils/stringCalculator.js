function add(numbers) {
    if (numbers === "") return 0;

    let delimiter = ",";
    if (numbers.startsWith("//")) {
        const [header, body] = numbers.split("\n", 2);
        delimiter = header.slice(2);
        numbers = body;
    }

    const nums = numbers
        .split(new RegExp(`[${delimiter}\n]`))
        .map(Number);

    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
        throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, num) => sum + num, 0);
}



module.exports = { add };
