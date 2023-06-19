import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as exculded
} from '@vee-validate/rules'
export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)
    defineRule('required', required)
    defineRule('tos', required)
    defineRule('min', min)
    defineRule('max', max)
    defineRule('email', email)
    defineRule('alpha_spaces', alphaSpaces)
    defineRule('min_value', minVal)
    defineRule('max_value', maxVal)
    defineRule('exculded', exculded)
    defineRule('confirmed', confirmed)
    configure({
      generateMessage: (context) => {
        const messages = {
          required: `the field ${context.field} is required`,
          min: `the field ${context.field} is too short`,
          max: `the field ${context.field} is too long`,
          tos: `You must accept the terms of service`
        }
        const message = messages[context.rule.name]
          ? messages[context.rule.name]
          : `the field ${context.field} is invalid`
        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
