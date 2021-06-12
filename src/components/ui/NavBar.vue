<template>
    <div class="nav">
      <router-link 
        v-for="page in pages" :key="page.name"
        :to="page.url">
        {{page.name}}
      </router-link>
    </div>
</template>
<script>

export default {
    data:()=>({
        pages:[
            {name:'Day', url:'/'},
            {name:'Week', url:'/week'}
        ]
    })
}
</script>
