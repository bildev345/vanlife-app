import { redirect } from "react-router-dom";

export const requireAuth = async(request) => {
    const isLogged = localStorage.getItem("loggedin");
    console.log("Request", request);
    if(!isLogged){
        throw redirect("/login?message=you should log in first.");
    }
}