import React from 'react'

const VideoCard = () => {
  return (
    <div className='w-full bg-white p-2 flex justify-center my-5'>
     <iframe className='w-full h-72' src="https://www.youtube.com/embed/oz6Zl7zhCTs?si=zgcQ44P6u0dlRqBr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoCard
