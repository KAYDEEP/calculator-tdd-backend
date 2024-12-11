Here is a `README.md` file based on the entire data, including the TDD approach for your project:

```markdown
# String Calculator with TDD (Test-Driven Development)

## Overview

This repository contains the implementation of a String Calculator, developed using the principles of Test-Driven Development (TDD). The application is built in Node.js and follows a structured approach to incrementally build features, write tests, and refactor the code at each step. Additionally, Swagger UI is integrated for API documentation.

The application provides an endpoint that accepts a string of comma-separated numbers and returns their sum. It also supports newline delimiters and custom delimiters for parsing input strings. The application throws an exception when negative numbers are encountered, listing them in the exception message.

## Folder Structure

```bash
string-calculator-tdd/
├── __tests__/                # Jest test cases
├── docs/                     # Swagger documentation
├── src/                      # Application code
├── package.json              # Node.js dependencies
├── README.md                 # Documentation
└── .gitignore                # Ignored files
```

### Important Files:

- `index.js` - Entry point of the application that defines routes and handles logic for adding numbers.
- `swagger.json` - Swagger documentation for the API.
- `__tests__/` - Jest test cases for the implementation.
- `docs/` - Folder containing the Swagger documentation.

## Technologies Used

- **Node.js** - Backend server
- **Express** - Web framework for building APIs
- **Jest** - Testing framework for TDD
- **Swagger UI** - API documentation
- **swagger-ui-express** - Middleware to serve Swagger UI with Express
- **swagger-jsdoc** - JSDoc-based Swagger documentation generator

## Features

- **Add numbers**: Sum of numbers passed in the input string (comma-separated or newline-separated).
- **Custom delimiters**: Support for changing delimiters (e.g., `//;\n1;2`).
- **Negative number detection**: Throws an exception for negative numbers.
- **Swagger UI**: API documentation available at `/api-docs`.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** and **npm** (Node package manager)
- **Git** (for version control)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/string-calculator-tdd.git
   cd string-calculator-tdd
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Application

To start the application:

```bash
npm start
```

This will start the application on `http://localhost:3000`. The Swagger UI documentation will be available at `http://localhost:3000/api-docs`.

### Running Tests

Tests are written using Jest. To run all tests:

```bash
npm test
```

### Swagger UI Documentation

You can view the Swagger API documentation by visiting `http://localhost:3000/api-docs`. The documentation includes all available API endpoints and their usage.

## Development Workflow

### Step-by-Step TDD Process

1. **Initialize Project and Commit Initial Setup**

   Initialize the project with the necessary dependencies (`express`, `jest`, `swagger-ui-express`, etc.) and create the initial folder structure.

   ```bash
   git init
   npm init -y
   npm install express jest swagger-ui-express swagger-jsdoc
   ```

   **Commit**: Initial setup with dependencies.

2. **Write Test for Empty String**

   Start by writing a test case for handling an empty string (`""`). The expected output should be `0`.

   **Test Example** (`__tests__/stringCalculator.test.js`):

   ```javascript
   test('Empty string should return 0', () => {
     expect(add('')).toBe(0);
   });
   ```

   **Commit**: Write test for empty string.

3. **Write Code to Pass the Empty String Test**

   Write the `add()` function to pass the first test.

   **Implementation Example** (`src/index.js`):

   ```javascript
   function add(numbers) {
     if (numbers === '') return 0;
   }
   ```

   **Commit**: Implement add function to pass the empty string test.

4. **Add Test for Single Number**

   Add a test case for a single number input (e.g., `"1"`).

   **Test Example**:

   ```javascript
   test('Single number should return the number itself', () => {
     expect(add('1')).toBe(1);
   });
   ```

   **Commit**: Add test for single number.

5. **Write Code to Handle Single Number**

   Update the `add()` function to handle the case of a single number.

   **Implementation Example**:

   ```javascript
   function add(numbers) {
     if (numbers === '') return 0;
     return parseInt(numbers);
   }
   ```

   **Commit**: Implement add function for single number.

6. **Test for Multiple Numbers**

   Add a test case to handle multiple numbers (e.g., `"1,2"`).

   **Test Example**:

   ```javascript
   test('Multiple numbers should return the sum', () => {
     expect(add('1,2')).toBe(3);
   });
   ```

   **Commit**: Add test for multiple numbers.

7. **Update Code to Handle Multiple Numbers**

   Modify the `add()` function to handle multiple numbers, using `split()` to parse the input string.

   **Implementation Example**:

   ```javascript
   function add(numbers) {
     if (numbers === '') return 0;
     return numbers.split(',').map(Number).reduce((a, b) => a + b, 0);
   }
   ```

   **Commit**: Implement add function for multiple numbers.

8. **Test for Newline Delimiters**

   Add a test case to support newline delimiters.

   **Test Example**:

   ```javascript
   test('Newline delimiters should be supported', () => {
     expect(add('1\n2,3')).toBe(6);
   });
   ```

   **Commit**: Add test for newline delimiters.

9. **Update Code to Handle Newline Delimiters**

   Modify the `add()` function to handle newline delimiters.

   **Implementation Example**:

   ```javascript
   function add(numbers) {
     if (numbers === '') return 0;
     return numbers.split(/,|\n/).map(Number).reduce((a, b) => a + b, 0);
   }
   ```

   **Commit**: Implement add function for newline delimiters.

10. **Test for Custom Delimiters**

    Add a test case to handle custom delimiters.

    **Test Example**:

    ```javascript
    test('Custom delimiters should be supported', () => {
      expect(add('//;\n1;2')).toBe(3);
    });
    ```

    **Commit**: Add test for custom delimiters.

11. **Update Code to Handle Custom Delimiters**

    Modify the `add()` function to handle custom delimiters.

    **Implementation Example**:

    ```javascript
    function add(numbers) {
      if (numbers === '') return 0;
      if (numbers.startsWith('//')) {
        const delimiter = numbers.charAt(2);
        numbers = numbers.slice(4);
        return numbers.split(delimiter).map(Number).reduce((a, b) => a + b, 0);
      }
      return numbers.split(/,|\n/).map(Number).reduce((a, b) => a + b, 0);
    }
    ```

    **Commit**: Implement add function for custom delimiters.

12. **Test for Negative Numbers**

    Add a test case for negative numbers, which should throw an exception.

    **Test Example**:

    ```javascript
    test('Negative numbers should throw an exception', () => {
      expect(() => add('1,-2')).toThrowError('Negative numbers not allowed: -2');
    });
    ```

    **Commit**: Add test for negative numbers.

13. **Update Code to Handle Negative Numbers**

    Modify the `add()` function to throw an exception for negative numbers.

    **Implementation Example**:

    ```javascript
    function add(numbers) {
      if (numbers === '') return 0;
      const negativeNumbers = [];
      const nums = numbers.split(/,|\n/).map(Number);
      nums.forEach(num => {
        if (num < 0) negativeNumbers.push(num);
      });
      if (negativeNumbers.length) {
        throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(', ')}`);
      }
      return nums.reduce((a, b) => a + b, 0);
    }
    ```

    **Commit**: Implement add function for negative numbers.

## Conclusion

This project demonstrates the TDD approach in action, starting with simple tests and incrementally building features while ensuring the code is well-tested at each step. The result is a robust, maintainable string calculator that can handle multiple delimiters, negative number validation, and custom delimiters, all while adhering to best practices in software craftsmanship.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Summary

- This `README.md` covers the entire project and provides a step-by-step guide of how you implemented the string calculator using TDD.
- It also includes necessary installation and running instructions for the application and tests.
