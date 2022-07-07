<script setup>
import emailjs from '@emailjs/browser'
</script>

<template>
    <form  ref= 'form' @submit.prevent="submit">
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-user" size="2x" />
            <input name="firstName" placeholder="First Name">

            <input name="lastName" placeholder="Last Name">
        </div>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-envelope" size="2x" />
            <input name="email" placeholder="Email Address">
        </div>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-message" size="2x" />
            <textarea name="message" placeholder="Brief description"></textarea>
        </div>

        <button type="submit">Submit</button>
        
    </form>
    <div v-if="success" class="successBanner">
        <h3>Email has been successfully sent!</h3>
        <font-awesome-icon
        @click="toggleSuccess"
        class="contactMeIcon"
        icon="fa-solid fa-circle-xmark"
        size="2x"
      />
    </div>
</template>
<script>

export default {
    data() {
        return {
            success: false
        }
    },
    computed: {
        formValid() {
            const { firstName, lastName, email, message } = this.$refs.form;
            console.log(firstName)
            return (
                firstName.value.length > 0 &&
                lastName.value.length > 0 &&
                /(.+)@(.+){2,}.(.+){2,}/.test(email.value) &&
                message.value.length > 0
            );
        }
    },
    methods: {
        toggleSuccess() {
            this.success = !this.success
        },
        submit() {
            if(!this.formValid) {
                return
            }
            emailjs.sendForm('service_0gnmgyv', 'template_le0qo86', this.$refs.form, '2ERP7h4QBhLL7GNsn')
            .then(() => {
                this.toggleSuccess()
            }, (error) => {
                console.log('FAILED...', error.text);
            }).finally (() => {
                this.$refs.form.reset()
                setTimeout(() => this.success = false, 3000)

            })
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
.successBanner {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    border: greenyellow solid 1px;
    border-radius: 10px;
    background-color: gray;
    width: 100%;
    margin: 10px auto;
    padding: 5px 10px;
    font-size: 14px;
    color: white;
}
.contactMeIcon {
    position: absolute;
    left: 0;
    top:5px;
    cursor: pointer;
}

</style>