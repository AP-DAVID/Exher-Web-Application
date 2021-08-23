import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import PqButtons from '../components/PqButtons'

export default function Home() {
  return (
    <Layout>
      <div className='min-h-screen flex flex-col justify-center items-center'>
        <div>
          <p className='font-raleway text-2xl font-bold text-center my-2'>LOGO</p>
          <p className='text-center'>Babcock University</p>
          <p>Knowledge, Truth, Service</p>
          <p className='text-center my-5'>Available Course list</p>
        </div>

        <div>
          <Image src='/images/exher2.svg' height='200' width='200' />
        </div>

        <div>
          <PqButtons />
        </div>
      </div>
    </Layout>
    
  )
}
