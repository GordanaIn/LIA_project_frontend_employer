
const ApiEmployerClient = {

    getInternships:() => {
        return fetch("http://localhost:8081/api/internship")
            .then(resp => resp.json());
    },

    saveInternship:async (internship)=>{
        return  await (await fetch('http://localhost:8081/api/internship/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(internship)
        })).json()
    },

    deleteInternship:async (employerId, internshipId)=>{
       return  await fetch(`http://localhost:8081/api/internship/deleteInternship/${employerId}/${internshipId}`, {
            method: 'DELETE',
        }).then(res=>{console.log();res.json() })
    },

    editInternship:async (employerId, internshipId)=>{
        return  await fetch(`http://localhost:8081/api/internship/addFavorite/${employerId}/${internshipId}`, {
            method: 'PUT',
        }).then(res=>res.json())
    },

    getEmployerByUser:(employerId)=>{
        return fetch(`http://localhost:8081/api/employer/${employerId}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        }).then(response => response.json());
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
}

export default ApiEmployerClient;
