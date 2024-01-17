import logo from '../assets/huggex_logo.png';

const NavBar = () => {
  return (
    <div className='flex flex-row items-center w-full h-[10vh]  p-4'>
        <div className='flex-1'>
          <img src={logo} className='h-[30]' />
        </div>
        <div className='flex flex-row items-center justify-around gap-6 hidden sm:flex'>
           <a className='text-lg hover:text-blue-700  hover:border-b transition duration-300 ease-in-out' href="">Home</a>
           <a className='text-lg hover:text-blue-700  hover:border-b transition duration-300 ease-in-out' href="">Flashcard</a>
           <a className='text-lg hover:text-blue-700  hover:border-b transition duration-300 ease-in-out' href="">Contact</a>
           <a className='text-lg hover:text-blue-700  hover:border-b transition duration-300 ease-in-out' href="">FAQ</a>
           <button className='text-white bg-gradient-to-b transition duration-300 ease-in-out  from-blue-950 to-blue-600 shadow-md hover:scale-110 text-lg px-6 rounded-3xl py-1 flex items-center justify-center'>Login</button>
        </div>
    </div>
  )
}

export default NavBar