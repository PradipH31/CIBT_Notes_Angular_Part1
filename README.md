# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Notes from the programmer

Module for a part(for example:books,emplaoyees)\
Class as object definition\
Component as part of module(index,detail,add,edit)\
As services are injectable they can be initialized when components are called\
service can be directly called from component.html\
Import RouterModule in components that require links\
\
Use [(ngModel)]="" for two way binding\
use ng new appName to create the app\
use ng serve to run the server\
use ng generate component Navbar to create a component called Navbar\
Use ng generate module PropertyManager to create a module called property manager\
Use ng generate class property-manager/models/Property to create class inside property manager/property\
Use ng g guard auth/auth to create authentication guard(CanActivate())\
\
Routing will not work for multiple links in a uri