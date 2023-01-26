<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const loader = document.querySelector(".spinner");
  loader.style.display = "flex";
  setInterval(() => loader.classList.add("disappear"), 500);
});
</script>

<template>
  <div class="spinner">
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.disappear {
  animation: vanish 1s forwards;
}

@keyframes vanish {
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
.spinner {
  position: fixed;
  z-index: 99999;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 100vh;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #0a68ff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
