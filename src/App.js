
import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainContext from './Context';
import { createBrowserRouter } from 'react-router-dom';
// import { RouterProvider } from 'react-router-dom';
import ROUTES from './router/ROUTES';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [data, setData] = useState([])
  const [filterData, setFilterData] = useState([])
  const [search, setSearch] = useState('')
  const [inputValue, setInputValue] = useState('')
  const [item, setItem] = useState('')
  const [favourites, setFavourites] = useState(localStorage.getItem("favourites") ? JSON.
    parse(localStorage.getItem("favourites")) : [])
  const router = createBrowserRouter(ROUTES)

  const getData = async () => {
    const res = await axios.get("https://dummyjson.com/products")
    const data = res.data.products;
    console.log(data)
    setData(data)
    setFilterData(data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSearch = (e) => {
    let searched = e.target.value.trim().toLowerCase()
    if (searched=="") {
      setData([...filterData])
    } else {
      let filteredData = filterData.filter((item) =>
        item.title.trim().toLowerCase().includes(searched)
      );
      setData([...filteredData])
    }
  }


  const values = {
    data, setData, favourites, setFavourites, filterData, setFilterData, search, setSearch, handleSearch,
  }
  return (
    <MainContext.Provider value={values}>
      <RouterProvider router={router}/>
    </MainContext.Provider>
  );
}

export default App;







