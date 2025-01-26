# Expo Linking.getInitialURL() Returns Null Intermittently

This repository demonstrates a bug in the Expo `Linking` API where `getInitialURL()` sometimes returns `null` even when a deep link is opened.  The issue is intermittent and challenging to debug.

## Problem
The `Linking.getInitialURL()` method is crucial for handling deep links when the app starts. However, in certain circumstances, it inconsistently returns `null`, leading to missed deep link processing. This can severely impact functionality.

## Reproduction Steps
1. Clone this repository.
2. Run the app on a physical device or emulator.
3. Open a deep link to the app.  
4. Observe that `getInitialURL()` may or may not return the expected URL, even on repeated attempts with the same deep link.

## Solution
The provided solution implements a more robust approach by using `Linking.addEventListener` to listen for incoming URLs. This approach reliably handles deep links even when `getInitialURL()` fails. More reliable methods exist, and this is an example. Consider edge cases. 
