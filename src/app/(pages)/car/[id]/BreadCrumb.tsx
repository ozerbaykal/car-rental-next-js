import Link from "next/link"

const BreadCrumb = () => {
    return (
        <div>
            <Link href={"/home"} className="text-blue-500 hover:text-blue-700">
                <span>Anasayfa </span>

            </Link>
            / <span>Arabalar</span> / <span>Nissan GTR R-35</span>



        </div>
    )
}

export default BreadCrumb