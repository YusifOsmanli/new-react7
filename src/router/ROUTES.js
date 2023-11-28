import Detail from "../pages/Detail";
import Favourites from "../pages/Favourites";
import Product from "../pages/Product";
import SiteRoot from "../pages/SiteRoot";

const ROUTES = [{
    path:'/',
    element:<SiteRoot/>,
    children:[{
        path: '',
        element: <Product/>
    },{
        path:'/favourites',
        element:<Favourites/>
    },{
        path:'/:id',
        element:<Detail/>
    }]
}]

export default ROUTES