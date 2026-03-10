import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Signup(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleSignup = async(e)=>{
e.preventDefault();

try{
await createUserWithEmailAndPassword(auth,email,password);
navigate("/dashboard");
}catch(err){
alert(err.message);
}
};

const handleGoogle = async()=>{
await signInWithGoogle();
navigate("/dashboard");
};

return(

<div className="min-h-screen flex bg-black text-white">

{/* LEFT PANEL */}

<div className="hidden lg:flex w-1/2 bg-gradient-to-b from-[#1a1f2c] to-black p-16 flex-col justify-between">

<div>
<h2 className="text-xl font-semibold">HigherMaths Solver</h2>
<p className="text-gray-400 mt-2">
Understand every problem.
</p>
<p className="text-gray-400 mt-2">
Solve it step by step.
</p>
</div>

<div>

<h1 className="text-5xl font-bold leading-tight">
Start your journey to success today.
</h1>

<p className="text-gray-400 mt-6">
Join thousands of students mastering complex problems with our guided approach.
</p>

<div className="flex gap-6 mt-10">

<div className="bg-black border border-gray-800 p-6 rounded-xl">
<p className="text-3xl font-bold">9K+</p>
<p className="text-gray-400">Questions Solved</p>
</div>

<div className="bg-black border border-gray-800 p-6 rounded-xl">
<p className="text-3xl font-bold">95%</p>
<p className="text-gray-400">Success Rate</p>
</div>

</div>
</div>
</div>

{/* RIGHT PANEL */}

<div className="flex w-full lg:w-1/2 items-center justify-center">

<div className="w-full max-w-md p-8 lg:p-0">

<div className="text-right text-gray-400 mb-10">
{/* <Link to="/">Back to Home</Link> */}
</div>

<h1 className="text-4xl font-bold mb-2 text-center lg:text-left">
Create Account
</h1>

<p className="text-gray-400 mb-8 text-center lg:text-left">
Enter your details to create a new account
</p>

<form onSubmit={handleSignup} className="space-y-6">

<input
type="email"
placeholder="name@example.com"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full p-4 bg-black border border-gray-700 rounded-xl"
/>

<input
type="password"
placeholder="password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full p-4 bg-black border border-gray-700 rounded-xl"
/>

<button className="w-full bg-gradient-to-r from-green-600 to-green-600 p-4 rounded-xl font-semibold">
Sign Up →
</button>
 
</form>

<div className="flex items-center my-8">

<div className="flex-1 border-t border-gray-700"></div>
<p className="mx-4 text-gray-400 text-sm">OR CONTINUE WITH</p>
<div className="flex-1 border-t border-gray-700"></div>

</div>

<button
  onClick={handleGoogle}
  className="w-full flex items-center justify-center gap-3 bg-black text-white p-4 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="w-5 h-5"
  />

  <span className="font-medium">
    Continue with Google
  </span>
</button>

<p className="text-center text-gray-400 mt-8">
Already have an account?
<Link to="/login" className="text-blue-500 ml-1">
Sign in
</Link>
</p>

</div>
</div>
</div>

);
}