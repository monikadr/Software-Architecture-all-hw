 


var hw8 = angular.module('hw8', ['ngCordova','angularMoment','ngAnimate']);

     hw8.controller('page',function($scope,$http,$cordovaGeolocation) {

// on page load 
$(document).ready(function(){

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  $scope.lat = crd.latitude;
  $scope.long = crd.longitude;
};

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

navigator.geolocation.getCurrentPosition(success, error, options);
angular.element(user_section).hide();

 
    
});

//on page load ends

//on click of search 
    $scope.getName=function(){
        $scope.required=true;
if(typeof($scope.keyword)!="undefined"){
       var $a = $('.nav-tabs .active').text(); 

        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+$a+"&lat="+$scope.lat+"&long="+$scope.long)
    .then(function successCallback(response) {
        
        $('#prog').hide();

        if($a=="Users"){
        $scope.user = response.data.data;
        if(typeof(response.data.paging)!="undefined"){
            if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();
    }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
      }  
      else{
        $('.previous').hide();
        $('.next').hide();
      }
    }

    else
        if($a=="Events")
        {
            $scope.events = response.data.data;
            if(typeof(response.data.paging)!="undefined") {
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();
    }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}


        }
         else
        if($a=="Places")
        {
            $scope.places = response.data.data;
            if(typeof(response.data.paging)!="undefined"){
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}
        }
         else
        if($a=="Groups")
        {
            $scope.groups = response.data.data;
            if(typeof(response.data.paging)!="undefined"){
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next;
        $('.next').show(); }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}

        }
         else
        if($a=="Pages")
        {
            $scope.pages = response.data.data;
            if(typeof(response.data.paging)!="undefined"){
             if(typeof(response.data.paging.next)!="undefined")
            
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();

    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}
        }
        }, function errorCallback(response) {
        console.log(response)

     
        angular.element(user_section).hide();
                    angular.element(pages_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
                     
                    
                
       
    });


					angular.element(user_section).hide();
                    angular.element(pages_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
                     
 $('#prog').show();
   }
   else
   {
                    angular.element(user_section).hide();
                    angular.element(pages_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
   }


    if($a=="Users"){
     setTimeout(function () {
                    angular.element(pages_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
                    
                    angular.element(user_section).show();

                    angular.element(user_carousel).carousel(0);
                }, 1000);

 }
 if($a=="Pages")
 {setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
                    
                    angular.element(pages_section).show();

                    angular.element(pages_carousel).carousel(0);
                }, 1000);

 }
 if($a=="Events")
 {
    setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(pages_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
                   
                    angular.element(events_section).show();

                    angular.element(events_carousel).carousel(0);
                }, 1000);

 }
 if($a=="Places")
 {
   setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(pages_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(fav_section).hide();
                    
                    angular.element(places_section).show();

                    angular.element(places_carousel).carousel(0);
                }, 1000);

 }
 if($a=="Groups")
 {
    setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
                    
                    angular.element(groups_section).show();

                    angular.element(groups_carousel).carousel(0);
                }, 1000);

 }
 if($a=="fav")
 {
   setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(pages_section).hide();
                   
                    angular.element(fav_section).show();

                    angular.element(fav_carousel).carousel(0);
                }, 1000);

 }

    }
    
    // on click of search ends 

    //on page tab click
    $scope.funp=function(value){
$scope.required=true;
        if(typeof($scope.keyword)!="undefined"){
         
     $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
        
    .then(function successCallback(response) {
        $('#prog').hide();

        $scope.pages = response.data.data;

        if(typeof(response.data.paging)!="undefined"){

         if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{$('.previous').hide();
    $('.next').hide();
}

        }, function errorCallback(response) {
        console.log(response)
    
       
    });

  
                    angular.element(user_section).hide();
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                     angular.element(pages_section).hide();

                    angular.element(groups_section).hide();
                    angular.element(fav_section).hide();
                    $('#prog').show();
				
		setTimeout(function () {
                    angular.element(pages_section).show();

                    angular.element(pages_carousel).carousel(0);
					}, 1000);
                

    }
    else
    {
         angular.element(groups_section).hide();
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
    }
}


    // on page tab click ends

    //on user tab click

    $scope.funu=function(value){
        if(typeof($scope.keyword)!="undefined"){
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
    .then(function successCallback(response) {
            
            $('#prog').hide();

        $scope.user = response.data.data;

        if(typeof(response.data.paging)!="undefined"){

         if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next;
        $('.next').show(); }
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{
    $('.previous').hide();
    $('.next').hide();
}
        
        }, function errorCallback(response) {
        console.log(response)
    
       
    });

    
   
                    angular.element(pages_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   
                    angular.element(user_section).hide();
                    angular.element(fav_section).hide();
                    $('#prog').show();
              setTimeout(function () {      
                    angular.element(user_section).show();

                    angular.element(user_carousel).carousel(0);
			  },1000);
                

    }
    else
    {
         angular.element(groups_section).hide();
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
    }
}

    //on user tab click ends
        
    //on event tab click
    $scope.fune=function(value){
        if(typeof($scope.keyword)!="undefined"){
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
    .then(function successCallback(response) {
$('#prog').hide();

        $scope.events = response.data.data;
        if(typeof(response.data.paging)!="undefined"){
         if(typeof(response.data.paging.next)!="undefined")
        
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else
{$('.previous').hide();
    $('.next').hide();
}
        }, function errorCallback(response) {
        console.log(response)
    
       
    });
   
       
                    angular.element(user_section).hide();
                    
                    
                    angular.element(pages_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   
angular.element(events_section).hide(); 
                    angular.element(fav_section).hide();
                    $('#prog').show();
					setTimeout(function () {
                    angular.element(events_section).show();

                    angular.element(events_carousel).carousel(0);
					},1000);

       
    }
    else
    {
         angular.element(groups_section).hide();
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
    }
}
    // on event tab click ends

    //on place tab click
    $scope.funpl=function(value){
        if(typeof($scope.keyword)!="undefined"){
        
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value+"&lat="+$scope.lat+"&long="+$scope.long)


    .then(function successCallback(response) {
        $('#prog').hide();

        $scope.places = response.data.data;
        if(typeof(response.data.paging)!="undefined"){
        if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    } 
}
else
{
    $('.previous').hide();
    $('.next').hide();
}

        }, function errorCallback(response) {
        console.log(response)
    
       
    });
    

       
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(pages_section).hide();
                    
                    angular.element(groups_section).hide();
                   
                    angular.element(places_section).hide();
                    angular.element(fav_section).hide();
                    $('#prog').show();
					setTimeout(function () {
                    angular.element(places_section).show();

                    angular.element(places_carousel).carousel(0);
					},1000);
              
            }
            else
            {
                 angular.element(groups_section).hide();
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
            }  

  
    }

    //on place tab click ends

    //on group tab click

    $scope.fung=function(value){
        if(typeof($scope.keyword)!="undefined"){
        $http.get("fb.php?keyword="+ $scope.keyword+"&type="+value)
    .then(function successCallback(response) {
        $('#prog').hide();

        $scope.groups = response.data.data;
if(typeof(response.data.paging)!="undefined"){
         if(typeof(response.data.paging.next)!="undefined")
        { $scope.nextPage = response.data.paging.next; 
        $('.next').show();}
    else {
        $('.next').hide();
    }

    if(typeof(response.data.paging.previous)!="undefined")
    {
        $scope.previousPage = response.data.paging.previous;
        $('.previous').show();
    }
    else
    {
        $('.previous').hide();
    }
}
else 
{
    $('.previous').hide();
    $('.next').hide();
}


        }, function errorCallback(response) {
        console.log(response)
    
       
    });
    
  
    
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
                    angular.element(groups_section).hide();
                    $('#prog').show();
					setTimeout(function () {
                    angular.element(groups_section).show();

                    angular.element(groups_carousel).carousel(0);
					},1000);
              
                }
                else
                {
                    angular.element(groups_section).hide();
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(pages_section).hide();
                   

                    angular.element(fav_section).hide();
                }       
   
    }
 //on group tab click ends
 
    $scope.fun=function(value){

       

        $scope.u = [];
        if(localStorage.getItem("userfavorite")){
        $scope.u= JSON.parse(localStorage.getItem("userfavorite"));
        $scope.funuLength = $scope.u.length;
        }
       
    setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   

                    angular.element(pages_section).hide();
                   
                    angular.element(fav_section).show();

                    angular.element(fav_carousel).carousel(0);
                }, 1000);

       
    }

    //on fav tab click ends

    $scope.clear=function(){
        $scope.keyword="";
        $scope.required=false;
       
           setTimeout(function () {
                    angular.element(user_section).hide();
                    
                    
                    angular.element(events_section).hide();
                   
                    angular.element(places_section).hide();
                    
                    angular.element(groups_section).hide();
                   
                     angular.element(pages_section).hide();
                }, 100);
     
    }
	
	// clear button ends
   
 // next button
 $scope.next=function(url,value)
        {
           $scope.nextTry = url;
            $http.get("fb.php",{params:{'param1':url}})
            .then(function successCallback(response){
                if(value == "Users") {
                $scope.user=response.data.data; 
                }
                else
                if(value == "Events")
                {
                    $scope.events=response.data.data;
                }
                else
                if(value=="Pages")
                {
                    $scope.pages=response.data.data;
                }
                else
                if(value=="Places")
                {
                    $scope.places=response.data.data;
                }
                else
                if(value=="Groups")
                {
                    $scope.groups=response.data.data;
                }

                
        if(typeof(response.data.paging)!="undefined")
            { 
                if(typeof(response.data.paging.next)!="undefined")
                    {$scope.nextPage = response.data.paging.next;
            $('.next').show();
             }
        else {
             $('.next').hide();
             }

             if(typeof(response.data.paging.previous)!="undefined")
             {
                 $scope.previousPage = response.data.paging.previous;
                 $('.previous').show();
             }
              else
              {
               $('.previous').hide();
               }
           }
           else
           {
            $('.next').hide();
            $('.previous').hide();

           }

            },function errorCallback(response){
                console.log(response)
           
        });
              
        }
        
        //next button end
		
        // previous button
		$scope.prev=function(url,value){
            $http.get("fb.php",{params:{'param1':url}})
            .then(function successCallback(response){
                if(value == "Users") {
                $scope.user=response.data.data; 
                }
                else
                if(value == "Events")
                {
                    $scope.events=response.data.data;
                }
                else
                if(value=="Pages")
                {
                    $scope.pages=response.data.data;
                }
                else
                if(value=="Places")
                {
                    $scope.places=response.data.data;
                }
                else
                if(value=="Groups")
                {
                    $scope.groups=response.data.data;
                }
                if(typeof(response.data.paging)!='undefined'){
                if(typeof(response.data.paging.next)!="undefined")
            { $scope.nextPage = response.data.paging.next; 
              $('.next').show();
          }
        else {
             $('.next').hide();
             }

             if(typeof(response.data.paging.previous)!="undefined")
             {
                 $scope.previousPage = response.data.paging.previous;
                   $('.previous').show();
             }
              else
              {
               $('.previous').hide();
               }
           }
           else
           {
            $('.previous').hide();
            $('.next').hide();
           }



            },function errorCallback(response){
                console.log(response)
            });
        }

        //previous button end

// user display section

  $scope.user_view_details=function(id){


  $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {
       
        $('#try').delay(2000).hide();

        $('#try1').delay(2000).hide();

        $('.panel').show();
        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
         $scope.value=response.data;


         if(response.data.hasOwnProperty('albums')){
        $scope.user_details_album = response.data.albums.data;
        $scope.length = response.data.hasOwnProperty('albums');
         }
            else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
    
         if(response.data.hasOwnProperty('posts'))
        {
            $scope.plength = response.data.hasOwnProperty('posts');
            $scope.user_details_post = response.data.posts.data;
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       }, function errorCallback(response) {
        console.log(response)
       
    });

     
                    

   
                    angular.element(user_section).hide();
                    angular.element(user_carousel).carousel(0);
                    angular.element(user_section).show();

                    angular.element(user_carousel).carousel("prev");
                    $('.panel').hide();
                    $('#try').show();
                    $('#try1').show();
     

     

  }
// user display section ends and pages display section begins

  $scope.pages_view_details=function(id){
    

     $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {

        
        $('#try2').delay(2000).hide();

        $('#try3').delay(2000).hide(); 
		

        $('.panel').show();
		
		
			
            $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
            $scope.value = response.data;
            
            if(response.data.hasOwnProperty('albums')){
            $scope.pages_details_album = response.data.albums.data; 
            $scope.length= response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length = response.data.hasOwnProperty('albums');
        }

if(response.data.hasOwnProperty('posts'))
       {
            $scope.pages_details_post = response.data.posts.data;
            $scope.plength = response.data.hasOwnProperty('posts');
       }
       else
       {
        $scope.plength = response.data.hasOwnProperty('posts');
       }
        
        

        }, function errorCallback(response) {
        console.log(response)
        
    });

   
   
                    angular.element(pages_section).hide();

                    angular.element(pages_carousel).carousel(0);
                    angular.element(pages_section).show();
                    angular.element(pages_section).carousel("prev");
                    $('.panel').hide();
                    $('#try2').show();
                    $('#try3').show();
                  
             

  }
 // pages display section ends and events display section begins

$scope.events_view_details=function(id){

    $http.get("fb.php", {params:{"eid":id}})
    .then(function successCallback(response) {
         
         $('#try4').delay(2000).hide();

        $('#try5').delay(2000).hide(); 

        $('.panel').show();

$scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
           $scope.value = response.data;
           $scope.postid=response.data.id;
            if(response.data.hasOwnProperty('albums')){
            $scope.events_details_album = response.data.albums.data; 
            $scope.length = response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length = response.data.hasOwnProperty('albums');
        }
            if(response.data.hasOwnProperty('posts')){
            $scope.events_details_post = response.data.posts.data;
            $scope.plength = response.data.hasOwnProperty('posts');
        }
        else 
        {
             $scope.plength=response.data.hasOwnProperty('posts');
        }


        }, function errorCallback(response) {
        console.log(response)
        
    });
   
   
                    angular.element(events_section).hide();
                    angular.element(events_carousel).carousel(0);
                    angular.element(events_section).show();
                    angular.element(events_carousel).carousel("prev");
                
            $('.panel').hide();
            $('#try4').show();

            $('#try5').show(); 

        

  }
  
// events display section ends and places display section begins

  $scope.places_view_details=function(id){
   $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {

        $('#try6').delay(2000).hide();
        $('#try7').delay(2000).hide();
        $('.panel').show();

        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
           $scope.value = response.data;

           if(response.data.hasOwnProperty('albums'))
           {
            $scope.places_details_album = response.data.albums.data; 
            $scope.length = response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length=response.data.hasOwnProperty('albums');
            }
            if(response.data.hasOwnProperty('posts')){            
            $scope.places_details_post = response.data.posts.data;
            $scope.plength = response.data.hasOwnProperty('posts');
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       


        }, function errorCallback(response) {
        console.log(response)
        
    });
   
                    angular.element(places_section).hide();
                    angular.element(places_carousel).carousel(0);
                    angular.element(places_section).show();
                    angular.element(places_carousel).carousel("prev");
              $('.panel').hide();
              $('#try6').show();
              $('#try7').show();
  }
  
  // places display section ends and groups display section begins

$scope.groups_view_details=function(id){
   $http.get("fb.php", {params:{"uid":id}})
    .then(function successCallback(response) {

        $('#try8').delay(2000).hide();
        $('#try9').delay(2000).hide();
        $('.panel').show();
         $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
           $scope.value = response.data;
           if(response.data.hasOwnProperty('albums')){
            $scope.groups_details_album = response.data.albums.data; 
            $scope.length = response.data.hasOwnProperty('albums');
        }
        else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
            if(response.data.hasOwnProperty('posts')){
       
            $scope.groups_details_post = response.data.posts.data; 
            $scope.plength = response.data.hasOwnProperty('posts');
        }
        else
        {
            $scope.plength=response.data.hasOwnProperty('posts');
        }
            
        
        }, function errorCallback(response) {
        console.log(response)
        
    });

   

                    angular.element(groups_section).hide();
                    angular.element(groups_carousel).carousel(0);
                    angular.element(groups_section).show();
                    angular.element(groups_carousel).carousel("prev");
                    $('.panel').hide();
                    $('#try8').show();
                    $('#try9').show();
       
              
  }
  
  // groups display section ends 
  
  // get photo for albums in details page

 $scope.getPhoto = function(id){

        var albumPhoto = "https://graph.facebook.com/v2.8/"+id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
    return albumPhoto;        
    }
	
	// get photo end
  // to convert date and time

  $scope.createdTime=function (createdTime) {
            var date = moment(createdTime).format('MMMM Do YYYY, h:mm:ss a');
            //$scope.time=date.tostring();

            return  date.toString() ;


        },

       // convert date time end 
      
  //back button click

  $scope.users_carousel_back=function()
  {

    if($('.nav-tabs .active').text() == "Favorites"){
    angular.element(fav_carousel).carousel("next");
    }
    else
    {
        angular.element(user_carousel).carousel("next");
    }
  }
  $scope.pages_carousel_back=function()
  {
    if($('.nav-tabs .active').text() == "Favorites"){
        angular.element(pages_section).hide();  
    angular.element(fav_section).show();    
    angular.element(fav_carousel).carousel("next");
    }
    else
    {
    angular.element(pages_carousel).carousel("next");
    }
  }
  $scope.events_carousel_back=function()
  {
    if($('.nav-tabs .active').text() == "Favorites"){
    angular.element(fav_carousel).carousel("next");
    }
    else
    {
    angular.element(events_carousel).carousel("next");
    }
  }
  $scope.places_carousel_back=function()
  {
    if($('.nav-tabs .active').text() == "Favorites"){
    angular.element(fav_carousel).carousel("next");
    }
    else
    {
    angular.element(places_carousel).carousel("next");
    }
  }
  $scope.groups_carousel_back=function()
  {
    if($('.nav-tabs .active').text() == "Favorites"){
    angular.element(fav_carousel).carousel("next");
    }
    else
    {
    angular.element(groups_carousel).carousel("next");
    }
  }
  $scope.fav_carousel_back=function()
  {
    $scope.u = [];
        if(localStorage.getItem("userfavorite")){
        $scope.u= JSON.parse(localStorage.getItem("userfavorite"));
        $scope.funuLength = $scope.u.length;
        }
    angular.element(fav_carousel).carousel("next");
    
  }
  // back button click end

  //fb share
$scope.fb_post = function(){

 $http.get("fb.php", {params:{"postid" : $scope.postid}})
                .then(function(response) {
                $scope.posturl = response.data.picture.data.url;
                var picture=$scope.posturl;
                var postName=$scope.details_name;

    FB.init({
        appId: '1548523391832938',
        status : true,
        xfbml : true,
        version : 'v2.8'
              });



        FB.ui({

            app_id: '1548523391832938',
            method: 'feed',
            display: 'popup',
            link: window.location.href,
            picture: picture,
            name: postName,
            caption: 'FB SEARCH FROM USC CSCI571',
            }, function(response){
            if (response && !response.error_message)
            alert("Posted Successfully");
            else
            alert("Not Posted");
            });

                 });
                

              }

// fb share end

  
// by default fav start to display
		$scope.user_fav_star = 1;
		$scope.event_fav_star = 1;
		$scope.group_fav_star = 1;
		$scope.page_fav_star = 1;
        $scope.place_fav_star = 1;
        $scope.user_details_fav_star=1;
        $scope.pages_details_fav_star=1;
        $scope.events_details_fav_star=1;
        $scope.groups_details_fav_star=1;
        $scope.places_details_fav_star=1;
        $scope.fav_details_fav_star=1;

      


  // fav section
 
  
    var userfavorite= [];
    var pagefavorite= [];
    var eventfavorite= [];
    var placefavorite= [];
    var groupfavorite= [];
    var selectedUser = [];
    var pagefavorite= [];
    var selectedPage = [];
    var eventfavorite= [];
    var selectedEvent = [];
     var placetfavorite= [];
    var selectedPlace = [];
    var groupfavorite= [];
    var selectedGroup = [];
    
 
    
    var uselected = [];
     var pselected = [];
      var eselected = [];
       var plselected = [];
        var gselected = [];

    var userfav = [];
    var uFav = [];
    var pagefav = [];
    var pFav = [];
    var eventfav = [];
    var eFav = [];
     var placefav = [];
    var pFav = [];
     var groupfav = [];
    var gFav = [];
               
    var removedUser = [];
    var removedPage = [];
    var removedGroup = [];
    var removedEvent= [];
    var removedPlace = [];
    var allFav = [];
    
    $scope.other_favorite_stars = 1;
    $scope.details_fav = 1;

// fav button click user 

   $scope.user_fav=function (id) {
   
    var individualUser = $scope.getUser(id);
    individualUser.type = "Users";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite"));
    }
    uselected.push(individualUser);

   
   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 
   
    
    if ($scope.isFavorited('Users', id)) {
                $scope.removeFromFavorites('Users', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
               
            } else {
                
                $scope.addToFavorites('Users', id, individualUser);
                $scope.user_fav_star = $scope.user_fav_star + 1;
    
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getUser= function(id)
{
    for (var i =0 ;i < $scope.user.length; i++)
    {
        if($scope.user[i].id === id)
        {
            return $scope.user[i];
        } 
    }
}

// fav button click page 
$scope.page_fav=function (id) {
   
    var individualUser = $scope.getPage(id);
    individualUser.type = "Pages";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite")); }
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Pages', id)) {
                $scope.removeFromFavorites('Pages', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
                
            } else {
                
                $scope.addToFavorites('Pages', id, individualUser);
                $scope.page_fav_star = $scope.page_fav_star + 1;
                 
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                 
            }
   
}


$scope.getPage= function(id)
{
    for (var i =0 ;i < $scope.pages.length; i++)
    {
        if($scope.pages[i].id === id)
        {
            return $scope.pages[i];
        } 
    }
}

// fav button event
 $scope.event_fav=function (id) {
   
    var individualUser = $scope.getEvent(id);
    individualUser.type = "Events";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite")); }
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Events', id)) {
                $scope.removeFromFavorites('Events', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites('Events', id, individualUser);
                 $scope.event_fav_star = $scope.event_fav_star + 1;
    
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getEvent= function(id)
{
    for (var i =0 ;i < $scope.events.length; i++)
    {
        if($scope.events[i].id === id)
        {
            return $scope.events[i];
        } 
    }
}

//fav button places

$scope.place_fav=function (id) {
   
    var individualUser = $scope.getPlace(id);
    individualUser.type = "Places";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite")); }
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Places', id)) {
                $scope.removeFromFavorites('Places', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites('Places', id, individualUser);
                 $scope.place_fav_star =  $scope.place_fav_star + 1;;
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getPlace= function(id)
{
    for (var i =0 ;i < $scope.places.length; i++)
    {
        if($scope.places[i].id === id)
        {
            return $scope.places[i];
        } 
    }
}

//fav button groups

$scope.group_fav=function (id) {
   
    var individualUser = $scope.getGroup(id);
    individualUser.type = "Groups";
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite"));}
    uselected.push(individualUser);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited('Groups', id)) {
                $scope.removeFromFavorites('Groups', id);
                individualUser.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites('Groups', id, individualUser);
                  $scope.group_fav_star = $scope.group_fav_star + 1;
       
       
                individualUser.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
   
}
$scope.getGroup= function(id)
{
    for (var i =0 ;i < $scope.groups.length; i++)
    {
        if($scope.groups[i].id === id)
        {
            return $scope.groups[i];
        } 
    }
}
// view detials in fav

$scope.fav_view_details = function(type,favid){
    $scope.details_pic = "";
     $scope.details_name = "";
      $scope.value="";
       $scope.postid="";
       $scope.fav_details_album="";
       $scope.length ="";
       $scope.plength = "";
       $scope.fav_details_post="";
	   $scope.fav_type = type;

if(type != 'Events'){
         $http.get("fb.php", {params:{"uid":favid}})
    .then(function successCallback(response) {

        $('#try10').delay(2000).hide();
        $('#try11').delay(2000).hide();
        $('.panel').show();
        
        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
         $scope.value=response.data;

         if(response.data.hasOwnProperty('albums')){
        $scope.fav_details_album = response.data.albums.data;
        $scope.length = response.data.hasOwnProperty('albums');
         }
            else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
    
         if(response.data.hasOwnProperty('posts'))
        {
            $scope.plength = response.data.hasOwnProperty('posts');
            $scope.fav_details_post = response.data.posts.data;
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       }, function errorCallback(response) {
        console.log(response)
       
    });
}

if(type == 'Events'){
         $http.get("fb.php", {params:{"eid":favid}})
    .then(function successCallback(response) {

        $('#try10').delay(2000).hide();
        $('#try11').delay(2000).hide();
        $('.panel').show();
        
        $scope.details_pic = "https://graph.facebook.com/v2.8/"+response.data.id+"/picture?access_token=EAAED0CT6escBAGjZCH9S4ZAvbvKGcBhPkVpZCy9ZB1TJxzkKCldIfTSRNprOVhfVOsym3j8gFMZBaKyijJBPlgOLuDZCulZCZCuFwMUjFUTFmPgvMkcrnsRC3qvZCNrhLt0mhQbpV0Uy13X2suswzKk1hexz0wa8acU4ZD";
            $scope.details_name = response.data.name;
            $scope.postid=response.data.id;
         $scope.value=response.data;

         if(response.data.hasOwnProperty('albums')){
        $scope.fav_details_album = response.data.albums.data;
        $scope.length = response.data.hasOwnProperty('albums');
         }
            else
        {
            $scope.length=response.data.hasOwnProperty('albums');
        }
    
         if(response.data.hasOwnProperty('posts'))
        {
            $scope.plength = response.data.hasOwnProperty('posts');
            $scope.fav_details_post = response.data.posts.data;
        }
        else
        {
            $scope.plength = response.data.hasOwnProperty('posts');
        }
       }, function errorCallback(response) {
        console.log(response)
       
    });
}
                    angular.element(fav_section).hide();
                    angular.element(fav_carousel).carousel(0);
                    angular.element(fav_section).show();
                    angular.element(fav_carousel).carousel("prev");

        $('.panel').hide();
     $('#try10').show();
     $('#try11').show();
   

       
                   
                
        
}

$scope.fav_details_fav = function(id,type){


    if($scope.isFavorited("fav",id)){
        
         $scope.removeFromFavorites('fav', id);
                
                
    }
    else {
	 $http.get("fb.php", {params:{"eid":id}})
    .then(function successCallback(response) {

	var individual = response.data;
    individual.type = type;
    if(localStorage.getItem("userfavorite")){
    uselected = JSON.parse(localStorage.getItem("userfavorite"));}
    uselected.push(individual);

   localStorage.setItem("selectedUser",JSON.stringify(uselected)); 

    
    if ($scope.isFavorited(individual.type, id)) {
                $scope.removeFromFavorites(individual.type, id);
                individual.favButtonStyle = {
                    'background': 'none'
                };
            } else {
                
                $scope.addToFavorites(individual.type, id, individual);
                     
                individual.favButtonStyle = {
                    'background': 'yellow'
                };
                
            }
                   
	   
	   
       }, function errorCallback(response) {
        console.log(response)
		
		
       
    });
      
	   
               
         }
}


// check if already fav
 $scope.isFavorited = function (type, id) {


       if(localStorage.getItem("userfavorite")){
       
        switch (type) {
            case 'Users':
            userfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var i = 0; i < userfav.length; i++) {
                    if (userfav[i].id === id)
                        return true;
                }
                return false;
                break;

                case 'Pages':
                if(localStorage.getItem('userfavorite')){
                pagefav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var j = 0; j < pagefav.length; j++) {
                    if (pagefav[j].id === id)
                        return true;
                   }
                }
                return false;
                break;

                case 'Events':
                if(localStorage.getItem('userfavorite')){
                eventfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var k = 0; k < eventfav.length; k++) {
                    if (eventfav[k].id === id)
                        return true;
                    }
                }
                return false;
                break;

                case 'Places':
                if(localStorage.getItem('userfavorite')){
                placefav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var p = 0; p < placefav.length; p++) {
                    if (placefav[p].id === id)
                        return true;
                    }
                }
                return false;
                break;

                case 'Groups':
                if(localStorage.getItem('userfavorite')){
                groupfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var g = 0; g < groupfav.length; g++) {
                    if (groupfav[g].id === id)
                        return true;
                    }
                }
                return false;
                break;

                case 'fav':
                if(localStorage.getItem('userfavorite')){
                groupfav = JSON.parse(localStorage.getItem("userfavorite"));
                for (var g = 0; g < groupfav.length; g++) {
                    if (groupfav[g].id === id)
                        return true;
                    }
                }
                return false;
                break;

            
            default:
                
                return false;
        }
    }
}

    
    $scope.addToFavorites = function (entity, id, item) {

       switch (entity) {
                case 'Users':
  
                    
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);

                    userfavorite.type = "User";
                    break;


                    case 'Pages':

                    var fav = localStorage.getItem("selectedUser");
  
                    localStorage.setItem("userfavorite", fav);

                    userfavorite.type = "Page";
                    break;

                    case 'Events':
  
                    
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);
                    userfavorite.type = "Event";
                    break;

                    case 'Places':
  
                    
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);
                    userfavorite.type = "Places";
                    break;

                    case 'Groups':
  
                     
                    var fav = localStorage.getItem("selectedUser");
                    
                    localStorage.setItem("userfavorite", fav);
                    userfavorite.type = "Groups";
                    break;


                  
                default:
                    return false;
            }
        
        $scope.other_favorite_stars++;
    };
    $scope.removeFromFavorites = function (entity, id) {
        switch (entity) {
            case 'Users':
            if(localStorage.getItem("userfavorite")){
                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);
                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
            }
        }
                
                break;

                 case 'Pages':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;

                 case 'Events':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;

                 case 'Places':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;

                 case 'Groups':
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));

                    return removedUser.id !== id;
                }
                
                }
            
        }
                
                break;
            
            default:

 
                 if(localStorage.getItem("userfavorite")) {

                removedUser = JSON.parse(localStorage.getItem("userfavorite"));

                for (var i=0;i<removedUser.length;i++){

                    if(removedUser[i].id === id){
                
                        removedUser.splice(i,1);

                        localStorage.removeItem("userfavorite");
                        localStorage.setItem("userfavorite",JSON.stringify(removedUser));
                        localStorage.setItem("selectedUser",JSON.stringify(removedUser));
                        
                        $scope.u = JSON.parse(localStorage.getItem("userfavorite"));

                        
                    return removedUser.id !== id;
                }
                
                }
            
        }
                
             
         return false;
        }
        $scope.other_favorite_stars++;
    };

});


  

