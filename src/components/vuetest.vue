<template>
<div></div>
</template>
 
<script lang="ts">
import dayjs from "dayjs";
import { ref, reactive, onMounted } from "vue";
 
export default {
  components: {
    
  },
  setup() {
    const nameinput = ref();
    const selectionStart = ref(0);
    const twoNow = dayjs().subtract(2, "day").format("YYYY-MM-DD HH:mm:ss");
    const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const now2 = dayjs().add(2, "day").format("YYYY-MM-DD HH:mm:ss");
    const formData = reactive({
      name: "",
      phone: "",
      code: "",
    });
 
    onMounted(() => {
        console.log("onMounted")
    });
 
    return {
      nameinput,
      formData,
      selectionStart,
      twoNow,
      now,
      now2,
    };
  },
};
</script>