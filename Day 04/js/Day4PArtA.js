let LinesA = "";
let LinesProcessA = "";
let ArrayIndexA = 0;
let LinesArrayA = new Array();
let PassportsIsValidA = 0;

    function FilePassportsReadA() {
        let FileRequest = new XMLHttpRequest();
        let FilePassports = "js/Passports.txt";
        let FileText;
            FileRequest.open("GET", FilePassports, false);
            FileRequest.send(null);
                FileText = FileRequest.responseText;
                LinesA = FileText.split("\n");
    }

    function LineProcessA(LineRead) {
        if(LineRead.length > 1)
        { LinesProcessA += LineRead + " "; }
        else {
            LinesArrayA[ArrayIndexA] = LinesProcessA;
            LinesProcessA = "";
            ArrayIndexA++;
        }
    }

    function PassportValidateA(PassportData){
        if(PassportData.includes("byr:")) {
            if(PassportData.includes("iyr:")) {
                if(PassportData.includes("eyr:")) {
                    if(PassportData.includes("hgt:")) {
                        if(PassportData.includes("hcl:")) {
                            if(PassportData.includes("ecl:")) {
                                if(PassportData.includes("pid:")) {
                                    PassportsIsValidA++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function PuzzleySolutionA(){
        FilePassportsReadA();
            LinesA.forEach(function(LineRead) { LineProcessA(LineRead); });
            LinesArrayA.forEach(function(Passport) { PassportValidateA(Passport); });
                console.log(`>${PassportsIsValidA} passports are valid.`);
    }

    PuzzleySolutionA();
