const ApiEmployerClient = {

    fetchCompany: (userId) => {
        return fetch(`http://localhost:8081/api/company/${userId}`).then(res => res.json());
    },
    fetchEmployee: (userId) => {
        return fetch(`http://localhost:8081/api/company/getEmployeeProfile/${userId}`).then(res => res.json());
    },
    fetchStudent: () => {
        return fetch(`http://localhost:8081/api/student/`).then(res => res.json());
    },
    updateCompanyInfo: async (company) => {
        const res = await fetch(`http://localhost:8081/api/company/updateCompanyInfo`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(company),
        })
    },
    updateEmployeeInfo: async (employee) => {
       return await fetch(`http://localhost:8081//api/company/updateEmployeeInfo`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employee),
        }).then(resp => resp.json());
    },

    saveEmployee: async (employee) => {
        const response = await (await fetch('http://localhost:8080/api/employee', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employee)
        })).json()
    },
    updateEmployee: async (employeeId, employee) => {
        return await fetch(`http://localhost:8081/api/company/update/${employeeId}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(employee),
        }).then(resp => resp.json());
    },

    getInternships: () => {
        return fetch("http://localhost:8081/api/internship")
            .then(resp => resp.json());
    },

    addInternship: async (internship) => {
        return await (await fetch('http://localhost:8081/api/company/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(internship)
        })).json()
    },

    deleteInternship: async (employeeId, internshipId) => {
        return await fetch(`http://localhost:8081/api/company/deleteInternship/${employeeId}/${internshipId}`, {
            method: 'DELETE',
        });
    },

    updateInternship: async (vacancyId, internshipAdvert) => {
        return await fetch(`http://localhost:8081/api/company/updateInternship/${vacancyId}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(internshipAdvert)
        }).then(resp => resp.json());
    },

}

export default ApiEmployerClient;
