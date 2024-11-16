import Card from "@/app/components/Card";
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
function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const List = async () => {
    await delay(1000)

    const { data } = await getCars();


    return (
        <Container>
            <h1 className="text-2xl md:text-3xl font-bold">Bütün Araçları Keşfet</h1>

            <div>
                {
                    data.map((car) => (
                        <Card key={car._id} car={car} />

                    ))
                }
            </div>



        </Container>
    )
}

export default List