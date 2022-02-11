<template>
  <div>
      <div class="registration-form">
            <h3>Create a Payer Account</h3>
            <p>Don't worry if you forget your password, you can reset it at any time.</p>

            <div class="form">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="$v.form.email.$model" class="form-control" type="email" id="email" placeholder="payer@gmail.com">
                    <div class="error" v-if="!$v.form.email.required && $v.form.email.$dirty">Field is required</div>
                    <div class="error" v-if="!$v.form.email.email && $v.form.email.$dirty">Field is must be email</div>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="$v.form.password.$model" class="form-control" type="text" id="password" placeholder="Password">
                </div>
                <div class="password-validation">
                    <p>Password must contain:</p>
                    <ul>
                        <li :class="[$v.form.password.lowercase && $v.form.password.$dirty ? 'green' : '']">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            lower-case
                        </li>
                        <li :class="[$v.form.password.uppercase && $v.form.password.$dirty ? 'green' : '']">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            upper-case
                        </li>
                        <li :class="[$v.form.password.numeric && $v.form.password.$dirty ? 'green' : '']">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            numbers
                        </li>
                        <li :class="[$v.form.password.minLength && $v.form.password.maxLength && $v.form.password.$dirty? 'green' : '']">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            8-16 characters
                        </li>
                    </ul>
                </div>
                <button class="btn btn-primary float-right" @click="func_submit">Save</button>
            </div>
      </div>
  </div>
</template>

<script>
import { required, minLength, email, maxLength, helpers } from 'vuelidate/lib/validators'
const uppercase = helpers.regex('uppercase', /[A-Z]/);
const lowercase = helpers.regex('lowercase', /[a-z]/);
const numeric = helpers.regex('numerice', /[0-9]/)
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    validations: {
        form: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(8),
                maxLength: maxLength(16),
                uppercase,
                lowercase,
                numeric
            }
        }
    },

    watch: {
        form: {
            deep: true,
            handler() {
                if(this.form.password.length == 0) {
                    this.$v.$reset();
                }
            }
            
        }
    },

    methods: {
        func_submit() {
            console.log(this.form);
        }
    }
}
</script>

<style lang="scss" scoped>

.registration-form {
    max-width: 480px;
    width: 100%;
    padding: 40px 30px 80px;
    border: 1px solid #47474783;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
    position: relative;
    background: #fff;

    h3 {
        font-size: 24px;

    }

    p {
        font-size: 14px;
        font-family: 'Poppins';

    }

    .password-validation {
        p {
            font-size: 12px;
            font-style: italic;
            color: #646464;
            margin: 0 0 10px;
        }

        ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            width: 300px;
            margin-bottom: 20px;

            li {
                font-size: 12px;
                color: #646464;
                display: flex;
                align-items: center;
                padding-left: 20px;
                position: relative;

                svg {
                    position: absolute;
                    left: 0;
                    width: 12px;
                }
            }
        }
    }

    .error {
        font-size: 12px;
        margin-top: 5px;
        color: red !important;

    }

    .green {
        color: #02bb00 !important;
    }

}
</style>