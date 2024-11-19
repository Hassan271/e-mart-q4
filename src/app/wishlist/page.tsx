import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import prod1 from "../assets/products/prod-1.png";
import prod2 from "../assets/products/prod-2.png";
import prod3 from "../assets/products/prod-3.png";
import prod4 from "../assets/products/prod-4.png";

import prod5 from "../assets/products/prod-2-1.png";
import prod6 from "../assets/products/prod-2-2.png";
import prod7 from "../assets/products/prod-2-3.png";
import prod8 from "../assets/products/prod-2-4.png";

import deleteicon from "../assets/icons/delete-icon.png";
import AddToCarticon from "../assets/icons/Cart-icon.png";



export default function WishList() {
  return (
    <>
    
    {/* <div className=" text-8xl text-center"> 
    WishList Page <br /> 
    <Link href={"/"}>Home Page </Link>    
    </div> <br /> */}

    {/* <Product1/> */}


    {/* WishList ======================================================= */}
    <div className='  items-center  '>

      <div  className=' text-center space-x-96  '>
        <a className="text-1xl left-5 ml-20">WishList(4) </a>
        <button className='border bottom-2 p-5 right-5 ' >Move all to Bag</button>
      </div>


    <div  className='flex justify-center items-center space-4' >
    
    {/* card-1----------------------------------- */}

      <div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
        {/* Percentage ---------- */}
        <div className='  flex' >
        <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
          -35%       
        </div>
        {/* Delete icon -------------------- */}
        <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
        src={deleteicon} alt="img1Prod1" />
        </div>
        {/* image ----------------------- */}
        <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod1} alt="img1Prod1" />
        <p>
          <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
            Add to Cart</button>
        </p>
        <div className=' text-left  '>
        <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
        <p className="text-[#db4444] text-xl my-2 "> 
         283 $</p>
         </div>
      </div>

    {/* card-1 Ends ----------------------------------- */}

    {/* card-2----------------------------------- */}

      <div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
        {/* Percentage ---------- */}
        <div className='  flex' >
        <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
          -35%       
        </div>
        {/* Delete icon -------------------- */}
        <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
        src={deleteicon} alt="img1Prod1" />
        </div>
        {/* image ----------------------- */}
        <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod2} alt="img1Prod1" />
        <p>
          <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
            Add to Cart</button>
        </p>
        <div className=' text-left  '>
        <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
        <p className="text-[#db4444] text-xl my-2 "> 
         283 $</p>
         </div>
      </div>

    {/* card-2 Ends ----------------------------------- */}
    
    {/* card-3----------------------------------- */}

    <div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
        {/* Percentage ---------- */}
        <div className='  flex' >
        <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
          -35%       
        </div>
        {/* Delete icon -------------------- */}
        <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
        src={deleteicon} alt="img1Prod1" />
        </div>
        {/* image ----------------------- */}
        <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod3} alt="img1Prod1" />
        <p>
          <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
            Add to Cart</button>
        </p>
        <div className=' text-left  '>
        <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
        <p className="text-[#db4444] text-xl my-2 "> 
         283 $</p>
         </div>
    </div>

    {/* card-3 Ends ----------------------------------- */}
    
    {/* card-4----------------------------------- */}

    <div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
        {/* Percentage ---------- */}
        <div className='  flex' >
        <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
          -35%       
        </div>
        {/* Delete icon -------------------- */}
        <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
        src={deleteicon} alt="img1Prod1" />
        </div>
        {/* image ----------------------- */}
        <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod4} alt="img1Prod1" />
        <p>
          <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
            Add to Cart</button>
        </p>
        <div className=' text-left  '>
        <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
        <p className="text-[#db4444] text-xl my-2 "> 
         283 $</p>
         </div>
    </div>

    {/* card-4 Ends ----------------------------------- */}

    </div>
  
    </div>
    {/* WishList ======================================================= */}

{/* See All Start ======================================================= */}
<div className='  items-center  '>

<div  className=' text-center space-x-96  '>
  <a className="text-1xl left-5 ml-20">Just For You  </a>
  <button className='border bottom-2 p-5 right-5 ' >See All</button>
</div>

<div  className='flex justify-center items-center space-4' >

{/* card-1----------------------------------- */}

<div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
  {/* Percentage ---------- */}
  <div className='  flex' >
  <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
    -35%       
  </div>
  {/* Delete icon -------------------- */}
  <Image className=" w-[24px] h-[24px]  mx-48 my-2 " src={deleteicon} alt="img1Prod1" />
  </div>
  {/* image ----------------------- */}
  <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod5} alt="img1Prod1" />
  <p>
    <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
    <Image className=" w-[24px] h-[24px] relative " src={AddToCarticon} alt="Cart" />
      Add to Cart</button>
  </p>
  <div className=' text-left  '>
  <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
  <p className="text-[#db4444] text-xl my-2 "> 
   283 $</p>
   </div>
</div>

{/* card-1 Ends ----------------------------------- */}

{/* card-2----------------------------------- */}

<div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
  {/* Percentage ---------- */}
  <div className='  flex' >
  <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
    -35%       
  </div>
  {/* Delete icon -------------------- */}
  <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
  src={deleteicon} alt="img1Prod1" />
  </div>
  {/* image ----------------------- */}
  <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod6} alt="img1Prod1" />
  <p>
    <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
      Add to Cart</button>
  </p>
  <div className=' text-left  '>
  <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
  <p className="text-[#db4444] text-xl my-2 "> 
   283 $</p>
   </div>
</div>

{/* card-2 Ends ----------------------------------- */}

{/* card-3----------------------------------- */}

<div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
  {/* Percentage ---------- */}
  <div className='  flex' >
  <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
    -35%       
  </div>
  {/* Delete icon -------------------- */}
  <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
  src={deleteicon} alt="img1Prod1" />
  </div>
  {/* image ----------------------- */}
  <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod7} alt="img1Prod1" />
  <p>
    <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
      Add to Cart</button>
  </p>
  <div className=' text-left  '>
  <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
  <p className="text-[#db4444] text-xl my-2 "> 
   283 $</p>
   </div>
</div>

{/* card-3 Ends ----------------------------------- */}

{/* card-4----------------------------------- */}

<div className="w-[270px] h-[322px] m-5 text-center shadow-lg font-sans">
  {/* Percentage ---------- */}
  <div className='  flex' >
  <div className=' w-[55px] h-[26px] my-2 flex items-center justify-center bg-red-500 text-white  rounded-md text-xl font-semibold'>
    -35%       
  </div>
  {/* Delete icon -------------------- */}
  <Image className=" w-[24px] h-[24px]  mx-48 my-2 " 
  src={deleteicon} alt="img1Prod1" />
  </div>
  {/* image ----------------------- */}
  <Image className=" w-[180px] h-[130px] mx-6 my-4 " src={prod8} alt="img1Prod1" />
  <p>
    <button className="w-[270px] h-[40px] py-3 text-white bg-black text-center text-lg hover:opacity-70 focus:outline-none border-none" >
      Add to Cart</button>
  </p>
  <div className=' text-left  '>
  <h1 className=' text-black text-[16px] font-medium  my-2 '> Heading 1</h1>
  <p className="text-[#db4444] text-xl my-2 "> 
   283 $</p>
   </div>
</div>

{/* card-4 Ends ----------------------------------- */}

</div>

</div>
{/* See All ======================================================= */}

    </>
  )
}
