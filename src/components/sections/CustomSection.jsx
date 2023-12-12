import React from 'react'
import { newsData } from '../../data/SectionNews'

export const CustomSection = ({IsLogged}) => {

  if (!IsLogged) {
    return (
      <div>
      <h3>Inicia sesión para ver las novedades</h3>
      </div>
    )
  }
  
  return (
    <div className="px-4 py-5 " id="featured-3" style={{ backgroundColor: '#f7f8f9'}}>
        <div className='container'>
          <h2 className="pb-2 border-bottom ">NOVEDADES</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

          {newsData.map(item => (
            <div className="feature col" key={item.id}>
            <h3 className="fs-2">{item.tittle}</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-info">
              Call to action
            </a>
          </div>)
          )}
            
          </div>
  
          <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
{/* 
          {newsData.map(item => (
            <div className="feature col" key={item.id}>
            <h3 className="fs-2">TITULO</h3>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href="#" className="text-info">
              Call to action
            </a>
          </div>)
          )} */}

          </div>
        </div>
      </div>
  )
}
