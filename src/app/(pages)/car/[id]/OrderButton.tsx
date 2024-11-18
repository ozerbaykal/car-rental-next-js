"use client"

import Loader from "@/app/components/Loader";
import { Car } from "@/app/types"
import { useState } from "react"

const OrderButton = ({ car }: { car: Car }) => {
    const [isLoading, setIsLoaading] = useState(false);

    //aracı kirala butonuna tıklkanınca çalısacak fonk
    const handleClick = () => {
        //istek atıldığında loading'i true yap
        setIsLoaading(true)
        // 1. Backend e ödeme sayfasının linkini oluştuması için istek atıyoruz
        fetch("http://localhost:3000/api/checkout", {
            method: "POST",
            body: JSON.stringify(car),


        })
            //2.backend buraya sayın alma sayfasının linkini gönderecek
            .then((res) => res.json())
            //3.kullanıcıyı satın alma sayfasına yönlendir
            .then((data) => window.location.href = data.url)
            //son olarak isloading state'ini false a çek
            .finally(() => setIsLoaading(false))



    }

    return (
        <button disabled={isLoading}
            onClick={handleClick}
            className="bg-blue-500 w-full p-2 mt-3 rounded-lg text-white font-bold transition hover:bg-blue-600 ">
            {isLoading ? <Loader /> : " Aracı Kirala"}


        </button>
    )
}

export default OrderButton