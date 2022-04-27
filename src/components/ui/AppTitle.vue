<template lang="">
    <component :is="type" :class="$style[type]">
        {{title}}
    </component>
</template>
<script>

export default {
    name: 'AppTitle',
    props: {
        title: String,
        type: String
    }
}
</script>
<style lang="scss" module>
.h2 {
    font-size: 26px;
    font-weight: bold;
    margin: 0;
    @media screen and (min-width: 768px) {
        font-size: 32px;
    } 
}

.h3 {
    font-size: 22px;
    font-weight: bold;
    margin: 0;
    @media screen and (min-width: 768px) {
        font-size: 24px;
    } 
}

.h4 {
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    @media screen and (min-width: 768px) {
        font-size: 18px;
    } 
}
</style>