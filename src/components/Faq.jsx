import {ChevronDownIcon} from '@heroicons/react/24/solid'
const Faq = () => {
    const faqqns = ['Can education flashcards  be used  for all age groups?',
        'How do education flashcards work?',
        'Can education flashcards  be used for  test preparation?'
    ]
  return (
    <div className="flex flex-col items-start w-full gap-4">
        <div className="w-full">
            <p className="text-3xl font-bold text-blue-800 ml-4">FAQ</p>
        </div>
        {faqqns.map((qn,index) => (
            <div key={index} className="w-[75%] py-2 px-4 flex flex-row items-center justify-between border cursor-pointer border-blue-600 ml-4 rounded-xl hover:bg-slate-100">
                <p>{qn}</p>
                <ChevronDownIcon className='h-5 w-5'/>
            </div>
        ))}
        <br/>
        <br/>
    </div>
  )
}

export default Faq