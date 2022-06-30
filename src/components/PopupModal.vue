<script setup>
defineProps({
  modalData: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h3>{{ modalData.title }}</h3>
        <h3>{{ modalData.company }}</h3>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>
      <section class="modal-body">
        <div v-for="descriptions in modalData.description">
          <h3>{{ descriptions }}</h3>
        </div>
        <div v-for="role in modalData.roles">
          <h3>{{ role.title }}</h3>
          <ul>
            <li v-for="descriptions in role.description">{{ descriptions }}</li>
          </ul>
        </div>
      </section>
      <footer class="modal-footer">
        <slot name="footer"></slot>
        <button type="button" class="btn-green" @click="close">
          Close Modal
        </button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  color: black;
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  max-width: 60%;
  max-height: 90%;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 99;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #777878;
  color: black;
}
.modal-header > h3 {
  margin: 0 20px;
}

.modal-footer {
  border-top: 1px solid #777878;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  text-align: left;
  padding: 20px 10px;
}

.modal-body > div {
  display: block;
  margin: 10px 20px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 20px;
  border: none;
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #777878;
  background: transparent;
}
.btn-close:hover {
  color: #c0c2c2;
}

.btn-green {
  align-self: center;
  width: 25%;
  padding: 10px 20px;
  color: white;
  background: #777878;
  border: none;
  border-radius: 25px;
}
.btn-green:hover {
  background: #c0c2c2;
}
@media (max-width: 768px) {
  .modal {
    max-width: 90%;
    margin: 10px auto;
  }
}
</style>
