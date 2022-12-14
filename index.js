$questionJson = {
    "questions":{
        "1":{
            "text": "I could develop romantic feelings for a person who acts traditionally feminine",
            "category": "romantic",
            "answers": {
                "1": "Disagree",
                "2": "Somewhat disagree",
                "3": "Unsure",
                "4": "Somewhat Agree",
                "5": "Agree"
            }
        },
        "2":{},
        "3":{},
        "4":{},
        "5":{},
        "6":{}
    }
};

$(function () {

    $('#get-started-button').on('click', function() {
        $('#get-started-section').hide();
        showNextSection();
    });

    function showNextSection() {
        const currentQuestionNumber = $('section[id^="question-"]').attr('id').replace("question-", "");
        buildNextQuestion(currentQuestionNumber);
       //  console.log(currentQuestionNumber);
       //  $('#question-1').show();
    }

    function showPreviousSection() {

    }

    function buildNextQuestion(number) {
        const template = `
            <section id="question-1" class="section is-align-items-center">
            <p class="subtitle">I could develop romantic feelings for a person who acts traditionally feminine</p>
            <div class="control">
            <label class="radio">
                <input type="radio" name="question-1" />
                Disagree
            </label>
            <label class="radio">
                <input type="radio" name="question-1" />
                Somewhat Disagree
            </label>
            <label class="radio">
                <input type="radio" name="question-1" />
                Unsure
            </label>
            <label class="radio">
                <input type="radio" name="question-1" />
                Somewhat Agree
            </label>
            <label class="radio">
                <input type="radio" name="question-1" />
                Agree
            </label>
            </div>
        </section>
      `;
      console.log(`#question-${number}`);
      $(`#question-${number}`).replaceWith(template);
    }


//     const DATA_COUNT = 7;
//     const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

//     const labels = Utils.months({count: 7});
//     const data = {
//     labels: labels,
//     datasets: [
//         {
//         label: 'Dataset 1',
//         data: Utils.numbers(NUMBER_CFG),
//         borderColor: Utils.CHART_COLORS.red,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//         },
//         {
//         label: 'Dataset 2',
//         data: Utils.numbers(NUMBER_CFG),
//         borderColor: Utils.CHART_COLORS.blue,
//         backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
//         }
//     ]
//     };

//     const config = {
//         type: 'radar',
//         data: data,
//         options: {
//           responsive: true,
//           plugins: {
//             title: {
//               display: true,
//               text: 'Chart.js Radar Chart'
//             }
//           }
//         },
//       };


});