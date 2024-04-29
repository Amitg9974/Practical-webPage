import React from 'react';
import './Blog.css'

function BlogPage({ title, modifiedDate, summary, imageUrl }) {
    return (
        <div className="blog-post">
            <img src={imageUrl} alt={title} />
            <h2>{title}</h2>
            <p>{modifiedDate}</p>
            <p>{summary}</p>
        </div>
    );
}

export default BlogPage;