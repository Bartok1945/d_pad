import React from 'react'

const HomeWrapper = (props) => {
    return (
        <div className="container">
            <div className="column">
                {props.children}
            </div>
        </div>
    )
}

export default HomeWrapper;
