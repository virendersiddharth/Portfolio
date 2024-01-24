import React from 'react'


const SectionHeading = ({text}) => {
  return (
    <h2
    className='text-center relative z-10'
>
        <span
            className='heading'
        >
            {text}
        </span>
    </h2>
  )
}

export default SectionHeading