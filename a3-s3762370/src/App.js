import React, { useState } from 'react'
import PizzasOrders from "./components/PizzasOrders";
import Form from "./components/Form";

const App = () => {

    const [data,setData] = useState([])
    const [currentIndex,setCurrentIndex] = useState(-1)


  return (
    <div className="grid container mx-auto w-full grid-cols-12">
      <div className="col-span-8">
          <Form data={data} setCurrentIndex={setCurrentIndex} setData={setData} currentIndex={currentIndex}/>
      </div>
      <div className="col-span-4">
          <PizzasOrders data={data} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}/>
      </div>
    </div>
  )
}

export default App
