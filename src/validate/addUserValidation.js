
function addUserValidate(name,email,ph_no,role)
{
    if(!name.trim() || !email.trim()|| !ph_no.trim() || !role.trim())
    {
        return "reqires all fields"
    }
    if(name.trim().length > 20)
    {
        return "name should be less than 20 charaters"
    }

    
    const emailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailformat.test(email))
    {
        return "Please enter a valid email address";
    }
    
    if(ph_no.length < 10)
    {
        return "Mobile number should not be less than 10 digits"
    }


}

export default addUserValidate;