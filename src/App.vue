<template>
    <div id='root'>
        <router-view></router-view>
    </div>
</template>

<script>
export default {}
</script>
<style lang="less" >
html,
body,
#root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
* {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}
</style>
