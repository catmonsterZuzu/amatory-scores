let questionsJson = {
    "questions":{
        "0": {
            "text": "Welcome frineds",
            "subtext": "Let's get started, shall we?"
        },
        "1":{
            "text": "I could develop romantic feelings for a person who acts traditionally feminine",
            "category": "assertiveness"
        },
        "2":{
            "text": "I could develop romantic feelings for a person who acts traditionally masculine",
            "category": "assertiveness"
        },
        "3":{
            "text": "",
            "category": "assertiveness"
        },
        "4":{
            "text": "",
            "category": "assertiveness"
        },
        "5":{
            "text": "",
            "category": "assertiveness"
        },
        "6":{
            "text": "",
            "category": "assertiveness"
        },
        "7":{
            "text": "",
            "category": "assertiveness"
        },
        "8":{
            "text": "",
            "category": "assertiveness"
        },        
        "9":{
            "text": "",
            "category": "assertiveness"
        }
    }
};

let answersJson = {
    "romantic": 0,
    "physical": 0,
    "assertive": 0,
    "affection": 0,
    "libido": 0,
    "experimental": 0
};

$(function () {

    $('#get-started-button').on('click', function() {
        showQuestion('next');
    });

    $('#previous-button').on('click', function() {
        showQuestion('previous');
    });

    $('#start-over-button').on('click', function() {

    //     const template = `<section id="question-0" class="section is-align-items-center">
    //     <div class="container">
    //         <h1 class="title">Welcome friends</h1>
    //         <p class="subtitle">Let's get started, shall we?</p>
    //       </div>
    //   </section>`;
    //   $(`#question-${currentQuestionNumber}`).replaceWith(template);

    });

    function showQuestion(nextOrPrevious) {
        const currentQuestionNumber = Number($('section[id^="question-"]').attr('id').replace("question-", ""));
        const newQuestionNumber = (nextOrPrevious === 'next') ? currentQuestionNumber + 1 : currentQuestionNumber - 1;
        const newQuestion = questionsJson.questions[newQuestionNumber].text;
        let template = '';

        if (newQuestionNumber === 3) {
            template = `<section id="question-${newQuestionNumber}" class="section is-align-items-center">
                <p class="title">Your results</p>
                <div style="max-width: 80%; margin: auto;">
                    <canvas id="myChart"></canvas>
                </div>
            </section>`;

            $(`#question-${currentQuestionNumber}`).replaceWith(template);
            $('#previous-button').hide();
            $('#start-over-button').show();

            showRadarChart();
            return;
        }

        if (newQuestionNumber === 0) {
            template = `<section id="question-0" class="section is-align-items-center">
                <div class="container">
                    <h1 class="title">Welcome friends</h1>
                    <p class="subtitle">Let's get started, shall we?</p>
                </div>
            </section>`;

            $('#get-started-button').show();
            $('#previous-button').hide();

        } else {
            template = `<section id="question-${newQuestionNumber}" class="section is-align-items-center">
                <p class="title">Question ${newQuestionNumber} of 64</p>
                <p class="subtitle">${newQuestion}</p>
                <button id="question-${newQuestionNumber}-1" data-answer="-2" class="question-button button is-rounded is-medium is-fullwidth mt-3">Disagree</button>
                <button id="question-${newQuestionNumber}-2" data-answer="-1" class="question-button button is-rounded is-medium is-fullwidth mt-3">Somewhat Disagree</button>
                <button id="question-${newQuestionNumber}-3" data-answer="0" class="question-button button is-rounded is-medium is-fullwidth mt-3">Unsure</button>
                <button id="question-${newQuestionNumber}-4" data-answer="1" class="question-button button is-rounded is-medium is-fullwidth mt-3">Somewhat Agree</button>
                <button id="question-${newQuestionNumber}-5" data-answer="2" class="question-button button is-rounded is-medium is-fullwidth mt-3">Agree</button>
            </section>`;

            $('#get-started-button').hide();
            $('#previous-button').show();
        }

        $(`#question-${currentQuestionNumber}`).replaceWith(template);

        $('.question-button').on('click', function() {
            answersJson[questionsJson.questions[newQuestionNumber].category] += Number($(this).attr('data-answer'));
            showQuestion('next');
        });
    }

    function showRadarChart() {
        const ctx = document.getElementById('myChart');
        // TODO: Romantic and Physical Attraction will have to go on a different scale, since we're measuring attraction to gender there.
        // Perhaps male/female/non-binary? 

        // IF less than 0, then we set them at 0 since we're doing a radar chart. Perhaps there's a way to better display negative stats later?
        // const romanticScore     = (answersJson['romantic'] > 0) ? answersJson['romantic'] : 0;
        // const physicalScore     = (answersJson['physical'] > 0) ? answersJson['physical'] : 0;
        const assertiveScore    = (answersJson['assertive'] > 0) ? answersJson['assertive'] : 0;
        const affectionScore    = (answersJson['affection'] > 0) ? answersJson['affection'] : 0;
        const libidoScore       = (answersJson['libido'] > 0) ? answersJson['libido'] : 0;
        const experimentalScore = (answersJson['experimental'] > 0) ? answersJson['experimental'] : 0;

        const data = {
            labels: [
            //   'Romantic',
            //   'Physical',
              'Assertive',
              'Affection',
              'Libido',
              'Experimental'
            ],
            datasets: [{
                label: 'Amatory Scores',
                data: [
                    // romanticScore,
                    // physicalScore,
                    assertiveScore,
                    affectionScore,
                    libidoScore,
                    experimentalScore
                ],
                fill: true,
                backgroundColor: 'rgba(240, 186, 255, 0.2)',
                borderColor: 'rgb(236, 166, 255)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
          };
          
        new Chart(ctx, {
            type: 'radar',
            data: data,
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        ticks: {
                            display: false
                        },
                        suggestedMin: 0,
                        suggestedMax: 20
                    }
                }
            }
        });
    }

});