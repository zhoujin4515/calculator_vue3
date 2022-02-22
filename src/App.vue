<template>
  vue3 jsx 计算器
  <router-view/>
</template>

<style>
.keypad-box {
  display: grid;
  grid-template-columns: 30px 30px 30px 30px;
  text-align: center;
}
.display {
  font-size: 20px;
}
.operator {
  background: gray;
}
</style>
