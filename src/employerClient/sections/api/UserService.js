
const UserService = {
    saveUser:async (user)=>{
        const response= await (await fetch('http://localhost:8080//api/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })).json()
    },
    saveEmployer:async (employer)=>{
        const response= await (await fetch('http://localhost:8080//api/employer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employer)
        })).json()
    },
}
export default UserService;
