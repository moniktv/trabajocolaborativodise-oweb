//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="lograste relacionar correctamente"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="YWN0aXZpZGFkMw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["SFRNTA", "bGVuZ3VhamUgZGVtYXJjYWRvIHF1ZSBzZSB1dGlsaXphIHBhcmEgY3JlYXIgcGFnaW5hcyBkZSBpbnRlcm5ldC4"],["Rk9SSw", "Y29waWEgZXhhY3RhIGVuIGNydWRvIGRlbCByZXBvc2l0b3JpbyBvcmlnaW5hbC4"],["R0lUSFVC", "c2lzdGVtYSBnZXN0b3IgZGUgcHJveWVjdG9zIHkgY29udHJvbCBkZSB2ZXJzaW9uZXMgZGUgY29kaWdvLg"],["Q1NT", "bGVuZ3VhamUgdXNhZG8gcGFyYSBlbCBlc3RpbG8gZGUgbGEgcHJlc2VudGFjaW9uIGRlIGxhIHBhZ2luYSB3ZWIu"],["RElTRdFPIFdFQg", "YWN0aXZpZGFkIHF1ZSBjb25zaXN0ZSBlbiBsYSBwbGFuZWFjaW9uIGRpc2XxbyBlIGltcGxlbWVudGFjaW9uIGRlIHNpdGlvcyB3ZWIu"],["Q09OVFJPTCBERSBWRVJTSU9ORVM", "c2lzdGVtYSBxdWUgcmVnaXN0cmEgbG9zIGNhbWJpb3MgcmVhbGl6YWRvcyBzb2JyZSB1biBhcmNoaXZvLg"],["UFVMTA", "dHJhZSBsb3MgY2FtYmlvcyBxdWUgc2UgbGUgaGFjZW4gYWwgcmVwb3NpdG9yaW8gZGVqYW5kb2xvcyBlbiBvdHJvIGJyYW5jaCwgaGFzdGEgcXVlIHNlIGhhY2UgZWwgZ2l0IG1lcmdlLg"],["UkVQT1NJVE9SSU8", "ZXNwYWNpbyBkb25kZSBzZSBhbG1hY2VuYSwgb3JnYW5pemEsIG1hbnRpZW5lIHkgZGlmdW5kZSBpbmZvcm1hY2lvbiBkaWdpdGFsLg"],["VkVSU0lPTg", "Y2FwdHVyYSBlbiBlbCB0aWVtcG8gZGUgbG9zIGFyY2hpdm9zIGRlIGRldGVybWluYWRhIGFwbGljYWNpb24gZW4gZWwgY29udHJvbCBkZSB2ZXJzaW9uZXMu"],["UkFNQQ", "dHJhZSBsYSBjb3BpYSBkZSBsb3MgYXJjaGl2b3MgZW4gdW4gbHVnYXIgZGVsIHRpZW1wbyB5IHBvZGVyIHRyYWJhamFyIGVuIGVsbG9zLg"]];
var c=[[4,65],[4,47],[6,61],[3,66],[10,78],[20,61],[4,106],[11,76],[7,90],[4,79]];
var con1=["HTML","CSS","DISEÑO WEB","GITHUB","FORK","PULL","REPOSITORIO","RAMA","CONTROL DE VERSIONES","VERSION"];
var con2=["trae la copia de los archivos en un lugar del tiempo y poder trabajar en ellos.","captura en el tiempo de los archivos de determinada aplicacion en el control de versiones.","espacio donde se almacena, organiza, mantiene y difunde informacion digital.","trae los cambios que se le hacen al repositorio dejandolos en otro branch, hasta que se hace el git merge.","sistema que registra los cambios realizados sobre un archivo.","lenguaje demarcado que se utiliza para crear paginas de internet.","actividad que consiste en la planeacion diseño e implementacion de sitios web.","lenguaje usado para el estilo de la presentacion de la pagina web.","sistema gestor de proyectos y control de versiones de codigo.","copia exacta en crudo del repositorio original."];
var sel1=""; join1=[]; join2=[];
