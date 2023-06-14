<template>
  <div>
    <!-- <slot></slot> -->

    <!-- <div>
      <div>
        <p :class="$style.question_title">
          关于嫦娥一号的多次变轨，下面说法正确的是
        </p>
      </div>
      <Radio :checked="checked === 0" @click="checked = 0"
        >A．在嫦娥奔月的过程中，质量不变，重力也不变</Radio
      >
      <Radio :checked="checked === 1" @click="checked = 1"
        >B．经过变轨，卫星的惯性会发生变化</Radio
      >
      <Radio :checked="checked === 2" @click="checked = 2"
        >C．每一次变轨，卫星动能都会增加</Radio
      >
      <Radio :checked="checked === 3" @click="checked = 3"
        >D．在地球附近变轨时，发动机的动力方向与卫星运动方向相同；在月球附近变轨时，发动机的动力方向与卫星运动方向相反</Radio
      >
    </div> -->

    <div>
      <div>
        <p :class="$style.question_title">影响样本代表性的主要因素有</p>
      </div>
      <Checkbox :checked="checkbox.includes(0)" @click="handleCheck(0)"
        >A．抽样方法的选择</Checkbox
      >
      <Checkbox :checked="checkbox.includes(1)" @click="handleCheck(1)"
        >B．研究经费
      </Checkbox>
      <Checkbox :checked="checkbox.includes(2)" @click="handleCheck(2)"
        >C．对总体的界定与了解</Checkbox
      >
      <Checkbox :checked="checkbox.includes(3)" @click="handleCheck(3)"
        >D．研究者水平</Checkbox
      >
      <Checkbox :checked="checkbox.includes(4)" @click="handleCheck(4)"
        >E. 样本的大小</Checkbox
      >
    </div>
  </div>
</template>

<script>
import Radio from "./Radio.vue";
import Checkbox from "./Checkbox.vue";
export default {
  props: [],
  components: {
    Radio: Radio,
    Checkbox,
  },
  data() {
    return {
      checked: 0,
      checkbox: [0],
      ref: null,
      // list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      // list: [
      //   { title: "QQ截图独立版", img: "QQ截图", tag: "截图" },
      //   { title: "Bandizip压缩软件无广告版", img: "Bandizip", tag: "截图" },
      //   { title: "IObit Uninstaller软件卸载工具", img: "IObit", tag: "截图"  },
      //   { title: "Everything单文件版", img: "Everything", tag: "截图"  },
      //   { title: "QQ截图独立版", img: "QQ截图", tag: "截图"  },
      // ],
    };
  },
  methods: {
    handleCheck(value) {
      window.clearTimeout(this.ref);
      this.ref = setTimeout(() => {
        console.log("aa");
        if (this.checkbox.includes(value)) {
          this.checkbox = this.checkbox.filter((item) => item !== value);
        } else {
          this.checkbox = [...this.checkbox, value];
        }
      }, 0);

      // console.log(this.checkbox);
    },
  },
  mounted() {
    //
  },
};
</script>

<style module>
.question_title {
  font-size: 18px;
  margin-bottom: 0;
  padding-left: 7px;
}
</style>
