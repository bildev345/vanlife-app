import { useState } from "react";
import { Form, Link, redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import { loginUser } from "../../api";

export function loader({request}){
    return new URL(request.url).searchParams.get("message");
}

export async function action({request}){
    //obj = {request : {}, params : {}}
    // the params object represents the the params passed in the Route path
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    try{
        const data = await loginUser({email, password});
        const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host";
        //console.log("path from action", path);
        localStorage.setItem("loggedin", true);
        return redirect(pathname);
    }catch(err){
        return err;
    }
    
}

export default function Login(){
    const message = useLoaderData();
    const error = useActionData();
    //const navigation = useNavigation();
    const {state} = useNavigation();

    return (
        <div className="login-page">
           {message && <h4 className="error-msg">{message}</h4>}
           <h1>Sign in to your account</h1>
           {error && <h4 className="error-msg">{error.message}</h4>} 
           <Form method="post" replace>
                <div>
                    <input type="email" name="email" placeholder="Email address" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" />
                </div>
                <div>
                    <button 
                        className="login-btn"
                        disabled={state === "submitting"}
                    >
                        {`${state === "submitting" ? "Logging in..." : "Sign in"}`}
                    </button>
                </div>
           </Form>
           <div>
                Don't have an account ? <Link>Create one now</Link>
           </div> 
        </div>
    )
}