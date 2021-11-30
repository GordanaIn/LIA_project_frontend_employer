
const ApiEmployerClient = {

    getInternships:() => {
        return fetch("http://localhost:8081/api/internship")
            .then(resp => resp.json());
    },
    updateCompany: async (userId, company) => {
        const res = await fetch(`http://localhost:8081/api/company/update/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(company),
        })
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
        });
    },

    editInternship:async (employerId, internshipId)=>{
        return  await fetch(`http://localhost:8081/api/internship/editInternship/${employerId}/${internshipId}`, {
            method: 'PUT',
        }).then(res=>res.json())
    },

    fetchCompany: (userId) => {
        return fetch(`http://localhost:8081/api/company/${userId}`).then(res => res.json());
    },
    saveEmployer:async (employer)=>{
        const response= await (await fetch('http://localhost:8080/api/employer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employer)
        })).json()
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
