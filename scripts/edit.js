"use strict"

const edit = {
    template: `
        <section class ="container">
            <form class ="proEdit">
                <h1>Use the form below to update your profile</h1>
                <input type ="text" ng-model="$ctrl.input.name">
                <input type ="text" ng-model="$ctrl.input.contactInfo">
                <input type ="text" ng-model="$ctrl.input.bio">
                <button ng-click="$ctrl.sendProfileToService($ctrl.input)">Update</button>
            </form>
        </section>
    
    `,

    controller: ["ProfileService","$location", function (ProfileService, $location) {
        const vm = this;
        vm.userProfile = ProfileService.getUserProfile();
        vm.sendProfileToService = function (newUserProfile) {
            vm.userProfile = ProfileService.setUserProfile(newUserProfile);
            $location.path("/profile");
        }
    }]
}

angular
.module("App")
.component("edit", edit)