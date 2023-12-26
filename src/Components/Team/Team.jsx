import React from 'react'
import './Team.scss'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { CiStar } from "react-icons/ci";
import { TeamSource } from '../../UserSource';

const Team = () => {
    return (
        <div className='team'>
            <h1><FaQuoteLeft /> Project Team <span> Members. </span><FaQuoteRight /></h1>

            <div className="team__container">
                {
                    TeamSource.map((value, index) => (
                <div class="team_card" key={value.id}>
                    <div class="team_profile_pic">
                        <img src={value.img} alt="Not Found" />
                    </div>
                    <div class="profile_intro">
                        <h2>{value.name}</h2>
                        <h4>{value.desig}</h4>
                        <p>{value.email}</p>
                    </div>
                    
                    
                </div>
                        
                    ))
                }
            </div>

        </div>

    )
}

export default Team