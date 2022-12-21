let questionsJson = {
    "questions":{
        "0": {
            "text": "Welcome friends",
            "subtext": "Let's get started, shall we?"
        },
        "1":{
            "text": "I could develop romantic feelings for a person who acts traditionally feminine.",
            "category": "romantic-f"
        },
        "2":{
            "text": "I could develop romantic feelings for a person who acts traditionally masculine.",
            "category": "romantic-m"
        },
        "3":{
            "text": "I could develop romantic feelings for a person who acts neither traditionally masculine nor feminine.",
            "category": "romantic-nb"
        },
        "4":{
            "text": "I would have a romantic relationship with a person who identifies as a woman.",
            "category": "romantic-f"
        },
        "5":{
            "text": "I would have a romantic relationship with a person who identifies as a man.",
            "category": "romantic-m"
        },
        "6":{
            "text": "I would have a romantic relationship with a person who identifies as non-binary.",
            "category": "romantic-nb"
        },
        "7":{
            "text": "I have had romantic feelings for people who would be traditionally be considered feminine.",
            "category": "romantic-f"
        },
        "8":{
            "text": "I have had romantic feelings for people who would be traditionally be considered masculine.",
            "category": "romantic-m"
        },        
        "9":{
            "text": "I have had romantic feelings for people who were neither traditionally masculine nor feminine.",
            "category": "romantic-nb"
        },
        "10": {
            "text": "I feel physically attracted to people that present as traditionally masculine.",
            "category": "physical-m"
        },
        "11":{
            "text": "I feel physically attracted to people that present as traditionally feminine.",
            "category": "physical-f"
        },
        "12":{
            "text": "I feel physically attracted to people that present as neither traditionally masculine nor feminine.",
            "category": "physical-nb"
        },
        "13":{
            "text": "I would have a sexual relationship with a person that identifies as a man.",
            "category": "physical-m"
        },
        "14":{
            "text": "I would have a sexual relationship with a person that identifies as a woman.",
            "category": "physical-f"
        },
        "15":{
            "text": "I would have a sexual relationship with a person that identifies as non-binary.",
            "category": "physical-nb"
        },
        "16":{
            "text": "I am physically attracted to masculine anatomy and/or genitalia.",
            "category": "physical-m"
        },
        "17":{
            "text": "I am physically attracted to feminine anatomy and/or genitalia.",
            "category": "physical-f"
        },
        "18":{
            "text": "I am physically attracted to a person regardless of their anatomy or genitalia.",
            "category": "physical-nb"
        },
        "19":{
            "text": "I prefer to initiate sexual encounters.",
            "category": "assertiveness"
        },
        "20":{
            "text": "I prefer making decisions in the bedroom.",
            "category": "assertiveness"
        },
        "21":{
            "text": "I am not afraid to tell my partner(s) what I need or prefer.",
            "category": "assertiveness"
        },
        "22":{
            "text": "I enjoy feeling powerful in sexual situations.",
            "category": "assertiveness"
        },
        "23":{
            "text": "I enjoy flirting and teasing.",
            "category": "assertiveness"
        },
        "24":{
            "text": "I find myself leading in the bedroom more often than following.",
            "category": "assertiveness"
        },
        "25":{
            "text": "I prefer to have aftercare after sex.",
            "category": "affection"
        },
        "26":{
            "text": "I prefer to have foreplay before sex.",
            "category": "affection"
        },
        "27":{
            "text": "I enjoy using sex as a way to connect intimately.",
            "category": "affection"
        },
        "28":{
            "text": "I enjoy being physically affectionate towards my partner, even when sex is not involved.",
            "category": "affection"
        },
        "29":{
            "text": "I enjoy being verbally affectionate towards my partner, even when sex is not involved.",
            "category": "affection"
        },
        "30":{
            "text": "I enjoy performing actions that make my partner feel loved.",
            "category": "affection"
        },
        "31":{
            "text": "I prefer to masturbate at least once a day.",
            "category": "libido"
        },
        "32":{
            "text": "I prefer to have sex at least once a day.",
            "category": "libido"
        },
        "33":{
            "text": "I often find myself thinking about sexual situations, ideas, etc.",
            "category": "libido"
        },
        "34":{
            "text": "I often find myself wanting more sex than my partner(s).",
            "category": "libido"
        },
        "35":{
            "text": "I enjoy the sexual aspect of relationships more than the emotional connection.",
            "category": "libido"
        },
        "36":{
            "text": "I enjoy sex as an outlet for pent up stress.",
            "category": "libido"
        },
        "37":{
            "text": "I own many sex toys, erotic books/comics, etc.",
            "category": "experimental"
        },
        "38":{
            "text": "I am comfortable engaging in sexual activities that I am unfamiliar with.",
            "category": "experimental"
        },
        "39":{
            "text": "Knowing that a sexual act is not generally socially accepted makes it more exciting.",
            "category": "experimental"
        },
        "40":{
            "text": "Some of my sexual interests may be uncommon or not socially acceptable to some people.",
            "category": "experimental"
        },
        "41":{
            "text": "I’m more likely than my partner(s) to be bring new experiences into the bedroom.",
            "category": "experimental"
        },
        "42":{
            "text": "I am always looking for new kinks or ideas to explore in the bedroom.",
            "category": "experimental"
        },
        "43":{
            "text": "You have reached the end",
            "subtext": "I hope you enjoyed the quiz"
        }
    }
};

let answersJson = {
    "romantic-m": 0,
    "romantic-f": 0,
    "romantic-nb": 0,
    "physical-m": 0,
    "physical-f": 0,
    "physical-nb": 0,
    "assertiveness": 0,
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
        const currentQuestionNumber = Number($('[id^="question-"]').attr('id').replace("question-", ""));
        const newQuestionNumber = (nextOrPrevious === 'next') ? currentQuestionNumber + 1 : currentQuestionNumber - 1;
        const newQuestion = questionsJson.questions[newQuestionNumber].text;
        let template = '';

        if (newQuestionNumber === 43) {
            $('#previous-button').hide();
            $('#start-over-button').show();

            showAmatoryAttributesRadarChart(newQuestionNumber, currentQuestionNumber);
            showAttractionRadarChart(newQuestionNumber, currentQuestionNumber);
            return;
        }

        if (newQuestionNumber === 0) {
            template = `<div id="question-0" class="container is-align-items-center">
                <div class="container">
                    <h1 class="title">Welcome friends</h1>
                    <p class="subtitle">Let's get started, shall we?</p>
                </div>
            </div>`;

            $('#get-started-button').show();
            $('#previous-button').hide();

        } else {
            template = `<div id="question-${newQuestionNumber}" class="container is-align-items-center">
                <p class="m-4 is-size-3 has-text-weight-semibold">Question ${newQuestionNumber} of 42</p>
                <div class="container is-widescreen">
                    <div class="notification is-link">
                        ${newQuestion}
                    </div>
                </div>
                <section>
                    <button id="question-${newQuestionNumber}-5" data-answer="2" class="question-button button is-link is-light is-rounded is-medium is-fullwidth mt-3">Agree</button>
                    <button id="question-${newQuestionNumber}-4" data-answer="1" class="question-button button is-link is-light is-rounded is-medium is-fullwidth mt-3">Somewhat Agree</button>
                    <button id="question-${newQuestionNumber}-3" data-answer="0" class="question-button button is-link is-light is-rounded is-medium is-fullwidth mt-3">Unsure</button>
                    <button id="question-${newQuestionNumber}-2" data-answer="-1" class="question-button button is-link is-light is-rounded is-medium is-fullwidth mt-3">Somewhat Disagree</button>
                    <button id="question-${newQuestionNumber}-1" data-answer="-2" class="question-button button is-link is-light is-rounded is-medium is-fullwidth mt-3">Disagree</button>
                </section>
            </div>`;

            $('#get-started-button').hide();
            $('#previous-button').show();
        }

        $(`#question-${currentQuestionNumber}`).replaceWith(template);

        $('.question-button').on('click', function() {
            answersJson[questionsJson.questions[newQuestionNumber].category] += Number($(this).attr('data-answer'));
            showQuestion('next');
        });
    }

    function showAmatoryAttributesRadarChart(newQuestionNumber, currentQuestionNumber) {
        const template = `<div id="question-${newQuestionNumber}" class="container is-align-items-center">
            <div style="max-width: 80%; margin: auto;">
                <canvas id="amatory-chart"></canvas>
            </div>
        </div>`;

        $('#amatory-chart-container').replaceWith(template);
        const ctx = document.getElementById('amatory-chart');

        const assertiveScore    = (answersJson['assertiveness'] > 0) ? answersJson['assertiveness'] : 0;
        const affectionScore    = (answersJson['affection'] > 0) ? answersJson['affection'] : 0;
        const libidoScore       = (answersJson['libido'] > 0) ? answersJson['libido'] : 0;
        const experimentalScore = (answersJson['experimental'] > 0) ? answersJson['experimental'] : 0;

        const data = {
            labels: [
                'Assertiveness',
                'Affection',
                'Libido',
                'Experimental'
            ],
            datasets: [{
                label: '',
                data: [
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
                plugins: {
                    legend: {
                        display: false
                    }
                },
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
                        suggestedMax: 12
                    }
                }
            }
        });
    }

    function showAttractionRadarChart(newQuestionNumber, currentQuestionNumber) {
        const template = `<div id="question-${newQuestionNumber}" class="container is-align-items-center">
            <p class="title">Your results</p>
            <div style="max-width: 80%; margin: auto;">
                <canvas id="attraction-chart"></canvas>
            </div>
        </div>`;

        $(`#question-${currentQuestionNumber}`).replaceWith(template);
        const ctx = document.getElementById('attraction-chart');
        // TODO: Romantic and Physical Attraction will have to go on a different scale, since we're measuring attraction to gender there.
        // Perhaps male/female/non-binary? 

        // IF less than 0, then we set them at 0 since we're doing a radar chart. Perhaps there's a way to better display negative stats later?
        // For romantic and physical attraction, we give 2x the weight so that it'll fit the chart properly
        const romanticMScore    = (answersJson['romantic-m'] > 0) ? answersJson['romantic-m'] : 0;
        const romanticFScore    = (answersJson['romantic-f'] > 0) ? answersJson['romantic-f'] : 0;
        const romanticNBScore   = (answersJson['romantic-nb'] > 0) ? answersJson['romantic-nb'] : 0;
        const physicalMScore    = (answersJson['physical-m'] > 0) ? answersJson['physical-m'] : 0;
        const physicalFScore    = (answersJson['physical-f'] > 0) ? answersJson['physical-f'] : 0;
        const physicalNBScore   = (answersJson['physical-nb'] > 0) ? answersJson['physical-nb'] : 0;

        console.log(physicalMScore);

        const data = {
            labels: [
                'Masculine Romantic',
                'Feminine Romantic',
                'Non-Binary Romantic',
                'Masculine Physical',
                'Feminine Physical',
                'Non-Binary Physical'
            ],
            datasets: [{
            label: '',
            data: [
                romanticMScore,
                romanticFScore,
                romanticNBScore,
                physicalMScore,
                physicalFScore,
                physicalNBScore
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)'
            ],
            borderWidth: 1
          }]
        };



        // const data = {
        //     labels: [
        //       'M Romantic',
        //       'F Romantic',
        //       'NB Romantic',
        //       'M Physical',
        //       'F Physical',
        //       'NB Physical'
        //     ],
        //     datasets: [{
        //         label: 'Amatory Scores',
        //         data: [
        //             romanticMScore,
        //             romanticFScore,
        //             romanticNBScore,
        //             physicalMScore,
        //             physicalFScore,
        //             physicalNBScore
        //         ],
        //         fill: true,
        //         backgroundColor: 'rgba(240, 186, 255, 0.2)',
        //         borderColor: 'rgb(236, 166, 255)',
        //         pointBackgroundColor: 'rgb(255, 99, 132)',
        //         pointBorderColor: '#fff',
        //         pointHoverBackgroundColor: '#fff',
        //         pointHoverBorderColor: 'rgb(255, 99, 132)'
        //     }]
        //   };


          new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    y: {
                        grid: {
                            drawOnChartArea: false
                        },
                        ticks: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        });
          
        // new Chart(ctx, {
        //     type: 'radar',
        //     data: data,
        //     options: {
        //         elements: {
        //             line: {
        //                 borderWidth: 3
        //             }
        //         },
        //         scales: {
        //             r: {
        //                 angleLines: {
        //                     display: true
        //                 },
        //                 ticks: {
        //                     display: false
        //                 },
        //                 suggestedMin: 0,
        //                 suggestedMax: 6
        //             }
        //         }
        //     }
        // });
    }

});