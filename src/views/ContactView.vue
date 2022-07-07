<script setup>
import ContactMeForm from '../components/ContactMeForm.vue';
import ContactCard from '../components/ContactCard.vue';
import NavBar from '../components/NavBar.vue';

</script>

<template>
    <NavBar class="contactNav" />
    <section class="contactGrid">
        <ContactCard />
        <ContactMeForm />
    </section>
</template>

<style>
.contactGrid{
    background: linear-gradient(90deg, #181818 36.2%, rgba(24, 24, 24, 0) 112.3%), url("../assets/images/secondForest.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: calc(100vh - var(--nav-height));
}
.contactNav {
    position: absolute;
    top: 0;
    z-index:1;
}
@media (max-width: 768px) {
    .contactGrid{
        display:block;
        background: linear-gradient(180deg, #181818 -36.2%, rgba(24, 24, 24, 0) 152.3%), url("../assets/images/secondForest.jpg");
        color: white;
    }
}

</style>