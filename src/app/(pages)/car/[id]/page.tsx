import Header from "@/app/components/Header"
import BreadCrumb from "./BreadCrumb"
import Container from "@/app/components/Container"
import { Car } from "@/app/types"

type Props = {
    params: { id: string }
}

type ResType = {
    message: string;
    vehicle: Car;
}



const getDetail = async (id: string): Promise<ResType> => {
    const res = await fetch(`http://localhost:3000/api/vehicles/${id}`, {

        cache: "no-store",
    });

    return res.json()


}

const Page = async ({ params }: Props) => {

    const data = await getDetail(params.id)

    console.log(data)


    return (
        <div>
            <Header designs="bg-black text-white" />
            <Container designs="mt-5">
                <div >
                    <BreadCrumb car={data.vehicle} />
                    <h1 className="my-10">ARAÇ DETAY</h1>
                    <h1>{params.id}</h1>
                </div>
            </Container>

        </div>
    )
}

export default Page