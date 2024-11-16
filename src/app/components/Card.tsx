import Image from "next/image";
import { Car } from "../types";

type Props = {
    car: Car;


}
const Card = ({ car }: Props) => {
    return (
        <div>
            <Image width={300} height={400} src={car.imageUrl} alt={car.make} />
        </div>
    )
}

export default Card