let correct = 0, incorrect = 0, curr = 0;

const dict = [
    { eng: 'incomparable', uk: 'незрівнянний' },
    { eng: 'man', uk: 'чоловік' },
    { eng: 'for example', uk: 'наприклад' },
    { eng: 'frankly speaking', uk: 'коротше кажучи' },
    { eng: 'newspaper', uk: 'газета' },
    { eng: 'car', uk: 'автомобіль' },
    { eng: 'background', uk: 'фон' },
    { eng: 'lady', uk: 'пані' },
    { eng: 'clothes', uk: 'одяг' },
    { eng: 'offer', uk: 'запропонувати' },
];

$("#repeat-box button").click(restart);
$("button#check").click(check);

function shuffleAnswers() {
    for (let i = dict.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [dict[i], dict[j]] = [dict[j], dict[i]];
    }
}

function check() {
    if ($('#answer').val().toLowerCase().trim() === dict[curr].uk) {
        correct++;
        $('#correct').text(correct + '/10');
    } else {
        incorrect++;
        $('#incorrect').text(incorrect + '/10');
    }

    if (curr === 9) {
        $('#repeat-box #message').text('You guessed ' + correct + ' слів з 10!');
        $('#repeat-box').show();
        $('#check').prop('disabled', true);
        return;
    }

    curr++;
    $('#card').text(dict[curr].eng);
    $('#cards-left').text((curr + 1) + '/10');
    $('#answer').val(null);
}

function restart() {
  shuffleAnswers();
  curr = correct = incorrect = 0;

  $("#cards-left").text('1/10');
  $('#correct').text(correct + '/10');
  $('#incorrect').text(incorrect + '/10');
  $("#card").text(dict[curr]);
  $("#repeat-box").hide();
  $('#check').prop('disabled', false);
}

shuffleAnswers();
$('#card').text(dict[curr].eng);
