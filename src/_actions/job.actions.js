import { commonConstants } from '../_constants';
import { jobService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const jobActions = {
    postnewjob,
    getjobcount,
    getalljobs
};

function postnewjob(jobdata) {
    return dispatch => {
        dispatch(request(true));

        jobService.postnewjob(jobdata)
            .then(
                jobresult => {
                    dispatch(success(jobresult));
                    dispatch(alertActions.commonsuccess('The job was created successfully'));
                    dispatch(request(false));
                    setTimeout(()=>{
                        dispatch(alertActions.clear());
                    },5000)
                },
                error => {
                    dispatch(alertActions.commonerror(error.toString()));
                    dispatch(request(false));
                    setTimeout(()=>{
                        dispatch(alertActions.clear());
                    },5000)
                }
            ).catch(
                error=>{
                    dispatch(alertActions.commonerror(error.toString()));
                    dispatch(request(false));
                    setTimeout(()=>{
                        dispatch(alertActions.clear());
                    },5000)
                }
            )
    }
}

function getjobcount(){
    return dispatch => {
        dispatch(request(true));
        jobService.getjobcount()
            .then(jobresult => {
                    dispatch(success(jobresult.filter(function(item){ return true }).length));
                    dispatch(request(false));
                },
                error => {
                    return 0;
                    dispatch(request(false));
                }
            )
    }
}

function getalljobs(){
    return dispatch => {
        dispatch(request(true));
        jobService.getalljobs()
            .then(jobresult => {
                    dispatch(request(false));
                    dispatch(success(jobresult));
                },
                error => {
                    dispatch(request(false));
                    dispatch(success({}));
                }
            )
    }
}

function request(data){
    return {
        type: commonConstants.PASS_ALL_REQUEST,
        data:data
    }
}
function success(data){
    return {
        type: commonConstants.PASS_ALL_SUCCESS,
        data:data
    }
}
function failure(data){
    return {
        type: commonConstants.PASS_ALL_ERROR,
        data:data
    }
}
