"use strict"

const Edit = {
    template: `
        <section>
            <form>
                <h1>Use the form below to update your profile</h1>
                <input type ="text" ng-model="$ctrl.input.name">
                <input type ="text" ng-model="$ctrl.input.userProfile.contactInfo">
                <input type ="text" ng-model="$ctrl.input.bio">
                <button ng-click="$ctrl.sendProfileToService($ctrl.input)">Update</button>
            </form>
        </section>
    
    `,

    controller: ["ProfileService", function (ProfileService) {
        const vm = this;
        vm.userProfile = ProfileService.getUserProfile();
        vm.sendProfileToService = function (newProfile) {
            vm.userProfile = ProfileService.setUserProfile(newProfile);
        }
    }]
}

angular
.module("App")
.component("Edit", Edit)