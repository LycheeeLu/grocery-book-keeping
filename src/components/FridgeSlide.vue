<template>
    <div class="fridge-slide">
         <!-- Fridge container -->
        <div class="fridge">

            <div class="fridge-shadow">
                <img src="/fridge/left-shadow.png" />
                <img src="/fridge/right-shadow.png" />
            </div>

            <!-- Fridge wall (background color) -->     
            <div class="fridge-wall">
                <img src="/fridge/fridge-wall.png" />
            
            </div>

            <div class="fridge-box">
                <img src="/fridge/fridge-left.png"/>
                <img src="/fridge/fridge-right.png" />
     
            </div>

            <div class="fridge-shelf">
                <div class="fridge-left-shelf">
                    <img src="/fridge/left-1.png" class="layer-above-item"/>
                    <img src="/fridge/left-2.png" class="layer-above-item"/>
                    <img src="/fridge/left-3.png" class="layer-above-item"/>
                    <img src="/fridge/left-4.png" class="layer-under-item"/>
                    <img src="/fridge/left-5.png" class="layer-under-item"/>
                </div>
                <div class="fridge-right-shelf">
                    <img src="/fridge/right-1.png" class="layer-above-item"/>
                    <img src="/fridge/right-2.png" class="layer-above-item"/>
                    <img src="/fridge/right-3.png" class="layer-above-item"/>
                </div>
             </div>
        </div>

    </div>
    
</template>
<script>
    export default {
        //component logic
        
    }
</script>

<style scoped>
.fridge-slide {
  position: relative;
  width: 70%;
  max-width: 700px;
  height: 800px;
  overflow: hidden;
  margin:0 auto;
}

.fridge {
  position: relative;
  width: 100%;
  height: 100%;
}

.fridge-wall,
.fridge-box,
.fridge-shelf,
.fridge-shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}


/* Add these img rules to preserve PNG dimensions */
img {
  position: absolute;  
  max-width: 100%;    /* Prevents overflow */
  height: auto;       /* Maintains aspect ratio */
}

.fridge-shadow {
  z-index: 6; /* Shadow on top */
  mix-blend-mode: multiply; /*shadow effect/
}

.fridge-wall {
  z-index: 1; /* Background wall */
}

.fridge-box {
  z-index: 2; /* Boxes in front of wall */
}

.layer-above-item{
  z-index: 5;  /* shelf in front of item */
}

.layer-under-item{
  z-index: 3;  /* item in front of shelf */
}
</style>