import { SOCIAL_DATA_LIST } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className='py-5 bg-blue-2 d-flex justify-content-center align-items-center position-relative flex-column'>
            <Image className='position-absolute footer-light-img-1 bottom-0 start-0' src="/assets/images/webp/footer-left-vector.webp" alt="light-img" />
            <Image className='position-absolute footer-light-img-2 end-0 bottom-0' src="/assets/images/webp/footer-right-vector.webp" alt="light-img-2" />
            <Link href="/" className='text-decoration-none'>
                <h2 className='uppercase text-white font-franklin footer-heading mb-4'>NEKOZUMA</h2>
            </Link>
            <div className="d-flex gap-4">
                {SOCIAL_DATA_LIST.map((item, index) => (
                    <Link href={item.path} className='text-decoration-none' key={index} target='_blank'>
                        <Image className='social-icon' src={item.image} alt={item.alt} width={32} height={32} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer
