<template>
    <div class="country">
        <div class="country__name">
            {{info.name}},
        </div>
        <div class="country__abbr">
            {{info && info.sys && info.sys.country}}
        </div>
    </div>
</template>
<script>

export default {
    props:{
        info:{
            type: Object,
            default:()=>{}
        }
    },
}

</script>
<style lang="scss" scoped>
.country {
    display:flex;
    font-weight: bold;
    &__name {
        font-size: 26px;
        color:#fff;
    }
    &__abbr {
        font-size: 26px;
        color:#fff;
    }
}
</style>
