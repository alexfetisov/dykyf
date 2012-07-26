function get_x_random_from_list(x, list_size, exclude) {
    var result = [];
    var list = [];
    for (var i = 0; i < list_size; ++i) {
        if (i !== exclude)
            list.push(i);
    }
    if (x > list_size) {
        console.log("List has less than " + x + " elements");
        return list;
    }
    while (x > 0) {
        var rnd_number = Math.floor(Math.random() * list_size);
        result.push(parseInt(list[rnd_number]));
        list.splice(rnd_number, 1);
        list_size--;
        x--;
    }
    return result;
}

function build_questions(friends_list) {
    try {
        console.log("Start");
        var result = [];
        var n_friends = friends_list.length;
        var need = Math.min(10, n_friends);
        var indices = get_x_random_from_list(need, n_friends, -1);
        for (var i in indices) {
            var current = {};
            var list_answers = [];
            var answer_indices = get_x_random_from_list(5, n_friends, indices[i]);
            for (var j in answer_indices) {
                list_answers.push(friends_list[j].pic);
            }
            list_answers.push(friends_list[indices[i]].pic);

            current['name'] = friends_list[indices[i]].first_name + " " + friends_list[indices[i]].last_name;
            current['list'] = list_answers;
            result.push(current);
        }
        return result;
    }
    catch (ex) {
        return null;
    }
}

var current = 0;

function run_names_quiz(friends_list) {
    if (friends_list.length <= 0) { return; }
    questions = build_questions(friends_list);
    console.log(questions);
    $.cookie("question1", questions, "first questions");
}