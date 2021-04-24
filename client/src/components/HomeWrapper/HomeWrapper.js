import React from 'react'

const HomeWrapper = (props) => {
    return (
        <div className="container justify-content-md-center text-center">
            {props.children}
        </div>
    )
}

export default HomeWrapper;
