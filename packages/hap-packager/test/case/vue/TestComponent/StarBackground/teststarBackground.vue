<template>
  <div>
    <rating style="star-background: url('./a.png')"></rating>
    <rating style="star-background: url(./a.png)"></rating>
    <rating style="star-background: url()"></rating>
    <rating style="star-background: './a.png'"></rating>
    <rating style="star-background: @uri"></rating>
    <rating style="star-background: url(a);"></rating>
    <rating style="star-background: url(@uri);"></rating>
    <rating style="star-background: uri('./a.png')"></rating>
    <rating style="star-background: url(/common/a.png)"></rating>
    <rating style="star-background: url(https://www.quickapp.cn/assets/images/home/a.png)"></rating>
  </div>
</template>

<style>
</style>

<script>
  export default {
    data: {
    }
  }
</script>