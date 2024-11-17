import Link from "next/link";
import Container from "./Container";
Container
const Header = ({ designs }: { designs?: string }) => {
    return (
        <header className={` w-full text-black ${designs}`} >
            <Container designs="flex justify-between items-center w-full ">
                <h1 className="font-bold text-2xl md:text-3xl">
                    <Link href="/">DRIVE</Link>
                </h1>

                <nav className="text-sm md:text-base flex gap-2 md:gap-4">
                    <Link href="/home"> Browse</Link>
                    <Link href="/orders"> Siparişlerim</Link>
                    <Link href="/home"> Hakkımızda</Link>
                    <Link className="max-md:hidden" href="/"> Fİyatlandırma</Link>
                </nav>

                <div className="flex gap-2">
                    <button className="max-md:hidden" >Contact</button>
                    <button className="bg-white text-black px-5 py-2 rounded-full text-nowrap transiton hover:bg-gray-100">Sign Up</button>
                </div>
            </Container>

        </header>
    );
};

export default Header;
