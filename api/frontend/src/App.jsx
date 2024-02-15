import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [search, setSearch] = useState('');
  const [products, error, loading] = useCustomReactQuery(`/api/products?search=${search}`);

  /* if (error) { 
    return <h1>Something went wrong.</h1>
   }

   if (loading) {
    return <h1>Loading...</h1>
   } */
  return (
    <>

      <div>
        <h1>My Products</h1>

        <input 
          type="text" 
          placeholder="Search" 
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        {loading && <h1>Loading...</h1>}
        {error && <h1>Something went wrong</h1>}
        
        <h2>Number of proctsts are : {products.length}</h2>
      </div>
    </>
  )
}

export default App

const useCustomReactQuery = (urlPath) => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
 
  useEffect(() => {
   (async () => {
    try {
       setLoading(true);
       setError(false);
       const response = await axios.get(urlPath);
       console.log(response.data);
       setProducts(response.data);
       setLoading(false);
    } catch (error) {

       setError(true);
       setLoading(false);
    }
   })();

  }, [urlPath]);

  return [
    products,
    error,
    loading
  ]
}