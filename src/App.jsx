import {RouterProvider} from 'react-router-dom';

import { route } from './routes/route';



export default function App(){
    return (
        <RouterProvider router={route}/>
    )
}