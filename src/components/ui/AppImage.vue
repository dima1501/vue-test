<template lang="">
    <img 
        :src="image" 
        :class="$style.image" 
        :width="width" 
        :height="height"
        onerror="this.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png'"  
        alt="">
</template>
<script>
export default {
    name: "AppImage",
    props: {
        image: String,
        width: Number,
        height: Number
    }
}
</script>
<style lang="scss" module>
.image {
    max-width: 100%;
    height: auto;
    display: block;
}
</style>