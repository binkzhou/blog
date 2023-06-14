<template>
  <label
    role="radio"
    aria-checked="true"
    tabindex="0"
    class="el-radio"
    :class="{ 'is-checked': checked }"
    @click="$emit('click')"
    ><span class="el-radio__input" :class="{ 'is-checked': checked }"
      ><span class="el-radio__inner"></span
      ><input
        type="radio"
        aria-hidden="true"
        tabindex="-1"
        autocomplete="off"
        class="el-radio__original"
        value="1" /></span
    ><span class="el-radio__label"><slot></slot></span
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
  mounted() {
    //
  },
};
</script>

<style >
.el-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: flex;
  padding: 7px 8px;
  min-height: 36px;
  align-items: center;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
}

.el-radio:hover {
  background-color: rgba(40, 99, 243, 0.1);
}
.el-radio__original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.el-radio__inner:hover {
  border-color: #409eff;
}
.el-radio__input {
  white-space: nowrap;
  cursor: pointer;
  outline: none;
  display: inline-block;
  height: 14px;
  line-height: 1;
  position: relative;
  vertical-align: middle;
}

.el-radio__original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.el-radio__inner {
  position: relative;
  display: inline-block;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
}
.el-radio__inner:after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  transition: transform 0.15s ease-in scale(0);
}

.el-radio__input.is-checked .el-radio__inner:after {
  transform: translate(-50%, -50%) scale(1);
}

.el-radio__input.is-checked .el-radio__inner {
  border-color: #409eff;
  background: #409eff;
}
.el-radio__label {
  font-size: 14px;
  padding-left: 10px;
}
.el-radio__input.is-checked + .el-radio__label {
  color: #409eff;
}
</style>
