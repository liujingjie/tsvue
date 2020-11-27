<template>
  <div :class="[$style.hello]">
    <div :class="[$style.funtions]">
      <button @click="clearAll">隐藏所有</button>
      <button @click="escapline">逃生路线</button>
    </div>
    <div id="player" :class="[$style.playerContainer]"></div>
  </div>
</template>

<script lang="ts">
import * as ZhiUWeb from "zhiuweb";

export default {
  props: {
    msg: String
  },
  data() {
    return {
      direction: "top",
      pinPadding: 0,
      time: "",
      timer: 0,
      color: "red"
    };
  },
  created() {
    (window as any).ZhiUWeb = ZhiUWeb;
    let scene = new ZhiUWeb.Scene("player", {
      projectName: "webAPI专用"
    });
    //  let ue=new ZhiUE("121");
    //  let camera=ue.getCamera();
    //  console.log(camera);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style module lang="stylus" vars="{color}">
.hello {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 100px 1fr;

  .playerContainer {
    width: 100%;
    height: 100%;
    grid-row: 1 / 3;
    grid-column: 1 / 2;
  }

  .funtions {
    width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 1;
  }
}
</style>
