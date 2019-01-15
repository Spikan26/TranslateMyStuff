var textdata = undefined;

function Translate () {

    var input = document.getElementById("myInput").value;
    /*alert(input);*/
    var input2 = Search(input);
    $(".result").text(input);
    $(".result2").text(input2);
    $('#myInput').val("");

}

function AddCharacter (char){
    $('#myInput').val($('#myInput').val() + char);
}

function Search (input) {
    var result = "Not Found"
    textdata.forEach(function (d) {
        if(input == d.jp){
            result = d.eng;
        }
    })
    return result
}


$(function () {

    var datacsv = "dictionary.csv";

    d3.csv(datacsv,function (d) {
        data = d;
        data.forEach(function (d) {
            d.id = +d.id;
        });
        textdata = data;
        console.log(textdata);
    });

})