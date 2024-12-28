import React, { useState } from 'react';
import styled from 'styled-components';

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert cm to meters
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);

      // Set message based on BMI value
      if (bmiValue < 18.5) setMessage('Underweight');
      else if (bmiValue >= 18.5 && bmiValue <= 24.9) setMessage('Normal weight');
      else if (bmiValue >= 25 && bmiValue <= 29.9) setMessage('Overweight');
      else setMessage('Obesity');
    } else {
      setMessage('Please enter valid weight and height!');
    }
  };

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <Container>
      <InputContainer>
        <Label>Weight (kg):</Label>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        />
      </InputContainer>
      <InputContainer>
        <Label>Height (cm):</Label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </InputContainer>
      <Button onClick={calculateBMI}>Calculate BMI</Button>
      <Button onClick={resetCalculator} style={{ backgroundColor: '#f44336' }}>
        Reset
      </Button>
      {bmi && (
        <Result>
          <h2>Your BMI: {bmi}</h2>
          <p>{message}</p>
        </Result>
      )}
    </Container>
  );
};

export default BMICalculator;

// Styled Components
const Container = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgb(103, 10, 10);
  text-align: center;
  background-color:rgb(70, 150, 162);
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
  box-shadow: 0 5px  rgb(83, 187, 95)
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  margin: 10px 5px;
  padding: 10px 20px;
  color: #fff;
  border: none;
  border-radius: 5px;
  background-color: #4caf50;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color:rgb(69, 70, 160);
  }
`;

const Result = styled.div`
  margin-top: 20px;
  text-align: center;

   &:hover {
    background-color:rgb(255, 255, 255);
  }
    
  h2 {
    margin: 0;
    color: #333;
  }
  p {
    font-size: 18px;
    color: #555;
  }
`;
