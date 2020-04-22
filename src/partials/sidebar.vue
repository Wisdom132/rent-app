<template>
  <nav id="sidebar">
    <div class="sidebar-header"></div>

    <ul class="list-unstyled components">
      <li>
        <router-link to="/admin/">
          <i class="fas fa-grid"></i>
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/admin/houses">
          <i class="fa fa-house"></i>
          Houses
        </router-link>
      </li>
      <li>
        <a
          href="#homeSubmenu"
          to="/admin/registered"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >Users</a>
        <ul class="collapse list-unstyled" id="homeSubmenu">
          <li>
            <router-link to="/admin/registered" class="sub_nav">Registered Users</router-link>
          </li>
          <li>
            <router-link to="/admin/new_members" class="sub_nav">New members</router-link>
          </li>
          <li>
            <router-link to="/admin/members" class="sub_nav">Members</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a
          href="#jobSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle"
        >Jobs</a>
        <ul class="collapse list-unstyled" id="jobSubmenu">
          <li>
            <router-link to="/admin/request" class="sub_nav">Job Request</router-link>
          </li>
          <li>
            <router-link to="/admin/completed" class="sub_nav">Completed Jobs</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>