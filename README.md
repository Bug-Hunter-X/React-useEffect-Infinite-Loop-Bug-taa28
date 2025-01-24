# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React's `useEffect` hook that leads to an infinite loop. The issue arises from incorrectly updating state within the effect using a value that's dependent on the current state, causing a continuous re-render and update cycle.  The solution shows how to correctly update the state using the functional update pattern.

## Bug

The `bug.js` file contains a component that attempts to increment a state variable within the `useEffect` hook without using the functional update pattern. This creates an infinite loop because each state update triggers a re-render, which re-runs the effect, and further triggers more state updates.

## Solution

The `bugSolution.js` file provides the corrected version where the state is updated functionally, correctly handling the updates and preventing the infinite loop.