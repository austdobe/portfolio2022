<template>
  <div class="container">
    <a href="`${base}/Resume_6_22.pdf`" download class="resumeAction"
      >Download Resume</a
    >
    <iframe
      scrolling="no"
      class="resume"
      src="https://docs.google.com/document/d/e/2PACX-1vTWu3FJqjUsABl8WPokRfW7mtv-DKLWwf_bakhjh_Smo_CL6J-yFvYdydkHEpnTdGibczDJAm-xfiIM/pub?embedded=true"
    >
      <p>
        Your browser doesn't support iframe.
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vTWu3FJqjUsABl8WPokRfW7mtv-DKLWwf_bakhjh_Smo_CL6J-yFvYdydkHEpnTdGibczDJAm-xfiIM/pubpub"
          >Click here to view</a
        >
      </p>
    </iframe>
  </div>
</template>

<script></script>

<style>
.container {
  margin: 10px auto;
  min-height: 500px;
  height: 100%;
  width: 100%;
}
.resume {
  height: 2200px;
  width: 800px;
  margin: 20px auto;
  border: none;
  scroll-behavior: smooth;
  overflow-y: scroll;
}
.resumeAction {
  display: block;
  position: absolute;
  top: 0;
  margin: 20px auto;
  color: white;
  background: darkgray;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 2;
}

.resumeAction:hover {
  background-color: lightgray;
}
@media (max-width: 1000px) {
  .resumeAction {
    margin-left: 30px;
  }
}
</style>
