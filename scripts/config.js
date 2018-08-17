"use strict";
/* How to use a route: .config with the name of the route, then a function
that takes the named route as a parameter.*/
    angular.module("App")
    .config(["$routeProvider", function($routeProvider){
        $routeProvider
        .when("/userProfile", {
            template: `
            <user-profile></user-profile>
            `
        })
        .when("/Edit", {
            template: `
            <edit></edit>
            `
        })
        .otherwise({
            redirectTo: "/user-profile"
        })

    }])
    