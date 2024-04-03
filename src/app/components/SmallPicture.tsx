import React from 'react'

function SmallPicture({ url }: { url: string }) {
  return (
    <img className='w-full' src={url} alt="image" />
  )
}

export default SmallPicture