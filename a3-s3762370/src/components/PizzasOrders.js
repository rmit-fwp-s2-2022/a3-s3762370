const PizzasOrders = ({ data, setCurrentIndex, currentIndex }) => {
    return <div>
        {data.map((item, index) => <OrderItem selected={currentIndex === index} onSelect={() => setCurrentIndex(index)} key={index} name={item.name} />)}
        <button onClick={() => setCurrentIndex(-1)}>Create New</button>
    </div>
}

const OrderItem = ({ name, selected, onSelect }) => {
    return <div onClick={onSelect} className={`${selected ? "bg-purple-300" : ""} px-4 flex justify-between py-2`}>
        {name}
    </div>
}

export default PizzasOrders
