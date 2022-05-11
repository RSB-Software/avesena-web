import config from '../config.json';
import { authHeader } from '../_helpers';

export const jobService = {
    postnewjob,
    getjobcount,
    getalljobs
};

async function postnewjob(jobdata){
    const requestHead = {
        method: "POST",
        headers: authHeader(),
        body:JSON.stringify(jobdata)
    }
    
    return await fetch(`${config.jobPostUrl}`,requestHead)
                                .then(handleResponse)
                                .then(result => {
                                    return result;
                                })
                                .catch(error => 
                                        {
                                            console.error('Error', error);
                                            return new Promise((resolve, reject) => {
                                                if(Object.keys(error).length > 0){
                                                    reject('Job creation failed.');
                                                }else{
                                                    reject('Job creation failed.');
                                                }
                                            });
                                        }
                                    );
}

async function getjobcount(){
    const response = await fetch('http://localhost:4100/jobs').catch(console.log);
    return await response.json()
                                .then(result => {
                                    return result; //Object.keys(result).length;
                                });
}

async function getalljobs() {
    return await fetch(`${config.getJobsUrl}`)
                                        .then(handleResponse)   
                                        .then(result => {
                                            return result;
                                        })                                     
                                        .catch(console.log);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
               // logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}