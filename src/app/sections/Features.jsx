import Image from 'next/image'
import img from '../../../public/assets/featureImg.svg'
import icon1 from '../../../public/assets/consultationIcon1.svg'
import icon2 from '../../../public/assets/consultationIcon2.svg'
import icon3 from '../../../public/assets/consultationIcon3.svg'
import Button from '../componentes/Button'
const Features = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center md:px-32 px-5 p-4 m-2'>
            <div className='flex flex-col md:flex-row items-center space-y-5'>
                <div className="mt-5">
                    <Image className='rounded-md' src={img} alt='Features Image' />
                </div>
                <div>
                    <div>
                        <h2 className='text-4xl font-playFair font-medium text-center'>Build your needs with Archmove</h2>
                    </div>
                    <div className='flex flex-row gap-5 p-5 md:pl-24'>
                        <Image src={icon1} alt='Icon1' />
                        <div>
                            <h3 className='font-semibold pb-3'>100% guaranteed project completion</h3>
                            <p className='w-4/5 text-slate-300'>Build safe, comfortable and transparent with a project managemeent application with a joint account.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 p-5 md:pl-24'>
                        <Image src={icon2} alt='Icon2' />
                        <div>
                            <h3 className='font-semibold pb-3'>No additional fees</h3>
                            <p className='w-4/5 text-slate-300'>There are no hidden costs. The value of the offer you get is the value you paid.</p>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 p-5 md:pl-24'>
                        <Image src={icon3} alt='Icon3' />
                        <div>
                            <h3 className='font-semibold pb-3'>Get escort from the Team</h3>
                            <p className='w-4/5 text-slate-300'>Monitor reports from the Arsitag team who check directly in the field.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-10'>
                <Button title="Free Consultation" />
            </div>
        </div>
    )
}

export default Features