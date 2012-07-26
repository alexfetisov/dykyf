function get_info_about_me(callback, access_token) {
    console.log("start getting information about me");
    FB.api('/me', function(response) {
        callback(response);
    });
}

function build_query(query_fields, table, where) {
    var query = "SELECT ";
    var first = true;
    for (var item in query_fields) {
        if (!first)
            query += "," + query_fields[item];
        else {
            query += query_fields[item];
            first = false;
        }
    }
    query.substr(0, query.length - 1);
    query += " FROM ";
    query += table;
    query += " WHERE ";
    query += where;
    return query;
}

function get_info_about_my_friends(callback) {
    var query_fields = [
        "uid", "first_name", "last_name", "pic", "birthday_date", "relationship_status",
        "hometown_location", "music", "pic_small", "wall_count", "education",
        "work", "sports", "friend_count", "languages", "mutual_friend_count"];
    var where = "uid IN (SELECT uid2 FROM friend WHERE uid1 = me())";
    var query = build_query(query_fields, "user", where);
    console.log(query);
    console.log("start getting information about my friends");
    FB.api(
        {
            method: 'fql.query',
            query: query
        },
        function(response) {
            callback(response);
        }
    );
}

function get_my_friends_name_and_picture(callback) {
    var query_fields = [
        "uid", "first_name", "last_name", "pic", "pic_small"];
    var where = "uid IN (SELECT uid2 FROM friend WHERE uid1 = me())";
    var query = build_query(query_fields, "user", where);
    console.log(query);
    console.log("start getting information about my friends");
    FB.api(
        {
            method: 'fql.query',
            query: query
        },
        function(response) {
            //run_names_quiz(response);
            console.log("get");
            callback(response);
        }
    );
}


