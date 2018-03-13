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
        <v-list-tile ripple
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
            <v-list-tile-title color="primary" v-text="item.title"></v-list-tile-title>
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
        <v-menu bottom offset-y>
          <v-btn slot="activator" flat><v-icon left dark>add_box</v-icon>Add</v-btn>
          <v-list>
            <v-list-tile @click="addAccomodationDialog = true">
              <v-icon style="margin-right: 10px" dark>local_hotel</v-icon><v-list-tile-title>Accommodation</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="addAttractionDialog = true">
              <v-icon style="margin-right: 10px" dark>favorite</v-icon><v-list-tile-title>Attractions</v-list-tile-title>
            </v-list-tile>
            <v-list-tile @click="addRestaurantDialog = true">
              <v-icon style="margin-right: 10px" dark>restaurant</v-icon><v-list-tile-title>Restaurants</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
            <img :src="require('@/assets/logo.png')" height="150px" alt="Vuetify.js">
            <h1 class="white--text mb-2 display-1 text-xs-center">Tour Assist</h1>
            <div class="subheading mb-3 text-xs-center">Supercharge your Tours!</div>
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
              <h2 class="headline">The best way to start traveling</h2>
              <span class="subheading">
                Convenient and efficient
              </span>
            </div>
          </v-flex>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">attach_money</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Cheap</div>
                    </v-card-title>
                    <v-card-text>
                      Find the cheapest deals on meals and rest places you love
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Fast</div>
                    </v-card-title>
                    <v-card-text>
                      Grab the deals from your favorite restaurants and hotels before anyone else
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Customizable</div>
                    </v-card-title>
                    <v-card-text>
                      Find hotels and restaurants near you that suit all your needs and desires 
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
            <div class="headline white--text mb-3 text-xs-center">Planning trips has never been easier</div>
            <em>Kick-start your journey today</em>
          </v-layout>
        </v-parallax>
      </section>
      <section>
        <v-layout row wrap>
          <v-flex @click="onClickAttractions" class="quickLink" id="attractionLink" xs12 sm3>
            <p>Attractions<br/><v-icon>details</v-icon></p>
          </v-flex>
          <v-flex @click="onClickRestaurants" class="quickLink" id="restaurantLink" xs12 sm3>
            <p>Restaurants<br/><v-icon>details</v-icon></p>
          </v-flex>
          <v-flex @click="onClickAccommodation" class="quickLink" id="accommodationLink" xs12 sm3>
            <p>Accommodations<br/><v-icon>details</v-icon></p>
          </v-flex>
          <v-flex @click="onClickTravel" class="quickLink" id="travelLink" xs12 sm3>
            <p>Travel<br/><v-icon>details</v-icon></p>
          </v-flex>
        </v-layout>
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
                  We are always working our hardest to provide our users with the cheapest deals and help you explore the beautiful world around you.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-card class="elevation-0 transparent">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Contact us</div>
                </v-card-title>
                <v-card-text>
                  Feel free to contact us if you have some suggestions or queries.
                </v-card-text>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">phone</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>111-222-3333</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">place</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-list-tile-title>Lahore, Pakistan</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-action>
                      <v-icon class="blue--text text--lighten-2">email</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                      <v-btn color="primary" href="mailto:mail@example.org">Email</v-btn>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
    </v-content>
    <v-content class="attractions" v-if="isAttractions">
      <vue-particles :hoverEffect="false" :clickEffect="false" color="#fff"></vue-particles>
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
    <v-content class="restaurants" v-if="isRestaurants">
      <vue-particles :hoverEffect="false" :clickEffect="false" color="#fff"></vue-particles>
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
                <v-expansion-panel-content ripple>
                  <div slot="header">Cuisine</div>
                  <v-card>
                    <v-container>
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
                    </v-container>
                  </v-card>
                </v-expansion-panel-content>
                <v-expansion-panel-content ripple>
                  <div slot="header">Features</div>
                  <v-card>
                    <v-container>
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
                    </v-container>
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
                    <br/>
                    <span class="grey--text">{{item.location}}</span>
                    <br/>
                    <span class="grey--text" v-for="cuisine in item.cuisine" :key="cuisine">{{cuisine + ' '}}</span>
                    <br/>
                    <br/>
                    <v-icon v-for="i in item.rating" :key="i">star</v-icon>
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
    <v-content class="accommodation" v-if="isAccommodation">
      <vue-particles :hoverEffect="false" :clickEffect="false" color="#fff"></vue-particles>
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
                <v-expansion-panel-content ripple>
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
                <v-expansion-panel-content ripple>
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
                    <br/>
                    <br/>
                    <v-icon v-for="i in item.rating" :key="i">star</v-icon>
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
    <v-content class="travel" v-if="isTravel">
      <vue-particles :hoverEffect="false" :clickEffect="false" color="#fff"></vue-particles>
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
                <v-expansion-panel-content ripple>
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
                <v-expansion-panel-content ripple>
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
                <v-expansion-panel-content ripple>
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
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Username or Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="signUpDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click.native="signUpDialog = false">Log In</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="signUpDialog" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">Sign Up</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Username" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Repeat Password" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="signUpDialog = false">Cancel</v-btn>
          <v-btn color="primary" flat @click.native="signUpDialog = false">Sign Up</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="addAttractionDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add New Attraction</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Name" hint="Example: Burj Khalifa" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="City" hint="Example: Dubai" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Country" hint="Example: UAE" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="addAttractionDialog = false">Close</v-btn>
          <v-btn color="primary" flat @click.native="addAttractionDialog = false">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="addRestaurantDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add New Restaurant</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Name" hint="Example: Salt N Pepper" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="City" hint="Example: London" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Country" hint="Example: UK" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <p>Select Rating</p>
                <star-rating text-class="starLabel" active-color="#7DB8DE" inactive-color="#333" :star-size="20" :increment="0.5"></star-rating>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-select
                  :items="cuisine"
                  label="Select Cuisine"
                  single-line
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="addRestaurantDialog = false">Close</v-btn>
          <v-btn color="primary" flat @click.native="addRestaurantDialog = false">Add</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="addAccomodationDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Add New Accomodation</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Name" hint="Example: Pearl Continental" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="City" hint="Example: Lahore" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field label="Country" hint="Example: PK" required></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <p>Select Rating</p>
                <star-rating text-class="starLabel" active-color="#7DB8DE" inactive-color="#333" :star-size="20" :increment="0.5"></star-rating>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-text-field
                  name="input"
                  label="Price"
                  id="price"
                  mask="#"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-select
                  :items="accommodationTypes"
                  v-model="e1"
                  label="Select Type"
                  single-line
                ></v-select>
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs12>
                <v-expansion-panel expand>
                  <v-expansion-panel-content ripple>
                    <div slot="header">Features</div>
                    <v-card>
                      <v-container>
                        <v-layout row wrap>
                          <v-flex xs12>
                            <v-checkbox
                              label="Pool"
                              value="Pool"
                              hide-details
                            ></v-checkbox>
                          </v-flex>
                          <v-flex xs12>
                            <v-checkbox
                              label="Spa"
                              value="Spa"
                              hide-details
                            ></v-checkbox>
                          </v-flex>
                          <v-flex xs12>
                            <v-checkbox
                              label="WiFi"
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
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click.native="addAccomodationDialog = false">Close</v-btn>
          <v-btn color="primary" flat @click.native="addAccomodationDialog = false">Login</v-btn>
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
          title: 'Restaurants',
          onClick: this.onClickRestaurants,
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
        },
        {
          icon: 'invert_colors',
          title: 'Invert Theme',
          onClick: this.onClickInvert,
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
          features: ['Delivery'],
          rating: 4,
          cuisine: ['Thai', 'SE Asian'],
          image: require('@/assets/paithai.jpg')
        },
        {
          title: 'Nusr-Et',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          rating: 5,
          cuisine: ['Turkish'],
          image: require('@/assets/nusret.jpg')
        },
        {
          title: 'Zuma',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          rating: 4,
          cuisine: ['Japanese'],
          image: require('@/assets/zuma.jpg')
        },
        {
          title: 'Solo Bistronomia & Vino Bar',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          rating: 5,
          cuisine: ['Italian'],
          image: require('@/assets/solo.jpg')
        },
        {
          title: 'La Petite Maison',
          location: 'Dubai, United Arab Emirates (UAE)',
          features: [],
          rating: 4,
          cuisine: ['French'],
          image: require('@/assets/lapetit.jpg')
        }
      ],
      accommodation: [
        {
          title: 'Holiday Inn Express Dubai Airport',
          location: 'Dubai, United Arab Emirates (UAE)',
          rating: 4,
          features: [],
          price: 8500,
          image: require('@/assets/Holiday_Inn.png')
        },
        {
          title: 'Crowne Plaza Dubai',
          location: 'Dubai, United Arab Emirates (UAE)',
          rating: 4,
          features: ['WiFi'],
          price: 16000,
          image: require('@/assets/Crowne_Plaza_Dubai.png')
        },
        {
          title: 'Hawthorn Suites',
          location: 'Dubai, United Arab Emirates (UAE)',
          rating: 5,
          features: [],
          price: 17000,
          image: require('@/assets/Hawthorn_Suites.png')
        },
        {
          title: 'Melia Dubai Hotel',
          location: 'Dubai, United Arab Emirates (UAE)',
          rating: 4,
          features: [],
          price: 11000,
          image: require('@/assets/Melia_Dubai_Hotel.png')
        },
        {
          title: 'Gloria Hotel',
          location: 'Dubai, United Arab Emirates (UAE)',
          rating: 5,
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
      addAttractionDialog: false,
      addRestaurantDialog: false,
      addAccomodationDialog: false,
      accommodationTypes: ['Hotel', 'Rental House'],
      cuisine: ['Italian', 'Thai', 'Japanese'],
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
    onClickRestaurants: function () {
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
    },
    onClickInvert: function () {
      var e = document.getElementById('app');

      if (e.classList[1] === 'theme--dark') {
        e.classList.remove('theme--dark');
        e.classList.add('theme--light');
      } else {
        e.classList.remove('theme--light');
        e.classList.add('theme--dark');
      }
    }
  },
  name: 'App'
};
</script>

<style>
  .attractions {
    background-image: url('./assets/1b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 2;
  }

  .restaurants {
    background-image: url('./assets/2b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 2;
  }

  .accommodation {
    background-image: url('./assets/3b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 2;
  }

  .travel {
    background-image: url('./assets/5b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    z-index: 2;
  }

  .quickLink {
    min-height: 400px;
    text-align: center;
    display: table-cell;
    line-height: 200px;
    font-size: 1.5vw;
    transition: box-shadow 0.4s;
  }

  .quickLink:hover {
    box-shadow: inset 0px 0px 30px 5px #7DB8DE;
    cursor: pointer;
  }

  #attractionLink {
    background-image: url('./assets/1b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
            
  #restaurantLink {
    background-image: url('./assets/2b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
          
  #accommodationLink {
    background-image: url('./assets/3b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }
          
  #travelLink {
    background-image: url('./assets/5b.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  #particles-js {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .starLabel {
    display: none;
  }
</style>