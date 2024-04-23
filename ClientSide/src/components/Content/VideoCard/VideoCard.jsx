import React from 'react'

function VideoCard(props) {

  return (
    <>
      <div className="col">
        <div className="rounded-3 card h-100">
          <img
            src={'src/assets/thumbnails/' + props.fileName + '.jpg'}
            className="rounded-3 card-img-top videoCardImage" alt="text"
          />
          <div className="card-body">
            <h5 className="card-title">
                {props.fileName}
            </h5>
            <p className="description card-text">
              {props.desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoCard