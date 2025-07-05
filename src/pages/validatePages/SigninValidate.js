export default function signinvalidate(email,password){
    if(!email.trim() || !password.trim()){
        return "Required all the fields"
    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        return "Invalid email"
    }
    

}