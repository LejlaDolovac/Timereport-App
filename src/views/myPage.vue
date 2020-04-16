<template>
  <div id="myPage">
    <navBar />
    <div
      class="container-flex calendar"
      id="container-mypage"
      v-if="currentActive === ''"
    >
      <ul>
        <li>
          <button
            id="januari"
            v-on:click="GetMonth('2020,01,01', '2020,01,31', 'januari')"
            class="januari"
          >
            <p>
              Januari
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="februari"
            v-on:click="GetMonth('2020,02,01', '2020,02,28', 'februari')"
            class="februari"
          >
            <P>
              Februari
              <i class="arrow right"></i>
            </P>
          </button>
        </li>
        <li>
          <button
            id="mars"
            v-on:click="GetMonth('2020,03,01', '2020,03,31')"
            class="mars"
          >
            <p>
              Mars
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="april"
            v-on:click="GetMonth('2020,04,01', '2020,04,30')"
            class="april"
          >
            <p>
              April
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="maj"
            v-on:click="GetMonth('2020,05,01', '2020,05,31')"
            class="maj"
          >
            <p>
              Maj
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="juni"
            v-on:click="GetMonth('2020,06,01', '2020,06,30')"
            class="juni"
          >
            <p>
              Juni
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="juli"
            v-on:click="GetMonth('2020,07,01', '2020,07,31')"
            class="juli"
          >
            <p>
              Juli
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="augusti"
            v-on:click="GetMonth('2020,08,01', '2020,08,30')"
            class="augusti"
          >
            <p>
              Augusti
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="september"
            v-on:click="GetMonth('2020,09,01', '2020,09,31')"
            class="september"
          >
            <p>
              september
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="oktober"
            v-on:click="GetMonth('2020,10,01', '2020,10,30')"
            class="oktober"
          >
            <p>
              Oktober
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="november"
            v-on:click="GetMonth('2020,11,01', '2020,11,31')"
            class="november"
          >
            <p>
              November
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
        <li>
          <button
            id="december"
            v-on:click="GetMonth('2020,12,01', '2020,12,31')"
            class="december"
          >
            <p>
              December
              <i class="arrow right"></i>
            </p>
          </button>
        </li>
      </ul>
    </div>

    <div id="containerList">
      <table class="table-box" align="center" v-if="currentActive != ''">
        <button class="buttonClose" v-on:click="closeWindow()">X</button>
        <thead>
          <tr>
            <th>Date</th>
            <!--   <th>Name</th> -->
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="userName in users" :key="userName.id">
            <td>{{ formatDate(userName.date) }}</td>
            <td>
              <br />
              {{ userName.comment }} h
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import navBar from "../components/navBar";
import { format } from "date-fns";

export default {
  name: "myPage",
  components: {
    navBar
  },
  data() {
    return {
      users: [],
      msg: "",
      user: "",
      currentActive: ""
    };
  },
  methods: {
    GetMonth(from, to, id) {
      this.currentActive = id;

      axios
        .post("http://localhost:3000/postgetspaninformation", {
          from: new Date(from),
          to: new Date(to)
        })
        .then(respons => {
          console.log(respons.data, "ok");
          this.users = respons.data;
          this.msg = respons.msg;
        })
        .catch(error => {
          console.log(error);
        });
    },
    closeWindow() {
      this.currentActive = "";
    },
    scrollToEnd: function() {
      var containerList = this.$el.querySelector("#containerList");
      containerList.scrollTop = containerList.scrollHeight;
    },
    formatDate(date) {
      return format(new Date(date), "MM/dd/yyyy");
    }
  }
};
</script>

<style lang="scss">
@import "../sass/style.scss";

.calendar button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  width: 5rem;
  height: 5rem;
  background-color: rgba(249, 177, 34, 0.75);
  border-radius: 12px;
  margin: 0 auto;
  box-shadow: 0 8px 6px -6px black;

  button:focus {
    outline: none;
  }
}
</style>
