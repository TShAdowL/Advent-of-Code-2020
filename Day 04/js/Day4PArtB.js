let LinesB = "";
let LinesProcessB = "";
let ArrayIndexB = 0;
let LinesArrayB = new Array();
let PassportsIsValidB = 0;
let PassportFlag;

    function FilePassportsReadB() {
        let FileRequest = new XMLHttpRequest();
        let FilePassports = "js/Passports.txt";
        let FileText;
            FileRequest.open("GET", FilePassports, false);
            FileRequest.send(null);
                FileText = FileRequest.responseText;
                LinesB = FileText.split("\n");
    }

    function LineProcessB(LineRead) {
        if(LineRead.length > 1)
        { LinesProcessB += LineRead + " "; }
        else {
            LinesArrayB[ArrayIndexB] = LinesProcessB;
            LinesProcessB = "";
            ArrayIndexB++;
        }
    }

    function PassportValidate1B(PassportData) {
        if(PassportData.includes("byr:")) {
            if(PassportData.includes("iyr:")) {
                if(PassportData.includes("eyr:")) {
                    if(PassportData.includes("hgt:")) {
                        if(PassportData.includes("hcl:")) {
                            if(PassportData.includes("ecl:")) {
                                if(PassportData.includes("pid:")) {
                                    PassportFlag = true;
                                    ReportValidate2B(PassportData);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function ReportValidate2B(PassportData) {
        let PassportArray = new Array();
            PassportArray = PassportData.split(" ");
                PassportArray.forEach(function(PassportField) { ReportValidate3B(PassportField); });
                    if(PassportFlag)
                    { PassportsIsValidB++; }
    }

    function ReportValidate3B(PassportField) {
        let PassportFieldValue;
            if(PassportField.length > 1) {
                PassportField = PassportField.trim();

                if(PassportField.includes("byr:")) {
                    PassportFieldValue = PassportField.replace("byr:", "");
                        if(PassportFieldValue.length !== 4)
                        { PassportFlag = false;}
                        else if((parseInt(PassportFieldValue) < 1920) || (parseInt(PassportFieldValue) > 2002))
                        { PassportFlag = false;}
                }
                if((PassportFlag) && (PassportField.includes("iyr:"))) {
                    PassportFieldValue = PassportField.replace("iyr:", "");
                        if(PassportFieldValue.length !== 4)
                        { PassportFlag = false; }
                        else if((parseInt(PassportFieldValue) < 2010) || (parseInt(PassportFieldValue) > 2020))
                        { PassportFlag = false; }
                }
                if((PassportFlag) && (PassportField.includes("eyr:"))) {
                    PassportFieldValue = PassportField.replace("eyr:", "");
                        if(PassportFieldValue.length !== 4)
                        { PassportFlag = false; }
                        else if((parseInt(PassportFieldValue) < 2020) || (parseInt(PassportFieldValue) > 2030))
                        { PassportFlag = false; }
                }
                if((PassportFlag) && (PassportField.includes("hgt:"))) {
                    PassportFieldValue = PassportField.replace("hgt:", "");
                        if(PassportFieldValue.includes("cm")) {
                            PassportFieldValue = PassportFieldValue.replace("cm");
                                if((parseInt(PassportFieldValue) < 150) || (parseInt(PassportFieldValue) > 193))
                                { PassportFlag = false; }
                        }
                        else if(PassportFieldValue.includes("in")) {
                            PassportFieldValue = PassportFieldValue.replace("in");
                                if((parseInt(PassportFieldValue) < 59) || (parseInt(PassportFieldValue) > 76))
                                { PassportFlag = false; }
                        }
                        else
                        { PassportFlag = false; }
                }
                if((PassportFlag) && (PassportField.includes("hcl:"))) {
                    PassportFieldValue = PassportField.replace("hcl:", "");
                        if(PassportFieldValue.includes("#")) {
                            PassportFieldValue = PassportFieldValue.replace("#", "");
                                if(PassportFieldValue.length === 6) {
                                    for (let i = 0; i < 6; i++) {
                                        if((PassportFieldValue[i] !== "a") && (PassportFieldValue[i] !== "b") && (PassportFieldValue[i] !== "c") && (PassportFieldValue[i] !== "d") && (PassportFieldValue[i] !== "e") && (PassportFieldValue[i] !== "f") && (PassportFieldValue[i] !== "1") && (PassportFieldValue[i] !== "2") && (PassportFieldValue[i] !== "3") && (PassportFieldValue[i] !== "4") && (PassportFieldValue[i] !== "5") && (PassportFieldValue[i] !== "6") && (PassportFieldValue[i] !== "7") && (PassportFieldValue[i] !== "8") && (PassportFieldValue[i] !== "9") && (PassportFieldValue[i] !== "0"))
                                        { PassportFlag = false; }
                                    }
                                }
                                else
                                { PassportFlag = false;}
                        }
                        else
                        { PassportFlag = false; }
                }
                if((PassportFlag) && (PassportField.includes("ecl:"))) {
                    PassportFieldValue = PassportField.replace("ecl:", "");
                        if(PassportFieldValue.length === 3) {
                            if((PassportFieldValue !== "amb") && (PassportFieldValue !== "blu") && (PassportFieldValue !== "brn") && (PassportFieldValue !== "gry") && (PassportFieldValue !== "grn") && (PassportFieldValue !== "hzl") && (PassportFieldValue !== "oth"))
                            { PassportFlag = false; }
                        }
                        else
                        { PassportFlag = false; }
                }
                if((PassportFlag) && (PassportField.includes("pid:"))) {
                    PassportFieldValue = PassportField.replace("pid:", "");
                        if(PassportFieldValue.length !== 9)
                        { PassportFlag = false; }
                }
            }
    }

    function PuzzleySolutionB(){
        FilePassportsReadB();
            LinesB.forEach(function(LineRead) { LineProcessB(LineRead); });
            LinesArrayB.forEach(function(Passport) { PassportValidate1B(Passport); });
                console.log(`>${PassportsIsValidB} passports are valid.`);
    }

    PuzzleySolutionB();