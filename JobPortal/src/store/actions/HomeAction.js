
export default class Action {

    // experience constraints 
    static GET_ALL_JOBS = "GET_ALL_JOBS"
    static GET_ALL_JOBS_SUCCESS = "GET_ALL_JOBS_SUCCESS"

    static getAllJobs(payload) {
        return {
            type: Action.GET_ALL_JOBS,
            payload
        };
    }
}