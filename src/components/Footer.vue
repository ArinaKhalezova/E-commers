<script setup lang="ts"></script>

<template>
  <div class="footer">
    <img src="../assets/img/logo.png" alt="" />
    <h1>We have clothes that suits your style and which you’re proud to wear. From women to men.</h1>
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
    <nav class="footer_menu">
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
      
    </nav>
  </div>
</template>

<style scoped>
.footer {
  font-family: 'Satoshi';
  background-color: #f0f0f0;
  padding-top: 50px;
}
.footer h1 {
  font-size: 14px;
  margin: 14px 0 20px;
}
.media {
  margin: 20px 0 24px;
}
.footer_menu {
  display: grid;
  grid-template-columns: 150px 200px;
  grid-template-rows: 150px 150px;
}
</style>
