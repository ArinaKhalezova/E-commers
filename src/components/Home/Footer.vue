<script setup lang="ts">
import Offer from './Offer.vue';
</script>

<template>
<Offer id="offer"/>
  <div :class="$style.footer">
    <div :class="$style.footer_media">
      <img src="/src/assets/img/logo.png" alt="" />
      <h2>
        We have clothes that suits your style and which you’re proud to wear. From women to men.
      </h2>
      <div :class="$style.media">
        <a href="/" :class="$style.media">
          <img src="/src/assets/img/twitter.png" alt="" />
        </a>
        <a href="/" :class="$style.media">
          <img src="/src/assets/img/facebook.png" alt="" />
        </a>
        <a href="/" :class="$style.media">
          <img src="/src/assets/img/instagram.png" alt="" />
        </a>
        <a href="/" :class="$style.media">
          <img src="/src/assets/img/github.png" alt="" />
        </a>
      </div>
    </div>
    <div :class="$style.footer_menu">
      <div :class="$style.footer_menu_item">
        <h2>COMPANY</h2>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Features</a></li>
          <li><a href="">Works</a></li>
          <li><a href="">Career</a></li>
        </ul>
      </div>
      <div :class="$style.footer_menu_item">
        <h2>HELP</h2>
        <ul>
          <li><a href="">Customer Support</a></li>
          <li><a href="">Delivery Details</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
      <div :class="$style.footer_menu_item">
        <h2>FAQ</h2>
        <ul>
          <li><a href="">Account</a></li>
          <li><a href="">Manage Deliveries</a></li>
          <li><a href="">Orders</a></li>
          <li><a href="">Payment</a></li>
        </ul>
      </div>
      <div :class="$style.footer_menu_item">
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

<style module>
.footer {
  padding: 18px;
  font-family: 'Satoshi';
  background-color: var(--light-background-color);
  padding-top: 50px;
}

.footer h2 {
  color: var(--subtitle-color);
  font-size: 14px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 1.5;
}
.footer_menu_item h2 {
  color: var(--title-color);
  font-weight: 700;
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
  color: var(--subtitle-color);
}
a:hover{
  color: var(--warning-color);
}

@media (min-width: 1024px) {
  .footer {
    padding: 150px 100px 20px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    column-gap: 100px;
  }
  .footer_menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 200px;
  }
}
</style>
