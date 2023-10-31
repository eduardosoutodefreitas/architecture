import Image from 'next/image'
import img from '../../../public/assets/consultationImg.svg'
import Button from '../componentes/Button'


const Consultation = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:justify-center md:px-32 px-5 p-4 m-2'>
            <div className='flex flex-col items-center md:flex-row mt-10 md:mt-0'>
                <div>
                    <Image src={img} alt='consultation image' />
                </div>

                <div className='flex flex-row items-center'>
                    <div className='flex flex-col items-center text-center space-y-5'>
                        <h2 className='text-6xl font-playFair md:w-2/4 mt-5 md:mt-0'>Realize your dream project with <span className='text-brightRed'>Archmove</span></h2>
                        <Button title="FREE CONSULTATION" />
                    </div>
                </div>

            </div >

        </div >
    )
}

export default Consultation