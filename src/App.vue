<template>
  <div id="activityApp">
    <nav class="navbar is-white topNav">
      <div class="container">
        <div class="navbar-brand">
          <h1>Activity Planner</h1>
        </div>
      </div>
    </nav>
    <nav class="navbar is-white">
      <div class="container">
        <div class="navbar-menu">
          <div class="navbar-start">
            <a
              class="navbar-item is-active"
              href="#"
            >Newest</a>
            <a
              class="navbar-item"
              href="#"
            >In Progress</a>
            <a
              class="navbar-item"
              href="#"
            >Finished</a>
          </div>
        </div>
      </div>
    </nav>

    <section class="container">
      <div class="columns">
        <div class="column is-3">
          <a
            v-if="!isFormDisplayed"
            class="button is-primary is-block is-alt is-large"
            href="#"
            @click="toggleForm"
          >New Activity</a>
          <div
            v-if="isFormDisplayed"
            class="create-form"
          >
            <h2>Create Activity</h2>
            <form>
              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input
                    v-model="newActivity.title"
                    class="input"
                    type="text"
                    placeholder="Read a Book"
                  >
                </div>
              </div>
              <div class="field">
                <label
                  for=""
                  class="label"
                >Notes</label>
                <div class="control">
                  <textarea
                    v-model="newActivity.notes"
                    name="textarea"
                    class="textarea"
                    placeholder="text area"
                  />
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button
                    class="button is-link"
                    @click="createActivity"
                  >
                    Create activity
                  </button>
                </div>
                <div class="control">
                  <button
                    class="button is-text"
                    @click="toggleForm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="column is-9">
          <div class="box content">
            <ActivityItem  
              v-for="activity in activities" 
              :key="activity.id"
              :activity="activity"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ActivityItem from './components/ActivityItem'
import { fetchActivities } from './api/index' // @ points to src folder

export default {
  name: 'App',
  components: {
      ActivityItem
  },
  data () {
    return {
        message: 'Hello Vue!',
        titleMessage: 'Title Message Vue!!!!!',
        isTextDisplayed: true,
        isFormDisplayed: false,
        newActivity: {
            title: '',
            notes: '' 
        },
        items: [1,2,3,4,5,6,7],
        user: {
            name: 'Marco Monter',
            id: '-Aj34jknvncx98812',
        },
        activities: {},
        categories: {
            '1546969049': {text: 'books'},
            '1546969225': {text: 'movies'}
        }
    }
  },
  beforeCreate () {
    console.log('Before create!')
  },
  created () {
    this.activities = fetchActivities();
  },
  methods: {
      toggleTextDisplay: function(){
          this.isTextDisplayed = !this.isTextDisplayed
      },
      toggleForm: function(){
          this.isFormDisplayed = !this.isFormDisplayed
      },
      createActivity: function(){
          console.log(this.newActivity);    
      }
  }
}
</script>

<style>
#activityApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,body {
    font-family: 'Open Sans', serif;
    background: #F2F6FA;
  }
  footer {
    background-color: #F2F6FA !important;
  }
  .topNav {
    border-top: 5px solid #3498DB;
  }
  .topNav .container {
    border-bottom: 1px solid #E6EAEE;
  }
  .container .columns {
    margin: 3rem 0;
  }
  .navbar-menu .navbar-item {
    padding: 0 2rem;
  }
  aside.menu {
    padding-top: 3rem;
  }
  aside.menu .menu-list {
    line-height: 1.5;
  }
  aside.menu .menu-label {
    padding-left: 10px;
    font-weight: 700;
  }
  .button.is-primary.is-alt {
    background: #00c6ff;
    background: -webkit-linear-gradient(to bottom, #0072ff, #00c6ff);
    background: linear-gradient(to bottom, #0072ff, #00c6ff);
    font-weight: 700;
    font-size: 14px;
    height: 3rem;
    line-height: 2.8;
  }
  .media-left img {
    border-radius: 50%;
  }
  .media-content p {
    font-size: 14px;
    line-height: 2.3;
    font-weight: 700;
    color: #8F99A3;
  }
  article.post {
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #E6EAEE;
  }
  article.post:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }
  .menu-list li{
    padding: 5px;
  }
  
  .navbar-brand > h1 {
    font-size: 31px;
    padding: 20px;
  }
</style>