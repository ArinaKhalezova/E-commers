<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  console.log(getComputedStyle(document.documentElement).getPropertyValue('--text-on-light-button-color'));
  console.log(getComputedStyle(document.documentElement).getPropertyValue('--light-button-color'));
});
</script>

<template>
  <div :class="$style.heading">
    <div :class="$style.heading_wrap">
      <div :class="$style.heading_info">
        <div :class="$style.heading_text">
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed <br />
            to bring out your individuality and cater to your sense of style.
          </p>
          <a href="/assortment" :class="$style.button">Shop Now</a>
        </div>
        <div :class="$style.features">
          <div :class="$style.feature_one">
            <h2>200+</h2>
            <p>International Brands</p>
          </div>
          <div :class="$style.feature_two">
            <h2>2,000+</h2>
            <p>High-Quality Products</p>
          </div>
          <div :class="$style.feature_three">
            <h2>30,000+</h2>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div :class="$style.heading_img">
        <img src="/src/assets/img/Preview.png" alt="" :class="$style.preview" />
      </div>
    </div>

    <div :class="$style.brands">
      <img src="/src/assets/img/versace.png" alt="" width="116.74" height="23.25" :class="$style.brand_one" />
      <img src="/src/assets/img/zara.png" alt="" width="63.81" height="26.65" :class="$style.brand_two" />
      <img src="/src/assets/img/gucci.png" alt="" width="109.39" height="25.24" :class="$style.brand_three" />
      <img src="/src/assets/img/prada.png" alt="" width="127" height="21" :class="$style.brand_four" />
      <img
        src="/src/assets/img/calvin_klein.png"
        alt=""
        width="134.84"
        height="21.75"
        class="brand_five"
      />
    </div>
  </div>
</template>

<style module>

.heading_wrap {
  display: grid;
  background-color: var(--base-background-color);
}
.heading_text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.heading_text h1 {
  color: var(--title-color);
  font-family: 'IntegralCF';
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
}
.heading_text p {
  color: var(--subtitle-color);
  font-family: 'Satoshi';
  font-size: 14px;
  font-weight: 200;
}
.features h2 {
  color: var(--title-color);
  font-family: 'Satoshi';
  font-size: 24px;
  font-weight: 900;
}
.features > * {
  color: var(--subtitle-color);
  margin: 14px 27px 14px 0;
}
.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.features p {
  padding: 0;
}
.button {
  color: var(--text-on-dark-button-color);
  font-size: 16px;
  background-color: var(--dark-button-color);
  border-radius: 62px;
  width: 100%;
  height: 52px;
  cursor: pointer;
  text-align: center;
  padding: 15px;
}
.heading_img {
  background-color: var(--light-background-color);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.preview {
  margin: 0 auto;
  /* max-width: 390px; */
  width: 70%;
  display: flex;
  justify-content: center;
}
.heading {
  background-color: var(--light-background-color);
}
.brands {
  background-color: var(--dark-background-color);
  height: 122px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.brands > * {
  margin: 10px 16px;
}

@media (min-width: 1023px) {
  .heading_wrap {
    grid-template-columns: 1fr 1fr;
    align-self: center;
    /* display: flex;
    justify-content: space-between;
    width: auto; */
  }
  .heading_text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .preview {
    width: 100%;
  }
  .heading_text h1 {
    font-size: 64px;
    font-weight: 900;
  }
  .heading_text p {

    font-size: 16px;
    font-weight: 200;
  }
  .features h2 {
    font-size: 40px;
    font-weight: 700;
  }
  .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
  }
  .features p {
    padding: 0;
  }
  .button {
    margin: 37px 0 48px;
    font-size: 16px;
    width: 210px;
    height: 52px;
    cursor: pointer;
    padding: 15px 67px;
  }
  .preview {
    margin: 0;
    padding: 0;
  }
  .brands {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    padding: 44px 100px;
    width: 100vw;
    margin-left: calc(-50vw + 50%); /* Центрирование относительно родительского элемента */
  }
  .brands > * {
    transform: scale(1.5);
  }
}

@media (min-width: 1460px) {
  .heading_wrap {
    grid-template-columns: 1.5fr 1fr;
  }
}
</style>
