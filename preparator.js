function prepare_data(response) {
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

        }
    );
}
