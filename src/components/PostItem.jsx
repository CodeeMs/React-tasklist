import React from 'react';
import MyButton from './UI/buttons/MyButton';
import complete from '../img/complete.png';

const PostItem = (props) => {

    return (
        <div className='post__item'>
            <div className="post__content">
                <div className="post__head">
                    <span>{props.number}</span>
                    <p className="post__title">{props.post.title}</p>
                </div>
                <div className="">{props.post.description}</div>
            </div>
            <MyButton onClick={() => props.remove(props.post)} ><img src={complete} alt='smth'/></MyButton>
        </div>
    );
};

export default PostItem;