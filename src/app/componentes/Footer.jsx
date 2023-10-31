import Image from 'next/image'
import icon from '../../../public/assets/logo-arch.svg'

const Footer = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between md:px-32 px-5 p-4 m-2'>
            <div className='flex flex-row items-center gap-12 text-lightText p-2'>
                <nav className='flex flex-col md:flex-row gap-10'>
                    <a className='hover:text-brightRed transition-all' href='/about'>About Us</a>
                    <a className='hover:text-brightRed transition-all' href='/works'>How it Works</a>
                    <a className='hover:text-brightRed transition-all' href='/faq'>FAQ</a>
                    <a className='hover:text-brightRed transition-all' href='/contact'>Contact Us</a>
                    <a className='hover:text-brightRed transition-all' href='/privacy'>Privacy Policy</a>
                </nav>
            </div>
            <div className='flex flex-row items-center p-2 gap-4'>
                <Image src={icon} alt='logo' />
            </div>
        </div>
    )
}

export default Footer