import axios from "axios"
import { motion } from "framer-motion"
import Image from "next/image"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { Meme } from "../utils/types"


const MemePage = ({meme}: {meme: Meme}) => {
    const router = useRouter()

    const back = () => {
        router.back()
    }

    return (
        <>
        <h1 className="text-center pt-3 text-2xl sm:text-6xl font-syne">{meme.name}</h1>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-1 mx-auto">
                <div className="flex justify-center">
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden border border-gray-500">
                        <motion.div layoutId={meme.id} animate={{scale: 1}}>
                            <Image
                                className="object-contain object-center w-full h-90 block"
                                src={`${meme.url}`}
                                width={450}
                                height={280}
                                alt={meme.name}
                            />
                        </motion.div>
                    </a>
                    </div>
                </div>
                <div className="flex justify-center">
                    <motion.button animate={{scale: 1}} whileHover={{scale: 1.2}} className="btn btn-outline" onClick={back}>Back</motion.button>
                </div>
            </div>
        </section>
        </>
    )
    }
    
    export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const res = await axios.get(`https://api.imgflip.com/get_memes`)
    const { memes }: { memes: Meme[] } = res.data.data
    const meme = memes.find((meme) => meme.id === id)
    return {
        props: {
        meme,
        },
    }
}

export default MemePage;