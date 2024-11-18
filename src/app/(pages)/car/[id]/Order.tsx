import Image from "next/image"
import pp from "@/app/assets/pp.png"
import loc from "@/app/assets/icons/loc.svg"
import tel from "@/app/assets/icons/tel.svg"

const OrderBox = () => {
    return (
        <div className="border shadow rounded-md p-5 max-xl:mt-10 w-full xl:col-span-2">
            <div className="flex gap-5">


                <Image src={pp} alt="profile" />

                <div className="text-xl">
                    <h2 className="font-semibold">Udemig Galeri</h2>
                    <p>İstanbul,Tuzla</p>

                </div>



            </div>

            <div className="flex justify-between mt-5 ">
                <div className="flex gap-1 items-center cursor-pointer ">
                    <Image src={loc} alt="location" />
                    <p>Loakasyonu gör</p>
                </div>
                <div className="flex gap-1 items-center cursor-pointer ">
                    <Image src={tel} alt="tel" />
                    <p>0455545454</p>
                </div>
            </div>

            <button className="bg-blue-500 w-full p-2 mt-3 rounded-lg text-white font-bold transition hover:bg-blue-600 ">Aracı Kirala</button>
            <button className="bg-green-500 w-full p-2 mt-3 rounded-lg text-white font-bold transition hover:bg-green-600 ">Whatsapp</button>

        </div>
    )
}

export default OrderBox