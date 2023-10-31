import Image from 'next/image'
import img1 from '../../../public/assets/img1.svg'
import img2 from '../../../public/assets/img2.svg'
import img3 from '../../../public/assets/img3.svg'
const Gallery = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2'>
        <div className='py-5 md:w-2/6'>
            <p className='text-4xl font-playFair font-medium'>Build professional valuable room</p>
        </div>
        <div className='flex flex-col items-center md:flex-row md:justify-between gap-5'>
            <div><Image className="rounded-md" src={img1} alt='image house 1'/></div>
            <div><Image className="rounded-md" src={img2} alt='image house 2'/></div>
            <div><Image className="rounded-md" src={img3} alt='image house 3'/></div>
        </div>
    </div>
  )
}

export default Gallery