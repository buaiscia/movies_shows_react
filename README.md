TMDb React app

# TMDb React app

Frontend application using The Movie Database API. Built with React.

## Getting started

Install packages

```npm install```

Insert your own API key into /src/config/config.js and save it

```config.apiKey = 'keyHere';```

Run it

```npm start```

As per notes below, the visualization of the HSL stream is possible only on Edge.

## Structure

- __C:\\Users\\alex.buaiscia\\Documents\\Developing\\movie\-database__
   - [README.md](README.md)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __src__
     - [App.css](src/App.css)
     - [App.js](src/App.js)
     - [App.test.js](src/App.test.js)
     - __Components__
       - __Carousels__
         - [Carousel.js](src/Components/Carousels/Carousel.js)
       - __ErrorHandler__
         - [ErrorHandler.js](src/Components/ErrorHandler/ErrorHandler.js)
       - __Item__
         - [Item.js](src/Components/Item/Item.js)
         - [Item.module.css](src/Components/Item/Item.module.css)
       - __Navigation__
         - __Toolbar__
           - __Logo__
             - [Logo.js](src/Components/Navigation/Toolbar/Logo/Logo.js)
           - __SearchBar__
             - [SearchBar.js](src/Components/Navigation/Toolbar/SearchBar/SearchBar.js)
           - [Toolbar.js](src/Components/Navigation/Toolbar/Toolbar.js)
           - [Toolbar.module.css](src/Components/Navigation/Toolbar/Toolbar.module.css)
       - __ShowSearch__
         - [ShowSearch.js](src/Components/ShowSearch/ShowSearch.js)
         - [ShowSearch.module.css](src/Components/ShowSearch/ShowSearch.module.css)
       - __VideoPlayer__
         - [VideoPlayer.js](src/Components/VideoPlayer/VideoPlayer.js)
     - __HOC__
       - __Layout__
         - [Layout.js](src/HOC/Layout/Layout.js)
         - [Layout.module.css](src/HOC/Layout/Layout.module.css)
       - [axios\-orders.js](src/HOC/axios-orders.js)
     - __assets__
       - __images__
         - [tmdb.svg](src/assets/images/tmdb.svg)
     - __config__
       - [config.js](src/config/config.js)
     - __containers__
       - __ShowPage__
         - [ShowPage.js](src/containers/ShowPage/ShowPage.js)
         - [ShowPage.module.css](src/containers/ShowPage/ShowPage.module.css)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - __middleware__
       - [List.js](src/middleware/List.js)
     - [serviceWorker.js](src/serviceWorker.js)
     - [setupTests.js](src/setupTests.js)


## Notes

- The main bug is about playing HLS stream in Shaka player in autoplay. As far as I found in the documentation, Firefox and Chrome have some flaws in decoding this kind of stream, while it's possible to stream it in Android and Internet Explorer/Edge. 

While unfortunately I didn't manage, even adding polyfills, to make it work on IE,  On Edge it works but fullscreen is only manual. 

- I used axios instead of fetch() as the latter is supported only from Chrome v42.
