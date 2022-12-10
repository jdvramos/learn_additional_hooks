import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;

// WHAT IS USEMEMO?

// React.memo() is a higher-order component that will prevent a functional component from being re-rendered if its props or state did not change.

// React.memo() has nothing to do with hooks!

// When exporting, wrap your components with React.memo()

// In our situation, we will wrap the Count, Button and Title components.

// WHAT IS USECALLBACK?

// useCallback is a hook that will return a memoized version of the callback function that only changes if one of thje dependencies has changed.

// WHY DO WE NEED TO USE USECALLBACK?
// It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

// TAKEAWAYS:
// The React.memo() and useCallback are for optimizing your React app to shrink down unnecessary re-renders.
