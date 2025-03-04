import React from 'react'
import { Image } from 'react-bootstrap'

const Story = () => {
    return (
        <div id='story' className='bg-blue d-flex flex-column pt-5 story-section justify-content-center align-items-center mx-auto' style={{maxWidth:"1920px"}}>
            <h2 className='text-blue font-custom-medium mb-lg-4 mb-3 heading-font font-franklin'>Story</h2>
            <p className='story-subheading text-gray text-center px-lg-0 px-3 font-sarabun'>Nekozuma which means lightning cats in Japanese (Neko = Cats // Inazuma = Lightning) is a collection of 5555 NFTs on the Solana blockchain. The story centers around 3 eras of cats living in different timelines - past, present, future. In each timeline, there are 3 deities that are all powerful and are meant to protect the world of Nekos.</p>
            <p className='story-subheading story-subheading-text text-gray text-center px-lg-0 px-3 font-sarabun'>However at every junction in time, there is always a darkness that is waiting to overthrow the good. Hence, each timeline has its own arch nemesis. This means that there will be a total of 4 godly nekos from each timeline making a total of 12 godly nekos that will be fully animated.</p>
            <Image className='w-100 story-img pointer-events-none' src='/assets/images/webp/story-sec-img.webp' />
            <div className='border-line'></div>
        </div>
    )
}

export default Story
