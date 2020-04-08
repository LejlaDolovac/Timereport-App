<template>
  <div id="ReportPage">
    <div class="container" id="containerBox">
      <table class="table-box" align="center">
        <thead>
          <tr>
            <th>Working hours</th>
            <!--   <th>Name</th> -->
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="userName in users" :key="userName.id">
            <td v-if="canEdit == true">
              <v-text-field
                v-bind:disabled="!canEdit"
                class="text-field"
                v-model="userName.comment"
              />
            </td>

            <td>{{ userName.comment }}h</td>

            <td>
              {{ userName.date }}h
              <button class="edit-btn" v-on:click="editItem()" type="submit">
                EDIT
              </button>
              <button class="saveItem" v-on:click="saveItem(userName)">
                SAVE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="counter">
        <p class="summa">Sum</p>
        <p class="countedNumber">{{ workedHoursMonth }}</p>
      </div>

      <button class="sendReport" type="submit" v-on:click="sendReport">
        <p>SEND REPORT</p>
      </button>
      <div v-if="submitted">
        <h3>Thank you{{ userName.userId }}!</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

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
      canEdit: false
    };
  },

  async mounted() {
    await axios
      .get("http://localhost:3000/postgetinformation")
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

    // EDITING THE ITEM
    editItem() {
      this.canEdit = true;
    },
    // SAVES THE ITEM
    saveItem(userName) {
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
