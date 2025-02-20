<template>
<div class="Cat-sprite">
  <img class="Cat-spritesheet pixelart" src="/cat-sprite-sheet.png" alt="cat in pixel" />

</div>

</template>


<style>
:root {
  --pixel-size: 100;
}
.Cat-sprite {
  width: cal(32px * var(--pixel-size));
  height: cal(32px * var(--pixel-size));
  overflow: hidden;

}
.Cat-spritesheet {
  animation: moveSpritesheet 1s steps(8) infinite;
  width: cal(128px * var(--pixel-size));
}
.pixelart {
  image-rendering: pixelated;
}
@keyframes moveSpritesheet{
  from{
    transform: translated3d(0px, 0, 0)
  }
  to {
    transform: translate3d(-100%, 0, 0)
  }
}
.running {
    top: calc(-96px * var(--pixel-size));
}




</style>