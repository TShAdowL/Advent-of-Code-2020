let LineAcumulators = "";
let FileRequest = new XMLHttpRequest();
let FilePassports = "js/Acumulators.txt";
    FileRequest.open("GET", FilePassports, false);
    FileRequest.send(null);
    LineAcumulators = FileRequest.responseText;
    
