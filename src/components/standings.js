import React from 'react'

function Standings() {
    return (
        <div className='m-5 bg-[#22426b] px-4 py-4 pb-10 rounded-2xl'>
            <p className='text-center text-2xl md:text-3xl text-[#d8b859] font-semibold my-2 mb-4'>Standings</p>

            <div class="relative overflow-x-auto rounded-xl">
                <table class="w-full text-sm text-left rtl:text-right text-[#142740]">
                    <thead class="text-xs text-gray-700 uppercase bg-[#d8b859]">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Standings
