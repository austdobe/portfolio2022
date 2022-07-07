<script setup>
    defineProps({
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }

    })
</script>

<template>
    <div class="banner">
        <div class="bannerHeader">
            <h3 class="bannerDescription">{{description}}</h3>
        </div>
        <div class="contactBannerActionWrapper">
            <RouterLink class="contactBannerAction" to="./contact"> Contact me</RouterLink>
        </div>
    </div>

</template>

<style scoped>
.banner{ 
    margin: 100px auto;
    width: 100%;
    height: 200px;
    display: flex;
    padding: 30px 60px;
    border: transparent;
    border-radius: 20px;
    color: white;
    background: radial-gradient(circle, #424242 50%, #191919 80%);
}
.bannerHeader{
    display: block;
    width: 50%;
    padding: 10px 20px;
    align-items: center;
    justify-items: center;
    margin: auto;
}
.contactBannerActionWrapper{
    width: 50%;
    align-items: center;
    justify-items: center;
    margin: auto;
}
.contactBannerAction {
    width: 200px;
    color: white;
    border: 1px white solid;
    padding: 10px 20px;
    border-radius: 20px;
    margin: auto;
}
.contactBannerAction:hover {
    background-color: #191919;
}

@media (max-width: 768px) {
    .banner{
        display: block;
        height: fit-content;
    }
    .bannerHeader{
        margin-bottom: 20px;
        width: 90%
    }
}

</style>