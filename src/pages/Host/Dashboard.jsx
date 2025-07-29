import { Outlet } from "react-router-dom";

export default function Dashboard(){
    return (
        <>
           <h1>Dashboard Host goes here</h1>
           <Outlet/>
        </>
    )
}