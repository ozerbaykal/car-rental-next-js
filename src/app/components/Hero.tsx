import Image from "next/image"
import { models } from "../constants"






const Hero = () => {
    return (
        <div className="h-[80vh] grid place-items-center bg-[linear-gradient(#00000084,#00000084),url('./assets/car-bg.jpg')] bg-center bg-cover text-white">
            <div className="text-center flex flex-col gap-8">
                <p>Yakınındaki kiralık araçları keşfet</p>
                <h1 className="text-4xl md:text-5xl font-bold mt-5">Senin İçin Mükemmel Aracı Bul</h1>
                <p className="mt-5">Kendine uygun modeli belirle</p>
                <div className="flex gap-4 justify-center flex-wrap" >
                    {
                        models.map((model, key) => (
                            <button
                                className="px-3 py-1 rounded-full bg-gray-100/25 hover:bg-gray-500 flex gap-1 items-center" key={key} >{model.name}
                                <Image src={model.icon} alt={` ${model.name} icon`} />
                            </button>
                        ))

                    }
                </div>
            </div>

        </div>
    )
}

export default Hero