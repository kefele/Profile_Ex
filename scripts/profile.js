"use strict"

const userProfile = {
    template: `
    <section id ="proContainer">
        <form id ="proShow">
        <div> 
            <img src="css/grant-chirpus-profile-pic.jpg">
        </div>
            <h1>{{ $ctrl.input.name }}</h1>
            <span>{{ $ctrl.input.contactInfo }}</span>
            <p>{{ $ctrl.input.bio }}</p>
            <button ng-click ="$ctrl.editProfile()" >Edit</button>
        </form>
    </section>

    `,

    controller: ["ProfileService", "$location", function (ProfileService, $location) {
        const vm = this;
        vm.input = ProfileService.getUserProfile();
        vm.editProfile = function () {
            $location.path("/edit");
        }
    }]
}
angular
    .module("App")
    .component("userProfile", userProfile)