export default function User({user}){
    const {name, email, website}=user;
    return (
        <>
        <h4>Name:{name}</h4>
        <p>Email:{email}</p>
        <p>Website : {website}</p>
        
        </>
    )
}