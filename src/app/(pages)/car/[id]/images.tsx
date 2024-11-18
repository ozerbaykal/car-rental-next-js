import Image from "next/image"
import Car1 from "@/app/assets/car1.png"
import Car2 from "@/app/assets/car2.png"
import Car3 from "@/app/assets/car3.png"
import Car4 from "@/app/assets/car4.png"
const Images = ({ url }: { url: string }) => {


    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative max-md:h-[300px]">
                <Image className="object-contain" fill unoptimized src={url} alt="vehicle" />

            </div>


            <div className="grid grid-cols-2 gap-5">
                <Image className="rounded-md" src={Car1} alt="vehicle" />
                <Image className="rounded-md" src={Car2} alt="vehicle" />
                <Image className="rounded-md" src={Car3} alt="vehicle" />
                <Image className="rounded-md" src={Car4} alt="vehicle" />
            </div>


        </div>
    )
}

export default Images