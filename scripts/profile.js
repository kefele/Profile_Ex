"use strict"

const userProfile = {
    template:`

        <form> 
        <img src="">
        <h1>{{ $ctrl.input.name }}</h1>
        <p>{{ $ctrl.input.contactInfo }}</p>
        <p>{{ $ctrl.input.bio }}</p>
        <button ng-click ="$ctrl.editProfile()" >Edit</button>
        </form>

    `,

    controller: ["ProfileService", "$location", function(ProfileService, $location){
        const vm = this;
        vm.input = ProfileService.getUserProfile();
        vm.editProfile = function(){
            $location.path("/edit");
        } 
    }]
}
angular
.module("App")
.component("userProfile", userProfile)