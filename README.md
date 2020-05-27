# Galery

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Task

 1. Gallery is accessible via login + password
 2. Image  takes all available space of block
 3. Images are changed when user clicks  on them
 4. An element, that represents current position of image in the gallery, should be placed at the bottom of page


# Solution
## Implemented the next pages:
	SignIn page
	Greetings page
	Gallery page

### SignIn page
Page implemented with verification of email and password bye some rules.
After correct autorisation the credential save to localstorage and fill flag to true of it in Vuex store


### Greetings page
The simple page of greetings and kinl to proceed 

### Gallery page
Last but not less needed page implemented with flex box
However was got information of visual implementation like on rozekra so the first implementation wasn't full screen and it was wonderful 

## Common info
The routing by pages check in middleware with checking the glag in Vuex store
Was imported Vuetify but without styles

## Implemented E2E tests 
### Run your end-to-end tests
```
npm run test:e2e
```

