import { Car } from "@/app/types"
import gas from "@/app/assets/icons/gas.svg"
import mile from "@/app/assets/icons/mile.svg"
import transmission from "@/app/assets/icons/transmission.svg"
import year from "@/app/assets/icons/year.svg"
import Image from "next/image"
import millify from "millify"



const Title = ({ car }: { car: Car }) => {

    const arr = [
        {
            icon: year,
            name: car.year,

        },
        {
            icon: gas,
            name: car.fuelType

        },

        {
            icon: transmission,
            name: car.transmission

        },
        {
            icon: mile,
            name: millify(+car.mileage || 0) + " Miles"

        },

    ]
    return (
        <div className="mt-10 flex justify-between">
            <div>
                <h1 className="font-bold text-3xl md:text-4xl">
                    {car.make}
                </h1>

                <div className="flex gap-5 mt-5">
                    {arr.map((item, key) => (
                        <div className="flex items-center gap-1 py-1 rounded-full px-4 bg-blue-500/40 whitespace-nowrap md:mb-5" key={key}>
                            <Image width={15} height={15} src={item.icon} alt="icon" />
                            <span className="text-xs md:text-base">{item.name}</span>

                        </div>
                    ))}
                </div>

            </div>


            <div className="font-semibold text-3xl md:text-4xl mb-2 mr-5">${car.price.toLocaleString()}
            </div>





        </div>
    )
}

export default Title