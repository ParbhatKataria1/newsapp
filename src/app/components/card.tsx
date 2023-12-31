import { NewsSchema, dummy_image } from "@/utils/fetch"
import { useRouter } from 'next/router';
import Image from "next/image"
import Link from "next/link"

interface CardSchema {
    data:NewsSchema
}

export default async function ({data}:CardSchema){
    return <div className="shadow-md p-4 rounded" >
        <Link href={`/blog/${data?.title}`}>
        <Image className="mx-auto" width={400} height={300} src={data?.image  || dummy_image} alt="Not Found" ></Image>
            <h2 className=" text-xl mt-5 truncate block">{data?.title}</h2>
            <p className=" mt-3 overflow-hidden text-bold">{data?.description}</p>
        </Link>
    </div>
}