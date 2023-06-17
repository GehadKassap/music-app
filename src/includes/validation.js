import {Form  as VeeForm, Field as VeeField, defineRule , ErrorMessage} from "vee-validate";
import {required , min, max , alpha_spaces as alphaSpaces , email ,min_value as minVal , max_value as maxVal,
    confirmed,not_one_of as exculded} from "@vee-validate/rules";
export default {
    install(app){
        app.component("VeeForm",VeeForm);
        app.component("VeeField",VeeField);
        app.component("ErrorMessage",ErrorMessage);
        defineRule("required" , required);
        defineRule("min" , min);
        defineRule("max" , max);
        defineRule("email" , email);
        defineRule("alpha_spaces" , alphaSpaces);
        defineRule("min_value" , minVal);
        defineRule("max_value" , maxVal);
        defineRule("exculded" , exculded);
        defineRule("confirmed" , confirmed);
    }
}