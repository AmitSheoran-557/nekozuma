import { TEAM_MEMBERS_DATA_LIST } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'
import { Image } from 'react-bootstrap'

const Team = () => {
    return (
        <div id='team' className='bg-blue d-flex flex-column w-100 team-section justify-content-center align-items-center'>
            <div className="container mx-auto w-100">
                <h2 className='text-blue font-custom-medium team-heading heading-font text-center font-franklin'>Team</h2>
                <div className="d-flex flex-wrap justify-content-center team-card-row">
                    {TEAM_MEMBERS_DATA_LIST.map((member, index) => (
                        <div key={index} className="text-light rounded text-center team-card" style={{ maxWidth: "202px" }}>
                            <Image className='w-100 team-member-img pointer-events-none mx-auto' src={member.image} width={202} height={202} />
                            <h3 className="text-blue fs-lg-4 fs-5 team-card-heading font-franklin">{member.title}</h3>
                            <h4 className="team-member-name text-gray font-sarabun">{member.name}</h4>
                            <p className="my-lg-2 mt-2 mb-1 team-card-description font-sarabun text-gray">{member.description}</p>
                            <Link href={member.twitterLink} target='_blank'>
                                <Image className='mx-auto social-icon' src={member.twitterIcon} width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
