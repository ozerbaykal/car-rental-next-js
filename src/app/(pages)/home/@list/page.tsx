import Container from "../../../components/Container";
import { Car } from "@/app/types"

type ReturnType = {
    message: string,
    data: Car[],
}

const getCars = async (): Promise<ReturnType> => {

    try {
        const res = await fetch("http://localhost:3000/api/vehicles");

        return res.json();

    } catch (err) {
        throw new Error("Araçları alarak bir sorun oluştu")

    }




}

const List = async () => {
    const { data } = await getCars();


    return (
        <Container>
            <h1 className="text-2xl md:text-3xl font-bold">Bütün Araçları Keşfet</h1>

            <div>
                {
                    data.map((car) => (
                        <div>
                            <h1>
                                {car.make}
                                {car.model}

                            </h1>

                        </div>
                    ))
                }
            </div>



        </Container>
    )
}

export default List