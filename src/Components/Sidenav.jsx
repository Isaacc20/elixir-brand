import React, { useState } from 'react'
import '../Styles/Shop.css'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  const [author, setauthor] = useState(true)
  const [topic, settopic] = useState(true)
  return (
    <>
        <div className='sidenav col-2'>
            <div className='d-grid gap-3 px-2'>
                <button className='btn h5 text-start px-3 py-2'>Saved <FaStar /></button>
                <div>
                  <h5 className='px-3'>Filter by</h5>
                  <div className="d-grid gap-2">
                    <label className='d-grid px-3' htmlFor="price">Price<input type="range" name="" id="price" min={0} max={100} /></label>
                    
                    <div className='filter-by'>
                      <button className="btn dropdown-toggle" onClick={()=>author? setauthor(false):setauthor(true)}>Authors</button>
                      <div className={author?'d-grid filter-dropdown gap-2': 'd-none filter-dropdown gap-2'}>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="name1"><input type="checkbox" name="name1" id="name1" />E.A Adeboye</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="name2"><input type="checkbox" name="name2" id="name2" />Kenneth E. Hagin</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="name3"><input type="checkbox" name="name3" id="name3" />Watchman Nee</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="name4"><input type="checkbox" name="name4" id="name4" />W.F Kumuyi</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="name5"><input type="checkbox" name="name5" id="name5" />David Oyedepo</label>
                      </div>
                    </div>
                    <div className='filter-by'>
                      <button className="btn dropdown-toggle" onClick={()=>topic? settopic(false):settopic(true)}>Topics</button>
                      <div className={topic?'d-grid filter-dropdown gap-2': 'd-none filter-dropdown gap-2'}>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="topic2"><input type="checkbox" name="topic2" id="topic2" />Relationship</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="topic3"><input type="checkbox" name="topic3" id="topic3" />Marriage</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="topic4"><input type="checkbox" name="topic4" id="topic4" />Wisdom</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="topic5"><input type="checkbox" name="topic5" id="topic5" />Prosperity</label>
                        <label className='d-flex align-items-center text-start justify-content-start gap-2 px-3' htmlFor="topic6"><input type="checkbox" name="topic6" id="topic6" />Spiritual Growth</label>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidenav