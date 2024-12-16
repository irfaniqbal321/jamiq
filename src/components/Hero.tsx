import React from "react";
import Image from "next/image";
import { LuArrowDownUp } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { FaGasPump } from "react-icons/fa";
import { BiBuoy } from "react-icons/bi";
import { MdPeopleAlt } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";



const Hero = () => {
  return (
    <div>
    <div className="bg-gray-50 min-h-screen w-327 h-auto sm:mt-32 ml-25 gap-191 flex flex:col items-center justify-center">
      <section className="container mx-auto px-4 py-16 bg-slate-100" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Card */}
          <div
            className="bg-blue-400 p-6 rounded-lg shadow-md"
            style={{
              backgroundImage: '/Ellipse 40.png', // Replace with your left card image URL
              backgroundSize:"cover",
              backgroundPosition:"center",
            }}
          >
            <h2 className="text-lg w-[272px] font-bold text-[#FFFFFF] mb-2">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white mb-6 w-[284px]">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/1st cari mages.png"
              alt="Car"
              width={340}
              height={108}
              className="mt-4 ml-40 object-cover"
            />
          </div>

          {/* Right Card */}
          <div
            className="bg-blue-800 p-6 rounded-lg shadow-md "
            
          >
            <h2 className="text-3lg font-bold text-[#FFFFFF] w-[272px] mb-2">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white mb-6 w-[284px]">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <button className="bg-[#54A6FF] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              Rental Car
            </button>
            <Image
              src="/48fe531e6fd2626c5d1041dbfcde3341.png" // Replace with your car image URL
              alt="Car"
              width={340}
              height={108}
              className="mt-4 ml-40 object-cover"
            />
          </div>
        </div>

        {/* Booking Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-[1] grid-[3] gap-[4]">
              <div>
                <label className="text-[1]">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 square-full shadow-md hover:bg-blue-600">
            <LuArrowDownUp />
              
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium-[2]">Drop-Off</h3>
            <div className="grid-[1] grid-[3] gap-4">
              <div>
                <label className="text-[1]">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="text-[1]">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="text-[1]">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>
      
     
     <div className="h-[1228]  ml-[0] gap-[10]">
      <div className="w-[1018] h-[388] gap-[10] flex flex:col">
        <div className="w-[300] h-[388] rounded-[10] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24] mt-[24] ml-[200] "/>
          <div className="w-[128px] h-[48px] mt-[24px] sm:ml-[24px] gap-[4px] text-[20px] font-extrabold">Koenigsegg  <br />
            <p className="text-[14px] text-zinc-[400px] justify-between flex flex:col" >Sport  </p>
            
            
          </div>
          
      
          <Image
              src="/1st cari mages.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            90L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1lg">
              $99.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <IoIosHeartEmpty className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] sm:h-48 mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">Nissan GT-R  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >Sport  </p>
            
            
          </div>
          
      
          <Image
              src="/48fe531e6fd2626c5d1041dbfcde3341.png" // Replace with your car image URL
              alt="Car"
              width={172}
              height={74}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex flex:col">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            80L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[10px] ml-[24px] gap-[4px] text-1xl ">
              $100.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24px] mt-[10px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[10px] ml[24px] gap-[4px] text-[20px] font-extrabold">Rolls - Royce  <br />
            <p className="text-[8px] text-zinc-400 justify-between flex" >Sport  </p>
            
            
          </div>
          
      
          <Image
              src="/roll-roys car.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[20px] ml-[7px]"
            /> 
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            70L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[88px] ml-[24px] gap-[4px] text-1xl">
              $96.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[88px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <IoIosHeartEmpty className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">Nissan GT-R  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >Sport  </p>
            
            
          </div>
          
      
          <Image
              
              src="/48fe531e6fd2626c5d1041dbfcde3341.png" // Replace with your car image URL
              alt="Car"
              width={172}
              height={64}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            80L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-[1]">
              $100.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
      
      </div>
      <div className="w-[1018px] h-[388px] gap-[10px] flex mt-[15px]">
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <IoIosHeartEmpty className="w-[24px] h-[24px] mt-[28px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[10px] ml[14px] gap-[4px] text-[24px] font-extrabold">AllNewRush  <br />
            <p className="text-[8px] text-zinc-400 justify-between flex" >SUV  </p>
            
            
          </div>
          
      
          <Image
              src="/carjeep.png"// Replace with your car image URL
              alt="Car"
              width={172}
              height={74}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            70L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-[1]">
              $72.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">CR -V
            <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >SUV  </p>
            
            
          </div>
          
      
          <Image
              src="/crvcar.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            80L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $80.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <IoIosHeartEmpty className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
        <div className= "w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[1px] ml[24px] gap-[4px] text-[20px] font-extrabold">AllNewTerios  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >SUV </p>
            
            
          </div>
          
      
          <Image
              src="/colorcar.png" // Replace with your car image URL
              alt="Car"
              width={150}
              height={64}
              
              className="mt-[2px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[1px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            90L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $74.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">CR -V  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >SUV  </p>
            
            
          </div>
          
      
          <Image
              src="/browncar.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[10px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            80L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $80.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
      
      </div>
      <div className="w-[1018px] h-[388px] gap-[10px] flex mt-[15px]">
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">MGZXExclusice  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >Hatchback  </p>
            
            
          </div>
          
      
          <Image
              src="/bluecar.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            70L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $76.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <IoIosHeartEmpty className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
        <div className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128x] h-[44px] mt-[1px] ml[24px] gap-[4px] text-[20px] font-extrabold">NewMGZS  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >Sport  </p>
            
            
          </div>
          
      
          <Image
              src="/silvercar.png" // Replace with your car image URL
              alt="Car"
              width={220}
              height={75}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            80L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $80.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">MGZXExcite  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >Hatchback  </p>
            
            
          </div>
          
      
          <Image
              src="/bluecar.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            90L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $74.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
        <div className="w-[300px] h-[388px] rounded-[10px] bg-white pl-[24px] p-[5px]" >
        <FcLike className="w-[24px] h-[24px] mt-[24px] ml-[200px] "/>
          <div className="w-[128px] h-[48px] mt-[24px] ml[24px] gap-[4px] text-[20px] font-extrabold">NewMGZS  <br />
            <p className="text-[14px] text-zinc-400 justify-between flex" >SUV  </p>
            
            
          </div>
          
      
          <Image
              src="/samecar.png" // Replace with your car image URL
              alt="Car"
              width={272}
              height={84}
              
              className="mt-[20px] ml-[7px]"
            />
          <div className="w-[280px] h-[24px] mt-[20px] ml-[8px] gap-[17px] flex">
            <div className="w-[60px] h-[24px] gap-[8px] flex">
          

            <FaGasPump className="w-[24px] h-[24px] text-[14px]"/>
            80L
            </div>
            <div className="w-[84px] h-[24px] gap-[8px] flex">
              
            <BiBuoy className="w-[24px] h-[24px] text-[14px]"/>Manual
            </div>
            <div className="w-[91px] h-[24px] gap-[7px] flex">
              
            <MdPeopleAlt className="w-[14px] h-[24px] text-[10px]"/>
            2 people
            
      

            </div>
            </div>
            <div className="flex">
            <div className="w-[116px] h-[44px] mt-[12px] ml-[24px] gap-[4px] text-1xl font-plus jakarta sans">
              $80.00/day
              
            </div>
            <div className="w-[106px] h-[34px] mt-[6px] rounded-[4px] p-[5px] bg-blue-800 text-white text-center">RentNow</div>
            </div>

          
          
          
        </div>
      
      </div>
     </div>
     </section>
     </div>
    </div>
  );
};

export default Hero;