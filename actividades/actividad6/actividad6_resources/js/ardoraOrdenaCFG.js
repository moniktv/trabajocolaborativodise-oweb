var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=3;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=2; messageOk="felicitaciones lo lograste"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkNg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["SFRNTCBlcyB1biBsZW5ndWFqZSBkZSBtYXJjYWRvIHBhcmEgY3JlYXIgcGFnaW5hcyBkZSBpbnRlcm5ldC4","RGlzZfFvIHdlYiBhY3RpdmlkYWQgcXVlIGNvbnNpc3RlIGVuIHBsYW5lYXIsIGRpc2XxYXIgZSBpbXBsZW1lbnRhciB5IGNyZWFyIHBhZ2luYXMgd2Iu","R2l0aHViIHNpc3RlbWEgZ2VzdG9yIGRlIHByb3llY3RvcyB5IGNvbnRyb2wgZGUgdmVyc2lvbmVzIGRlIGNvZGlnby4","RWwgcmVwb3NpdG9yaW8gZXNwYWNpbyBkb25kZSBzZSBhbG1hY2VuYSwgb3JnYW5pemEsIG1hbnRpZW5lIHkgZGlmdW5kZSBpbmZvcm1hY2lvbiBkaWdpdGFsLg","Q1NTIGxlbmd1YWplIHVzYWRvIHBhcmEgZWwgZXN0aWxvIGRlIGxhIHByZXNlbnRhY2lvbiBkZSB1bmEgcGFnaW5hIHdlYi4"];imaW=["","","","",""];queW=["","","","",""]; c=[62,87,68,91,71];
var auW=["","","","",""];
var actMaxWidth="600"; actMaxHeight="400";indexG=0;profG=0;dirMedia="actividad6_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];
