import { Car } from '@/app/types'

const Overview = ({ car }: { car: Car }) => {
    //Nesneyi diziye çevir ve istenmeyn değerleri filtrele
    const arr = Object.entries(car).filter((i) => i[0] !== "_id" && i[0] !== "imageUrl")




    return (
        <div>
            <div className='grid mt-5 gap-5 md:grid-cols-2 ' >
                {arr.map(([key, value]) => (

                    <p className='flex justify-between  text-capitalize'>
                        <span>{key}</span>
                        <span className='font-semibold'>{value}</span>

                    </p>


                ))}
            </div>
        </div>
    )
}

export default Overview