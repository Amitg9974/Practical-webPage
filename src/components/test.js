import React, { useRef } from 'react'
import './Blog.css'
import Testmonials from '../images/Blog/Testmonials.png';
import BlogP2 from '../images/Blog/p2.png'
import BlogP3 from '../images/Blog/p3.png'
// import BlogP2 from '../images/Blog/p2.png'
import BlogPage from './blogPage';

function Blog() {
    const blogPostsData = [
        {
            id: 1,
            imageUrl: BlogP2,
            title: 'First Title',
            modifiedDate: 'March 29, 2024',
            summary: 'Components are the building blocks of any React application...',
        },
        {
            id: 2,
            imageUrl: BlogP3,
            title: 'Second Title',
            modifiedDate: 'March 29, 2024',
            summary: 'Components are the building blocks of any React application...',
        },
        {
            id: 3,
            imageUrl: BlogP2,
            title: 'Third Title',
            modifiedDate: 'March 29, 2024',
            summary: 'Components are the building blocks of any React application...',
        },
        {
            id: 4,
            imageUrl: BlogP3,
            title: 'Fourth Title',
            modifiedDate: 'March 29, 2024',
            summary: 'Components are the building blocks of any React application...',
        },
        {
            id: 5,
            imageUrl: BlogP2,
            title: 'fifth Title',
            modifiedDate: 'March 29, 2024',
            summary: 'Components are the building blocks of any React application...',
        },
    ];

    const scrollContainer = useRef(null);

    // Smooth scrolling function
    const smoothScroll = (element, direction, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            if (direction === 'left') {
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);
            }
        }, 25); // Adjust the interval as needed
    };

    // Updated scroll functions to use smoothScroll
    const scrollRight = () => {
        if (scrollContainer.current) {
            smoothScroll(scrollContainer.current, 'right', 300, 80);
        }
    };

    const scrollLeft = () => {
        if (scrollContainer.current) {
            smoothScroll(scrollContainer.current, 'left', 300, 80);
        }
    };



    return (
        <div className='blog'>
            <div><img src={Testmonials} alt="Testmonials" /></div>
            <div className="scroll-buttons">
                <button onClick={scrollLeft}>{"<"}</button>
            </div>
            <div ref={scrollContainer} className="blog-page">
                {blogPostsData.map(post => (
                    <BlogPage
                        key={post.id}
                        title={post.title}
                        modifiedDate={post.modifiedDate}
                        summary={post.summary}
                        imageUrl={post.imageUrl}
                    />
                ))}
            </div>
            <div className="scroll-buttons">
                <button onClick={scrollRight}>{">"}</button>
            </div>
        </div>
    )
}

export default Blog