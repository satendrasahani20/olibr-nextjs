import React from 'react'
import JobCategories from "../job-categories/JobCategorie1"
const JobCategory = ({
  title,
  shortDescr,
  type
}) => {
  return (
    <section className="job-categories">
    <div className="auto-container">
      <div className="sec-title text-center">
        <h2>{title}</h2>
        {shortDescr && <div className="text">{shortDescr}</div>}
      </div>

      <div
        className="row "
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        {/* <!-- Category Block --> */}
        <JobCategories type={type}/>
      </div>
    </div>
  </section>
  )
}

export default JobCategory