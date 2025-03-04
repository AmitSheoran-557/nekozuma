import React from 'react'
import Header from './common/Header'
import { Image } from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='bg-blue d-flex flex-column w-100 overflow-hidden position-relative justify-content-start align-items-enter mx-auto' style={{ maxWidth: "1920px" }}>
            <Image className='position-absolute start-0 hero-light-img' src='/assets/images/png/hero-light-img.png' />
            <Header />
            <div className="hero-content d-lg-block d-flex flex-column justify-content-center align-items-center">
                <div className="px-lg-0 px-3 hero-col-padding">
                    <h2 className="text-blue font-custom-large font-franklin fw-normal position-relative hero-heading mx-lg-0 mx-auto mb-lg-4 mb-md-3 mb-2 text-uppercase text-lg-start text-center">NEKOZUMA</h2>
                    <p className='text-gray hero-subheading text-lg-start text-center font-sarabun'>The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.</p>
                    <button className='px-4 text-white border-0 wallet-button py-2 mx-lg-0 mx-auto d-lg-block d-flex bg-blue font-sarabun'>Connect Wallet</button>
                </div>
                <Image className='d-block d-lg-none hero-tiger-img' src='/assets/images/png/hero-img.png' />
            </div>
            <Image className='d-none d-lg-block hero-tiger-img end-0 bottom-0 position-absolute' src='/assets/images/png/hero-img.png' />
        </div>
    )
}

export default Hero
