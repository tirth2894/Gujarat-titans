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
                                Team
                            </th>
                            <th scope="col" class="px-6 py-3">
                                M
                            </th>
                            <th scope="col" class="px-6 py-3">
                                W
                            </th>
                            <th scope="col" class="px-6 py-3">
                                L
                            </th>
                            <th scope="col" class="px-6 py-3">
                                NRR
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Pts
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#142740] text-[#d8b859]">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                KKR
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                9
                            </td>
                            <td class="px-6 py-4">
                                3
                            </td>
                            <td class="px-6 py-4">
                                +1.428
                            </td>
                            <td class="px-6 py-4">
                                20
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                SRH
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                8
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                +0.414
                            </td>
                            <td class="px-6 py-4">
                                17
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                RR
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                8
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                +0.273
                            </td>
                            <td class="px-6 py-4">
                                17
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                RCB
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                +0.459
                            </td>
                            <td class="px-6 py-4">
                                14
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                CSK
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                +0.392
                            </td>
                            <td class="px-6 py-4">
                                14
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                DC
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                -0.377
                            </td>
                            <td class="px-6 py-4">
                                14
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                LSG
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                -0.667
                            </td>
                            <td class="px-6 py-4">
                                14
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] border-2 border-[#d8b859]">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                GT
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                7
                            </td>
                            <td class="px-6 py-4">
                                -1.063
                            </td>
                            <td class="px-6 py-4">
                                12
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                PBKS
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                5
                            </td>
                            <td class="px-6 py-4">
                                9
                            </td>
                            <td class="px-6 py-4">
                                -0.353
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                        </tr>
                        <tr class="bg-[#142740] text-[#d8b859] ">
                            <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                                MI
                            </th>
                            <td class="px-6 py-4">
                                14
                            </td>
                            <td class="px-6 py-4">
                                4
                            </td>
                            <td class="px-6 py-4">
                                10
                            </td>
                            <td class="px-6 py-4">
                                -0.318
                            </td>
                            <td class="px-6 py-4">
                                8
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Standings
