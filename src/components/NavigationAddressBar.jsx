import { HomeIcon , ChevronRightIcon } from '@heroicons/react/24/solid'

const NavigationAddressBar = () => {
  return (
    <div className='w-full my-4 flex flex-row items-center gap-2'>
      
    <HomeIcon className='h-6 w-6' />
    <ChevronRightIcon className='h-4 w-4 font-bold' />
    <p>FlashCard</p>
    <ChevronRightIcon className='h-4 w-4 font-bold' />
    <p>Mathematics</p>
    <ChevronRightIcon className='h-4 w-4 font-bold' />
    <p className='font-semibold text-blue-700' >Relation and Function</p>
    </div>
  )
}

export default NavigationAddressBar