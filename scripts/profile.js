"use strict"

const userProfile = {
    template:`

        <form> 
        <img src="">
        <h1>{{ $ctrl.input.name }}</h1>
        <p>{{ $ctrl.input.contactInfo }}</p>
        <p>{{ $ctrl.input.bio }}</p>
        <button>Edit</button>
        </form>

    `,

    controller: ["ProfileService", function(ProfileService){
        const vm = this;
        vm.input = ProfileService.getUserProfile();
    }]
}
angular
.module("App")
.component("userProfile", userProfile)