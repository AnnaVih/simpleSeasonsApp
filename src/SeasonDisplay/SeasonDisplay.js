import './SeasonDisplay.css'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Button from '../Button/Button'

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

class SeasonDisplay extends Component{ 
    
    getSeason = (lat, month) => {
        if(month > 2 && month < 9){
            return lat > 0 ? 'summer' : 'winter'
        } else {
            return lat > 0 ? 'winter' : 'summer'
        }
    
    }

    buttonClickHandler = url => {
        window.open(url, '_blank')
    }

    render() {
        const season = this.getSeason(this.props.lat, new Date().getMonth())
        const {text, iconName} = seasonConfig[season]

        return (
            <div className={`season-display ${season}`}>
                <i className={`${iconName} icon-left icon massive`}></i>
                <div className="season-content">
                    <h1>{text}</h1>
                    <Button 
                        onButtonClick={this.buttonClickHandler}
                        url="https://github.com/AnnaVih/simpleSeasonsApp"
                        message="Check source code on GitHub"
                    />
                    <p>Developed in React by Anna Vihrogonova. It is a result of hard work, passion and learning from failure</p>
                </div>
                <i className={`${iconName} icon-right icon massive`}></i>
            </div>
        )
    }
}

SeasonDisplay.propTypes = {
    lat: PropTypes.number.isRequired
}

export default SeasonDisplay