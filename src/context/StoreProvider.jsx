/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useEffect, useState } from 'react'

export const StoreContext=createContext(null)

const StoreProvider = ({children}) => {
    const [foodMenu,setFoodMenu]=useState([]);
    console.log("food",foodMenu);

    useEffect(()=>{
        fetch("/menu.json")
        .then(res=>res.json())
        .then(data=>{
            setFoodMenu(data)})

    },[])

    const store={
        foodMenu
    }
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export default StoreProvider