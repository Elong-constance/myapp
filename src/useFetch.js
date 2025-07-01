import { useState } from "react";
import { useEffect } from "react";

const useFetch = (uri) => {
 
 const [data, SetData] = useState()
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null);

      useEffect(()=>{
      setTimeout(() => {
       fetch(uri)
      .then((res)=>{
        if(!res.ok){
          throw Error('could not fetch data from the resource')
        }
        return res.json()
      })
      .then((data)=>{
        console.log(data)
        SetData(data)
        setIsPending(false)
        setError(null)
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
    }, 2000);
  
  }, [uri]);

  return { data, isPending, error };
};

export default useFetch;