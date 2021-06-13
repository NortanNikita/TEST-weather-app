<template>
    <div class="error">
        <span>Sorry, {{errorMessage}}, try again</span>
    </div>
</template>
<script>
export default {
    props:{
        errorMessage: {
            type:String,
            default:''
        }
    }
}
</script>
<style lang="scss" scoped>
    .error {
        text-align: center;
        background:rgba(255,255,255,0.5);
        padding:10px;
        border-radius: 10px;
        & > span {
            color:red;
        }
    }
</style>