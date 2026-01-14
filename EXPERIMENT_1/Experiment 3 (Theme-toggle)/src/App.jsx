import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 
import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ThemeToggleButton from "./ThemeToggleButton";

function App() {
  return (
    <ThemeProvider>
      <h1>Hello, Theme World!</h1>
      <ThemeToggleButton />
    </ThemeProvider>
  );
}

export default App;