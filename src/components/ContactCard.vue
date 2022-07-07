

<template>
    <div class="contactCardWrapper">
        <p>Thanks for checking out my site. Contact me anytime and I will get back to you as soon as I can. I would love to work with you on a project, or if you have any business opportunities I am open to discuss them! Checkout my socials or send me a message to chat.</p>
        <div class="links">
          <a href="https://linkedin.com/in/austin-dober" target="_blank">
            <font-awesome-icon icon="fa-brands fa-linkedin" size="2x" />
          </a>
          <a href="https://www.facebook.com/adoberweb" target="_blank">
            <font-awesome-icon icon="fa-brands fa-facebook-f" size="2x" />
          </a>
          <RouterLink to="./resume">
            <font-awesome-icon icon="fa-brands fa-readme" size="2x" />
          </RouterLink>
          <a href="https://github.com/austdobe" target="_blank">
            <font-awesome-icon icon="fa-brands fa-github-square" size="2x" />
          </a>
        </div>
    </div>
</template>

<style>
    .contactCardWrapper{
        width: 80%;
        padding: 20px 40px;
        margin: 10px auto;    
    }
    .links {
        display: flex;
        margin-top: 20px;
        text-align: center;
        width: 100%;
    }

    .links a {
        color: white;
        height: 100%;
        width: 100%;
    }
    .links a:hover {
        color: #636261;
        background-color: transparent;
    }

</style>