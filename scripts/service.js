"use strict"

function ProfileService(){
    const vm = this;
    vm.userProfile ={
    name: "name",
    contactInfo: "contactInfo",
    bio: "bio"
};
vm.getUserProfile = function(){
    return vm.userProfile;
}

vm.setUserProfile = function(newUserProfile){
    vm.userProfile = newUserProfile;
    return vm.userProfile;

}



}
angular
.module("App")
.service("ProfileService", ProfileService)