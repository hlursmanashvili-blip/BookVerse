import { useEffect, useState } from "react"


export default function useLocalStorage(key, initialValue) {
  const savedValue=localStorage.getItem(key);
  const[value,setValue]=useState( savedValue === null ? initialValue : JSON.parse(savedValue));
  
  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(value))

  },[key,value])
 
    return [value, setValue];
  
}
