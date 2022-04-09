import axios from 'axios'
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { Meme, Data } from '../utils/types'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'



const Home: NextPage<{data: Meme[]}> = ({data}) => {
  return (
   <>
        <h1 className='text-center pt-3 text-2xl sm:text-6xl font-syne'>Memes</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map(meme => { return ( 
              <div key={meme.id} className="lg:w-1/4 md:w-1/2 p-4 w-full relative">
                <Link href={`/${meme.id}`}>
                <a className="block relative h-48 rounded overflow-hidden border border-gray-500">
                    <motion.div layoutId={meme.id} animate={{ scale: 1 }} whileHover={{ scale: 1.6 }} transition={{ ease: "easeOut", duration: 0.5 }}>
                    <Image className="object-contain object-center w-full h-90 block" src={`${meme.url}`} width={420} height={260} alt={meme.name} />
                  </motion.div>
                </a>
                </Link>
                <h3 className="text-gray-500 text-xs absolute bottom-0 left-4">{meme.name}</h3>
              </div>
            )})}
          </div>
        </div>
      </section>
   </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const res = await axios.get("https://api.imgflip.com/get_memes")
  const {memes} : Data = res.data.data
  
  return {
    props:{
      data: memes
    }
  }
}

export default Home
