import React from 'react'
import Blog from '../blog/Blog'

const RecentBlog = () => {
    return (
        <section className="news-section">
            <div className="auto-container">
                <div className="sec-title text-center">
                    <h2>Recent News Articles</h2>
                    <div className="text">
                        Fresh job related news content posted each day.
                    </div>
                </div>
                {/* End ."sec-title */}
                <div className="row" data-aos="fade-up">
                    <Blog />
                </div>
            </div>
        </section>
    )
}

export default RecentBlog