<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="item in items"
          :key="item.title"
          @click="item.onClick"
          v-bind:disabled="item.disabled"
        >
          <v-list-tile-action>
            <v-icon dark v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn @click="loginDialog = true" flat><v-icon left dark>input</v-icon>Login</v-btn>
        <v-btn @click="signUpDialog = true" flat><v-icon left dark>launch</v-icon>Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content v-if="isHome"> <!-- Insert Main Content here -->
      <section>
        <v-parallax :src="require('@/assets/1.jpg')" height="400">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            <img :src="require('@/assets/logo.png')" alt="Vuetify.js">
            <h1 class="white--text mb-2 display-1 text-xs-center">Tour Assist</h1>
            <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              v-on:click="test"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout
          column
          wrap
          class="my-5"
          align-center
        >
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <h2 class="headline">The best way to start developing</h2>
              <span class="subheading">
                Cras facilisis mi vitae nunc 
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Material Design</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast development</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Completely Open Sourced</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                      Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </section>
      <section>
        <v-parallax :src="require('@/assets/2.jpg')" height="400">
          <v-layout column align-center justify-center>
            <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
            <em>Kick-start your application today</em>
            <v-btn
              class="blue lighten-2 mt-5"
              dark
              large
              href="/pre-made-themes"
            >
              Get Started
            </v-btn>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm4>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Company info</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                  Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>777-867-5309</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Chicago, US</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
    <v-content v-if="isAttractions">
      <section>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
              label="Search by name or location"
              single-line
              append-icon="search"
              v-model="search"
              @keyup="filterResults"
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in filteredAttractions" :key="item.title">
              <v-card>
                <v-card-media
                  v-bind:src="item.image"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <div class="headline">{{item.title}}</div>
                    <span class="grey--text">{{item.location}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat>Share</v-btn>
                  <v-btn flat color="primary">Details</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
    <v-content v-if="isRestaurants">
      <section>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
              label="Search by name or location"
              single-line
              append-icon="search"
              v-model="search"
              @keyup="filterResults"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-expansion-panel expand>
                <v-expansion-panel-content>
                  <div slot="header">Cuisine</div>
                  <v-card>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="Thai"
                          v-model="restaurantFilters.cuisine"
                          @change="filterResults"
                          value="Thai"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="Japanese"
                          v-model="restaurantFilters.cuisine"
                          @change="filterResults"
                          value="Japanese"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="Turkish"
                          v-model="restaurantFilters.cuisine"
                          @change="filterResults"
                          value="Turkish"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="Italian"
                          v-model="restaurantFilters.cuisine"
                          @change="filterResults"
                          value="Italian"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="French"
                          v-model="restaurantFilters.cuisine"
                          @change="filterResults"
                          value="French"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="SE Asian"
                          v-model="restaurantFilters.cuisine"
                          @change="filterResults"
                          value="SE Asian"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Features</div>
                  <v-card>
                    <v-layout row wrap>
                      <v-flex xs12 sm6 md4 lg3 xl2>
                        <v-checkbox
                          label="Delivery"
                          v-model="restaurantFilters.features"
                          @change="filterResults"
                          value="Delivery"
                          hide-details
                        ></v-checkbox>
                      </v-flex>
                    </v-layout>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in filteredRestaurants" :key="item.title">
              <v-card>
                <v-card-media
                  v-bind:src="item.image"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <div class="headline">{{item.title}}</div>
                    <span class="grey--text">{{item.location}}</span>
                    <br/>
                    <span class="grey--text" v-for="cuisine in item.cuisine" :key="cuisine">{{cuisine + ' '}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat>Share</v-btn>
                  <v-btn flat color="primary">Details</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
    <v-content v-if="isAccommodation">
      <section>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
              label="Search by name or location"
              single-line
              append-icon="search"
              v-model="search"
              @keyup="filterResults"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-expansion-panel expand>
                <v-expansion-panel-content>
                  <div slot="header">Price</div>
                  <v-card>
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs10>
                          <v-slider step="1000" @mouseup="filterResults" label="Max Price" :max="50000" v-model="accommodationFilters.price"></v-slider>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field @keyup="filterResults" disabled="true" v-model="accommodationFilters.price"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Features</div>
                  <v-card>
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3 xl2>
                          <v-checkbox
                            label="WiFi"
                            v-model="accommodationFilters.features"
                            @change="filterResults"
                            value="WiFi"
                            hide-details
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in filteredAccommodation" :key="item.title">
              <v-card>
                <v-card-media
                  v-bind:src="item.image"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <div class="headline">{{item.title}}</div>
                    <div class="grey--text">{{item.location}}</div>
                    <span class="grey--text">{{'Price: Rs' + item.price}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat>Share</v-btn>
                  <v-btn flat color="primary">Details</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
    <v-content v-if="isTravel">
      <section>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex xs12>
              <v-text-field
              label="Search by name or location"
              single-line
              append-icon="search"
              v-model="search"
              @keyup="filterResults"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-expansion-panel expand>
                <v-expansion-panel-content>
                  <div slot="header">Price</div>
                  <v-card>
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs10>
                          <v-slider step="10000" @mouseup="filterResults" label="Max Price" :max="200000" v-model="travelFilters.price"></v-slider>
                        </v-flex>
                        <v-flex xs2>
                          <v-text-field @keyup="filterResults" disabled="true" v-model="travelFilters.price"></v-text-field>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Class</div>
                  <v-card>
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3 xl2>
                          <v-checkbox
                            label="First Class"
                            v-model="travelFilters.class"
                            @change="filterResults"
                            value="First Class"
                            hide-details
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm6 md4 lg3 xl2>
                          <v-checkbox
                            label="Business"
                            v-model="travelFilters.class"
                            @change="filterResults"
                            value="Business"
                            hide-details
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm6 md4 lg3 xl2>
                          <v-checkbox
                            label="Economy"
                            v-model="travelFilters.class"
                            @change="filterResults"
                            value="Economy"
                            hide-details
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content>
                  <div slot="header">Airline</div>
                  <v-card>
                    <v-container>
                      <v-layout row wrap>
                        <v-flex xs12 sm6 md4 lg3 xl2>
                          <v-checkbox
                            label="Emirates Airlines"
                            v-model="travelFilters.airline"
                            @change="filterResults"
                            value="Emirates Airlines"
                            hide-details
                          ></v-checkbox>
                        </v-flex>
                        <v-flex xs12 sm6 md4 lg3 xl2>
                          <v-checkbox
                            label="Qatar Airlines"
                            v-model="travelFilters.airline"
                            @change="filterResults"
                            value="Qatar Airlines"
                            hide-details
                          ></v-checkbox>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>
            <v-flex xs12 sm6 md4 lg3 xl2 v-for="item in filteredTravel" :key="item.title">
              <v-card>
                <v-card-media
                  v-bind:src="item.image"
                  height="200px"
                >
                </v-card-media>
                <v-card-title primary-title>
                  <div class="text-xs-left">
                    <div class="white--text">{{item.source + ' - ' + item.destination}}</div>
                    <div class="grey--text">{{item.airline}}</div>
                    <span class="grey--text">{{'Price: Rs' + item.price}}</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat>Share</v-btn>
                  <v-btn flat color="primary">Details</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
    <v-dialog v-model="loginDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>
        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click.native="loginDialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" flat="flat" @click.native="loginDialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="signUpDialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Age"
                  required
                  :items="['0-17', '18-29', '30-54', '54+']"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="signUpDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="signUpDialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-footer :fixed="fixed" app>
      <span>&copy; Tour Assist 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
/* eslint semi: ["error", "always"] */
export default {
  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'home',
          title: 'Home',
          onClick: this.onClickHome,
          disabled: true
        },
        {
          icon: 'favorite',
          title: 'Attractions',
          onClick: this.onClickAttractions,
          disabled: false
        },
        {
          icon: 'restaurant',
          title: 'Resturants',
          onClick: this.onClickResturants,
          disabled: false
        },
        {
          icon: 'local_hotel',
          title: 'Accommodation',
          onClick: this.onClickAccommodation,
          disabled: false
        },
        {
          icon: 'flight_takeoff',
          title: 'Travel',
          onClick: this.onClickTravel,
          disabled: false
        }
      ],
      attractions: [
        {
          title: 'Mount Fuji',
          location: 'Tokyo, Japan',
          image: require('@/assets/fuji.jpg')
        },
        {
          title: 'Hiroshima Peace Memorial',
          location: 'Hiroshima, Japan',
          image: require('@/assets/hiroshima_peace_memorial.jpg')
        },
        {
          title: 'Osaka Aquarium',
          location: 'Osaka, Japan',
          image: require('@/assets/Osaka_Aquarium.jpg')
        },
        {
          title: 'Tokyo Skytree',
          location: 'Tokyo, Japan',
          image: require('@/assets/tokyo_skytree.jpg')
        },
        {
          title: 'Tokyo Tower',
          location: 'Tokyo, Japan',
          image: require('@/assets/tokyo_tower.jpg')
        }
      ],
      restaurants: [
        {
          title: 'Pai Thai',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          cuisine: ['Thai', 'SE Asian'],
          image: require('@/assets/paithai.jpg')
        },
        {
          title: 'Nusr-Et',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          cuisine: ['Turkish'],
          image: require('@/assets/nusret.jpg')
        },
        {
          title: 'Zuma',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          cuisine: ['Japanese'],
          image: require('@/assets/zuma.jpg')
        },
        {
          title: 'Solo Bistronomia & Vino Bar',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          cuisine: ['Italian'],
          image: require('@/assets/solo.jpg')
        },
        {
          title: 'La Petite Maison',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          cuisine: ['French'],
          image: require('@/assets/lapetit.jpg')
        }
      ],
      accommodation: [
        {
          title: 'Holiday Inn Express Dubai Airport',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          price: 8500,
          image: require('@/assets/Holiday_Inn.png')
        },
        {
          title: 'Crowne Plaza Dubai',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          price: 16000,
          image: require('@/assets/Crowne_Plaza_Dubai.png')
        },
        {
          title: 'Hawthorn Suites',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          price: 17000,
          image: require('@/assets/Hawthorn_Suites.png')
        },
        {
          title: 'Melia Dubai Hotel',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          price: 11000,
          image: require('@/assets/Melia_Dubai_Hotel.png')
        },
        {
          title: 'Gloria Hotel',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          price: 19000,
          image: require('@/assets/Gloria_Hotel.png')
        }
      ],
      travel: [
        {
          source: 'Lahore, Pakistan',
          destination: 'Tokyo, Japan',
          airline: 'Emirates Airlines',
          class: 'Business',
          price: 50000,
          image: require('@/assets/emirates.png')
        },
        {
          source: 'Lahore, Pakistan',
          destination: 'Tokyo, Japan',
          airline: 'Qatar Airlines',
          class: 'First Class',
          price: 100000,
          image: require('@/assets/qatar.png')
        },
        {
          source: 'Lahore, Pakistan',
          destination: 'Dubai, United Arab Emirates (UAE)',
          airline: 'Emirates Airlines',
          class: 'Economy',
          price: 150000,
          image: require('@/assets/emirates.png')
        }
      ],
      filteredTravel: [],
      filteredAccommodation: [],
      filteredRestaurants: [],
      filteredAttractions: [],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Tour Assist',
      isHome: true,
      isAttractions: false,
      isRestaurants: false,
      isAccommodation: false,
      isTravel: false,
      loginDialog: false,
      signUpDialog: false,
      search: '',
      restaurantFilters: {
        cuisine: [],
        features: []
      },
      accommodationFilters: {
        price: 50000,
        features: []
      },
      travelFilters: {
        price: 200000,
        class: [],
        airline: []
      }
    };
  },
  methods: {
    test: function () {
      alert(this.search);
    },
    onClickHome: function () {
      this.isHome = true;
      this.isAttractions = false;
      this.isRestaurants = false;
      this.isAccommodation = false;
      this.isTravel = false;
      this.items[0].disabled = true;
      this.items[1].disabled = false;
      this.items[2].disabled = false;
      this.items[3].disabled = false;
      this.items[4].disabled = false;
    },
    onClickAttractions: function () {
      this.isHome = false;
      this.isAttractions = true;
      this.isRestaurants = false;
      this.isAccommodation = false;
      this.isTravel = false;
      this.items[0].disabled = false;
      this.items[1].disabled = true;
      this.items[2].disabled = false;
      this.items[3].disabled = false;
      this.items[4].disabled = false;
      this.filteredAttractions = this.attractions;
    },
    onClickResturants: function () {
      this.isHome = false;
      this.isAttractions = false;
      this.isRestaurants = true;
      this.isAccommodation = false;
      this.isTravel = false;
      this.items[0].disabled = false;
      this.items[1].disabled = false;
      this.items[2].disabled = true;
      this.items[3].disabled = false;
      this.items[4].disabled = false;
      this.filteredRestaurants = this.restaurants;
    },
    onClickAccommodation: function () {
      this.isHome = false;
      this.isAttractions = false;
      this.isRestaurants = false;
      this.isAccommodation = true;
      this.isTravel = false;
      this.items[0].disabled = false;
      this.items[1].disabled = false;
      this.items[2].disabled = false;
      this.items[3].disabled = true;
      this.items[4].disabled = false;
      this.filteredAccommodation = this.accommodation;
    },
    onClickTravel: function () {
      this.isHome = false;
      this.isAttractions = false;
      this.isRestaurants = false;
      this.isAccommodation = false;
      this.isTravel = true;
      this.items[0].disabled = false;
      this.items[1].disabled = false;
      this.items[2].disabled = false;
      this.items[3].disabled = false;
      this.items[4].disabled = true;
      this.filteredTravel = this.travel;
    },
    filterResults: function () {
      if (this.isAttractions) {
        this.filteredAttractions = this.attractions.filter(post => {
          if (post.title.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }

          if (post.location.toLowerCase().includes(this.search.toLowerCase())) {
            return true;
          }

          return false;
        });
      }

      if (this.isRestaurants) {
        this.filteredRestaurants = this.restaurants.filter(post => {
          if (this.restaurantFilters.cuisine.some(r => post.cuisine.includes(r)) || this.restaurantFilters.cuisine.length === 0) {
            if (this.restaurantFilters.features.some(r => post.features.includes(r)) || this.restaurantFilters.features.length === 0) {
              if (post.title.toLowerCase().includes(this.search.toLowerCase())) {
                return true;
              }

              if (post.location.toLowerCase().includes(this.search.toLowerCase())) {
                return true;
              }
            }
          }

          return false;
        });
      }

      if (this.isAccommodation) {
        this.filteredAccommodation = this.accommodation.filter(post => {
          if (this.accommodationFilters.price > post.price) {
            if (this.accommodationFilters.features.some(r => post.features.includes(r)) || this.accommodationFilters.features.length === 0) {
              if (post.title.toLowerCase().includes(this.search.toLowerCase())) {
                return true;
              }

              if (post.location.toLowerCase().includes(this.search.toLowerCase())) {
                return true;
              }
            }
          }

          return false;
        });
      }

      if (this.isTravel) {
        this.filteredTravel = this.travel.filter(post => {
          if (this.travelFilters.price > post.price) {
            if (this.travelFilters.class.includes(post.class) || this.travelFilters.class.length === 0) {
              if (this.travelFilters.airline.includes(post.airline) || this.travelFilters.airline.length === 0) {
                if (post.source.toLowerCase().includes(this.search.toLowerCase())) {
                  return true;
                }

                if (post.destination.toLowerCase().includes(this.search.toLowerCase())) {
                  return true;
                }
              }
            }
          }

          return false;
        });
      }
    }
  },
  name: 'App'
};
</script>
