export default class Action {

    // experience constraints 
    static POST_JOB = "POST_JOB";
    static POST_JOB_SUCCESS = "POST_JOB_SUCCESS";

    static GET_JOBS = "GET_JOBS"
    static GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS"

    static postJob(payload) {
        return {
            type: Action.POST_JOB,
            payload
        };
    }

    static getJobs(payload){
        return{
            type:Action.GET_JOBS,
            payload
        }
    }

}