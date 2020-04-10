<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: white;">
      <div class="container">
        <router-link class="navbar-brand" to="/">Navbar</router-link>
        <span
          class="fa fa-bars"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></span>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/property">Property</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.nav-item {
  padding: 0px 10px;
}
</style>