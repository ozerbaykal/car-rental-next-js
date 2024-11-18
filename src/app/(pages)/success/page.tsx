import check from "@/app/assets/icons/check.png"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <div className="h-screen">
            <div className="h-[50%] bg-green-500 text-white grid place-items-center">
                <div className="grid place-items-center gap-6">
                    <Image width={80} height={80} src={check} alt="check-icon" />
                    <p className="text-4xl text-center font-semibold">Tebrikler,Ödemeniz başarıyla alındı.</p>
                </div>
            </div>

            <div className="h-[50%] p-10 mt-10 text-center">

                <p className="text-lg">Aracınız nasıl teslim alacağınızla ilgili yakında bir mail alacaksınız</p>
                <p className="mt-5 mb-10">Lütfen mailinizi kontrol ediniz.</p>

                <div className="flex gap-4 justify-center">


                    <Link href={"/orders"} className="border shadow py-2 px-5 rounded text-lg hover:shadow-xl hover:bg-green-100 transition">Siparişlerim</Link>

                    <Link href={"/home"} className="border shadow py-2 px-5 rounded text-xl hover:shadow-lg hover:bg-green-100 transition">Anasayfa</Link>
                </div>

            </div>


        </div>
    )
}

export default Page