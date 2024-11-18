"use client"

import { Car } from "@/app/types"

const OrderButton = ({ car }: { car: Car }) => {

    //aracı kirala butonuna tıklkanınca çalısacak fonk
    const handleClick = () => {
        // 1. Backend e ödeme sayfasının linkini oluştuması için istek atıyoruz
        fetch("http://localhost:3000/api/checkout", {
            method: "POST",
            body: JSON.stringify(car),


        })
            //2.backend buraya sayın alma sayfasının linkini gönderecek
            .then((res) => res.json())
            //3.kullanıcıyı satın alma sayfasına yönlendir
            .then((data) => window.location.href = data.url)



    }

    return (
        <button onClick={handleClick} className="bg-blue-500 w-full p-2 mt-3 rounded-lg text-white font-bold transition hover:bg-blue-600 ">Aracı Kirala</button>
    )
}

export default OrderButton