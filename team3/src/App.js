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

  // require('dotenv').config();


  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState(false);
  const [addSubject, setAddSubject] = useState(false);

  const onChangeSearchValue = (e) => setSearchValue(e.target.value);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchResult(true)

    setSearchValue('');
  
    
    let temp_result = _get(); // get으로 가져와서 저장된 값이면 searchValue로 저장
    if(temp_result){
      setSearchValue(temp_result);
    }
  }
  
  
  const _get = () => {
    fetch(`${databaseURL}/subjects.json`).then(res => {
    if(res.status != 200) {
    throw new Error(res.statusText);
    }
      return res.json();
    }).then(subjects => console.log(subjects));
  }

  

  const _post = () => {
    fetch(`${databaseURL}/subjects.json/`, {
      method: 'PATCH',
      body: JSON.stringify({"과목명":{"교수": '123', "정원": 'ads', "수강인원": '~~', "대체과목": 'ads', "선수과목": 'ads', "선수과목": '123', "수강평": '123'}}),
    }).then(res => {
      if(res.status != 200) {
      throw new Error(res.statusText);
      }
      return res.json();
    }).then(subjects => console.log(subjects));
  }   

  const _get_subject = (subjectName) => { // 특정 과목 검색하기
    return fetch(`${databaseURL}/subjects.json/${subjectName}`).then(res => res.json());
  }


  

  const onAdd = (e) => {
    e.preventDefault();
    setAddSubject(true)

    _post()

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


      <br></br>
      <br></br>
      <Button variant="contained" color="primary" className="App-AddButton" align="center" onClick={onAdd}>
        Add New Subject
      </Button>



      <Dialog open={searchResult} onClose={!searchResult}>
          <DialogContent>
              <p>가져온내용 제목</p>
              <div>제목에 해당하는 내용</div>
              <div>{searchValue.과목명}</div> {/* 가져온 과목의 과목명을 보여줌 */}  

              <p>교수명</p> {/* 나머지 정보들도 함께 보여줌 */}
              <div>{searchValue.교수}</div>
              <p>대체과목</p>
              <div>{searchValue.대체과목}</div>
              <p>선수과목</p>
              <div>{searchValue.선수과목}</div>
              <p>수강인원</p>
              <div>{searchValue.수강인원}</div>
              <p>수강평</p>
              <div>{searchValue.수강평}</div>
              <p>정원</p>
              <div>{searchValue.정원}</div>


          </DialogContent>
          <DialogActions>
              <Button variant="outlined" color="primary" onClick={() => {setSearchResult(!searchResult)}}>Close</Button>
          </DialogActions>
      </Dialog>


      <Dialog open={addSubject} onClose={!addSubject}>
          <DialogContent>
              <p>ex.과목명</p>
              <div>ex.운영체제</div>
              <p>ex.교수명</p>
              <div>ex.심규석</div>
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
