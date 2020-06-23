import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';


//Material Ui
import { IconButton, TextField, Dialog, DialogContent, DialogActions, Button} from '@material-ui/core/';
import { makeStyles, withStyles } from '@material-ui/styles';
import SearchIcon from '@material-ui/icons/Search';

//Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const databaseURL = "https://team3-4f2c8.firebaseio.com/";


function App() {




  const [postList, setPostList] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [changedPostList, setChangedPostList] = useState('');
  const [searchResult, setSearchResult] = useState(false);
  const [addSubject, setAddSubject] = useState(false);

  const onChangeSearchValue = (e) => setSearchValue(e.target.value);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchResult(true)
    // const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
    // setChangedPostList(searchResult);
    setSearchValue('');
  }
  
  
  const _get = () => {
    fetch(`${databaseURL}/subjects.json`).then(res => {
    if(res.status != 200) {
    throw new Error(res.statusText);
    }
      return res.json();
    }).then(subjects => console.log(subjects));
  }
    

  const onAdd = (e) => {
    e.preventDefault();
    setAddSubject(true)
    _get();
    // const searchResult = postList.filter(post => post.title.indexOf(searchValue) !== -1);
    // setChangedPostList(searchResult);
    setSearchValue('');
  }


  return (
    <div className="App">
      <header className="App-header">

      <div className="App-title">Team3 - Subject Information</div>
      <br/>
      <br/>
      <br/>

      <form onSubmit={onSearch}>
          <TextField variant="outlined" value={searchValue} onChange={onChangeSearchValue}/>
          <IconButton type="submit" aria-label="search" onSubmit={onSearch}>
            <SearchIcon />
          </IconButton>
      </form>


      {/* <Link to={{
        pathname: "/AddSubject",
      }}> */}
      <br></br>
      <br></br>
      <Button variant="contained" color="primary" className="App-AddButton" align="center" onClick={onAdd}>
        Add New Subject
      </Button>
      {/* </Link> */}



      <Dialog open={searchResult} onClose={!searchResult}>
          <DialogContent>
              {/* <p className={styles['position-name']}>{selectedPositionName}</p>
              <div className={styles['job-description']}>{description}</div> */}
          </DialogContent>
          <DialogActions>
              <Button variant="outlined" color="primary" onClick={() => {setSearchResult(!searchResult)}}>Close</Button>
          </DialogActions>
      </Dialog>


      <Dialog open={addSubject} onClose={!addSubject}>
          <DialogContent>
              {/* <p className={styles['position-name']}>{selectedPositionName}</p>
              <div className={styles['job-description']}>{description}</div> */}
          </DialogContent>
          <DialogActions>
              <Button variant="outlined" color="primary" onClick={() => {setAddSubject(!addSubject)}}>Close</Button>
          </DialogActions>
      </Dialog>

      </header>
    </div>
  );
}

export default App;
