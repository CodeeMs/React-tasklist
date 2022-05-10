import React, {useState} from 'react';
import MyInput from './UI/inputs/MyInput';
import AddButton from './UI/buttons/AddButton';
import MySpan from './UI/MySpan';

const PostForm = ({create}) => {

    const reg = /^[a-zA-Z0-9а-я, ]+$/;
    const button = document.querySelector('#addButton'),
     underTitle = document.querySelector('#under__title'),
     underDesc = document.querySelector('#under__desc');
    const [tasks, setTasks] = useState({title: '', description: ''});


    function addPost(e){
        if(tasks.title === '' || tasks.description === ''){
            underDesc.textContent = 'all fields must be filled';
            underDesc.classList.add('visible');
            button.setAttribute('disabled', 'disabled');
            return;
        }

        if(tasks.title.match(reg) === null || tasks.description.match(reg) === null){
            underDesc.textContent = 'invalid characters, such as "!/#/$/%/^/&"';
            underDesc.classList.add('visible');
            button.setAttribute('disabled', 'disabled');
            return;
        }
        if(tasks.title.length > 20) {
            underTitle.textContent = 'maximum length: 20 characters'
            underTitle.classList.add('visible');
            button.setAttribute('disabled', 'disabled');
            return;
        }
        if(tasks.description.length > 40){
            underDesc.textContent = 'maximum length: 40 characters'
            underDesc.classList.add('visible');
            button.setAttribute('disabled', 'disabled');
            return;
        }
        e.preventDefault();
            const newTask = {
                ...tasks, id: Date.now()
            }
            create(newTask);
            setTasks({title: '', description: ''});
    }

    function filterCheck(callback, part){
        if(callback.match(reg) && callback !== ''  && part.match(reg)){
            underTitle.classList.remove('visible');
            underDesc.classList.remove('visible');
            button.removeAttribute('disabled');
        } else if(part.match(reg) === null){
            return;
        } else{
            button.setAttribute('disabled', 'disabled');
            underDesc.textContent = 'invalid characters, such as "!/#/$/%/^/&" or empty field';
            underDesc.classList.add('visible');
        }
    } 

    function setTitle(e){
        filterCheck(e.target.value, tasks.description, 20);
        setTasks({...tasks, title: e.target.value})
    }

    function setDescription(e){
        filterCheck(e.target.value, tasks.title, 40);
        setTasks({...tasks, description: e.target.value});
    }

    return (
        <form className='add__field'>
            <MyInput id='title__input' onChange={setTitle} placeholder='Add post title' value={tasks.title} />
            <MySpan id='under__title'></MySpan>
            <MyInput id='desc__input' onChange={setDescription} placeholder='Add post description' value={tasks.description} />
            <MySpan id='under__desc'></MySpan>
            <AddButton id='addButton' onClick={addPost}>Add Post</AddButton>
        </form>
    );
};

export default PostForm;