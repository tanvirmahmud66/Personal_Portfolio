import csbox from '../../assets/Project/Porject.png'
import appsmanager from '../../assets/Project/project_2.png'

const projects = [
    {
        id:1,
        name:"csbox",
        project_name:"csbox - Virtual Learnin Platform",
        description:"CSBox is a cutting-edge virtual learning platform revolutionizing online education.",
        thumbnail:csbox,
        frontend:['Javascript', 'React', 'Bootstrap', 'Netlify'],
        backend:['Python','Django','Rest-Framework','Rest APIs', 'Pythonanywhere'],
        screenShots:[csbox,appsmanager],
        projectLink:'https://csbox.netlify.app'
    },
    {
        id:2,
        name:"appsmanager",
        project_name:"Apps Manager",
        description:"Task Manager, Weather app, Quiz app.",
        thumbnail:appsmanager,
        frontend:['React', 'Tailwind', 'Netlify'],
        backend:['Django','Rest-Framework','Pythonanywhere'],
        screenShots:[],
        projectLink:'https://appsmanager.netlify.app'
    },
]

export default projects;