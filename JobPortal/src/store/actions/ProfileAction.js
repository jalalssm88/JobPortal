export default class Action {

    // experience constraints 
    static ADD_EXPERIENCE = "ADD_EXPERIENCE";
    static GET_EXPERIENCE = "GET_EXPERIENCE";

   // education constraints 
   static ADD_EDUCATION = "ADD_EDUCATION";
   static GET_EDUCATION = "GET_EDUCATION";


    static addExperience(payload) {
        return {
            type: Action.ADD_EXPERIENCE,
            payload
        };
    }
    static getExperience(payload) {
        return {
            type: Action.GET_EXPERIENCE,
            payload
        };
    }


    static addEducation(payload) {
        return {
            type: Action.ADD_EDUCATION,
            payload
        };
    }
    static getEducation(payload) {
        return {
            type: Action.GET_EDUCATION,
            payload
        };
    }

}