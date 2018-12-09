import './SeasonDisplay.css'
import React from 'react'

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }

}

const seasonConfig = {
    summer: {
        text: "It is Summer time, let's hit the beach!",
        iconName: 'sun'
    },
    winter: {
        text: "It is Winter time, let's prepare for ski!",
        iconName: 'snowflake'
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]

    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`}></i>
            <h1>{text}</h1>
            <i className={`${iconName} icon-right icon massive`}></i>
        </div>
    )
}

export default SeasonDisplay