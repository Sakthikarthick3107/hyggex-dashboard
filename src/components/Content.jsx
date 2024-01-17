import { LightBulbIcon  ,ViewfinderCircleIcon } from '@heroicons/react/24/outline'
import { SpeakerWaveIcon ,ArrowPathIcon , ArrowLeftCircleIcon , ArrowRightCircleIcon ,PlusCircleIcon } from '@heroicons/react/24/solid'
import logo2 from '../assets/logo2.png'
import { useState } from 'react'

const Content = () => {
    const[count,setCount] = useState(1);
    const sections = ['Study' , 'Quiz' , 'Test' , 'Game' , 'Others']
    const [activeSection , setActiveSection] =  useState(0);
    const increment = () => {
        if(count != 10){
            setCount(count+1);
        }
    }
    const decrement = () => {
        if(count != 1){
            setCount(count-1);
        }
    }
  return (
    <div className='my-10 flex flex-col w-full items-center justify-center'>
    <div className='w-[100%] flex flex-col'>
        <p className='text-3xl font-bold text-blue-800 my-4' >Relations and Functions(Mathematics)</p>
    </div>
    <div className='w-[60%] lg:w-[60%] sm:w-full flex flex-col items-center justify-center '>
            <div className='lg:w-[60%] sm:w-[100%] flex flex-row items-center justify-around py-2' >
                {sections.map((section , index) => (
                    <button onClick={() => setActiveSection(index)}  key={index} className={`px-2 py-1 cursor-pointer h-10 transition duration-800 ease-in-out hover:text-blue-700 ${activeSection === index && 'border-b-2 border-blue-600 transition-colors duration-1000 text-blue-600'}`}>
                        <p className='text-lg font-semibold '>{section}</p>
                    </button>
                ))}
            </div>
            <div className='bg-gradient-to-bl from-blue-950 to-blue-500 lg:w-[70%] sm:w-full p-2 rounded-2xl flex flex-col items-center justify-center'>
               <div className='w-[90%] flex items-center justify-between my-2'>
                    <LightBulbIcon color='white'  className='h-6 w-6' />
                    <SpeakerWaveIcon color='white'  className='h-6 w-6' />
                </div>
                <div className='flex flex-row items-center sm:w-full  justify-center h-[30vh] mb-2'>
                    <p className='text-white text-4xl font-bold '>9 + 6 + 7x - 2x - 3</p>
                </div>

            </div>
            <div className='w-[60%] flex flex-row items-center justify-around py-2 h-20'>
                <ArrowPathIcon className='h-6 w-6 text-blue-800'  />
                <div className='flex flex-row items-center justify-between gap-2    '>
                    <ArrowLeftCircleIcon onClick={decrement} className='h-12 w-12 text-blue-800 cursor-pointer hover:shadow-md rounded-full hover:bg-gray-300'/>
                    <p className='font-semibold w-10' >{count<10?'0'+count:count}/10</p>
                    <ArrowRightCircleIcon onClick={increment} className='h-12 w-12 text-blue-800 cursor-pointer hover:shadow-md rounded-full hover:bg-gray-300'/>
                </div>
                
                <ViewfinderCircleIcon className='h-6 w-6 text-blue-800'  />
            </div>
        </div>
        <div className='flex flex-row items-center justify-between w-full'>
            <img src={logo2}  className='h-[10] md:h-[20]' />
            <div className='flex flex-row items-center  flex-wrap'>
                <PlusCircleIcon  className='h-10 w-10 text-blue-800 cursor-pointer hover:shadow-md rounded-full hover:bg-gray-300'/>
                <p className='text-lg text-blue-700 font-semibold hidden sm:block'>Create FlashCard</p>
            </div>
            
        </div>

    </div>
  )
}

export default Content