<template>
    <div class="loading">
            <img src="../../static/img/loaing.gif" class="loadimg">
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.loading{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.loadimg{
    width: 70px;
    height: 70px;
    background: rgba(0,0,0,.5);
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>
