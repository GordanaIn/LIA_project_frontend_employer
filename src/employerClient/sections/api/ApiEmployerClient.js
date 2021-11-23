
const ApiEmployerClient = {

    saveInternship:async (internship)=>{
        return  await (await fetch('http://localhost:8081/api/student/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(internship)
        })).json()
    },
    fetchStudents:async ()=>{
        return await(await fetch('http://localhost:8081/employers')).json();
    },
    fetchEmployer:async (employerId)=>{
        return await(await fetch(`http://localhost:8081/employer/${employerId}`)).json();
    },
    getEmployers:()=>{
        return fetch(`http://localhost:8081/api/employer`,{
            method: 'GET',
        }).then(res=>res.json());
    },
    getEmployer:(employerId)=>{
        return fetch(`http://localhost:8081/api/employer/${employerId}`).then(res=>res.json());
    },
    getAEmployer:(employerId)=>{
        return (employerId != null) ?
            fetch( `http://localhost:8081/employers/${employerId}`)
                .then(resp => resp.json()).catch(err=>console.log(err))
            : "Student not found";
    },
    searchStudents:(status)=>{
        return fetch( `http://localhost:8081/stud/search/${status}`)
            .then(resp => resp.json());
    },
    getInternships:() => {
        return fetch("http://localhost:8081/api/internship")
            .then(resp => resp.json());
    },

    updateEmployer: async (employerId,employer) => {
        const res = await fetch(`http://localhost:8081/api/student/update/${employerId}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employer),
        })
    },
    getEmployerByUser:(employerId)=>{
        return fetch(`http://localhost:8081/api/employer/${employerId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json());
    },
}

export default ApiEmployerClient;
