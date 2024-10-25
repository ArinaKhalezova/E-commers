<script setup lang="ts"></script>

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
          <a href="/category"><button :class="$style.button">Shop Now</button></a>
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
        <img src="../assets/img/Preview.png" alt="" :class="$style.preview" />
      </div>
    </div>

    <div :class="$style.brands">
      <img src="../assets/img/versace.png" alt="" width="116.74" height="23.25" :class="$style.brand_one" />
      <img src="../assets/img/zara.png" alt="" width="63.81" height="26.65" :class="$style.brand_two" />
      <img src="../assets/img/gucci.png" alt="" width="109.39" height="25.24" :class="$style.brand_three" />
      <img src="../assets/img/prada.png" alt="" width="127" height="21" :class="$style.brand_four" />
      <img
        src="../assets/img/calvin_klein.png"
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
  background-color: white;
}
.heading_text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.heading_text h1 {
  font-family: 'IntegralCF';
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
}
.heading_text p {
  font-family: 'Satoshi';
  font-size: 14px;
  font-weight: 200;
}
.features h2 {
  font-family: 'Satoshi';
  font-size: 24px;
  font-weight: 900;
}
.features > * {
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
  color: white;
  font-size: 16px;
  background-color: black;
  border-radius: 62px;
  width: 100%;
  height: 52px;
  cursor: pointer;
}
.heading_img {
  background-color: #f2f0f1;
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
  background-color: #f2f0f1;
}
.brands {
  background-color: black;
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

@media (min-width: 1024px) {
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
    color: white;
    font-size: 16px;
    background-color: black;
    border-radius: 62px;
    width: 210px;
    height: 52px;
    cursor: pointer;
  }
  .preview {
    margin: 0;
    padding: 0;
  }
  .heading {
    background-color: #f2f0f1;
  }
  .brands {
    background-color: black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    padding: 44px 100px;
    min-width: 1440px;
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
