<template>
    <div class="message">
        <span>Enter the name of the location, please</span>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    .message {
        text-align: center;
        background:rgba(255,255,255,0.5);
        padding:10px;
        border-radius: 10px;
        & > span {
            color:#fff;
        }
    }
</style>