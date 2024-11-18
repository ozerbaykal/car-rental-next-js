import Header from "@/app/components/Header";
import { Order } from "@/app/types";
import OrderCard from "./OrderCard";
import Container from "@/app/components/Container";
//proje geliştirme süresince farklı portlarda veya yayınlandıktan sonra farklı domain adreslerinde çalışabileceğinden istek atılan api adreslerini dinamik yapalım

type ResType = {
    message: string;
    orders: Order[];
};

const getOrders = async (): Promise<ResType> => {
    const res = await fetch("http://localhost:3000/api/orders");
    return res.json();
};

const Page = async () => {
    const data = await getOrders();

    return (
        <div>
            <Header designs="bg-black text-white" />

            <Container>
                <h2 className="mb-10 text-4xl font-bold">Siparişlerim</h2>
                <div className="grid gap-10">
                    {data.orders.map((order, key) => (
                        <OrderCard key={key} order={order} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Page;
