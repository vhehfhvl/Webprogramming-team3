import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { IconButton, TextField, CardHeader, CardMedia, CardContent, CardActions, Avatar, Container, Paper, Divider, Textfield, Input, FormControl, Button, ButtonGroup, InputLabel, Typography, Grid, Card, OutlinedInput } from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

function App() {



  const [postList, setPostList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [changedPostList, setChangedPostList] = useState('');


  const onChangeSearchValue = (e) => setSearchValue(e.target.value);

  const onSearch = (e) => {
    e.preventDefault();
    // const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
    // setChangedPostList(searchResult);
    // setSearchValue('');
  }



  return (
    <div className="App">
      <header className="App-header">

      <form onSubmit={onSearch}>
          <TextField variant="outlined" value={searchValue} onChange={onChangeSearchValue}/>
          <IconButton type="submit" aria-label="search" onSubmit={onSearch}>
            <SearchIcon />
          </IconButton>
      </form>

      </header>
    </div>
  );
}

export default App;
