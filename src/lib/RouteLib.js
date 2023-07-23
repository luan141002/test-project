
import Home from '../views/home/Home';
import Home2 from '../views/home/Home2';
import Authentication from '../views/authentication/Authen';
// public router will stay here
const publicRouters =[
    {path:'/', component:Home},
    {path:'/contact', component:Home2, layout:null},
    {path:'/oauth', component:Authentication, layout:null},
]
// private router will stay here, example: needed login before, will place router in here
const privateRouters =[

]
export{publicRouters, privateRouters}