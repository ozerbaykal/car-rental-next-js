import { Order } from '@/app/types'
import millify from 'millify'
import Image from 'next/image'

const OrderCard = ({ order }: { order: Order }) => {
    return (
        <div className='border p-4 rounded-md gap-5 shadow items-center justify-between grid grid-cols-3 xl:grid-cols-5 hover:bg-zinc-200/40 transtion cursor-pointer'>
            <Image width={200} height={200} unoptimized src={order.product.imageUrl} alt='car' />

            <h2>
                <span>{order.product.make}</span>
                <span className='font-bold mx-2'>{order.product.model}</span>

            </h2>
            <p className="flex max-md:flex-col gap-1 ">
                <span className='whitespace-nowrap'>Ödenen Tutar :</span>
                <span className='text-green-600 font-bold'>{millify(order.money_spend)}₺</span>
            </p>
            <p className="flex max-md:flex-col gap-1 ">
                <span className='whitespace-nowrap'>Alım Tarihi:</span>
                <span className='text-blue-600 font-bold'>{new Date(order.createdAt).toLocaleDateString()}</span>
            </p>
            <p className="flex max-md:flex-col gap-1 ">
                <span className='whitespace-nowrap'>Ödeme Tipi :</span>
                <span className='text-blue-600 font-bold'>{order.type}</span>
            </p>

        </div>
    )
}

export default OrderCard