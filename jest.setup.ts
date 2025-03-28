import '@testing-library/jest-dom';

// Add React 18 specific test setup
declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

globalThis.IS_REACT_ACT_ENVIRONMENT = true; 