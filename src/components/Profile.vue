<script setup>
defineProps({
    header: {
        type: String,
        required: true,
    }

})

</script>

<template>
    <div class="wrapper">
        <h1 class="title">{{header}}</h1>
    </div>
</template>

<style>
.wrapper {
    background: gray;
    color: white;
    width: 100%;
    min-height: 50vh;
}

.title {
    margin-top: 20px;
}


</style>