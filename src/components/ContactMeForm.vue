<script setup>
import emailjs from '@emailjs/browser'
</script>

<template>
    <form  ref= 'form' @submit.prevent="submit">
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-user" size="2x" />
            <input name="firstName" v-model="firstName" placeholder="First Name">

            <input v-model="lastName" name="lastName" placeholder="Last Name">
        </div>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-envelope" size="2x" />
            <input v-model="email" name="email" placeholder="Email Address">
        </div>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-message" size="2x" />
            <textarea v-model="message" name="message" placeholder="Brief description"></textarea>
        </div>

        <button type="submit">Submit</button>
        
    </form>
</template>
<script>

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        }
    },
    computed: {
        formValid() {
            const { firstName, lastName, email, message } = this;
            return (
                firstName.length > 0 &&
                lastName.length > 0 &&
                /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
                message.length > 0
            );
        }
    },
    methods: {
        submit() {
            if(!this.formValid) {
                return
            }
            const { firstName, lastName, email, message } = this;
            const payload = {
                firstName,
                lastName,
                email,
                message,
            };
            console.log(payload)
            emailjs.sendForm('service_0gnmgyv', 'template_le0qo86', this.$refs.form, '2ERP7h4QBhLL7GNsn')
            .then((result) => {
                console.log('SUCCESS!', result.text);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
        },
    }
}
</script>

<style>
.contactInputWrapper{
    display: flex;
    width: 100%;
    margin: 5px auto;
    padding: 10px 20px;
    align-items: center;
    justify-items: center;
}
input, textarea{
    width: 100%;
    padding: 10px;
    margin: 10px;
    color: white;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: rgb(25, 25, 25);
}
input[type=email], textarea {
    width: 100%; 
    padding: 12px; 
    box-sizing: border-box; 
    resize: none 
}
input:hover, textarea:hover {
    background-color: #333131;
}
textarea{
    height: 200px
}
button{
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    background-color: rgb(25,25,25);
}
button:hover{
    background-color:#333131;
}

</style>