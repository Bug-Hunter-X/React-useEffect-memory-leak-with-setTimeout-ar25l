# React useEffect Memory Leak with setTimeout
This example demonstrates a common error in React applications involving the `useEffect` hook and `setTimeout`.  The issue is a memory leak caused by not properly clearing the `setTimeout` when the component unmounts, leading to unnecessary updates even after the component is no longer rendered.

The `bug.js` file shows the buggy code. The `bugSolution.js` file provides a corrected version that uses the cleanup function in `useEffect` to clear the timeout, effectively preventing the memory leak.

## How to Reproduce
1. Clone this repository.
2. Navigate to the directory containing the files.
3. Run the buggy code (bug.js) and observe the count continuously incrementing even after the component is unmounted.
4. Run the solution (bugSolution.js) and observe that the count increments correctly and stops when the component is unmounted.