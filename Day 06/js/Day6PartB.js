let LinesB = "";
let AnswersCountB = 0;
let AnswersIndex = 0;
let LinesArrayB = new Array();

    function FileAnswersReadB() {
        let FileRequest = new XMLHttpRequest();
        let FilePassports = "js/Answers.txt";
        let FileText;
            FileRequest.open("GET", FilePassports, false);
            FileRequest.send(null);
                FileText = FileRequest.responseText;
                LinesB = FileText.split("\n");
    }

    function LineProcessB(LineRead) {
        let AnswersRepeat = "";
        let AnsWerAcum = "";
            LineRead = LineRead.replace(/\n|\r/g, "");
                if(LineRead.length !== 0) {
                        for (let i = 0; i < LineRead.length; i++) {
                            if (!AnswersRepeat.includes(LineRead[i])) {
                                AnswersRepeat += LineRead[i];
                            }
                        }
                    LinesArrayB[AnswersIndex] = AnswersRepeat;
                    AnswersIndex++;
                }
                else {
                    AnswersRepeat = LinesArrayB[0];
                        for (let i = 1; i < LinesArrayB.length; i++) {
                            for (let j = 0; j < LinesArrayB[i].length; j++) {
                                if (AnswersRepeat.includes(LinesArrayB[i][j]))
                                { AnsWerAcum += LinesArrayB[i][j]; }
                            }
                                AnswersRepeat = AnsWerAcum;
                                AnsWerAcum = "";
                        }
                    AnswersCountB += AnswersRepeat.length;
                    LinesArrayB = new Array();
                    AnswersIndex = 0;
                }
    }

    function PuzzleySolutionB(){
        FileAnswersReadB();
            LinesB.forEach(LineRead => { LineProcessB(LineRead); });
                console.log(`${AnswersCountB} is the sum of those counts.`);
    }

    PuzzleySolutionB();
