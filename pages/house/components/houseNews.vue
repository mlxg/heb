<template>
  <section class="house-news">
    <ul class="news-list">
      <li>
        <header>
          <span>05/13 2020<i></i></span>恒大时尚慧谷私享会完美落幕
        </header>
        <span>
          11月3日举办的恒大时尚慧谷价值私享会完美落幕，简单易懂的干货分享让在场所有观众对龙华及项目有了新的认知！
          恒大时尚慧谷，建面约32-74㎡生活空间，建面约80-264㎡智变办公。
        </span>
        <footer>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </footer>
      </li>
      <li>
        <header>
          <span>05/13 2020<i></i></span>恒大时尚慧谷私享会完美落幕
        </header>
        <span>
          11月3日举办的恒大时尚慧谷价值私享会完美落幕，简单易懂的干货分享让在场所有观众对龙华及项目有了新的认知！
          恒大时尚慧谷，建面约32-74㎡生活空间，建面约80-264㎡智变办公。
        </span>
      </li>
      <li>
        <header>
          <span>05/13 2020<i></i></span>恒大时尚慧谷私享会完美落幕
        </header>
        <span>
          11月3日举办的恒大时尚慧谷价值私享会完美落幕，简单易懂的干货分享让在场所有观众对龙华及项目有了新的认知！
          恒大时尚慧谷，建面约32-74㎡生活空间，建面约80-264㎡智变办公。
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'HouseNew'
}
</script>

<style scoped lang="less">
@import 'assets/css/mixin';

.news-list {
  margin-top: 28px;
  width: 740px;
  li {
    position: relative;
    margin-left: 105px;
    padding-left: 20px;
    padding-bottom: 32px;

    &::before {
      display: block;
      background-color: #dcdbe1;
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      z-index: 0;
      width: 1px;
      height: 100%;
    }

    &:last-child {
      margin-bottom: 0;

      &::before {
        content: '';
        position: absolute;
        left: 5px;
        top: 0;
        z-index: 0;
        width: 0;
        height: 100%;
      }
    }

    header {
      .fs(16px);
      padding: 0;
      margin-bottom: 12px;

      i {
        margin-left: 10px;
        .borderRadius(3px);
        display: inline-block;
        width: 8px;
        height: 8px;
        background: rgba(220, 219, 225, 1);
        vertical-align: 2px;
      }

      span {
        left: -100px;
        position: absolute;
        .sc(16px, @globalBlack);
      }
    }

    span {
      .sc(14px, @globalGrey);
      line-height: 20px;
    }

    footer {
      height: 98px;

      margin-top: 24px;

      img {
        display: inline-block;
        .fixLastMargin(24px);
        background: @globalNull;
        .wh(130px, 98px);
      }
    }
  }
}
</style>
