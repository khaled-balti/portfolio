import React from 'react'
const Project = ({name, description, tools, link, image}) => {
  return (
    <div className='card'>
        <img src={image} className='img-fluid' />
        <div className='info d-flex flex-column align-items-center pt-2 justify-content-between'>
          <h1 className='mb-2'>{name}</h1>
          <p className='px-3 fw-semibold text-center mb-2'>{description}</p>
          <p  style={{maxWidth: '88%'}}>
            <p className='fw-bold mb-0'>Tools:</p>
            <div>
              {tools.map(tool => <p key={tool} className='me-3 fw-semibold mb-0 d-inline-block'>{tool}</p>)}
            </div>
           </p>
          <a className='btn' href={link} target='_blank'>Read More</a>
        </div>
    </div>
  )
}

export default Project