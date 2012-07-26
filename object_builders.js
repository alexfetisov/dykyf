function build_all_information(access_token, model_me, model_friends) {
//    console.log(model_friends['data']);
    var friends_info = {};
    for (var i in model_friends) {
        var current_friend = {};
        current_friend["first_name"] = model_friends[i].first_name;
        current_friend["last_name"] = model_friends[i].last_name;
        current_friend["friend_count"] = model_friends[i].friend_count;
        current_friend["mutual_friends_count"] = model_friends[i].mutual_friend_count;
        current_friend["pic"] = model_friends[i].pic;
        current_friend["pic_small"] = model_friends[i].pic_small;
        current_friend["relationship_status"] = model_friends[i].relationship_status;
        current_friend["wall_count"] = model_friends[i].wall_count;

        current_friend["birthday"] = build_birthday(model_friends[i].birthday_date);
        current_friend["education"] = build_education(model_friends[i].education);
        current_friend["hometown"] = build_hometown(model_friends[i].hometown_location);
        current_friend["languages"] = build_languages(model_friends[i].languages);
        current_friend["sports"] = build_sports(model_friends[i].sports);
        current_friend["work"] = build_work(model_friends[i].work);

        friends_info[model_friends[i].uid] = current_friend;
    }
//    console.log(friends_info);
    return friends_info;
}

function build_set_of_questions(friends_info) {

}

function build_birthday(birthday) {
    var result = {};
    if (birthday != null) {
        var tokens = birthday.split("/");
        result["month"] = tokens[0];
        result["day"] = tokens[1];
        if (tokens.length > 2) { result["year"] = tokens[2]; }
    }
    return result;
}

function build_education(education_array) {
    var result = {};
    if (education_array != null) {
        for (var i in education_array) {
            var cur = education_array[i];
            var cresult = {};
            if (cur['school'] != null) {
                cresult['school'] = cur['school'].name;
                cresult['type'] = cur.type;
                result[i] = cresult;
            }
        }
    }
    return result;
}

function build_hometown(hometown) {
    if (hometown != null) {
        return hometown.city;
    }
    return null;
}

function build_languages(lang_array) {
    var result = {};
    if (lang_array != null) {
        for (var i in lang_array) {
            var cur = lang_array[i];
            var cresult = {};
            cresult['name'] = cur.name;
            result[i] = cresult;
        }
    }
    return result;
}

function build_sports(sport_array) {
    var result = {};
    if (sport_array != null) {
        for (var i in sport_array) {
            var cur = sport_array[i];
            var cresult = {};
            cresult['name'] = cur.name;
            result[i] = cresult;
        }
    }
    return result;
}

function build_work(work_array) {
    var result = {};
    if (work_array != null) {
        for (var i in work_array) {
            var cur = work_array[i];
            var cresult = {};
            if (cur['employer'] != null) {
                cresult['name'] = cur['employer'].name;
                result[i] = cresult;
            }
        }
    }
    return result;
}