<template>
  <header id="header" class="text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div style="margin-top:120px">
            <h3 class="text-light">Find Appartments Around You</h3>
            <p
              class="text-light"
            >This is where you will find the best Appartments.All you have to do is just search!</p>
            <form action="#">
              <input type="text" placeholder="test" />
              <input type="text" placeholder="test" />
              <input type="text" placeholder="test" />
              <button>Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
#header {
  background: linear-gradient(rgba(0, 0, 34, 0.55), rgba(0, 0, 34, 0.55)),
    url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  height: auto;
  padding-bottom: 130px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
}
form {
  background: rgba(0, 0, 0, 0.2);
  padding: 1rem;
  display: block;
}

@media only screen and (min-width: 48rem) {
  form {
    display: flex;
  }
}

input[type="text"] {
  border: none;
  line-height: 3rem;
  padding: 0 1rem;
  width: 100%;
  box-sizing: border-box;
}

button {
  background: #1d3c6e;
  line-height: 3rem;
  color: #fff;
  border: none;
  padding: 0 3rem;
  margin-top: 1rem;
  width: 100%;
}

@media only screen and (min-width: 32rem) {
  button {
    width: auto;
  }
}

@media only screen and (min-width: 48rem) {
  button {
    margin-left: 1rem;
    margin-top: 0;
  }
}
</style>