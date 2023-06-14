<template>
  <label
    class="el-checkbox"
    :class="{ 'is-checked': checked }"
    @click="$emit('click')"
    ><span class="el-checkbox__input" :class="{ 'is-checked': checked }"
      ><span class="el-checkbox__inner"></span
      ><input
        type="checkbox"
        aria-hidden="false"
        class="el-checkbox__original"
        value="" /></span
    ><span class="el-checkbox__label"><slot></slot></span
  ></label>
</template>

<script>
export default {
  props: ["checked"],
  data() {
    return {
      // checked: false,
    };
  },
  methods: {
    //
  },
  mounted() {
    //
  },
};
</script>

<style >
.el-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 7px 8px;
  align-items: center;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
}
.el-checkbox:hover {
  background-color: rgba(40, 99, 243, 0.1);
}
.el-checkbox__input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  line-height: 1;
  height: 14px;
  position: relative;
  vertical-align: middle;
}
.el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 14px;
}

.el-checkbox__inner {
  display: inline-block;
  position: relative;
  border: 1px solid #dcdfe6;
  border-radius: 2px;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background-color: #fff;
  z-index: 1;
  transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
    background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
}
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}
.el-checkbox__inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}

.el-checkbox__input.is-checked .el-checkbox__inner:after {
  transform: rotate(45deg) scaleY(1);
}

.el-checkbox__original {
  opacity: 0;
  outline: none;
  position: absolute;
  margin: 0;
  width: 0;
  height: 0;
  z-index: -1;
}

.el-checkbox__label {
  display: inline-block;
  padding-left: 10px;
  line-height: 19px;
  font-size: 14px;
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #409eff;
}
</style>
