<template>
  <section class="py-5">
    <div class="container">
      <div class="row mx-auto mb-4">
        <div class="col-md-6 d-flex">
          <select class="form-control mr-3" id>
            <option value="1">Default sorting</option>
            <option value="2">Default sorting 01</option>
            <option value="4">Default sorting 02</option>
          </select>

          <select class="form-control" id>
            <option value="1">Show 6</option>
            <option value="2">Show 8</option>
            <option value="4">Show 12</option>
          </select>
        </div>
      </div>
      <div class="row mx-auto">
        <div class="col-md-4 mb-4 mx-auto" v-for="(list,key) in lists" :key="key">
          <div class="card" style="width: 19rem;">
            <img :src="list.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{list.title}}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{{list.location}}</h6>
              <p class="card-text">
                1 bedroom . 1 bathroom
                <span class="payment">Payment plans available</span>
              </p>
              <p class="card-text">
                <span class="payment">₦{{list.price}}</span> ‎
                <span>Rent per annum</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 mx-auto">
        <div class="col-md-6">Showing page 1 of 10</div>
        <div class="col-md-6">
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      lists: [
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        },
        {
          image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          name: "Suite A2-Amity",
          location: "Uyo",
          price: 3000,
          title: "Ai house"
        }
      ]
    };
  }
};
</script>
<style scoped>
@media (max-width: 420px) {
  .card {
    width: auto !important;
  }
}
.card-title {
  font-size: 18px;
  font-weight: 900;
}
.card-subtitle {
  font-size: 14px;
}
.card-text {
  color: #7d868d;
  font-weight: normal;
  font-size: 12px;
}
.payment {
  font-weight: bold !important;
  color: rgb(21, 81, 170);
}
.form-control {
  border-radius: 0px !important;
}
</style>