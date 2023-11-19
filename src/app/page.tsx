import Image from 'next/image'
import ImageCarousel from './components/Carousel'

export default function Home() {
  return (
    <main className="">
      <h1 className='font-primary'>Centro CUMI</h1>
      <ImageCarousel/>
      <h1>Ubicación</h1>
      <iframe className='w-full h-[20rem]' src="https://api.maptiler.com/maps/bc478a6d-51e0-4683-86fc-27783d7449bf/?key=XLXPLL3t79q0fP86Asz0#13/31.868092/-116.64881"></iframe>
      <h1>Nosotros te llevamos!</h1>
      <h2>Contacto:</h2>
      <h2>Whatsapp: 646 000 00 00</h2>


    </main>
  )
}
