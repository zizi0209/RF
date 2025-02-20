
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Music from "../pages/Music/Music";

const publicRoutes=[
    {path:'/', component:Home},
    {path:'/shop', component:Shop},
    {path:'/about', component:About},
    {path:'/music', component:Music},
];

const privateRoutes=[
];

export{privateRoutes,publicRoutes};