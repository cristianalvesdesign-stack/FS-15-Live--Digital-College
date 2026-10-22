import FilterIcon from "../../../assets/images/icones/filter.png"
import DropDownIcon from "../../../assets/images/icones/select.png"
import DropDownIconTop from "../../../assets/images/icones/select-top.png"


function Filter() {
  return (  
  <>
    <div className="border border-gray-200 rounded-2xl w-80 p-4">
      <div className="flex justify-between items-center">
        <p className="text-black! font-bold!">Filters</p>
        <img src={FilterIcon} alt="" />
      </div>
      <hr className="text-gray-300 mt-8"/>
      <div className="mt-3">
        <div className="flex justify-between mb-3 items-center">
          <p>T-shirts</p>
          <img src={DropDownIcon} alt="" />
        </div>
        <div className="flex justify-between mb-3 items-center">
          <p>Shorts</p>
          <img src={DropDownIcon} alt="" />
        </div>
         <div className="flex justify-between mb-3 items-center">
          <p>Shirts</p>
          <img src={DropDownIcon} alt="" />
        </div>
        <div className="flex justify-between mb-3 items-center">
          <p>Hoodie</p>
          <img src={DropDownIcon} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <p>Jeans</p>
          <img src={DropDownIcon} alt="" />
        </div>
      </div>
      <hr className="text-gray-300 mt-6"/>
      <div className="flex justify-between items-center mt-5">
        <p className="text-black! font-bold!">Price</p>
        <img src={DropDownIconTop} alt="" />
      </div>
      <hr className="text-gray-300 mt-6"/>
      <div className="flex justify-between items-center mt-5">
        <p className="text-black! font-bold!">Colors</p>
        <img src={DropDownIconTop} alt="" />
      </div>
      <div className="flex flex-wrap justify-between mb-4">
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-green-600"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-red-600"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-yellow-300"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-orange-400"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-pink-600"></div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-blue-800"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-violet-700"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-[#F506A4]"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-white-600"></div>
        <div className="border border-gray-200 rounded-4xl w-10 h-10 bg-black"></div>
      </div>
      <hr className="text-gray-300 mt-6"/>
      <div className="flex justify-between items-center mt-5">
        <p className="text-black! font-bold!">Size</p>
        <img src={DropDownIconTop} alt="" />
      </div>
      <hr className="text-gray-300 mt-6"/>
      <div className="flex justify-between items-center mt-5">
        <p className="text-black! font-bold!">Dress Style</p>
        <img src={DropDownIconTop} alt="" />
      </div>
      <button className="bg-black w-full mt-10 rounded-4xl text-white py-3 cursor-pointer mb-3">
        Apply Filter
      </button>
    </div>
  </>
  )
}

export default Filter;