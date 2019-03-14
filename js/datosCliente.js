var empresa = "Agencia Mall Virtual";
var url_Empresa = "http://www.agenciamallvirtual.ml";

var cliente = "Destaqueos JAG";

var whatsapp = "(506) 8982-3519";
var telCel = "tel:5089823519";

var telCel2 = "(506) 8982-3519";
var numTelCel2 = "tel:5089823519";

var telFijo = "(506) 8982-3519";
var numLlamarFijo = "tel:5089823519";

var numMensaje = "https://api.whatsapp.com/send?phone=5089823519&text=";

var email = "chepe170992@mail.com";
var btnEmail = 'href="mailto:chepe170992@mail.com"';

var asunto = "Información solicitada desde"+cliente;
var sobremi = "Somo una empresa netamente Costarricenses especializados en destaqueos de tuberías y limpieza de tanques sépticos. Contamos con una larga trayectoria en brindar un servicio de alta calidad y profesionalismo, permitiéndonos asistir a gran número de clientes. Visitamos residencias, restaurantes, hoteles y edificaciones en general.";
var dondeVan = "Brindamos el servicio en todo el país";
var horarioAtencion = "Atendemos las 24 horas, todos los días de la semana.";
var notaEspecial = "Nota Importante";
var detalleNota = "Solicite su cotización";
var nomFacebook = "Destaqueos de tuberías y limpieza de tanques sépticos JAG";
var facebook = "https://www.facebook.com/destaqueosJAG/";
var nomTwitter = "#!";
var url_Twitter = "#!";
var nomYoutube = "";
var url_Youtube = "#!";
var nomGooglePlus = "";
var url_GooglePlus = "#!";


//TITULO DEL SITIO WEB EN LA PESTAÑA DEL NAVEGADOR
document.getElementById("nC").innerHTML = cliente;


function clientes(empresa= "",url_Empresa="",cliente="",whatsapp="",email="",mailto="",telCel="",telCel2="",telFijo="",numTelCel2="",numLlamarFijo="",sobremi="",dondeVan="",horarioAtencion="",notaEspecial="",detalleNota="",nomFacebook="",nomTwitter="",nomYoutube="",nomGooglePlus="")
{
    var datos = document.write(empresa,url_Empresa,cliente,whatsapp,email,mailto,telCel,telCel2,telFijo,sobremi,numTelCel2,numLlamarFijo,dondeVan,horarioAtencion,notaEspecial,detalleNota,nomFacebook,nomTwitter,nomYoutube,nomGooglePlus);
    return datos;
}

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function faceCliente() {
    location.replace(facebook);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function twitterCliente() {
  location.replace(url_Twitter);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function youtubeCliente() {
  location.replace(url_youtube);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function googlePlusCliente() {
  location.replace(url_GooglePlus);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE


// ************************************** FUNCIONES PARA LLAMAR Y ENVIAR MENSAJE WHATSAPP
// FUNCION PARA WHATSAPP DESDE BOTON
function mensajeCliente() {
  location.replace(numMensaje);
}
// FIN FUNCION PARA WHATSAPP DESDE BOTON

// FUNCION PARA LLAMAR DESDE BOTON
function llamarCliente() {
  location.replace(numTelCel2);
}
// FIN FUNCION PARA LLAMAR DESDE BOTON

// FUNCION PARA LLAMAR DESDE BOTON   
function llamarNumFijo() {
  location.replace(numLlamarFijo);
}
// FIN FUNCION PARA LLAMAR DESDE BOTON
// ************************************** FIN FUNCIONES PARA LLAMAR Y ENVIAR MENSAJE WHATSAPP


function urlEmpresa(){
  location.replace(url_Empresa);
}

// FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
function emailCliente() {
  location.replace(btnEmail);
}
// FIN FUNCION IR A LA PAGINA DE FACEBOOK DEL CLIENTE
