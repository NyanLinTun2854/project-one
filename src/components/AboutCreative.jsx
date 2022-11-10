import React from 'react'
import DynamicButton from './DynamicButton'
import EmployeeImg from './EmployeeImg'
import Expression from './Expression'
import Titile from './Titile'

const AboutCreative = () => {
    return (
        <div className='w-full h-auto pt-[120px] pb-[100px]'>
            <div className='w-full text-center font-poppin'>
                <Titile>Creative People</Titile>
                <Expression>
                    See how your users experience your website in realtime or view
                    <br />
                    trends to see any changes in performance over time.
                </Expression>
            </div>
            <div className='w-[85%] h-auto mx-auto mt-[60px] mb-[30px]'>
                <div className='grid grid-cols-3 gap-x-8 gap-y-8'>
                    {
                        employees.map(employee => <EmployeeImg employeeUrl={employee.imgUrl} />)
                    }
                </div>
            </div>
            <div className='w-full text-center'>
                <DynamicButton btnCreative="border-pBlue text-pBlue text-[.75rem] font-[600] px-7 py-4 tracking-[.1125rem] capitalize duration-500 hover:bg-pBlue hover:text-white">SERVICES</DynamicButton>
            </div>
        </div>
    )
}


const employees = [
    {
        id: 1,
        name: "Emma Cornor",
        position: "Designer",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/team/1.jpg"
    },
    {
        id: 2,
        name: "Richard Bauer",
        position: "Developer",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/team/2.jpg"
    },
    {
        id: 3,
        name: "John Pope",
        position: "Founder",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/team/3.jpg"
    },
    {
        id: 4,
        name: "Sara Smith",
        position: "Designer",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/team/4.jpg"
    },
    {
        id: 5,
        name: "Emma Cornor",
        position: "Developer",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/team/5.jpg"
    },
    {
        id: 6,
        name: "Peter Chapman",
        position: "Founder",
        imgUrl: "https://offsetcode.com/themes/boomerang/1.3/assets/images/team/6.jpg"
    }
]

export default AboutCreative