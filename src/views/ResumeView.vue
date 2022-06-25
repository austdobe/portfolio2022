<template>
<div class="container">
    <button class="resumeAction">Download Resume</button>
    <iframe scrolling='no' class='resume' src="https://docs.google.com/document/d/e/2PACX-1vTWu3FJqjUsABl8WPokRfW7mtv-DKLWwf_bakhjh_Smo_CL6J-yFvYdydkHEpnTdGibczDJAm-xfiIM/pub?embedded=true">
        <p>Sorry your browser doesnt have the plug in to view this. <a href="https://docs.google.com/document/d/e/2PACX-1vTWu3FJqjUsABl8WPokRfW7mtv-DKLWwf_bakhjh_Smo_CL6J-yFvYdydkHEpnTdGibczDJAm-xfiIM/pubpub">Download Here</a></p>
    </iframe>
</div>
</template>

<style>
.container {
    margin:10px auto;
    height: 100%
}
.resume{
    height: 2500px;
    width: 800px;
    margin: 20px auto;
    border: none;
    scroll-behavior: smooth;
    overflow-y: scroll;
}
.resumeAction{
    display: block;
    position: absolute;
    top:0;
    left: 0;
    color: white;
    background: darkgray;
    padding: 10px 20px;
    border-radius: 10px;

}

.resumeAction:hover{
    background-color: lightgray;
}
</style>