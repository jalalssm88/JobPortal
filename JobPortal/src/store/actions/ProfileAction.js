export default class Action {

    // experience constraints 
    static ADD_EXPERIENCE = "ADD_EXPERIENCE";
    static ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";

    static GET_EXPERIENCE = "GET_EXPERIENCE";
    static GET_EXPERIENCE_SUCCESS = "GET_EXPERIENCE_SUCCESS"

   // education constraints 
   static ADD_EDUCATION = "ADD_EDUCATION";
   static ADD_EDUCATION_SUCCESS = "ADD_EDUCATION_SUCCESS";

   static GET_EDUCATION = "GET_EDUCATION";
   static GET_EDUCATION_SUCCESS = "GET_EDUCATION_SUCCESS";

   // skills constrarints
   static ADD_SKILLS = "ADD_SKILLS";
   static ADD_SKILLS_SUCCESS = "ADD_SKILLS_SUCCESS";

   static GET_SKILLS = "GET_SKILLS";
   static GET_SKILLS_SUCCESS = "GET_SKILLS_SUCCESS";

    // language constraints 
    static ADD_LANGUAGE = "ADD_LANGUAGE";
    static ADD_LANGUAGE_SUCCESS = "ADD_LANGUAGE_SUCCESS";

    static GET_LANGUAGE = "GET_LANGUAGE";
    static GET_LANGUAGE_SUCCESS = "GET_LANGUAGE_SUCCESS";


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

    static addSkills(payload) {
        return {
            type: Action.ADD_SKILLS,
            payload
        };
    }
    static getSkills(payload) {
        return {
            type: Action.GET_SKILLS,
            payload
        };
    }

    static addLanguage(payload) {
        return {
            type: Action.ADD_LANGUAGE,
            payload
        };
    }
    static getLanguage(payload) {
        return {
            type: Action.GET_LANGUAGE,
            payload
        };
    }

}