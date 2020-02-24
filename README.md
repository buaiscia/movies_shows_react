# TMDb React app

Frontend application using The Movie Database API. Built with React.

## Getting started

Install packages

```npm install```

Insert your own API key into /src/config/config.js and save it

```config.apiKey = 'keyHere';```

Run it

```npm start```

As per notes below, the visualization of the HSL stream is possible only on IE/Edge.

#### Or for Production mode

```npm run-script build```
```serve -s build```

## Structure

   - [README.md](README.md)
   - [jsconfig.json](jsconfig.json)
   - [node\_modules](node_modules)
   - [package\-lock.json](package-lock.json)
   - [package.json](package.json)
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
         - [showItem.js](src/Components/Carousel/showItem.js)
       - __GetErrorHandler__
         - [GetErrorHandler.css](src/Components/GetErrorHandler/GetErrorHandler.css)
         - [GetErrorHandler.js](src/Components/GetErrorHandler/GetErrorHandler.js)
       - __Item__
         - [Item.js](src/Components/Item/Item.js)
         - [Item.module.css](src/Components/Item/Item.module.css)
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
       - __UI__
         - __Navigation__
           - __Toolbar__
             - [Toolbar.js](src/Components/UI/Navigation/Toolbar/Toolbar.js)
             - [Toolbar.module.css](src/Components/UI/Navigation/Toolbar/Toolbar.module.css)
         - __Spinner__
           - [Spinner.js](src/Components/UI/Spinner/Spinner.js)
           - [Spinner.module.css](src/Components/UI/Spinner/Spinner.module.css)
       - __VideoPlayer__
         - [VideoPlayer.js](src/Components/VideoPlayer/VideoPlayer.js)
     - __HOC__
       - __Layout__
         - [Layout.js](src/HOC/Layout/Layout.js)
         - [Layout.module.css](src/HOC/Layout/Layout.module.css)
       - __withErrorHandler__
         - [withErrorHandler.js](src/HOC/withErrorHandler/withErrorHandler.js)
     - __assets__
       - __images__
         - [tmdb.svg](src/assets/images/tmdb.svg)
     - [axios\-orders.js](src/axios-orders.js)
     - __config__
       - [config.js](src/config/config.js)
     - [index.css](src/index.css)
     - [index.js](src/index.js)
     - [serviceWorker.js](src/serviceWorker.js)
     - [setupTests.js](src/setupTests.js)
