function grab_my_friends(access_token, model_me) {
    console.log("My friends from facebook");
    var begin_my_friends = get_my_friends_name_and_picture(
        function(model_friends) {
            console.log("!");
            run_names_quiz(model_friends);
            document.getElementById("question_area").innerHTML = "Ready! Steady! Go!";
            load_question(0);
        }
    )
}


function init() {
    document.getElementById("fb").innerHTML="<div id='fb-root'></div>";
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '265355193569982', // App ID
            status     : true, // check login status
            cookie     : true, // enable cookies to allow the server to access the session
            xfbml      : true  // parse XFBML
        });
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                var friends_names_and_photos = prepare_data(response);
                run_names_quiz(friends_names_and_photos);
            } else if (response.status === 'not_authorized') {
            } else {
            }
        });

        // Additional initialization code here
    };

    // Load the SDK Asynchronously
    (function(d){
        var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement('script'); js.id = id; js.async = true;
        js.src = "http://connect.facebook.net/en_US/all.js";
        ref.parentNode.insertBefore(js, ref);
    }(document));
}

window.onload = function() {
    init();
    document.getElementById("question_area").innerHTML = "Preparing first task...";
}

$.ready = function() {
    console.log("ready");
}

