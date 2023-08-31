import React, { createContext, useContext, useEffect, useState } from 'react'
// import dataFile from './../assets/businessData.csv'
import Papa from "papaparse";

const RawDataContext = createContext(null)

export const useRawData = () => useContext(RawDataContext)

const RawDataProvider = ({children}) => {
  const [rawData, setRawData] = useState([])

  const [currentYearData, setCurrentYearData] = useState([])

  const [prevYearData, setPrevYearData] = useState([])

  const fetchData = (event) => {

    const file = event.target.files[0];

    let allData = {
      Date: [],
      ItemA_cost: [],
      ItemB_cost: [],
      Billing_status: [],
      Emails_generated: [],
      Income_source: []
    }

    Papa.parse(file, {
      download: true,
      header: true,
      step: function(row) {
        const data = row.data;
        Object.keys(data).forEach(key => {
          allData[key].push(data[key])
        })
      },
      complete: function() {
        setRawData(allData);
        organizeYearData(allData);
      }
    });
  }

  const organizeYearData = (allData) => {
    let curr = [];
    let prev = [];

    allData.forEach(data => {
      let year = data.Date.substring(6)
      if(year === "2023") {
        curr.push(data)
      } else {
        prev.push(data)
      }
    })

    setCurrentYearData(curr)
    setPrevYearData(prev)
  }

  return (
    <RawDataContext.Provider value={{fetchData, rawData}}>
      {children}
    </RawDataContext.Provider>
  )
}

export default RawDataProvider