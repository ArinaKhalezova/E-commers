<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer_media">
      <img src="../assets/img/logo.png" alt="" />
      <h1>
        We have clothes that suits your style and which you’re proud to wear. From women to men.
      </h1>
      <div class="media">
        <a href="/" class="media">
          <img src="../assets/img/twitter.png" alt="" />
        </a>
        <a href="/" class="media">
          <img src="../assets/img/facebook.png" alt="" />
        </a>
        <a href="/" class="media">
          <img src="../assets/img/instagram.png" alt="" />
        </a>
        <a href="/" class="media">
          <img src="../assets/img/github.png" alt="" />
        </a>
      </div>
    </div>
    <div class="footer_menu">
      <div class="footer_menu-item">
        <h2>COMPANY</h2>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Works</a></li>
          <li><a href="">Career</a></li>
        </ul>
      </div>
      <div class="footer_menu-item">
        <h2>HELP</h2>
        <ul>
          <li><a href="">Customer Support</a></li>
          <li><a href="">Delivery Details</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div class="footer_menu-item">
        <h2>FAQ</h2>
        <ul>
          <li><a href="">Account</a></li>
          <li><a href="">Manage Deliveries</a></li>
          <li><a href="">Orders</a></li>
          <li><a href="">Payment</a></li>
        </ul>
      </div>
      <div class="footer_menu-item">
        <h2>RESOURCES</h2>
        <ul>
          <li><a href="">Free eBook</a></li>
          <li><a href="">Development Tutorial</a></li>
          <li><a href="">How to - Blog</a></li>
          <li><a href="">Youtube Playlist</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  padding: 18px;
  font-family: 'Satoshi';
  background-color: #f0f0f0;
  padding-top: 50px;
}
.footer h1 {
  line-height: 1.5;
  font-size: 14px;
  margin: 14px 0 20px;
}
.footer h2 {
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 5px;
}
.media {
  margin: 20px 0 24px;
}
.media > * {
  margin: 0px 1px;
}
.footer_menu {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 220px 220px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 11px 0px;
}
a {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.6);
}

@media (min-width: 1024px) {
  .footer {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .footer_menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .footer {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .footer_menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 150px 100px;
  }
}
</style>
