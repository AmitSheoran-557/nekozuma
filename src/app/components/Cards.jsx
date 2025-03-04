import { CARDS_DATA_LIST, CARDS_DATA_LIST_TWO } from '@/utils/helper'
import React from 'react'
import { Image } from 'react-bootstrap'

const Cards = () => {
    return (
        <div id='overview' className='mx-auto justify-content-center overflow-hidden align-items-center bg-blue' style={{maxWidth:"1920px"}}>
            <div className="d-flex w-100 slide-scroll-left justify-content-center mx-auto">
                {CARDS_DATA_LIST.map((item, index) => (
                    <Image className="card-img" key={index} src={item.image} alt={item.alt} />
                ))}
            </div>
            <div className="d-flex w-100 slide-scroll justify-content-center mx-auto">
                {CARDS_DATA_LIST_TWO.map((item, index) => (
                    <Image className="card-img" key={index} src={item.image} alt={item.alt} />
                ))}
            </div>
        </div>
    )
}

export default Cards
