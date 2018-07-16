# Angular Elements Demo

This project demonstrates the usage of @angular/elements to reproduce a Bug in the Angular.

## Project Structure
+ shell (an Angular app to host the Web-Component)
+ my-web-component (the angular web-component)

## Run Web-Component
navigate to my-web-component
npm install
ng serve

The Web-Component is hosted in the index.html inside the my-web-component projekt. Everything is working as expected

## Bundle
navigate to my-web-component
npm run bundle

The Web-Component is bundled into a script file and copied into the shell app.

## Run Shell
navigate to shell
npm install
ng serve

Try the filter outside the app and inside the app.
The Web-Component, hosted outside of Angular, works as expected.

The Web-Component, hosted in an Angular App, fails. Initial data-binding is not working. Refresh of the list is not working

In the Browser Console you can see that the first call, from the component outside the angular app, is working as expected. The filter is set to 'Monroe'.
The second call, from the component inside the angular app, the filter is not applied (undefined).

If you change the filter, in the component outside the angular app, filtering and refresh of *ngFor is working.
If you change the filter, in the component inside the angular app, filtering is working, refresh of *ngFor is fails (not rendered).
If you now change the filter of the outer component, both lists are refreshed.