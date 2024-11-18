export type Car = {

    _id: string,
    make: string
    model: string,
    year: number
    price: number
    color: string
    mileage: number
    fuelType: "Gas" | "Petrol" | " Hybrid" | "Electric" | "Diesel";
    transmission: 'Automatic' | "Manual",
    condition: 'New' | "Used",
    imageUrl: string,
}

export type Order = {
    _id: string,
    product: Car,
    money_spend: number,
    currency: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    __v: number,


}


