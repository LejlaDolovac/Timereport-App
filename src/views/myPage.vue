<template>
  <div id="myPage">
    <button
      id="januari"
      v-on:click="GetMonth('2020,01,01','2020,01,31', 'januari')"
      v-if="currentActive === 'januari' || currentActive===''"
      class="januari"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Januari</span>
    </button>
    <button
      id="februari"
      v-on:click="GetMonth('2020,02,01','2020,02,28','februari')"
      v-if="currentActive === 'februari' || currentActive===''"
      class="februari"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Februari</span>
    </button>
    <button
      id="mars"
      v-on:click="GetMonth('2020,03,01','2020,03,31')"
      v-if="currentActive === 'mars' || currentActive===''"
      class="mars"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Mars</span>
    </button>
    <button
      id="april"
      v-on:click="GetMonth('2020,04,01','2020,04,30')"
      v-if="currentActive === 'april' || currentActive===''"
      class="april"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>April</span>
    </button>
    <button
      id="maj"
      v-on:click="GetMonth('2020,05,01','2020,05,31')"
      v-if="currentActive === 'maj' || currentActive===''"
      class="maj"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Maj</span>
    </button>
    <button
      id="juni"
      v-on:click="GetMonth('2020,06,01','2020,06,30')"
      v-if="currentActive === 'juni' || currentActive===''"
      class="juni"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Juni</span>
    </button>
    <button
      id="juli"
      v-on:click="GetMonth('2020,07,01','2020,07,31')"
      v-if="currentActive === 'juli' || currentActive===''"
      class="juli"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Juli</span>
    </button>
    <button
      id="augusti"
      v-on:click="GetMonth('2020,08,01','2020,08,30')"
      v-if="currentActive === 'augusti' || currentActive===''"
      class="augusti"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Augusti</span>
    </button>
    <button
      id="september"
      v-on:click="GetMonth('2020,09,01','2020,09,31')"
      v-if="currentActive === 'september' || currentActive===''"
      class="september"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>september</span>
    </button>
    <button
      id="oktober"
      v-on:click="GetMonth('2020,10,01','2020,10,30')"
      v-if="currentActive === 'oktober' || currentActive===''"
      class="oktober"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>Oktober</span>
    </button>
    <button
      id="november"
      v-on:click="GetMonth('2020,11,01','2020,11,31')"
      v-if="currentActive === 'november' || currentActive===''"
      class="november"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>November</span>
    </button>
    <button
      id="december"
      v-on:click="GetMonth('2020,12,01','2020,12,31')"
      v-if="currentActive === 'december' || currentActive===''"
      class="december"
    >
      <svg>
        <polyline class="o1" points="0 0, 150 0, 150 55, 0 55, 0 0" />
        <polyline class="o2" points="0 0, 150 0, 150 55, 0 55, 0 0" />
      </svg>
      <span>December</span>
    </button>
    <tbody v-if="currentActive != '' " class="informatin-box-month">
      <button aria-hidden="true" v-on:click="closeWindow()">X</button>
      <tr v-for="userName in users" :key="userName.id">
        <td>
          {{userName.date}}
          <br />
          Hours: {{userName.comment}}h
        </td>
      </tr>
    </tbody>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "myPage",
  components: {},
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
    }
  }
};
</script>





<style lang="scss">
@import "../sass/style.scss";
@import url("https://fonts.googleapis.com/css?family=Raleway:400,400i,700");

* {
  background: #3e3e3e;
}
#myPage {
  display: grid;
  text-align: center;
  top: 10rem;
  left: 3rem;
  right: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  font-family: "Courier New", Courier, monospace;
  cursor: pointer;
}
button {
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  outline: none;

  svg {
    width: 9rem;
    height: 3.5rem;
    fill: none;
    stroke-width: 4;
    background-color: rgba(249, 177, 34, 0.75);
  }
  button:focus {
    outline: none;
  }
  .o1 {
    stroke: rgba(#ffb341, 0.8);
    fill: #ffa114;
    transition: all 1s ease-in-out;
  }
  .o2 {
    stroke: white;
    stroke-dasharray: 20 420;
    stroke-dashoffset: 20;
    transition: all 1s ease-in-out;
  }
  span {
    position: absolute;
    margin: auto 0;
    border: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: rgba(249, 177, 34, 0.75);
    color: white;
  }
  &:hover {
    .o1 {
      fill: rgba(#cc8110, 0.3);
    }

    .o2 {
      stroke-dashoffset: -420;
    }
  }
}
</style>


