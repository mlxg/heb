<template>
  <section class="house-image">
    <div>
      <article>视频(4)</article>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <div>
      <article>VR(4)</article>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <div>
      <article>封面图 (4)</article>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <div>
      <article>效果图 (4)</article>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <div>
      <article>户型图 (4)</article>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HouseImgs'
}
</script>

<style scoped lang="less">
@import 'assets/css/mixin';
.house-image {
  margin-top: 24px;
  div {
    width: 740px;
  }

  article {
    .fs(24px);
  }

  ul {
    margin: 24px 0 40px 0;

    li {
      .fixLastMargin(16px);
      display: inline-block;

      img {
        display: inline-block;
        .wh(170px, 127px);
        background: @globalNull;
      }
    }
  }
}
</style>
