import React, {useState} from "react";
import  '../css/main.css';
import Header from '../components/Header';
import Intro from '../components/Intro';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';

const Main = () => {

    const [posts, setPosts] = useState([
        {id: 1, title: 'To wash the dishes', description: '4 plates, 5 glasses, 2 knives'},
        {id: 2, title: 'Update windows', description: 'During the period from 6 to 8'},
        {id: 3, title: 'Walk the dog', description: '40 minutes in the park 3 times a day'},
        {id: 4, title: 'Go grocery shopping', description: 'Buy vegetables, fruits, sweets, meat, water'},
        {id: 5, title: 'Call a plumber', description: 'Schedule a meeting no earlier than Thursday'}
    ]);


    let date = new Date();
    let mainStat = Number(localStorage.getItem('mainStat'));
    let todayStat = Number(localStorage.getItem('todayStat'));
    let todayKey = Number(localStorage.getItem('todayKey'));
    
      function createTask(newTask){
        setPosts([...posts, newTask]);
      }
    
      function removeTask(post){
        setPosts(posts.filter(p => p.id !== post.id));
        localStorage.setItem('mainStat', Number(mainStat) + 1);
        
        if(date.getDate() !== todayKey){
          localStorage.setItem('todayStat', 1);
          localStorage.setItem('todayKey', Number(date.getDate()));
        } else{
          localStorage.setItem('todayKey', Number(date.getDate()));
          localStorage.setItem('todayStat', Number(todayStat) + 1);
        }
      }    
      
      return (
        <div className='total'>
            <div className='totalContainer'>
                <Header/>
                <Intro title='Task List' subtitle='The newes task list ever!' />
                <PostForm create={createTask}/>
                {posts.length !== 0
                  ? <PostList posts={posts} remove={removeTask} />
                  : <div className="no__tasks">Задачи отсутствуют!</div>
                }
            </div>
        </div>
      );
};

export default Main;