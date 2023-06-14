<template>
  <div :class="$style.container">
    <div :class="$style.box">
      <div :class="$style.card" v-for="i in list" :key="i">
        <div :class="$style.img">
          <img
            src="https://img3.appinn.net/static/wp-content/uploads/2022/09/Appinn-2022-09-26T144630.347.jpg"
          />
        </div>
        <div :class="$style.content">
          <div :class="$style.tags">
            <span :class="$style.tag">工具</span>
          </div>
          <div :class="$style.title">
            <span>screentogif-GIF制作工具</span>
          </div>
          <div :class="$style.date">
            <div>
              <img
                src="https://pc3.gtimg.com/softmgr/logo/48/22693_48_1464072107.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slot-key"],
  data() {
    return {
      // list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      list: [
        { title: "QQ截图独立版", img: "QQ截图", tag: "截图" },
        { title: "Bandizip压缩软件无广告版", img: "Bandizip", tag: "截图" },
        { title: "IObit Uninstaller软件卸载工具", img: "IObit", tag: "截图"  },
        { title: "Everything单文件版", img: "Everything", tag: "截图"  },
        { title: "QQ截图独立版", img: "QQ截图", tag: "截图"  },
      ],
    };
  },
  mounted() {
    const title = document.querySelector('[class="page-title"]');
    const contentContainer = document.querySelector(".content__default");
    title.style.display = "none";
    contentContainer.style.width = "100%";
    contentContainer.style.maxWidth = "none";
    contentContainer.style.padding = "0";
  },
};
</script>

<style module>
.container {
  display: flex;
  justify-content: center;
  padding: 0 17.5px;
}
.img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  height: 196px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.img > img {
  height: 100%;
  object-fit: cover;
}
.box {
  display: grid;
}
.content {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 21px 14px;
}
.tag {
  display: inline-block;
  padding: 1.75px 7px;
  font-size: 12px;
  color: #cfd3d7;
  background-color: #eee;
  border-radius: 1.5px;
}
.title {
  line-height: 20px;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  color: #1f2937;
}
.date {
  font-size: 12px;
  color: #6b7280;
}

.date svg {
  fill: blue;
}
@media (min-width: 480px) {
  .box {
    max-width: 553px;
    gap: 0.75rem;
  }
}

@media (min-width: 768px) {
  .box {
    max-width: 672px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

@media (min-width: 976px) {
  .box {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    max-width: 896px;
    gap: 1.5rem;
  }
}

.card {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin-top: 10px !important;
  height: 325px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
}
</style>
