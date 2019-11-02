//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="resolviste corectamente el crucigrama"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Rw","SQ","VA","SA","VQ","Qg","","","Vg","","UA"],["","","","VA","","RQ","","","RQ","","VQ"],["","QQ","","TQ","","Vw","","","Ug","","Qg"],["","VA","","TA","Rg","Tw","Ug","Sw","Uw","","TA"],["","RQ","","","","0Q","","","SQ","","SQ"],["","VQ","","","","RQ","","","Tw","","Qw"],["QQ","UQ","TA","Rg","VQ","Uw","SQ","Tw","Tg","","QQ"],["TQ","SQ","TA","","","SQ","","","","","Ug"],["QQ","VA","VQ","","Qw","RA","","","","",""],["Ug","RQ","UA","Tw","Uw","SQ","VA","Tw","Ug","SQ","Tw"],["","","","","Uw","Tw","SQ","Qg","TQ","QQ","Qw"]];
var x1=[];
var y1=[];
var x2=[];
var y2=[];
var imaCW=[];
var audioCW=[];
var defCW=[];
var colNum=11;
var rowNum=11;
