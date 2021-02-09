import React, { useState, useEffect } from 'react';
import ProgressBar from './progress';


function Display() {  
    
  const [cases, setCase] = useState('Đang lấy...');
  const [newCases, setNew] = useState('Đang lấy...');
  const [deadCases, setDead] = useState('Đang lấy...');
  const [recoveredCases, setRecover] = useState('Đang lấy...');
  const [activeCases, setActive] = useState('Đang lấy...');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {

    //Lấy data từ API
    
    let url = 'https://coronavirus-19-api.herokuapp.com/countries/vietnam';
    let response = await fetch(url);

    //Store data vào biến

    let data = await response.json();

    setCase(data.cases);
    setNew(data.todayCases);
    setDead(data.deaths);
    setRecover(data.recovered);
    setActive(data.active);
  }

  return (
      <div className="show">
        <ProgressBar 
          cases={cases}
          activeCases={activeCases}
          deadCases={deadCases}
          recoveredCases={recoveredCases} />
        <div className="display">
            <p>Tổng số ca: {cases}</p>
            <p>Ca mắc mới: {newCases}</p>
            <p>Ca tử vong: {deadCases}</p>
            <p>Ca hồi phục: {recoveredCases}</p>
            <p>Ca đang điều trị: {activeCases}</p>
        </div>
      </div>
  );
}

export default Display;
