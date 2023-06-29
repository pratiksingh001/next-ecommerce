import { AddCartType } from "@/types/AddCartType"
import formatPrice from "@/util/PriceFormat"
import Image from "next/image"

export default function Product({name, image, price}:AddCartType) {
    return (
        <div>
            <Image src={image} alt={name} width={400} height={400}/>
            <h1>{name}</h1>
            {price !== null ? formatPrice(price) : 'N/A'}
        </div>
    )
}