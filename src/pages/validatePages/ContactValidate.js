export default function ContactValidate(name,email,message){
    if(!name.trim() || !email.trim() || !message.trim()){
        return "Required All the Fields"

    }
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regex.test(email)){
        return "Invalid email"
    }
}