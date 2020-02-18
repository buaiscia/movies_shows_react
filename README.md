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

   - [README.md](README.md)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
   - __public__
     - [index.html](public/index.html)
     - [index.js](public/index.js)
     - [manifest.json](public/manifest.json)
     - [robots.txt](public/robots.txt)
     - [tmdb.png](public/tmdb.png)
   - __src__
     - [App.css](src/App.css)
     - [App.js](src/App.js)
     - __Components__
       - __Carousel__
         - [Carousel.js](src/Components/Carousel/Carousel.js)
         - [Carousel.module.css](src/Components/Carousel/Carousel.module.css)
         - [Carousel.test.js](src/Components/Carousel/Carousel.test.js)
         - __\_\_snapshots\_\___
           - [Carousel.test.js.snap](src/Components/Carousel/__snapshots__/Carousel.test.js.snap)
       - __ErrorHandler__
         - [ErrorHandler.css](src/Components/ErrorHandler/ErrorHandler.css)
         - [ErrorHandler.js](src/Components/ErrorHandler/ErrorHandler.js)
       - __Item__
         - [Item.js](src/Components/Item/Item.js)
         - [Item.module.css](src/Components/Item/Item.module.css)
       - __Layout__
         - [Layout.js](src/Components/Layout/Layout.js)
         - [Layout.module.css](src/Components/Layout/Layout.module.css)
       - __Navigation__
         - __Toolbar__
           - [Toolbar.js](src/Components/Navigation/Toolbar/Toolbar.js)
           - [Toolbar.module.css](src/Components/Navigation/Toolbar/Toolbar.module.css)
       - __NotFound__
         - [NotFound.css](src/Components/NotFound/NotFound.css)
         - [NotFound.js](src/Components/NotFound/NotFound.js)
       - __Search__
         - [Search.js](src/Components/Search/Search.js)
         - [Search.module.css](src/Components/Search/Search.module.css)
       - __ShowPage__
         - [ShowPage.js](src/Components/ShowPage/ShowPage.js)
         - [ShowPage.module.css](src/Components/ShowPage/ShowPage.module.css)
         - [ShowPage.test.js](src/Components/ShowPage/ShowPage.test.js)
         - __\_\_snapshots\_\___
           - [ShowPage.test.js.snap](src/Components/ShowPage/__snapshots__/ShowPage.test.js.snap)
       - __ShowSearch__
         - [ShowSearch.js](src/Components/ShowSearch/ShowSearch.js)
         - [ShowSearch.module.css](src/Components/ShowSearch/ShowSearch.module.css)
       - __VideoPlayer__
         - [VideoPlayer.js](src/Components/VideoPlayer/VideoPlayer.js)
     - __HOC__
       - [axios\-orders.js](src/HOC/axios-orders.js)
     - __assets__
       - __images__
         - [tmdb.svg](src/assets/images/tmdb.svg)
     - __config__
       - [config.js](src/config/config.js)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - __middleware__
       - [showItem.js](src/middleware/showItem.js)
     - [serviceWorker.js](src/serviceWorker.js)
     - [setupTests.js](src/setupTests.js)


## Notes

- I've added two small unit tests: one on the Carousel component and one on the ShowPage component (basic).

- The main bug is about playing HLS stream in Shaka player in autoplay. As far as I found in the documentation, Firefox and Chrome have some flaws in decoding this kind of stream, while it's possible to stream it in Android and Internet Explorer/Edge. 
While unfortunately I didn't manage, even adding polyfills, to make it work on IE,  On Edge it works but fullscreen is only manual. 

- There is one error in console which depends on some image path on TMDB which doesn't exist.

- There is one warning about useEffect, which was possible to forcibly ignore, but I decided to keep it as would be good practice to solve it in another way.

- I used axios instead of fetch() as the latter is supported only from Chrome v42.
