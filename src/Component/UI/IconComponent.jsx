import React from 'react'

const IconComponent = ({ IconCode }) => {

    const IconURL = `https://openweathermap.org/img/wn/${IconCode}.png`;

    return (

        <div>
            <img
                alt={IconCode}
                src={IconURL}
                className="select-none scale-150"
            />
        </div>
    )
}

export default IconComponent