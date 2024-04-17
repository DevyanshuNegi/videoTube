import React from 'react'
import HomeDetails from '../../Details/HomeDetails'
import VideoCard from './VideoCard/VideoCard'
import Details from '../../Details/HomeDetails'
import './Content.css'

function Content(props) {

    var detail = Details[0]
    console.log(detail)

    var screenWidth = window.screen.width;

    return (
        <>
        {/* if side active add class side-active */}
            {/* <div className="side-active row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-4"> */}
                <div className={`row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 g-4
                ${props.isSideActive ? 'side-active' : ''}
                ${screenWidth }>}`} 
                >
                {Details.map( (detail) => {
                    return (
                        <VideoCard
                            key={detail.id}
                            fileName={detail.fileName}
                            desc={detail.desc}
                        />
                    )
                })}
            </div>
        </>
    )
}


export default Content