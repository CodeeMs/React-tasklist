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
    const [text, setText] = useState('');
    const [isVisible, setisVisible] = useState(false);
    const [upIsVisible, setUpIsVisible] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    function addPost(e){
        e.preventDefault();
        if(tasks.title === '' || tasks.description === ''){
            setText('all fields must be filled');
            setisVisible(true);
            setIsDisabled(true);
            return;
        }

        if(tasks.title.match(reg) === null || tasks.description.match(reg) === null){
            setText('invalid characters, such as "!/#/$/%/^/&"');
            setisVisible(true);
            setIsDisabled(true);
            return;
        }
        if(tasks.title.length > 20) {
            setText('maximum length: 20 characters');
            setUpIsVisible(true);
            setIsDisabled(true);
            return;
        }
        if(tasks.description.length > 40){
            setText('maximum length: 40 characters');
            setisVisible(true);
            setIsDisabled(true);
            return;
        }
       
            const newTask = {
                ...tasks, id: Date.now()
            }
            create(newTask);
            setTasks({title: '', description: ''});
    }

    function filterCheck(callback, part){
        if(callback.match(reg) && callback !== ''  && part.match(reg)){
            setUpIsVisible(false);
            setisVisible(false);
            setIsDisabled(false);
        } else if(part.match(reg) === null){
            return;
        } else{
            setText('invalid characters, such as "!/#/$/%/^/&" or empty field');
            setisVisible(true);
            setIsDisabled(true);
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
            <MySpan upVisible={upIsVisible} setUpVisible={setUpIsVisible}>{text}</MySpan>
            <MyInput id='desc__input' onChange={setDescription} placeholder='Add post description' value={tasks.description} />
            <MySpan visible={isVisible} setVisible={setisVisible}>{text}</MySpan>
            <AddButton disabled={isDisabled} onClick={addPost}>Add Post</AddButton>
        </form>
    );
};

export default PostForm;