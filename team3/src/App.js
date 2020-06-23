import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { IconButton, TextField, Dialog, DialogContent, DialogActions, Button} from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

function App() {



  const [postList, setPostList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [changedPostList, setChangedPostList] = useState('');
  const [searchResult, setSearchResult] = useState(false);


  const onChangeSearchValue = (e) => setSearchValue(e.target.value);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchResult(true)
    // const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
    // setChangedPostList(searchResult);
    // setSearchValue('');
  }



  return (
    <div className="App">
      <header className="App-header">

      <div className="App-title">Team3 - Subject Information</div>
      <br/>
      <br/>
      <br/>
      <br/>

      <form onSubmit={onSearch}>
          <TextField variant="outlined" value={searchValue} onChange={onChangeSearchValue}/>
          <IconButton type="submit" aria-label="search" onSubmit={onSearch}>
            <SearchIcon />
          </IconButton>
      </form>

      <Dialog open={searchResult} onClose={!searchResult}>
          <DialogContent>
              {/* <p className={styles['position-name']}>{selectedPositionName}</p>
              <div className={styles['job-description']}>{description}</div> */}
          </DialogContent>
          <DialogActions>
              <Button variant="outlined" color="primary" onClick={() => {setSearchResult(!searchResult)}}>Close</Button>
          </DialogActions>
      </Dialog>

      </header>
    </div>
  );
}

export default App;
