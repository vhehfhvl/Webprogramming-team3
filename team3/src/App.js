import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { IconButton, TextField, CardHeader, CardMedia, CardContent, CardActions, Avatar, Container, Paper, Divider, Textfield, Input, FormControl, Button, ButtonGroup, InputLabel, Typography, Grid, Card, OutlinedInput } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
