import Image from "next/image";
import React from "react";
import { MdTrendingUp, MdArrowDropUp, MdCardTravel } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsMenuUp, BsLaptop, BsCurrencyDollar } from "react-icons/bs";
import {
  FaAngleUp,
  FaAngleDown,
  FaRegUser,
  FaPoll,
  FaChevronUp,
} from "react-icons/fa";
import { RiCellphoneLine } from "react-icons/ri";

const Homepage = ({ radioChecked }) => {
  const homeWidth = radioChecked ? "80" : "90";
  console.log("Home - width:", homeWidth);

  return (
    <div style={{ width: `${homeWidth}%` }} className="home-class">
      <div className="flex flex-wrap">
        <div className=" w-1/3 p-2 max-md:w-full">
          <div className="card overflow-hidden">
            {/* <Image src="/icons/misc/triangle-light.png" width={200} height={100} className="absolute top-0 right-0"/> */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-2xl text-[#69656F] font-semibold">
                  Congratulations John! 🎉
                </p>
                <p className="text-[#89868D] mb-4">Best seller of the month</p>
                <p className="text-2xl text-[#9055FD] font-bold">$42.8k</p>
                <p className="text-base text-[#89868D] mb-4">
                  78% of target 🚀
                </p>
                <button className="bg-[#9055FD] text-white uppercase rounded py-[6px] px-4 text-xs">
                  View Sales
                </button>
              </div>
              <Image src="/illustrations/trophy.png" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className=" w-2/3 p-2 max-md:w-full">
          <div className="card">
            <div className="flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-xl text-[#69656F] font-semibold mb-4">
                  Transactions
                </p>
                <p className="text-base text-[#69656F] mb-6">
                  Total 48.5% growth 😎 this month
                </p>
              </div>
              <div className="grid grid-cols-4 max-sm:grid-cols-2 items-center justify-items-start mb-1">
                <div className="flex items-center gap-x-4 max-sm:mb-4">
                  <div className="rounded p-2 bg-[#9055FD] ">
                    <MdTrendingUp color="white" size={25} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-xs mb-1 text-[#89868D]">Sales</p>
                    <p className="text-xl text-[#69656F]">245k</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4 max-sm:mb-4">
                  <div className="rounded p-3 bg-[#56CA00] ">
                    <FaRegUser color="white" size={20} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-xs mb-1 text-[#89868D]">Customers</p>
                    <p className="text-xl text-[#69656F]">12.5k</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="rounded p-2 bg-[#FFB400] ">
                    <RiCellphoneLine color="white" size={25} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-xs mb-1 text-[#89868D]">Product</p>
                    <p className="text-xl text-[#69656F]">1.54k</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div className="rounded p-2 bg-[#16B1FF] ">
                    <BsCurrencyDollar color="white" size={25} />
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="text-xs mb-1 text-[#89868D]">Revenue</p>
                    <p className="text-xl text-[#69656F]">$88k</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/3 p-2 max-md:w-1/2 max-sm:w-full">
          <div className="card">
            <div className="flex flex-col justify-between">
              <div className="flex justify-between items-center mb-3">
                <p className="text-xl text-[#69656F]">Weekly Overview</p>
                <HiOutlineDotsVertical size={20} color="#69656F" />
              </div>
              <Image src="/weeklyOverview.png" width={400} height={400} />
              <div className="flex justicy-center items-center my-[10px]">
                <p className="text-2xl text-[#69656F] mr-2">45%</p>
                <p className="text-[#89868D]">
                  Your sales performance is 45% 😎 better compared to last month
                </p>
              </div>
              <button className="text-white bg-[#9055FD] rounded py-2 uppercase">
                Details
              </button>
            </div>
          </div>
        </div>

        <div className=" w-1/3 p-2 max-md:w-1/2 max-sm:w-full">
          <div className="card">
            <div className="grid content-between">
              <div className="flex justify-between items-center mb-7 text-xl text-[#69656F]">
                <p>Total Earning</p>
                <HiOutlineDotsVertical />
              </div>
              <div className="flex flex-col mb-4">
                <div className="flex items-center justify-normal mb-2">
                  <p className="text-4xl text-[#69656F]">$24,895</p>
                  <small className="flex items-center text-sm ml-3 mt-2 text-[#56CA00]">
                    <MdArrowDropUp size={20} className="mr-2" />
                    10%
                  </small>
                </div>
                <p className="text-sm text-[#89868D] mb-7">
                  Compared to $84,325 last year
                </p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-7">
                  <div className="flex">
                    <Image
                      src="/icons/misc/zipcar.png"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F]">Zipcar</p>
                      <p className="text-sm text-[#89868D]">
                        Vuejs, React & HTML
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start">
                    <p>$24,895.65</p>
                    <div className="w-full h-1 bg-[#eee6ff]">
                      <div className="w-[75%] h-1 bg-[#9055FD]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-7">
                  <div className="flex">
                    <Image
                      src="/icons/misc/bitbank.png"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F]">Bitbank</p>
                      <p className="text-sm text-[#89868D]">
                        Sketch, Figma & XD
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p>$8,6300.30</p>
                    <div className="w-full h-1 bg-[#DCF3FF]">
                      <div className="w-[75%] h-1 bg-[#16B1FF]"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex">
                    <Image
                      src="/icons/misc/aviato.png"
                      width={50}
                      height={50}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F]">Aviato</p>
                      <p className="text-sm text-[#89868D]">HTML & Angular</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p>$1,2450.80</p>
                    <div className="w-full h-1 bg-[#EDEEEF]">
                      <div className="w-[75%] h-1 bg-[#8A8D93]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border w-1/3 max-md:w-1/2 max-sm:w-full">
          <div className="flex flex-wrap">
            <div className="  w-1/2 max-sm:w-full p-2">
              <div className="card">
                <p>$86.4k</p>
                <Image src="/totalProfit.png" height={100} width={200} />
                <p className="text-center">Total Profit</p>
              </div>
            </div>
            <div className="  w-1/2 max-sm:w-full p-2">
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="bg-[#8A8D93] p-2 rounded-full">
                      <FaPoll size={25} color="white" />
                    </div>
                    <HiOutlineDotsVertical size={20} color="#69656F" />
                  </div>
                  <p className="mt-5 text-[#69656F]">Total Profit</p>
                  <p className="text-[#69656F] text-2xl">
                    $25.6k{" "}
                    <small className="text-[#56CA00] text-xs">+42%</small>
                  </p>
                  <p className="text-sm text-[#89868D] mt-4 mb-2">
                    Weekly Project
                  </p>
                </div>
              </div>
            </div>
            <div className="  w-1/2 max-sm:w-full p-2">
              <div className="card">
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="bg-[#9055FD] p-2 rounded-full">
                      <MdCardTravel size={25} color="white" />
                    </div>
                    <HiOutlineDotsVertical size={20} color="#69656F" />
                  </div>
                  <p className="mt-5 text-[#69656F]">New Project</p>
                  <p className="text-[#69656F] text-2xl">
                    862{" "}
                    <small className="text-[red] text-xs mb-[2px]">-18%</small>
                  </p>
                  <p className="text-sm text-[#89868D] mt-4 mb-2">
                    Yearly Project
                  </p>
                </div>
              </div>
            </div>
            <div className=" w-1/2 max-sm:w-full p-2">
              <div className="card">
                <p>$86.4k</p>
                <Image src="/totalProfit.png" height={100} width={200} />
                <p>Total Profit</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/3 p-2 max-md:w-1/2 max-sm:w-full">
          <div className="card">
            <div className="flex justify-between items-center text-xl text-[#69656F]">
              <p className="">Performance</p>
              <HiOutlineDotsVertical />
            </div>
            <div className="flex items-center justify-center">
              <Image src="/performance.png" width={300} height={100} />
            </div>
          </div>
        </div>

        <div className=" w-2/3 max-md:w-full p-2">
          <div className="card">
            <div className="flex flex-wrap">
              <div className="grid content-between w-1/2 max-sm:w-full  pr-2">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-2xl text-[#69656F]">Deposit</p>
                  <p className="text-sm text-[#9055FD]">View all</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56CA00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
              </div>

              <div className="grid content-between w-1/2 max-sm:w-full  pl-2">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-2xl text-[#69656F]">Deposit</p>
                  <p className="text-sm text-[#9055FD]">View all</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56CA00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    <Image
                      src="/icons/payments/gumroad.png"
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Gumroad Account
                      </p>
                      <p className="text-xs text-[#89868D]">Sell UI Kit</p>
                    </div>
                  </div>
                  <p className="text-[#56Ca00]">+$4,650</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-1/3 p-2 max-md:w-1/2 max-sm:w-full">
          <div className="card">
            <div className="grid-content-between">
              <div className="flex justify-between items-center text-[#69656F]">
                <p className="text-xl font-bold mb-5">Sales by Countries</p>
                <HiOutlineDotsVertical size={20} />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-[#E6F7D9] py-1 px-2 mr-4">
                    <p className="text-[#56CA00] text-xl font-bold">US</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-[#69656F] text-lg font-bold mr-3 ">
                        $8,656k{" "}
                      </p>
                      <FaChevronUp color="#56CA00" size={13} /> &nbsp;
                      <small className="ml-1 text-[#56CA00]">25.8%</small>
                    </div>
                    <p className="text-sm text-[#89868D]">
                      United states of america
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#69656F] text-lg font-bold">894k</p>
                  <p className="text-[#89868D] text-sm self-end">Sales</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-[#E6F7D9] py-1 px-2 mr-4">
                    <p className="text-[#56CA00] text-xl font-bold">US</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-[#69656F] text-lg font-bold mr-3 ">
                        $8,656k{" "}
                      </p>
                      <FaChevronUp color="#56CA00" size={13} /> &nbsp;
                      <small className="ml-1 text-[#56CA00]">25.8%</small>
                    </div>
                    <p className="text-sm text-[#89868D]">
                      United states of america
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#69656F] text-lg font-bold">894k</p>
                  <p className="text-[#89868D] text-sm self-end">Sales</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-[#E6F7D9] py-1 px-2 mr-4">
                    <p className="text-[#56CA00] text-xl font-bold">US</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-[#69656F] text-lg font-bold mr-3 ">
                        $8,656k{" "}
                      </p>
                      <FaChevronUp color="#56CA00" size={13} /> &nbsp;
                      <small className="ml-1 text-[#56CA00]">25.8%</small>
                    </div>
                    <p className="text-sm text-[#89868D]">
                      United states of america
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#69656F] text-lg font-bold">894k</p>
                  <p className="text-[#89868D] text-sm self-end">Sales</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-[#E6F7D9] py-1 px-2 mr-4">
                    <p className="text-[#56CA00] text-xl font-bold">US</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-[#69656F] text-lg font-bold mr-3 ">
                        $8,656k{" "}
                      </p>
                      <FaChevronUp color="#56CA00" size={13} /> &nbsp;
                      <small className="ml-1 text-[#56CA00]">25.8%</small>
                    </div>
                    <p className="text-sm text-[#89868D]">
                      United states of america
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#69656F] text-lg font-bold">894k</p>
                  <p className="text-[#89868D] text-sm self-end">Sales</p>
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="rounded-full bg-[#E6F7D9] py-1 px-2 mr-4">
                    <p className="text-[#56CA00] text-xl font-bold">US</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-[#69656F] text-lg font-bold mr-3 ">
                        $8,656k{" "}
                      </p>
                      <FaChevronUp color="#56CA00" size={13} /> &nbsp;
                      <small className="ml-1 text-[#56CA00]">25.8%</small>
                    </div>
                    <p className="text-sm text-[#89868D]">
                      United states of america
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#69656F] text-lg font-bold">894k</p>
                  <p className="text-[#89868D] text-sm self-end">Sales</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="rounded-full bg-[#E6F7D9] py-1 px-2 mr-4">
                    <p className="text-[#56CA00] text-xl font-bold">US</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <p className="text-[#69656F] text-lg font-bold mr-3 ">
                        $8,656k{" "}
                      </p>
                      <FaChevronUp color="#56CA00" size={13} /> &nbsp;
                      <small className="ml-1 text-[#56CA00]">25.8%</small>
                    </div>
                    <p className="text-sm text-[#89868D]">
                      United states of america
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-[#69656F] text-lg font-bold">894k</p>
                  <p className="text-[#89868D] text-sm self-end">Sales</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto w-full md:w-1/2 lg:w-2/3 xl:w-2/3 table-auto rounded-lg">
          <div className="shadow-[0_0.375rem_1rem_0_rgba(58,53,65,.12)] ">
            <table className="w-full rounded-lg">
              <thead className="bg-[#F3F3F4]">
                <tr className="text-left uppercase">
                  <th>User</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody className="bg-[#fff]">
                <tr className="border border-[#EFE7E8]">
                  <td className="mr-6 whitespace-nowrap max-sm:mr-20 flex"> 
                    <div className="flex items-center">
                      <Image
                        src="/avatars/1.png"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex flex-col ml-4">
                        <p className="text-[#69656F] font-bold">
                          Jordan Stevenson
                        </p>
                        <span className="text-xs text-[#89868D]">@amiccoo</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
                <tr className="border border-[#EFE7E8] p-4">
                  <td className="flex items-center">
                    <Image
                      src="/avatars/1.png"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-4">
                      <p className="text-[#69656F] font-bold">
                        Jordan Stevenson
                      </p>
                      <span className="text-xs text-[#89868D]">@amiccoo</span>
                    </div>
                  </td>
                  <td className="text-[#89868D]">susanna.Lind57@gmail.com</td>
                  <td className="">
                    <div className="flex items-center">
                      <BsLaptop color="red" size={20} />
                      <span className="ml-2 text-[#89868D]">Admin</span>
                    </div>
                  </td>
                  <td>
                    <p className="text-[#FFB912] bg-[#FFF4D9] px-2 w-fit rounded-2xl text-sm py-1 font-bold">
                      Pending
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
