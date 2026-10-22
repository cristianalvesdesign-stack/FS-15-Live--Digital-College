import Check from "../../../assets/images/icones/checked.png"


function CustomerComment ({rate, customerName, comment}) {
    return (
        <>
        <div className="border-gray-200 border rounded-2xl py-5 px-5">
            <img src={rate} alt="" />
            <div className="flex gap-1 my-2">
                <p>{customerName}</p>
            <img src={Check} alt="" />
            </div>
            <p className="text-sm!">{comment}</p>
        </div>
        </>
    )
}

export default CustomerComment