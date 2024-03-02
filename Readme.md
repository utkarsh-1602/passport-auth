# Nodejs Passport Authentication 

## libraries used 
1. Bootswatch 
2. FontAwesome
3. Bootstrap


## EJS Middlewares 
- **app.use(expressLayouts)** and **app.set('view engine', 'ejs')** are middleware and settings used in an Express.js application.

1. **app.use(expressLayouts)**

This middleware allows you to use layouts, which are templates that wrap around your individual views. Layouts are commonly used to define the overall structure of your application's pages, such as headers, footers, and navigation bars. With expressLayouts, you can define a layout once and then use it across multiple views, reducing redundancy in your code.

2. **app.set('view engine', 'ejs')**

This line sets the view engine for your Express.js application to EJS (Embedded JavaScript). EJS is a simple templating language that allows you to generate HTML markup with JavaScript. By setting the view engine to EJS, you can create dynamic web pages by embedding JavaScript code directly into your HTML templates. This makes it easy to generate dynamic content based on data from your server or database.