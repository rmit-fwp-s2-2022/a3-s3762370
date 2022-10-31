import {useEffect, useState} from "react";
import validate from "../validation";

const EMPTY_FORM = {
  size: "small",
  firstName:"",
  lastName:"",
  phoneNum:"",
  street:"",
  aptNum:"",
  city:""
}



const Form = ({ currentIndex, setData, data,setCurrentIndex }) => {
  useEffect(()=> {
    if (currentIndex === -1) {
      setForm({...EMPTY_FORM})
      setToppings([])
      return
    }
    const {toppings,...form} = data[currentIndex]
    setForm({...form})
    setToppings(toppings)
  },[currentIndex])
  const [form, setForm] = useState({
   ...EMPTY_FORM
  });


  const [toppings, setToppings] = useState([]);

  const [errMsg,setErrMsg] = useState("")

  const handleFormChange = (key, value) => {
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleToppingsChange = (name) => {
    if (toppings.includes(name)) {
      setToppings(toppings.filter((topping) => topping !== name));
      return;
    }
    setToppings([...toppings, name]);
  };

  const handleSave = ()=> {

    const name = prompt("Please enter the name of the pizza")
    setData([...data,{...form,toppings,name}])

  }

  useEffect(()=> {
    setCurrentIndex(data.length-1)
  },[data])

  return (
    <div>
      <div className="mt-8 bg-gray-200 w-full px-8 py-4">
        <div className="space-x-8">
          <button
            className={form.size == "small" ? "font-bold" : ""}
            onClick={() => handleFormChange("size", "small")}
            disabled={currentIndex !== -1}
          >
            Small
          </button>
          <button
            className={form.size == "medium" ? "font-bold" : ""}
            onClick={() => handleFormChange("size", "medium")}
            disabled={currentIndex !== -1}
          >
            Medium
          </button>
          <button
            className={form.size == "large" ? "font-bold" : ""}
            onClick={() => handleFormChange("size", "large")}
            disabled={currentIndex !== -1}
          >
            Large
          </button>
        </div>
        <div className="mt-4">
          <h3 className="text-sm font-bold">Toppings</h3>
          <div className="flex space-x-4 flex-wrap">
            {["sausage","pepperoni","ham","olives","bacon","corn","pineapple","mushrooms"].map((value,_)=>   <ToppingsItem
                onChange={(e) => handleToppingsChange(value)}
                key={value}
                name={value}
                checked={toppings.includes(value)}
            />)}

          </div>
        </div>
      </div>
      <h3 className="font-bold mt-4 text-xl">Customer Details</h3>
      <form className={" flex space-x-4"}>

        <input disabled={currentIndex !== -1} value={form.firstName} onChange={(e)=>handleFormChange("firstName",e.target.value)} className="border-b border w-full flex-1" placeholder="First Name"/>


        <input className="border-b border w-full flex-1" placeholder="Last Name"/>
        <input className="border-b border w-full flex-1" placeholder="Phone Number"/>
        <div className={"w-full flex-1"}/>
      </form>

      <h3 className="font-bold mt-4 text-xl">Delivery Address</h3>
      <form className={" flex space-x-4"}>

        <input className="border-b border w-full flex-1" placeholder="Street"/>
        <input className="border-b border w-full flex-1" placeholder="Apt. Number"/>
        <input className="border-b border w-full flex-1" placeholder="City"/>
        <input className="border-b border w-full flex-1" placeholder="Floor"/>
      </form>
      <p>{errMsg}</p>
      <button onClick={handleSave} className="px-4 mt-2 py-2">Submit</button>
    </div>
  );
};

const ToppingsItem = ({ name, onChange,checked }) => {
  return (
    <label className={"text-lg"}>

      <input checked={checked} onChange={onChange} type="checkbox" value={true} />
      {name}
    </label>
  );
};

export default Form;
