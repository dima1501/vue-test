<template>
    <div :class="$style.card">
        <slot></slot>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" module>
.card {
    padding: 15px;
    box-shadow: 0 0 30px rgba(0,0,0,0.12);
    border-radius: 20px;
    box-sizing: border-box;
    height: 100%;
    @media screen and (min-width: 768px) {
        padding: 30px;
    } 
}
</style>