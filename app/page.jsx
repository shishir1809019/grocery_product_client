"use client"
import Nav from "@components/Navbar"
import Products from "@components/Products"
import axios from "axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(filteredProducts)
  

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/';

    // Make a GET request to fetch data from the Django API
    axios
      .get(apiUrl)
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearch = (searchInput) => {
    if(!searchInput){
      setFilteredProducts([...products])
    }
    else{
      const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
    }
  };

  return (
    <div>
      <Nav products={products} onSearch={handleSearch}/>
      <Products products={filteredProducts}/>
    </div>
  )
}

export default Home