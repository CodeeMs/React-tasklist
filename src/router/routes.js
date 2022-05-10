import Main from "../pages/Main";
import About from '../pages/About';
import Tips from '../pages/Tips';
import Statistics from '../pages/Statistics';
import ShouldLogin from "../pages/ShouldLogin";
import NotFounded from "../pages/NotFounded";

export const privateRoutes = [
    {path: '/', component: <Main/>},
    {path: 'about', component: <About/>},
    {path: 'tips', component: <Tips/>},
    {path: 'how', component: <Statistics/>},
    {path: '*', component: <NotFounded/>},
]

export const publicRoutes = [
    {path: '/', component: <Main/>},
    {path: 'about', component: <ShouldLogin/>},
    {path: 'tips', component: <ShouldLogin/>},
    {path: 'how', component: <ShouldLogin/>},
    {path: '*', component: <NotFounded/>}
]