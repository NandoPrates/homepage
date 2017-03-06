/* 
 * @AUTOR: Spell Master.
 * @Version: 3.2
 * @Date: 08/02/2017 [Inicio da Construção]
 * @require: ('jQuery 1.10 ++') / ('Html  type 5') / ('CSS type 3 ++')
 * @Type: Gerencia e controla as principais funções de rotina no website.
 */

/*********************************************************************************
 ** Controle do Menu Principal **
 ********************************************************************************/
function mainMenu() {
    /* Variáveis usadas */
    var menuHidden = 1;
    var loading = "<div class=\"loading\">"
            + "<img src=\"./images/loading.svg\" height=\"100\" width=\"100\">"
            + "<br><hr><br>Carregando Aguarde..."
            + "</div>";

    /* Abre e fecha sub menus */
    $('nav ul li a').click(function () {
        $(this).parent().siblings().find('ul').slideUp('slow');
        $(this).next('ul').stop(true, false, true).slideToggle('slow');
        return;
    });
    /* Menu responsivo */
    $('.menuBar').click(function () {
        $('.menuBarNavIcon').toggleClass('menuBarCross');
        if (menuHidden == 1) {
            $('.menu_dropdown').animate({
                left: '0'
            });
            $('.fa-angle-left').css({'-webkit-transform': 'rotate(-90deg)', 'transform': 'rotate(-90deg)'});
            menuHidden = 0;
        } else {
            $('.menu_dropdown').animate({
                left: '-100%'
            });
            $('.fa-angle-left').css({'-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});
            menuHidden = 1;
        }
        return;
    });
    /* Fecha os menus quando o mouse sair da tag do menu */
    $('main, header, footer').mouseenter(function () {
        $('nav ul li ul').slideUp('slow');
        if (!menuHidden) {
            $('.menu_dropdown').animate({
                left: '-100%'
            });
            $('.menuBarNavIcon').toggleClass('menuBarCross');
            $('.fa-angle-left').css({'-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});
            menuHidden = 1;
        }
    });
    /* Fecha os menus quando a tela é redimencionada */
    $(window).resize(function () {
        $('nav ul li ul').slideUp('slow');
        if (!menuHidden) {
            $('.menu_dropdown').animate({
                left: '-100%'
            });
            $('.button').toggleClass('menuBarCross');
            $('.fa-angle-left').css({'-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});
            menuHidden = 1;
        }
    });
    /* Requisição Ajax das páginas */
    $('.getLink').click(function () {
        $("html, body").animate({scrollTop: 0}, 0);
        var Name = $(this).attr('name');
        var Link = './' + Name + '.html';
        $.ajax({
            dataType: 'html',
            method: 'get',
            url: Link,
            beforeSend: function () {
                $('.content').html(loading);
            },
            complete: function () {
                $(loading).remove();
            },
            success: function (html) {
                $('nav ul li ul').slideUp('slow');
                if (!menuHidden) {
                    $('.menu_dropdown').animate({
                        left: '-100%'
                    });
                    $('.menuBarNavIcon').toggleClass('menuBarCross');
                    $('.fa-angle-left').css({'-webkit-transform': 'rotate(0deg)', 'transform': 'rotate(0deg)'});
                    menuHidden = 1;
                }
                $('.content').html(html).fadeIn('slow');
            }
        });
        return;
    });
    return false;
}

/*********************************************************************************
 ** Carregamento da página inicial **
 ********************************************************************************/
function loadIndex() {
    var loading = "<div class=\"loading\">"
            + "<img src=\"./images/loading.svg\" height=\"100\" width=\"100\">"
            + "<br><hr><br>Carregando Aguarde..."
            + "</div>";
    $.ajax({
        dataType: 'html',
        beforeSend: function () {
            $('.content').html(loading);
        },
        complete: function () {
            $(loading).remove();
        },
        success: function () {
            $('.content').load('./pages/common/home.html');
        }
    });
    return false;
}

/*********************************************************************************
 ** Pecorrer a página para o topo **
 ********************************************************************************/
function scrollUp() {
    $('.pageup').click(function () {
        $("html, body").animate({scrollTop: 0}, 500);
        return;
    });
    /* Exibe o botão quando a página sofre scroll */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".pageup").fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
        return;
    });
    return false;
}

/*********************************************************************************
 ** Ajax Link para a página inicial **
 ********************************************************************************/
function homelinks() {
    var loading = "<div class=\"loading\">"
            + "<img src=\"./images/loading.svg\" height=\"100\" width=\"100\">"
            + "<br><hr><br>Carregando Aguarde..."
            + "</div>";
    $('.leftlink').click(function () {
        $("html, body").animate({scrollTop: 0}, 0);
        var Name = $(this).attr('name');
        var Link = './' + Name + '.html';
        $.ajax({
            dataType: 'html',
            method: 'get',
            url: Link,
            beforeSend: function () {
                $('.left_divisor').html(loading);
            },
            complete: function () {
                $(loading).remove();
            },
            success: function (html) {
                $('.left_divisor').html(html).fadeIn('slow');
            }
        });
        return;
    });
    return false;
}

/*********************************************************************************
 ** Divisores estilo ancoração **
 ********************************************************************************/
function anchorToggle() {
    $(".showtoggle").click(function () {
        $(this).parent().siblings().find('.hiddenToggle').slideUp('slow');
        $(this).next('.hiddenToggle').stop(true, false, true).slideToggle('slow');
        return;
    });
    $(".hiddenToggle").click(function () {
        $(this).slideUp('slow');
        return;
    });
    return false;
}

/*********************************************************************************
 ** Controle das janelas modais **
 ********************************************************************************/
function modalWindow() {
    var loading = "<div class=\"loading\">"
            + "<img src=\"./images/loading.svg\" height=\"100\" width=\"100\">"
            + "</div>";
    var modalLoadPage = "<div class=\"modalLoadPage\">";

    $('.modalopen').click(function () {
        $('html, body').animate({scrollTop: 0}, 0);
        $('.modalLoadTitle').css({'display': 'block'});
        var ModalName = $(this).attr('name');
        var ModalLink = './' + ModalName + '.html';
        //alert(ModalLink);
        $.ajax({
            dataType: 'html',
            method: 'get',
            url: ModalLink,
            beforeSend: function () {
                $('.sitefade').fadeIn('slow');
                $('.modalContainer').html(modalLoadPage);
                $('.modalLoadPage').html(loading);
            },
            complete: function () {
                $(loading).remove();
            },
            success: function (html) {
                $('.modalLoadTitle').css({'display': 'none'});
                $('.modalLoadPage').html(html).fadeIn('slow');
            }
        });
        return;
    });

    $('.modalCancel').click(function () {
        $(loading).remove();
        $(modalLoadPage).remove();
        $('.sitefade').fadeOut('slow');
        return false;
    });
    $('.modalClose').click(function () {
        $(modalLoadPage).remove();
        $('.sitefade').fadeOut('slow');
        $('.modalLoadPage').find('iframe').remove();
        $('.modalLoadPage').find('embed').remove();
        
        return false;
    });
    return false;
}


function paginator() {
    var loading = "<div class=\"loading\"><img src=\"./images/cylon.svg\" height=\"100\" width=\"300\"></div>";
    $('.paginateBtn').click(function () {
        $('.paginateBtn').css({'background-color': '#2c5ec0', 'border-color': '#ffffff'});
        $(this).css({'background-color': '#cc0000', 'border-color': '#cc0000'});
        var Name = $(this).attr('name');
        var ElementId = $(this).attr('id');
        var Link = './' + Name + '' + ElementId + '.html';
        //$('.actualPg').html("" + Name + "," + ElementId);
        $.ajax({
            dataType: 'html',
            method: 'get',
            url: Link,
            beforeSend: function () {
                $('.showPaginator').html(loading);
            },
            complete: function () {
                $(loading).remove();
            },
            success: function (html) {
                $('.showPaginator').html(html).fadeIn('slow');
            }
        });
        return;
    });
    return false;
}

/*
 * Despuração da largura e altura da tela
 function larguradatela() {
 var w = window.innerWidth;
 var h = window.innerHeight;
 document.getElementById("mostrar-largura").innerHTML = "Width: " + w + "<br>Height: " + h;
 }
 
 $(window).resize(function () {
 myFunction();
 });
 */