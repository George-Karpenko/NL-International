<template>
  <div class="loader">
    <div class="loader__overlay"></div>
    <div class="loader__icon">
      Загрузка...
      <div class="loader__item" style="--ms: 1s; --clr: #1ece53"></div>
      <div class="loader__item" style="--ms: 1.5s; --clr: #8e1ece"></div>
      <div class="loader__item" style="--ms: 1.7s; --clr: #1e79ce"></div>
    </div>
  </div>
</template>

<style>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
}
.loader__icon {
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: auto;
}
.loader__overlay {
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 100%, 0.7);
}

.loader__item {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 15px solid transparent;
  border-top-color: var(--clr);
  animation: rotate var(--ms) ease-in-out infinite;
  pointer-events: none;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
