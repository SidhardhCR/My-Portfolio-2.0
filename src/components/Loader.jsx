import React from 'react'

function Loader() {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
        <img src="/circle-loader.gif" alt="" width='150rem' height='150rem' />
    </div>
  )
}

export default Loader