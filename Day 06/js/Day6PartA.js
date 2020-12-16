let LinesA = "";
let LinesProcessA = "";
let ArrayIndexA = 0;
let LinesArrayA = new Array();
let AnswersCountA = 0;

    function FileAnswersReadA() {
        let FileRequest = new XMLHttpRequest();
        let FilePassports = "js/Answers.txt";
        let FileText;
            FileRequest.open("GET", FilePassports, false);
            FileRequest.send(null);
                FileText = FileRequest.responseText;
                LinesA = FileText.split("\n");
    }

    function LineProcessA(LineRead) {
        if(LineRead.length > 1)
        { LinesProcessA += LineRead; }
        else {
            LinesArrayA[ArrayIndexA] = LinesProcessA;
            LinesProcessA = "";
            ArrayIndexA++;
        }
    }

    function PuzzleyAnswersA(Answers) {
        let AnswersRepeat = "";
        Answers = Answers.replace(/\n|\r/g, "");
            for (let i = 0; i < Answers.length; i++) {
                if (!AnswersRepeat.includes(Answers[i])) {
                    AnswersRepeat += Answers[i];
                    AnswersCountA++;
                }
            }
    }

    function PuzzleySolutionA(){
        FileAnswersReadA();
            LinesA.forEach(function(LineRead) { LineProcessA(LineRead); });
            LinesArrayA.forEach(function(Answers) { PuzzleyAnswersA(Answers); });
                console.log(`${AnswersCountA} is the sum of those counts.`);
    }

    PuzzleySolutionA();
