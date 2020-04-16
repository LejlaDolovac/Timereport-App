<template>
  <div id="ReportPage">
    <div class="container" id="containerBox">
      <table class="table-box" align="center">
        <thead>
          <tr>
            <th>Hours</th>
            <th class="date">Date</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="userName in users" :key="userName._id">
            <td v-if="editId === userName._id">
              <v-text-field
                v-bind:disabled="editId != userName._id"
                class="text-field input-change"
                v-model="userName.comment"
              />
            </td>

            <td v-if="editId !== userName._id">{{ userName.comment }}h</td>

            <td>
              {{ formatDate(userName.date) }}
              <button
                class="edit-btn"
                v-on:click="editItem(userName._id)"
                type="submit"
              >
                EDIT
              </button>
              <button class="saveItem" v-on:click="saveItem(userName)">
                SAVE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="users" class="summery-holder">
        <p class="summa">Sum: {{ workedHoursMonth.toFixed(2) }}</p>
        <button class="sendReport" type="submit" v-on:click="sendReport">
          <p>SEND REPORT</p>
        </button>
      </div>

      <div v-if="submitted">
        <h3>Thank you{{ userName.userId }}!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { format } from "date-fns";

export default {
  name: "ReportPage",
  components: {},
  data() {
    return {
      users: [],
      msg: [],
      submitted: false,
      workedHoursMonth: 0,
      user: "",
      tagEditingId: "",
      canEdit: false,
      editId: ""
    };
  },

  async beforeCreate() {
    let from = new Date().setDate(1);
    let to = new Date();

    await axios
      .post("http://localhost:3000/postGetSpanInformation", {
        from: new Date(from),
        to: new Date(to)
      })
      .then(respons => {
        console.log(respons.data, "respons data");
        this.users = respons.data;
        this.msg = respons.msg;
      })
      .catch(error => {
        console.log(error);
      });
    this.countHoursWorked();
    console.log(this.workedHoursMonth, "workedHoursMonth");
  },

  methods: {
    sendReport: function() {
      let report = this.users;
      axios.post("http://localhost:3000/mail", report).then(function(report) {
        console.log(report, "send-report");
      });
    },
    formatDate(date) {
      return format(new Date(date), "MM/dd/yyyy");
    },

    // EDITING THE ITEM
    editItem(id) {
      this.canEdit = true;
      this.editId = id;
    },
    // SAVES THE ITEM
    saveItem(userName) {
      this.editId = "";
      axios
        .post("http://localhost:3000/editPosts", userName)
        .then(function(data) {
          console.log(data, "ok");
        });
    },

    countHoursWorked() {
      this.users.forEach(user => {
        var number = Number(user.comment);
        this.workedHoursMonth = this.workedHoursMonth + number;
      });
    },
    scrollToEnd: function() {
      console.log(containerBox, "containerBox");
      var containerBox = this.$el.querySelector("#containerBox");
      containerBox.scrollTop = containerBox.scrollHeight;
    }
  }
};
</script>

<style lang="scss">
@import "../sass/style.scss";
</style>

//
<p>{{userName.userId}}</p>
