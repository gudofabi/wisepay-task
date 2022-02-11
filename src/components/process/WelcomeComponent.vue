<template>
  <div>
      <div class="welcome-container">
        <h1>Hi and Welcome to Wise-Pay</h1>
        <br>
        <p>{{ company.name }} has invited you to join the simplest <a href="">set and forget</a> payment system.</p>
        <p>At {{ company.name }} we're always looking for opportunities and make things easier for our customers, which is why we're thrilled to be partnering with Wise-Pay and {{ company.merchant }} for all Credit Card and ACH/Bank Debit paymetns.</p>
        <p>With Wise-Pay, you can enjoy enhanced functionality for smarter business, everywhere from speedy payment options to competely transparent fee and charges. <br>All our invoices are paid via Wise-Pay and settled via {{ company.merchant }}'s secure payment platform</p>
        <br>
        <p><strong>With Wise-Pay, you can log in to:</strong></p>
        <ul>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                View and download invoices
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Securely store your preferred payment methods for ease of payment
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Easily pay for invoices using your Securely stored Credit Card or Bank Account
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Set up Automatic Payments allowing you to 'set and forget', where payments are then deducted from your nominated stored payment method
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                on the invoice due date
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Schedule your invoice to be paid at a future date
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Save time and bulk pay for invoice
            </li>
        </ul>

        <button class="btn btn-primary" @click.prevent="func_createAccount">Create an Account</button>
      </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    props: [
        'company'
    ],
    methods: {

        ...mapActions({
            updateSteps: "updateSteps"
        }),

        func_createAccount() {
            const $step = {
                step: 1,
                name: 'Welcome Introduction',
                inprogress: true,
                passed: true
            }

            this.updateSteps($step)
            this.$emit('next-step', 2);
        },

    }
}
</script>

<style lang="scss" scoped>
.welcome-container {
    background: #fff;
    border: 1px solid #47474783;
    box-shadow: 0 0 3px rgba(0,0,0,.2);
    padding: 50px 50px 60px;
    position: relative;
    
    h1 {
        font-size: 20px;
    }

    p {
        font-size: 14px;
        font-family: 'Poppins', sans-serif;

        strong {
            font-weight: 600;
        }

        a {
            font-size: 14px;
        }

    }

    ul {
        margin-bottom: 30px;

        li {
            font-size: 14px;
            position: relative;
            padding: 4px 0 4px 30px;

            svg {
                width: 16px;
                height: 16px;
                margin-top: 3px;
                position: absolute;
                left: 0;
                color: #0b9ef7;

            }
        }
    }

    .btn {
        position: absolute;
        right: 5%;
        bottom: 5%;
        color: #fff;
    }

}
</style>