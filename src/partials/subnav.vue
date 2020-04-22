<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <button type="button" id="sidebarCollapse" class="btn btn-primary">
        <i class="fas fa-align-left"></i>
        <!-- <span>Toggle Sidebar</span> -->
      </button>
      <button
        class="btn btn-dark d-inline-block d-lg-none ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-align-justify"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav">
          <li class="nav-item ml-2">
            <form action>
              <input type="text" class="form-control" placeholder="search" />
            </form>
          </li>
        </ul>
        <ul class="nav navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Page</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>