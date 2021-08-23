import { useRouter } from 'next/router'

export default function PqButtons(){
    const router = useRouter()
    const courses=[
        {
            id: 1,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 2,
            course:'ECON 204',
            link: '/pqDetails'
        },
        {
            id: 3,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 4,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 5,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 6,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 7,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 8,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 9,
            course:'ECON 254',
            link: '/pqDetails'
        },
        {
            id: 10,
            course:'ECON 254',
            link: '/pqDetails'
        },
    ]
    return(
        <div className='max-w-lg font-raleway flex flex-wrap justify-center items-center'>
           {courses.map(items=>(
                <button 
                    key={items.id}
                    className='bg-gray-600 py-2 px-3 m-3 rounded text-white'
                    onClick={()=>{
                        router.push(items.link)
                    }}
                >
                    {items.course}
                </button>
           )) }
        </div>
    )
}