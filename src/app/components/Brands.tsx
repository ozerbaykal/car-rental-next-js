import Image from "next/image"
import { brands } from "../constants"
import Container from "./Container"

const Brands = () => {
    return (
        <Container >

            <h1 className="text-2xl md:text-3xl font-bold">Premium Markalarımızı keşfedin</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5 mt-5 items-center ">
                {
                    brands.map((item, key) => (
                        <div key={key} className="bg-white shadow rounded-lg flex flex-col items-center p-3 cursor-pointer transition hover:shadow-lg">
                            <Image src={item.icon} alt="brand-logo" />
                            <h4 className="text-base">{item.name}</h4>
                        </div>

                    ))


                }


            </div>

        </Container>
    )
}

export default Brands