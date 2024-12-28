import React from 'react';
import BMICalculator from './components/BMICalculator';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>BMI Calculator</h1>
      <BMICalculator />
    </div>
  );
};

export default App;
