import formatPrice from "@/util/PriceFormat";
import Image from "next/image";
import { SearchParamTypes } from "@/types/SearchParamType";

export default async function Product({searchParams}: SearchParamTypes) {
    return (  
        <div className="flex justify-between gap-24 p-12 text-gray-700">
            <Image src={searchParams.image} alt={searchParams.name} width={400} height={400}/>
            <div className="font-medium text-gray-700">
                <h1 className="text-2xl py-2">{ searchParams.name}</h1>
                <p className="py-2">{ searchParams.description }</p>
                <div className="flex gap-2">
                    <p className="font-bold text-teal-700">{ searchParams.unit_amount !== null ? formatPrice(searchParams.unit_amount) : 'N/A' }</p>
                </div>
                <button className="my-12 text-white py-2 px-6 font-medium rounded-md bg-teal-700">Add to Cart</button>
            </div>
        </div>
    )
}