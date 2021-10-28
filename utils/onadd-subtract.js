
    function onAdd() {
        // setNewCount((prevnewCount ) => prevnewCount + 1);
        // incrementCount();
        setItemTotalPrice((prevPrice) => prevPrice + Math.round(price));
        setItemTotalCost((prevCost) => prevCost + Math.round(cost));
        setItemProfit((prevProfit) => prevProfit + Math.round(initialItemProfit));
        // addItemToTotal();
    }


    function onSubtract() {
        setNewCount((prevnewCount) => prevnewCount - 1);
        setItemTotalPrice((prevPrice) => prevPrice - Math.round(price));
        setItemTotalCost((prevCost) => prevCost - Math.round(cost));
        setItemProfit((prevProfit) => prevProfit - Math.round(initialItemProfit));
        // setTotalPrice(() =>totalQuotationPrice - itemTotalPrice)

        if (newCount <= 1) {
            setNewCount(1)
            setItemTotalPrice(Math.round(price));
            setItemTotalCost(Math.round(cost));
            setItemProfit(Math.round(initialItemProfit));
        }
    }


    <div className="grid gap-2 items-center mx-auto">

                <div className="flex text-center text-3xl  items-center mx-auto justify-center "
                >
                    <span
                    onClick={() => onAdd()}
                    >
                        <AiOutlinePlusCircle className="text-gray-600 hover:text-blue-600 cursor-pointer  "
                        />
                    </span>
                        <input className="text-sm px-2 outline-none w-1/4"
                        onChange={handleChange}
                        min="1"
                        type="number" id="count" value={input} 
                        />
                    {/* <select name="" id="itemCount" className="text-sm"
                        onChange={(e) => { handleChange(e.target.value) }}>
                        {numberArray.map((num, i) => (
                            <option value={num} key={i}>{num}</option>
                        ))} | {newCount}
                    </select> */}
                    
                    <span
                    onClick={() => onSubtract()}
                    >
                        <AiOutlineMinusCircle className="text-gray-600 hover:text-red-600 cursor-pointer"
                        />
                    </span>
                </div>
                <span className="bg-red-500 hover:bg-red-600 px-2 py-1 mx-auto rounded-sm text-white cursor-pointer hidden tablet:flex space-x-2 items-center"
                    onClick={removeItem}
                >
                    <BsTrash />
                    <p>Remove Item</p>
                </span>

            </div>