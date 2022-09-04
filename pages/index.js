import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    
<!DOCTYPE html>
<html lang="it-IT" class="no-js">
    <head>
        <!-- Developed by Tora Tora Tora S.r.l.s. of Rome, Italy www.toratoratora.it -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel='dns-prefetch' href='//s.w.org' />
<link rel="alternate" type="application/rss+xml" title="Antropostudio &raquo; Calendario Feed" href="http://www.antropostudio.org/calendario/feed/" />
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/2.2.1\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.antropostudio.org\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.7.18"}};
			!function(a,b,c){function d(a){var b,c,d,e,f=String.fromCharCode;if(!k||!k.fillText)return!1;switch(k.clearRect(0,0,j.width,j.height),k.textBaseline="top",k.font="600 32px Arial",a){case"flag":return k.fillText(f(55356,56826,55356,56819),0,0),!(j.toDataURL().length<3e3)&&(k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,65039,8205,55356,57096),0,0),b=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55356,57331,55356,57096),0,0),c=j.toDataURL(),b!==c);case"emoji4":return k.fillText(f(55357,56425,55356,57341,8205,55357,56507),0,0),d=j.toDataURL(),k.clearRect(0,0,j.width,j.height),k.fillText(f(55357,56425,55356,57341,55357,56507),0,0),e=j.toDataURL(),d!==e}return!1}function e(a){var c=b.createElement("script");c.src=a,c.defer=c.type="text/javascript",b.getElementsByTagName("head")[0].appendChild(c)}var f,g,h,i,j=b.createElement("canvas"),k=j.getContext&&j.getContext("2d");for(i=Array("flag","emoji4"),c.supports={everything:!0,everythingExceptFlag:!0},h=0;h<i.length;h++)c.supports[i[h]]=d(i[h]),c.supports.everything=c.supports.everything&&c.supports[i[h]],"flag"!==i[h]&&(c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&c.supports[i[h]]);c.supports.everythingExceptFlag=c.supports.everythingExceptFlag&&!c.supports.flag,c.DOMReady=!1,c.readyCallback=function(){c.DOMReady=!0},c.supports.everything||(g=function(){c.readyCallback()},b.addEventListener?(b.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1)):(a.attachEvent("onload",g),b.attachEvent("onreadystatechange",function(){"complete"===b.readyState&&c.readyCallback()})),f=c.source||{},f.concatemoji?e(f.concatemoji):f.wpemoji&&f.twemoji&&(e(f.twemoji),e(f.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
<link rel='https://api.w.org/' href='http://www.antropostudio.org/wp-json/' />
<link rel="EditURI" type="application/rsd+xml" title="RSD" href="http://www.antropostudio.org/xmlrpc.php?rsd" />
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="http://www.antropostudio.org/wp-includes/wlwmanifest.xml" /> 
<meta name="generator" content="WordPress 4.7.18" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,700" rel="stylesheet">
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/bootstrap.min.css" />
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/bootstrap-theme.css" />
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/jquery-ui.min.css" />
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/font-awesome.min.css" />
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/lity.min.css" />
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/cookiecuttr.min.css" />
        <link rel="stylesheet" href="http://www.antropostudio.org/wp-content/themes/antropostudio/css/antropo.css" />
        <link rel="apple-touch-icon" sizes="57x57" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/favicon-16x16.png">
<link rel="manifest" href="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="http://www.antropostudio.org/wp-content/themes/antropostudio/img/favicons/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

            <title>Antropostudio</title>
    <meta name="description" content="Un nuovo sito targato WordPress" />
    <meta property="og:title" content="Antropostudio" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="http://www.antropostudio.org/" />
    <meta property="og:image" content="http://www.antropostudio.org/wp-content/uploads/2017/10/formazionescolastica.jpg" />
    </head>

    <body class="archive post-type-archive post-type-archive-calendario">        
        <div id="nav-top" class="is-always-stiky">
            <div class="navbar-header">
                <a class="navbar-brand" href="/"></a>
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu-nav-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
            <nav class="navbar navbar-default">
                <!--<a class="navbar-brand" href="/"></a>-->
                <div class="collapse navbar-collapse" id="menu-nav-collapse">                   
                    <ul class="nav navbar-nav"><li class=""><a href="/" title="Home">Home</a></li><li class=""><a href="http://www.antropostudio.org/mission/" title="Mission">Mission</a></li><li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"  href="#" title="Attività">Attività</a><ul class="dropdown-menu"><li class=""><a href="http://www.antropostudio.org/attivita/percorsi-di-sviluppo-individuale-indoor-e-outdoor/" title="Cammini e Forestbathing, la Terapia delle Foreste">Cammini e Forestbathing, la Terapia delle Foreste</a></li><li class=""><a href="http://www.antropostudio.org/attivita/formazione-e-didattica-in-ambito-scolastico/" title="Programmi Esperienziali di Rewilding">Programmi Esperienziali di Rewilding</a></li><li class=""><a href="http://www.antropostudio.org/attivita/laboratori-di-tecniche-antropologico-esistenziali/" title="Corsi di formazione in Eco-Antropologia">Corsi di formazione in Eco-Antropologia</a></li><li class=""><a href="http://www.antropostudio.org/attivita/consueling/" title="Rewilding Esistenziale">Rewilding Esistenziale</a></li><li class=""><a href="http://www.antropostudio.org/attivita/visite/" title="Silentium Retreats">Silentium Retreats</a></li></ul></li><li class=""><a href="http://www.antropostudio.org/formazione/" title="Formazione">Formazione</a></li><li class=""><a href="/calendario" title="Calendario">Calendario</a></li><li class=""><a href="/blog" title="Blog">Blog</a></li><li class=""><a href="#contatti" title="Contatti">Contatti</a></li></ul></li></ul>                    <span class="navbar-right">                    
                        <form action="/" id="search-form-nav" class="navbar-form" style="display: none;">
                            <div class="form-group">
                                <input type="text" name="s" class="form-control input-sm" placeholder="Scrivi qui...">
                            </div>
                            <button type="submit" class="btn btn-nav btn-sm">Cerca</button>
                        </form>
                        <a href="#" id="open-search"><i class="fa fa-search" aria-hidden="true"></i> Cerca</a>                        
                    </span>
                </div>
            </nav>

        </div>
        <div class="body">
<div class="container margin-bottom-100">
    <div class="page-content">
        <div class="row ">     
            <div class="col-md-12">
                <h1 class="page_title black  margin-top-100 margin-bottom-30">Calendario</h1>
                                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/08/cover.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>AGRIOS &#8211; Antropostudio Wild Lab &#8211; Training Mensile di Rewilding, Antropologia, Yoga e Crescita Esistenziale</h3>
        <p>Agrios</p>
<p>Formazione Esistenziale Antropostudio</p>
<p>Anno Accademico 2022/ 2023</p>
<p>Antropologia</p>
<p>Meditazione</p>
<p>Rewilding</p>
<p>Yoga</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 01-10-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 09:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=6478868439937555091" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>20 agosto 2022</i> | <a href="http://www.antropostudio.org/calendario/antropostudio-wild-lab-training-mensile-di-rewilding-antropologia-yoga-e-crescita-esistenziale/" title="AGRIOS &#8211; Antropostudio Wild Lab &#8211; Training Mensile di Rewilding, Antropologia, Yoga e Crescita Esistenziale">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2019/09/sacro3.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>In Cammino con i Cervi,  AntropoTrekking  alla scoperta dell&#8217;Etologia del Cervo nella stagione del Bramito -18 Settembre</h3>
        <p>Come ogni anno quando le nostre montagne si vestono d’oro per dare il benvenuto all’autunno viviamo insieme questo emozionante evento che ha come protagonista il Cervo.</p>
<p>L’intera giornata trascorsa fra le montagne prevede lo studio di questo grande mammifero dal punto di vista Naturalistico ma soprattutto sotto un’ottica Antropologica.</p>
<p>Ripercorreremo infatti la storia a ritroso analizzando in cammino la figura archetipica del cervo, dalle grandi epopee venatorie del Neolitico al suo valore rituale  simbolico per le popolazioni tribali italiche precristiane.</p>
<p>Il Cervo porta con se un immaginario di Avventura, Falvola, Leggenda, è protagonista di miti e interprete di un folclore non ancora andato perduto.</p>
<p>I suoi bramiti che durante questo periodo degli amori risuonano dalle vette calcaree alle fitte faggete esprimono la potenza evocativa di questo stupendo animale.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 18-09-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=Forca+d%27Acero&ftid=0x133009816fbf4a4d:0x3fe5386fe7b8c79c" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>22 agosto 2022</i> | <a href="http://www.antropostudio.org/calendario/camminando-con-i-cervi-trekking-antropologico/" title="In Cammino con i Cervi,  AntropoTrekking  alla scoperta dell&#8217;Etologia del Cervo nella stagione del Bramito -18 Settembre">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/07/Cornog.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Trekking Meditativo al Tramonto sul Corno Grande &#8211; Gran Sasso &#8211; Sabato 27 Agosto</h3>
        <p>Antropo Trekking Meditativo al tramonto sul Gigante d&#8217;Appennino</p>
<p>Sabato 27 Agosto</p>
<p>Il tramonto rappresenta uno dei momenti più importanti e suggestivi della giornata; dal punto di vista simbolico rappresenta una transizione fra la luce e l&#8217;ombra.</p>
<p>Nella nostra percezione queste ore coinvolgono con modalità molto diverse le nostre percezioni sensoriali, La vista tende a lasciare spazio all&#8217;udito, all&#8217;olfatto e al tatto e siamo più ricettivi a cogliere informazioni che la natura intorno a noi è pronta a donarci.</p>
<p>Ci recheremo in un luogo unico dell&#8217;Appennino per sperimentare le trasformazioni emozionali che il tramonto può regalarci sino a condurci verso la luce delle stelle.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 27-08-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 17:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=Campo+Imperatore&ftid=0x1331d40991875f9f:0x251523b39f2f8838" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>23 agosto 2022</i> | <a href="http://www.antropostudio.org/calendario/trekking-meditativo-al-tramonto-sul-corno-grande-gran-sasso-sabato-27-agosto/" title="Trekking Meditativo al Tramonto sul Corno Grande &#8211; Gran Sasso &#8211; Sabato 27 Agosto">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
           
    <div class="col-md-12 margin-bottom-30">
        <h3>21 Agosto &#8211; Trekking Sciamanico  Notturno &#8211; Un viaggio di Antropologia e scoperta</h3>
        <p>Trekking Sciamanico al Tramonto</p>
<p>Un Viaggio di Antropologia e Scoperta</p>
<p>Domenica 21 Agosto</p>
<p>Ore 16.30 Monti della Meta</p>
<p>Quando il grande antropologo Mircea Eliade nel secolo scorso iniziò i suoi studi su un certo tipo di tecniche estatiche presenti nelle pratiche religiose primitive, il termine sciamanismo o sciamanesimo ancora non esisteva, divenne nel tempo una  nominalizzazione utilizzata negli anni a venire da antropologi e storici delle religioni per classificare quelle manifestazioni religiose in cui l&#8217;operatore rituale di una data fenomenologia religiosa potesse entrare a contatto con un universo spirituale attraverso l&#8217;estasi, coretico musicale, o meditativa.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 21-08-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=03040+Picinisco+FR,+Italia&ftid=0x133aa1758a3b4685:0x9130e0eb6eb93f6c" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 21-08-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:35 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=03040+Picinisco+FR,+Italia&ftid=0x133aa1758a3b4685:0x9130e0eb6eb93f6c" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>26 marzo 2022</i> | <a href="http://www.antropostudio.org/calendario/trekking-sciamanico-notturno/" title="21 Agosto &#8211; Trekking Sciamanico  Notturno &#8211; Un viaggio di Antropologia e scoperta">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/08/ferragosto.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Trekking sotto le Stelle, Bivacco e Alba in Vetta &#8211; nella notte di Fettagosto</h3>
        <p>Esperienza Formativa in Rewilding Esistenziale ed AntropoEcologia</p>
<p>in Ambiente Montano Notturno con Alba in Vetta</p>
<p>Parco Sirente Velino</p>
<p>Domenica 14 Agosto</p>
<p>Ore 22.00</p>
<p>Per questo Ferragosto come ogni anno proponiamo una esperienza di grande interazione con la natura selvaggia delle nostre montagne.</p>
<p>In questa particolare data proponiamo un Cammino Notturno con Bivacco e Alba in Vetta</p>
<p>in questo percorso ci troveremo al cospetto di biotopi molto differenti tra loro, esploreremo insieme  ambienti archetipali nel quali la nostra specie è evoluta:</p>
<p>Il Bosco Misto</p>
<p>La Faggeta</p>
<p>I Pascoli d&#8217;Alta Quota</p>
<p>e l&#8217;Ambiente Calcareo Ruprestre</p>
<p>elementi ai quali dedicheremo l&#8217;intera uscita dal punto di vista Ecologico ,  Antropologico e Storico.</p>
<p>Approfondiremo insieme alcuni aspetti scientifici e terapeutici che collegano gli ambienti non antropizzati</p>
<p>agli esseri umani.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 14-08-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 22:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=02021+Cartore+RI,+Italia&ftid=0x132fc47fb24b9699:0xce2687d3599dde63" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>9 agosto 2022</i> | <a href="http://www.antropostudio.org/calendario/trekking-sotto-le-stelle-bivacco-e-alba-in-vetta-nella-notte-di-fettagosto/" title="Trekking sotto le Stelle, Bivacco e Alba in Vetta &#8211; nella notte di Fettagosto">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/06/camoscio.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Antropo Trekking Meditativo al tramonto fra Camosci ed Aquile &#8211;</h3>
        <p>Il tramonto rappresenta uno dei momenti più importanti e suggestivi della giornata; dal punto di vista simbolico rappresenta una transizione fra la luce e l&#8217;ombra.</p>
<p>Nella nostra percezione queste ore coinvolgono con modalità molto diverse le nostre percezioni sensoriali, La vista tende a lasciare spazio all&#8217;udito, all&#8217;olfatto e al tatto e siamo più ricettivi a cogliere informazioni che la natura intorno a noi è pronta a donarci.</p>
<p>Domenica 7 Agosto</p>
<p>ci recheremo in un logo unico dell&#8217;Appennino per sperimentare le trasformazioni emozionali che il tramonto può regalarci.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 07-08-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=Forca+d%27Acero&ftid=0x133009816fbf4a4d:0x3fe5386fe7b8c79c" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>10 luglio 2022</i> | <a href="http://www.antropostudio.org/calendario/fra-aquile-e-camosci/" title="Antropo Trekking Meditativo al tramonto fra Camosci ed Aquile &#8211;">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2020/07/uno.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Antropotrekking all&#8217;Ombra del Gigante- 10 Luglio &#8211; Rewilding e AntropoEcologia in Cammino</h3>
        <p>Biofilia ed AntropoEcologia nella Natura</p>
<p> Monte Camicia -Fondo della Salsa<br />
10 Luglio</p>
<p>Ore 12.00 &#8211; 20.30</p>
<p>Un Cammino Laboratoriale  nel bosco nella sua veste diurna e notturna in cui approfondiremo insieme vari aspetti del rapporto fra sensi secondari e Natura.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 10-07-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 12:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=18393210680764756433" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 10-07-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 20:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=18393210680764756433" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>4 giugno 2022</i> | <a href="http://www.antropostudio.org/calendario/10luglio/" title="Antropotrekking all&#8217;Ombra del Gigante- 10 Luglio &#8211; Rewilding e AntropoEcologia in Cammino">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2020/09/phisis.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>PHYSIS Ritiro Estivo di  Yoga, Rewilding, Forestbathing, AntropoEcologia &#8211; 1/3 Luglio</h3>
        <p>PHYSIS</p>
<p>1/3 Luglio</p>
<p>Nella Selvaggia e Mistica cornice del Monte Subasio</p>
<p>RITIRO in AntropoEcologia (con metodo formativo Antropostudio)</p>
<p>PRATICHE FILOSOFICO ESPERIENZIALI FORESTALI</p>
<p>FORESTBATHING, Rewilding</p>
<p>YOGA , TREKKING, Meditazione in Cammino</p>
<p>NB: Su richiesta dei partecipanti  con una Integrazione di 6 Ore di Didattica Online (di cui verranno fornite le videoregistrazioni), il Retreat è ritenuto valido come Corso Base Forestbathing e Rewilding Esistenziale.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 01-07-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 10:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=16552365943430301365" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>4 maggio 2022</i> | <a href="http://www.antropostudio.org/calendario/physis/" title="PHYSIS Ritiro Estivo di  Yoga, Rewilding, Forestbathing, AntropoEcologia &#8211; 1/3 Luglio">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/06/sabato1.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Esperienza di Rewilding fra Fiumi e Grotte Simbruine</h3>
        <p>Esperienza Formativa in Rewilding Esistenziale ed AntropoEcologia</p>
<p>in Ambiente Fluviale ed Ipogeo</p>
<p>Monti Simbruini</p>
<p>Sabato 11 Giugno</p>
<p>Ore 18.30</p>
<p>Questa settimana, lontani dalla folla che troppo sta invadendo le nostre montagne vi condurremo  alla scoperta di un luogo segreto fuori dai sentieri ufficiali dove ci troveremo al cospetto di due biotopi molto differenti tra loro, esploreremo insieme due aspetti archetipali nel quali la nostra specie è evoluta:</p>
<p>La Grotta e Il Fiume</p>
<p>elementi ai quali dedicheremo l&#8217;intera uscita dal punto di vista Ecologico, Antropologico e Terapeutico.</p>
<p>Approfondiremo insieme alcuni aspetti scientifici e terapeutici che collegano gli ambienti non antropizzati</p>
<p>agli esseri umani.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 11-06-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=8664481450509783455" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 11-06-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:34 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=8664481450509783455" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>7 giugno 2022</i> | <a href="http://www.antropostudio.org/calendario/esperienza-di-rewilding-fra-fiumi-e-grotte-simbruine/" title="Esperienza di Rewilding fra Fiumi e Grotte Simbruine">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/06/camoscio.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Trekking fra Vette e Rocce alla scoperta del Camoscio Appenninico</h3>
        <p>Fra Vette e Boschi alla Scoperta del Re delle Rocce</p>
<p>il Camoscio Appenninico</p>
<p>Domenica 5 Giugno</p>
<p>Ore 12.00</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 05-06-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 12:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=4172695648609065257" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 05-06-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 12:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=4172695648609065257" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>1 giugno 2022</i> | <a href="http://www.antropostudio.org/calendario/trekking-fra-vette-e-rocce-alla-scoperta-del-camoscio-appenninico/" title="Trekking fra Vette e Rocce alla scoperta del Camoscio Appenninico">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/04/dru.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>19 Maggio &#8211; Serata Antropologica &#8211; La Montagna Sacra &#8211; Contemporary Cluster Gallery</h3>
        <p>Serata Antropologica</p>
<p>La Montagna Sacra</p>
<p>Contemporary Cluster Gallery</p>
<p>19 Maggio/ Ore 19.30</p>
<p>Secondo appuntamento con i Seminari di Antropologia tenuti da 𝗔𝗻𝘁𝗿𝗼𝗽𝗼𝘀𝘁𝘂𝗱𝗶𝗼.<br />
In seguito all’interesse mostrato verso il precedente incontro questa volta il seminario sarà presentato come una serata dedicata all’Antropologia in cui Damiano Tullio condurrà il pubblico attraverso un Viaggio Etnografico nella storia dell’umanità alla scoperta del tema della Montagna Sacra come vernacolare elemento del rapporto Uomo/Natura.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 19-05-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 19:15 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=17527463345786812165" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 19-05-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 19:20 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=17527463345786812165" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>21 aprile 2022</i> | <a href="http://www.antropostudio.org/calendario/serata-antropologica-la-montagna-sacra-contemporary-cluster-gallery/" title="19 Maggio &#8211; Serata Antropologica &#8211; La Montagna Sacra &#8211; Contemporary Cluster Gallery">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2019/10/5.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Masterclass &#8211; Antropologia dello Yoga &#8211; dalla Filosofia alla Pratica &#8211; Domenica 15 Maggio</h3>
        <p>Domenica 15</p>
<p>Villa Borghese</p>
<p>🔥ANTROPO YOGA</p>
<p>Ore 10.30</p>
<p>Masterclass di Filosofia, Asana e Meditazione.</p>
<p>﻿Una pratica di terapia esistenziale dove gli elementi della natura e la filosofia si incontrano<br />
Praticheremo e Mediteremo sulle onde del Dharma, da Heidegger a Patanjali, da Krishna al Francescanesimo.<br />
Una dimensione di dialogo psicofisico fra mente e corpo, come in ogni mia lezione il movimento rappresenta il mezzo che ci conduce ad una scoperta e chiarificazione del nostro profondo attraverso:</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 15-05-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=16950841178214075972" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>9 maggio 2022</i> | <a href="http://www.antropostudio.org/calendario/yogaantropologia/" title="Masterclass &#8211; Antropologia dello Yoga &#8211; dalla Filosofia alla Pratica &#8211; Domenica 15 Maggio">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2020/09/120149221_670660970221626_2105183734877803146_o.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Trekking Formativo in Rewilding , Forestbathing e Terapie Forestali  &#8211;  14 Maggio</h3>
        <p>Rewilding Biofilia ed AntropoEcologia</p>
<p>Consapevolezza fra Scienza e Natura</p>
<p>Monti Marsicani</p>
<p>Sabato 14 Maggio</p>
<p>Ore 10.30</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 14-05-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 11:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=67046+Ovindoli+AQ,+Italia&ftid=0x132fdf343fc1da6f:0x13719c72d3c5048" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 14-05-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 11:20 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=67046+Ovindoli+AQ,+Italia&ftid=0x132fdf343fc1da6f:0x13719c72d3c5048" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>11 aprile 2022</i> | <a href="http://www.antropostudio.org/calendario/formazioneforestale/" title="Trekking Formativo in Rewilding , Forestbathing e Terapie Forestali  &#8211;  14 Maggio">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/03/i.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>AntropoTrekking Esperienziale, nel regno dell&#8217;Orso Marsicano</h3>
        <p>Una Avventura di Scoperta e Consapevolezza</p>
<p>Sulle Orme del Lupo e dell&#8217;Orso</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 24-04-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 09:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=67030+Barrea+AQ,+Italia&ftid=0x13307416b9f4fb27:0x4047cf501e8d9d7f" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 24-04-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 10:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=67030+Barrea+AQ,+Italia&ftid=0x13307416b9f4fb27:0x4047cf501e8d9d7f" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>1 marzo 2022</i> | <a href="http://www.antropostudio.org/calendario/bearwatching/" title="AntropoTrekking Esperienziale, nel regno dell&#8217;Orso Marsicano">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/03/RITI-DI-PASSSSSS.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Riti di Passaggio &#8211;  Seminario Antropologico ed Etnografico  &#8211; Sabato 2 Aprile</h3>
        <p>Riti di Passaggio</p>
<p>Seminario Antropologico ed Etnografico</p>
<p>Sabato 2 Aprile</p>
<p>Contemporary Cluster &#8211; Palazzo Brancaccio</p>
<p>Ore 18.30</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 02-04-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:24 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=17527463345786812165" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 02-04-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:36 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=17527463345786812165" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>23 marzo 2022</i> | <a href="http://www.antropostudio.org/calendario/riti-di-passaggio-seminario-antropologico-ed-etnografico-sabato-2-aprile/" title="Riti di Passaggio &#8211;  Seminario Antropologico ed Etnografico  &#8211; Sabato 2 Aprile">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2020/09/120176780_670660743554982_93558124395149404_o.jpg');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Trekking Sciamanico Notturno &#8211; Un viaggio tra Antropologia e Natura</h3>
        <p>Trekking Sciamanico Notturno Un viaggio tra Antropologia e Natura Venerdì 1 Aprile Monti Simbruini Quando il grande antropologo Mircea Eliade nel secolo scorso iniziò i suoi studi su un certo tipo di tecniche estatiche presenti nelle pratiche religiose primitive, il termine sciamanismo o sciamanesimo ancora non esisteva, divenne nel tempo una  nominalizzazione utilizzata negli anni [&hellip;]</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 01-04-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=00028+Livata+RM,+Italia&ftid=0x132f8d436be4a7e1:0x26094f9bde291841" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 01-04-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 18:40 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=00028+Livata+RM,+Italia&ftid=0x132f8d436be4a7e1:0x26094f9bde291841" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>23 marzo 2022</i> | <a href="http://www.antropostudio.org/calendario/trekking-sciamanico-notturno-un-viaggio-tra-antropologia-e-natura/" title="Trekking Sciamanico Notturno &#8211; Un viaggio tra Antropologia e Natura">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/01/sciamano2.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Lo Sciamanismo e l&#8217;Esperienza Estatica  &#8211; Seminario Antropologico &#8211; 26 Marzo</h3>
        <p>Con estremo piacere per il settimo  anno consecutivo proponiamo un laboratorio etnografico ed esperienziale a noi molto caro:</p>
<p>&#8220;LO SCIAMANISMO e l&#8217;esperienza estatica&#8221;</p>
<p>Seminario Teorico e Pratico</p>
<p>Sabato 12 Marzo</p>
<p>Secondo Modulo</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 26-03-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 17:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=6478868439937555091" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>15 gennaio 2022</i> | <a href="http://www.antropostudio.org/calendario/seminario-sciamanismo/" title="Lo Sciamanismo e l&#8217;Esperienza Estatica  &#8211; Seminario Antropologico &#8211; 26 Marzo">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2021/11/baga.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Bhagavadgita , Seminario Antropologico e Pratico  sulla Via del Guerriero nello Yoga (secondo modulo) 19 Febbraio</h3>
        <p>Bhagavadgita</p>
<p>La via del Guerriero</p>
<p>Seminario Antropologico e Pratico di Yoga e Filosofia</p>
<p>Bhagavadgita, Molti praticanti dello Yoga avranno sicuramente sentito parlare di questo antico testo che insieme ad altri volumi fondamentali rappresenta il vero cuore di questa disciplina.</p>
<p>Lo Yoga così come è visto oggi in gran parte dell&#8217;occidente è purtroppo privato della sua radice filosofica, e viene identificato nella sua accezione motoria, le Asana (posizioni) che riguardano soltanto uno dei grandi paradigmi di questa tradizione millenaria, e nel nostro seminario affronteremo proprio questi temi.</p>
<p>Lo yoga dalle sue origini rappresenta una vera e propria via di liberazione dell&#8217;Individuo che insegna ad avere una differente percezione sensoriale nei confronti del proprio Io (costantemente illusorio), questo ci permette di indagare con occhi ed un sentire interiore diverso, il mondo intorno a noi con nuove prospettive di consapevolezza.</p>
<p>Questo seminario  parte di una serie di incontri mensili che andranno avanti fino a Marzo, sarà articolato in fasi molto diverse tra loro ed il tema principale sarà la analisi pratica e teorica dei testi dell&#8217; India Classica e la loro applicazione nella pratica Logica</p>
<p>Ogni incontro caratterizzato da tre ora di lavoro insieme ci condurrà al cuore di una antica tradizione,  come tutti gli eventi Antropostudio essendo appunto Antropologi analizzeremo con un&#8217;ottica scientifica gli aspetti fenomenologici dello Yoga.</p>
<p>Ci immergeremo nella Pratica partendo dalle sue radici antiche per comprendere il rapporto fra Filosofia e Mente e le conseguenti correlazione fra Pratica , Immagine Psichica e Corpo.</p>
<p>Sarà un viaggio attraverso alcuni dei principali aspetti dello Yoga enunciati dai Vedanta:</p>
<p>&#8211; Karma Yoga (Azione ed Etica)</p>
<p>&#8211; Raja Yoga ( unine fisica e metafisica di Corpo, Mente e Spirito)</p>
<p>&#8211; Jnana Yoga ( la consapevolezza interiore e la filosofia)</p>
<p>&#8211; Bhakti Yoga ( la via della spiritualità e della devozione)</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 05-03-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 17:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=6478868439937555091" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>30 novembre 2021</i> | <a href="http://www.antropostudio.org/calendario/bhagavadgita-seminario-antropologico-e-pratico-sulla-via-del-guerriero-nello-yoga/" title="Bhagavadgita , Seminario Antropologico e Pratico  sulla Via del Guerriero nello Yoga (secondo modulo) 19 Febbraio">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2021/02/forca.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Trekking nella Neve alla scoperta di Grotte ed Alberi Millenari &#8211;  AntropoEcologia e Rewilding</h3>
        <p>Cammino Formativo in Rewilding Esistenziale ed AntropoEcologia</p>
<p>in Ambiente Nevoso</p>
<p>Monte Tranquillo</p>
<p>Sabato 20 Febbraio</p>
<p>Ore 10.00</p>
<p>Questa settimana, lontani dalla folla che troppo sta invadendo le nostre montagne vi condurremo  alla scoperta di un luogo segreto fuori dai sentieri ufficiali dove ci troveremo al cospetto di uno dei più grandi giganti dell&#8217;Appennino.</p>
<p>Detta Acerra in gergo dialettale raggiungeremo un Acero plurisecolare  al quale dedicheremo l&#8217;intera uscita dal punto di vista Ecologico, Antropologico e Terapeutico.</p>
<p>Approfondiremo insieme in cammino alcuni aspetti scientifici e terapeutici che collegano gli organismi arborei agli esseri umani.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 27-02-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 10:00 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?q=Forca+d%27Acero&ftid=0x133009816fbf4a4d:0x3fe5386fe7b8c79c" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
               
    </div>
    <div class="col-md-6 text-right">
        <i>23 febbraio 2021</i> | <a href="http://www.antropostudio.org/calendario/trekking-nella-neve-alla-scoperta-di-grotte-ed-alberi-millenari-antropoecologia-e-rewilding/" title="Trekking nella Neve alla scoperta di Grotte ed Alberi Millenari &#8211;  AntropoEcologia e Rewilding">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                                                        <div class="row archive-element">
            <div class="col-lg-3 col-md-4 col-sm-4 margin-bottom-30">
            <div class="cover" style="background-image: url('http://www.antropostudio.org/wp-content/uploads/2022/01/foresttttt.png');"></div>                
        </div>
           
    <div class="col-lg-9 col-md-8 col-sm-8 margin-bottom-30">
        <h3>Ciaspolata Notturna e Forestbathing  fra Faggete Innevate &#8211; Venerdì 11 Febbraio</h3>
        <p>Sabato 15 Gennaio </p>
<p>Trekking Eco Antropologico Forestbathing</p>
<p>Siamo in uno dei momenti di passaggio più importanti per la Natura, nei primi giorni di Gennaio  irrompono dai quadranti orientali fronti di correnti fredde che iniziano a trasformare di bianco le nostre montagne.</p>
<p>In questi ultimi giorni alcune specie, dagli anfibi ai grandi mammiferi come l&#8217;Orso Marsicano sono immersi nel  letargo; sono momenti molto particolari in cui le nostre vette si velano di un manto irreale di nebbie e luci. Sicuramente uno degli istanti più delicati per  l&#8217;ecosistema montano.</p>
<p>Molti conoscono certi ambienti per l&#8217;escursionismo estivo o lo sci invernale, ed è invece in questo periodo di passaggio  tra la notte ed il giorno in cui si può cogliere l&#8217;essenza vera di certi ambienti, privi di qualunque presenza antropizzante e caratterizzati da silenzio e quiete assoluta.</p>
                                                                                
    </div>
    <div class="clearfix"></div>
    <div class="col-md-6 text-left">
                    <b>incontro:</b>  <i class="fa fa-calendar" aria-hidden="true"></i> 11-02-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 17:30 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=5353987145333401140" target="_blank" title="punto di partenza dell'escursione">mappa</a>
           
                    <b>evento:</b> <i class="fa fa-calendar" aria-hidden="true"></i> 11-02-2022 <i class="fa fa-clock-o" aria-hidden="true"></i> 17:33 <i class="fa fa-map-marker" aria-hidden="true"></i> <a href="https://maps.google.com/?cid=5353987145333401140" target="_blank" title="punto di partenza dell'escursione">mappa</a>
               
    </div>
    <div class="col-md-6 text-right">
        <i>11 gennaio 2022</i> | <a href="http://www.antropostudio.org/calendario/forestbathing-trek-notturno-fra-faggete-innevate/" title="Ciaspolata Notturna e Forestbathing  fra Faggete Innevate &#8211; Venerdì 11 Febbraio">Leggi il Resto...</a>
    </div>
    <div class="col-md-12">
        <div class="archive-separator"></div>
    </div>
</div>                            
                          
                                        
                  
            </div>        
        </div>    
        <div class="row margin-top-30">
            <div class="col-md-12 text-right">
                <a href="http://www.antropostudio.org/calendario/page/2/" >Indietro</a>            </div>
        </div>
    </div>
</div>
<style>
    .archive-element .cover{
        padding-bottom: 60%;
    }
    .archive-element h3{
        margin: 0;
        padding-bottom: 15px;
    }
    .archive-separator {
        height: 0;
        border-bottom: 1px solid #eee;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .archive-element:last-of-type .archive-separator{
        margin-bottom: 0px;
    }

</style>
</div>
<!-- END .body --> 
<footer class="container-fluid">
    <div  class="row">
        <div id="footer">
            <div class="col-md-4 bordered footer-logo col-sm-3 col-xs-6">
                <img src="http://www.antropostudio.org/wp-content/themes/antropostudio//img/logo_arrow_vert_w.svg" alt="Antropostudio" />
            </div>
            <div class="col-md-4 bordered col-sm-3 col-xs-6" id="contatti">
                <h3>Contatti</h3>  
                <div class="menu-bottom_menu_en-container">

                    <ul class="footer-menu margin-bottom-30">
                        <li class="menu-item">
                            <i>Per prenotazioni:</i><br/>
                            <a href="mailto:segreteria@antropostudio.org"><i class="fa fa-envelope" aria-hidden="true"></i> segreteria@antropostudio.org</a><br/><br/>
                            <i>Per informazioni:</i><br/>
                            <a href="mailto:info@antropostudio.org"><i class="fa fa-envelope" aria-hidden="true"></i> info@antropostudio.org</a>
                        </li>                
                        <li class="menu-item">
                            <a href="tel:+393483836933" title="numero telefonico Antropostudio"><i class="fa fa-phone" aria-hidden="true"></i> +39 348 38 36 933</a>
                        </li>                
                        <li class="menu-item">
                            <a href="https://www.google.it/maps/place/Viale+del+Lido,+62,+00122+Lido+di+Ostia+RM/" title="indirizzo sede Antropostudio" target="_blank"><i class="fa fa-map-marker" aria-hidden="true"></i> Viale del lido, 62 - 00122 Ostia Lido, Roma</a>
                        </li>                
                    </ul>
                    <h3 class="">Social Media</h3>
                    <p class="social-menu">
                        <a href="https://www.facebook.com/antropo.studio" title="Facebook" target="_blank" rel="nofollow">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href="https://www.instagram.com/antropostudio/" title="Instagram" target="_blank" rel="nofollow">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>                        
                    </p>         
                    <h3 class="">Cookie & Pivacy Policy</h3>
                    <div class="menu-bottom_menu_en-container">

                        <ul class="footer-menu margin-bottom-30">
                            <li class="menu-item">                            
                                <a href="/cookies/" title="Cookie & Pivacy Policy">
                                    <i class="glyphicon glyphicon-list-alt" aria-hidden="true"></i> Policy
                                </a>                      
                            </li> 
                        </ul>

                    </div>
                </div>
            </div>
            <div class="col-md-4  col-sm-6 col-xs-12">
                <form role="form" id="footer-form" class="margin-clear">
                    <div class="form-group has-feedback">
                        <label class="sr-only" for="name">Nome</label>
                        <input type="text" class="form-control" id="name" placeholder="nome"  name="name">
                        <i class="glyphicon glyphicon-user form-control-feedback"></i>
                    </div>
                    <div class="form-group has-feedback">
                        <label class="sr-only" for="email">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="indirizzo email"   name="email">
                        <i class="glyphicon glyphicon-envelope form-control-feedback"></i>
                    </div>
                    <div class="form-group has-feedback">
                        <label class="sr-only" for="message">Messaggio</label>
                        <textarea class="form-control" rows="6" id="message" placeholder="messaggio"   minlength="40" name="message"></textarea>
                        <i class="glyphicon glyphicon-pencil form-control-feedback"></i>
                    </div>
                    <div class="text-right" id="footer-form-submit">
                        <div class="g-recaptcha" data-sitekey="6Lcu0EIUAAAAAM0HqgYEIPfDniwIN_BsdIcR8Op9" data-callback="setRecaptcha"></div>

                        <input type="submit" value="Invia" disabled class="margin-clear submit-button btn btn-footer">
                        <!--                        <button
                                                    class="g-recaptcha margin-clear submit-button btn btn-footer"
                                                    data-sitekey="6LdBwEIUAAAAAFqBA5qXiLeUOFKrJYuVWdnS3kvZ"
                                                    data-callback="sendMessage"
                                                    data-badge="inline">
                                                    Invia
                                                </button>-->
                    </div>
                </form>
            </div>
            <div class="clearfix"></div>
            
            <div class="margin-top-10 margin-bottom-10 text-center">
                <small class=""><i>Copyright © 2022 Antropostudio, all rights reserved.</i></small>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</footer>
<script type="text/javascript">var ajaxurl = "http://www.antropostudio.org/wp-admin/admin-ajax.php";</script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery-ui.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery.smooth-scroll.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/bootstrap.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery.sticky.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery.sticky-kit.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/parallax.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery.countdown.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/lity.min.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery.cookie.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/jquery.cookiecuttr.js"></script>
<script type="text/javascript" defer="defer" src="http://www.antropostudio.org/wp-content/themes/antropostudio/js/antropo.js"></script>       
<script type="text/javascript" defer="defer" src='https://www.google.com/recaptcha/api.js'></script>
<script type='text/javascript' src='http://www.antropostudio.org/wp-includes/js/wp-embed.min.js?ver=4.7.18'></script>
<div class="modal fade" tabindex="-1" role="dialog" id="formModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <p></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">Chiudi</button>
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
</body>
</html>
  )
}
