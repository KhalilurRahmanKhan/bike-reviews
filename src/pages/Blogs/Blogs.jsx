import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className='blog-item'>
           <h1>What is context api?</h1>
           <p>Context api is state management system of react itself.React dislikes props drilling into much deeper.Props can be drilled 1 or 2 level down in a small project.For large project we need a global state which shares data through out all the components.Context api is used to solve this problem.</p>
            </div>
            <div className='blog-item'>
           <h1>What is semantic elements?</h1>
           <p>Semantic element is the element which carries a meaning with it.Commonly the elements is used in all situation.Such as, we use div for our navbar , aside and other section also.we can not separate the code by the tags here. But with semantic tag we can understand the diifernt purpose of the element. Such as, we can use nav for nav section.There are other elements also, such as; section, aside, header etc. </p>
            </div>
           
           
        </div>
    );
};

export default Blogs;