import Image from "next/image"
import Link from "next/link"
import close from "@/app/assets/icons/close.png"


const Page = () => {
    return (
        <div className="h-screen">
            <div className="h-[50%] bg-red-500 text-white grid place-items-center">
                <div className="grid place-items-center gap-6">
                    <Image width={80} height={80} src={close} alt="check-icon" />
                    <p className="text-4xl text-center font-semibold">Malesef, Ödeme başarısız oldu.</p>
                </div>
            </div>

            <div className="h-[50%] p-10 mt-10 text-center">

                <p className="text-lg mb-5 ">Anasayfaya dönüp tekrardan deneyebilirsiniz</p>






                <Link href={"/home"} className="border shadow py-2 px-5 rounded text-xl hover:shadow-lg hover:bg-red-300 transition ">Anasayfa</Link>


            </div>


        </div>
    )
}

export default Page