import Link from "next/link";
import { DeveloperCategories } from "../common/constants/HomeCommon";

const JobCategory2 = () => {
    return (
        <section className="job-categories">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h2>{DeveloperCategories.title}</h2>
                    <div className="text">{DeveloperCategories.desc}</div>
                </div>
                {/* End sec-title */}
                <div className="row" data-aos="fade-up">
                    {DeveloperCategories.data.slice(0, 8).map((item,id) => (
                        <div
                            className="category-block-three col-lg-4 col-md-6 col-sm-12"
                            key={id}
                        >
                            <div className="inner-box">
                                <div className="content">
                                    <span className={`icon ${item.icon}`}></span>
                                    <h4>
                                        <Link href="/job-list/job-list-v3">{item.catTitle}</Link>
                                    </h4>
                                    <p>{item.title} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* End .row */}
            </div>
        </section>
    );
};

export default JobCategory2;
