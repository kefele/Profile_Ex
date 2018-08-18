"use strict";

function ProfileService(){
    const vm = this;
     vm.userProfile ={
        name: "Grant Chirpus",
        contactInfo:"grant@grandcircus.co",
        bio: "I am pretty cool.  I a great job.  I like to play Tetris.  I am pretty ok at AngularJS."
    };
    vm.getUserProfile = function(){
        return vm.userProfile;
    }
    vm.setUserProfile = function(newUserProfile){
        vm.userProfile =  newUserProfile;
        return vm.userProfile;
        
   }

 
    
   
} 
   
    
angular
.module("App")
.service("ProfileService", ProfileService)