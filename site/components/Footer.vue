<template>
  <footer class="footer">
    <span>Created with ❤ by </span>
    <a class="link" href="https://github.com/heynext">@heynext</a>
    <span>&nbsp; ⦙ &nbsp; © 2020 MIT License</span>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>

<style lang="less" scoped>
.footer {
  padding: 20px 0;
  background-color: #2b93d1;
  background-image: linear-gradient(205deg, #2b93d1 0%, #519e96 100%);
  color: #fff;
  text-align: center;
  font-family: "Texturina", serif;
  letter-spacing: 1px;
}

.link {
  text-decoration: underline;
}
</style>
