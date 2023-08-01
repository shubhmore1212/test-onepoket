<h1>Task 2: Data Manipulation</h1>

- Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

<hr/>

<h2>Prerequisites</h2>
Before running this, ensure you have the following installed on your machine:

- Node.js: You can download and install Node.js from the official website: https://nodejs.org/

<h2>Getting Started</h2>
Following are the steps to setup and run on your local machine
<br/>
<br/>

- Clone this repository to your local machine using the following command:

```
git clone https://github.com/shubhmore1212/onepoket-test.git
```

- Navigate to the repository

```
cd onepoket-test/task-2
```

- Installing the dependencies

```
npm install
```

<h2>Running the test cases</h2>
Run the following command:

```
npm run test
```

<h4>Following test cases are considered</h4>

1. Input - [ 1 , 2 , 3 ], Output - 6
   <br/>
   `Explanation: 1+2+3=6`

2. Input - [ ], Output - 0
   <br/>
   `Explanation: for empty array return 0`

3. Input - [ 1 , 2 , 3.2 ], Output - 6.2
   <br/>
   `Explanation: 1+2+3=6.2`

4. Input - [ "a" , "a" , "a" ], Output - NaN
   <br/>
   `Explanation: For an array with non-integer return NaN (Not a Number)`

<p>
The test results will be displayed in the terminal. If all test cases pass, the function is working correctly.
</p>
