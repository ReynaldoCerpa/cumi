import ImageCarousel from './components/ImageCarousel'
import Map from './components/MapBox'

export default function Home() {


  return (
    <main>

      <div className='w-full my-4'>
        <h1 className='text-primary font-primary text-4xl opacity-[90%] p-3'>Centro CUMI</h1>
        <img src='cover1.jpg' className='w-[90%] rounded-r-md drop-shadow-md' />
        <p className='font-secondary p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At animi veritatis dicta! Consequuntur laboriosam velit debitis molestias saepe deleniti provident perferendis numquam nihil deserunt consequatur, natus iusto aliquam repudiandae? Mollitia!</p>
      </div>


      <h1 className='text-secondary font-primary text-2xl p-3'>Cambia tu vida!</h1>
      <div className='flex w-full relative h-44'>
        <img src='cover2.jpg' className='absolute right-3 w-[60%] rounded-md drop-shadow-md' />
        <img src='cover3.jpg' className='absolute left-3 top-16 w-[45%] rounded-md drop-shadow-md' />
      </div>
      <p className='font-secondary p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At animi veritatis dicta! Consequuntur laboriosam velit debitis molestias saepe deleniti provident perferendis numquam nihil deserunt consequatur, natus iusto aliquam repudiandae? Mollitia!</p>


      <h1 className='font-primary text-primary text-3xl flex justify-center my-5'>Nosotros te llevamos!</h1>
      {/* <ImageCarousel/> */}
      <Map />
      <h1>Ubicación</h1>
      {/* <iframe className='w-full h-[20rem]' src="https://api.maptiler.com/maps/bc478a6d-51e0-4683-86fc-27783d7449bf/?key=XLXPLL3t79q0fP86Asz0#13/31.868092/-116.64881"></iframe> */}
      <h2>Contacto:</h2>
      <h2>Whatsapp: 646 000 00 00</h2>
    </main>
  )
}
