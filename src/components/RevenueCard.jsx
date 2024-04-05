export const  RevenueCard=({
    title,
    showWarning,
    orderCount,
    amount
})=> {
    return (
        <div className="bg-white rounded shadow-md p-4">
                <div className=" text-gray-700">
                    {title}
                    ?
                </div>   
                <div className="flex justify-between cursor-pointer pt-2">
                    <div className="font-semibold text-2xl">
                        ₹{amount}
                    </div>
                {orderCount? <div className="flex underline  font-medium flex flex-col justify-center" >                      {/*this basically checks if there is orderCOunt or not if there is it renders the div if not it renders null//*/}
                        <div className="flex text-blue-700">
                        {orderCount} order(s)
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path className="text-blue-700" stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        </div>
                    </div>:null}
            </div>
        </div>
    )
}