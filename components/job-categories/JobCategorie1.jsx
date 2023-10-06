import Link from "next/link";
import { WhyJoinOlibr } from "../common/constants/HomeCommon";
import { useEffect, useState } from "react";

const JobCategorie1 = ({type}) => {
  const [data,setData]=useState([])
  useEffect(()=>{
    if(type=="WhyJoinOlibr"){
      setData(WhyJoinOlibr.data)
    }
  },[type])
  return (
    <>
      {data.map((item,index) => (
        <div
          className="category-block col-lg-4 col-md-6 col-sm-12"
          key={index}
        >
          <div className="inner-box">
            <div className="content">
              <span className={`icon ${item.icon}`}></span>
              <h4>
                <Link href="/job-list/job-list-v1">{item.catTitle}</Link>
              </h4>
              <p>{item.descr}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default JobCategorie1;
