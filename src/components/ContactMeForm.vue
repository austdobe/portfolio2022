<template>
    <form>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-user" size="2x" />
            <input type="text" id="first" placeholder="First Name">

            <input type="text" id="last" placeholder="Last Name">
        </div>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-envelope" size="2x" />
            <input type="email" id="email" placeholder="Email Address">
        </div>
        <div class="contactInputWrapper">
            <font-awesome-icon icon="fa-solid fa-message" size="2x" />
            <textarea id="subject" placeholder="Brief description"></textarea>
        </div>

        <button type="submit">Submit</button>
        
    </form>
</template>

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