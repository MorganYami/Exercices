
var jsonOgj = [];
jsonObj = JSON.parse(http_request.responseText);

$("#accueil").click(function () {
    $.getJSON("contenu.json", function (result) {
        $.each(result, function () {

            var titre = jsonObj[0].titre;
            var para = jsonObj[0].paragraphe;

            $('h1').text(titre);
            $("p").text(para);

        });
    });
});

$("#lien1").click(function () {
    $.getJSON("contenu.json", function (result) {
        $.each(result, function () {

            var titre = jsonObj[1].titre;
            var para = jsonObj[1].paragraphe;

            $('h1').text(titre);
            $("p").text(para);

        });
    });
});

$("#page2").click(function () {
    $.getJSON("contenu.json", function (result) {
        $.each(result, function () {

            var titre = jsonObj[2].titre;
            var para = jsonObj[2].paragraphe;

            $('h1').text(titre);
            $("p").text(para);

        });
    });
});
