import { redirect } from "react-router-dom";

export const requireAuth = async(request) => {
    const pathName = new URL(request.url).pathname;
    //console.log("PathName", pathName);
    const isLogged = localStorage.getItem("loggedin");
    
    if(!isLogged){
        throw redirect(`/login?message=you should log in first.&redirectTo=${pathName}`);
    }
}