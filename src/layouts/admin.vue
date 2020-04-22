<template>
  <div class="wrapper">
    <sidebar />
    <div id="content">
      <subnav />
      <router-view />
    </div>
  </div>
</template>
<script>
import sidebar from "@/partials/sidebar";
import subnav from "@/partials/subnav";
export default {
  components: {
    sidebar,
    subnav
  }
};
</script>
<style>
.sub_nav {
  font-size: 12px !important;
  text-align: center !important;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

.navbar {
  padding: 15px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}
.wrapper {
  display: flex;
  width: 100%;
}

#sidebar {
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  background: rgb(29, 60, 110);
  color: #fff;
  transition: all 0.3s;
}
.side_icons {
  padding: 5px;
  width: 30px;
  height: 30px;
}
#sidebar.active {
  margin-left: -250px;
}

#sidebar .sidebar-header {
  padding: 20px;
  background: rgb(29, 60, 110);
}

#sidebar ul.components {
  padding: 20px 0;
  /* border-bottom: 1px solid #47748b; */
}

#sidebar ul li a {
  padding: 10px 22px 10px 42px;
  margin: 10px 0px !important;
  text-align: justify;
  font-size: 1em;
  display: block;
  font-weight: 700 !important;
}

#sidebar ul li a:hover {
  color: #ffffff;
  background: rgb(39, 81, 150);
  /* background: #fff; */
}

#sidebar ul li.active > a,
a[aria-expanded="true"] {
  color: #fff;
  /* background: #6d7fcc; */
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  /* background: #6d7fcc; */
}

ul.CTAs {
  padding: 20px;
}

ul.CTAs a {
  text-align: center;
  font-size: 0.9em !important;
  display: block;
  border-radius: 5px;
  margin-bottom: 5px;
}

a.download {
  background: #fff;
  color: #7386d5;
}

a.article,
a.article:hover {
  background: #6d7fcc !important;
  color: #fff !important;
}

/* styling for content section */

#content {
  width: calc(100% - 250px);
  padding: 7px;
  min-height: 100vh;
  transition: all 0.3s;
  position: absolute;
  top: 0;
  right: 0;
}

#content.active {
  width: 100%;
}

/* media queries */

@media (max-width: 768px) {
  #sidebar {
    margin-left: -250px;
  }
  #sidebar.active {
    margin-left: 0;
  }
  #content {
    width: 100%;
  }
  #content.active {
    width: calc(100% - 250px);
  }
  #sidebarCollapse span {
    display: none;
  }
}
/* .container {
  width:90% !important;
} */
</style>


