'use strict';$(document).ready(function(){$(".tag-action").click(function(e){e.preventDefault()});$(".job-post-box").mouseup(function(){var keywordInput=$(".box-self-item input");var queue=$(".tag-list");function stack(){var $newKeyword=queue.append("<li><span class='tag-txt'></span>"+keywordInput.val()+"<span class='tag-close'><i class='fas fa-times'></i></span></li>");keywordInput.val('').focus()}
keywordInput.on('keyup',function(e){if((e.keyCode==13)&&(keywordInput.val()!=="")){stack()}});$('.tag-action').on('click',function(){if((keywordInput.val()!=="")){stack()}});$(document).on("click",".tag-close",function(){$(this).parent().addClass('tag-closed');function removeFromMarkup(){$(".tag-closed").remove()}
setTimeout(removeFromMarkup,100)})});$(".click-review").on("click",function(){$(".modal-overlay").addClass("fade-in");$(".modal-full-content").addClass("modal-show")});$(".modal-header span i").on("click",function(){$(".modal-overlay").removeClass("fade-in");$(".modal-full-content").removeClass("modal-show")});$(".click-offer").on("click",function(){$(".main-modal-overlay").addClass("fade-in");$(".modal-full-content").addClass("modal-show")});$(".modal-header span i").on("click",function(){$(".main-modal-overlay, .modal-overlay-2").removeClass("fade-in");$(".modal-full-content, .modal-full-content-2").removeClass("modal-show")});$(".freelancer-review").on("click",function(){$(".modal-overlay-2").addClass("fade-in");$(".modal-full-content-2").addClass("modal-show")});$(".toggleButtonProperty").click(function(){var $this=$(this);$this.toggleClass("toggle-collapsed");$(".sidebar-item").toggleClass("sidebar-logo-tab");$(".left-item").toggleClass("left-item-tab")});$('.chooseFile').click(function(){$('.chooseFileInput').click()});$('.chooseImage').click(function(){$('.chooseImageInput').click()});$('.client-slider').owlCarousel({loop:!0,margin:10,nav:!1,dots:!0,responsive:{0:{items:1},600:{items:1},1000:{items:1}}});$('.skill-slider').owlCarousel({loop:!0,margin:10,nav:!0,navText:["<span><i class='fas fa-chevron-left'></i></span>","<span><i class='fas fa-chevron-right'></i></span>"],dots:!1,responsive:{0:{items:1},600:{items:1},1000:{items:3}}});$(".self-collapsable").click(function(e){e.preventDefault();var $this=$(this);$this.toggleClass("active").next(".self-collapse").slideToggle("slow").addClass("self-collapse-in")});$(".mobile-menu .main-nav-list").hide();$(".mobile-toggle").on("click",function(){$(".mobile-menu .main-nav-list").slideToggle()});$(".category-list").hide();$(".category-toggle-btn i").on("click",function(){$(".category-list").slideToggle()});$(".nav-content li").click(function(){$(this).find("ul").toggleClass("dropdown-act")});$(".mobile-nav-dropdown").hide();$(".mobile-open-container .nav-content li").on("click",function(){$(".mobile-nav-dropdown").slideToggle()});$(".auth-click").click(function(e){e.preventDefault();var thisItem=$(this);if(thisItem.hasClass("selo")){thisItem.siblings(".auth-active-dropdown").removeClass("auth-active-show");thisItem.parent().children(".auth-click.selo").removeClass("selo")}
else{thisItem.siblings(".auth-active-dropdown").removeClass("auth-active-show");thisItem.parent().children(".auth-click.selo").removeClass("selo");if(thisItem.siblings(".auth-active-dropdown").length){thisItem.addClass("selo");thisItem.siblings(".auth-active-dropdown").addClass("auth-active-show")}}});$("body").mouseup(function(e){var selfCLick=$(".auth-active-dropdown");if(!selfCLick.is(e.selfCLick)&&selfCLick.has(e.target).length===0){$(".auth-click").removeClass("selo");selfCLick.removeClass("auth-active-show")}});$(".toggle-filter-box button").click(function(){$(this).parent().next(".filter-box").addClass("active")});$(".filter-close span").click(function(){$(this).parent().parent(".filter-box").removeClass("active")});$(document).on('scroll',function(){var scrollPos=$(this).scrollTop();if(scrollPos>10){$('.main-nav, .mobile-menu').addClass('navbar-home');$(".sidebar-item").addClass("sidebar-item-top")}
else{$('.main-nav, .mobile-menu').removeClass('navbar-home');$(".sidebar-item").removeClass("sidebar-item-top")}})})