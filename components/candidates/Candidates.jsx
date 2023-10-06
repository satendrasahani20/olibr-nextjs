
import Slider from "react-slick";
import LinkButton from "../common/button/LinkButton";
import { settings } from "./settings";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDevSpotLightOpen } from "../../service/action/common";
import Image from "next/image";
import { getDevLocation, getStringSplit } from "../common/function";

const Candidates = () => {
  const dispatch=useDispatch();
  const {devListSpotlight}=useSelector((state)=>state.commonReducer)
  useEffect(()=>{
   dispatch(getDevSpotLightOpen())
  },[dispatch])
  return (
    <>
      <Slider {...settings} arrows={false}>
        {devListSpotlight?.map((candidate,id) => (
          <div className="candidate-block" key={id}>
            <div className="inner-box">
              <figure className="image">
                <Image src={candidate.userImage} alt="avatar" height={90} width={90} />
              </figure>
              <h4 className="name">{candidate.fName}</h4>
              <span className="designation">{getStringSplit(candidate.devDesg,30)}</span>
              <div className="location">
                <i className="flaticon-map-locator"></i> {getDevLocation(candidate?.devCity,candidate?.devState)}
              </div>
              <LinkButton
                href={`/candidates-single-v1/${candidate.id}`}
                className="btn-style-three"
                title={"View Profile"}
              />

            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Candidates;
