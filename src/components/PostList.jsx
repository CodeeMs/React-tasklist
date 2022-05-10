import React, { useMemo, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItem from './PostItem';
import SearchInput from './UI/inputs/SearchInput';

const PostList = ({posts, remove}) => {

    const [searchTitle, setSearchTitle] = useState('');

    const sortedPosts = useMemo( () =>{
        if(searchTitle){
            return posts.filter(post => post.title.toLowerCase().includes(searchTitle));  
        }  
            return posts;  
    }, [searchTitle, posts]);
    
    return (
        <div className='post__list'>
            <h2 className='intro__subtitle'>Post List</h2>
            <SearchInput value={searchTitle} onChange={e => setSearchTitle(e.target.value)}/>
            <TransitionGroup>
                {sortedPosts.map((post, index) =>
                    <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                    >
                        <PostItem number={index + 1} remove={remove} post={post} />
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;