

var TxtRotate = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];
  
	if (this.isDeleting) {
	  this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
	  this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
  
	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
	var that = this;
	var delta = 100 - Math.random() * 100;
  
	if (this.isDeleting) { delta /= 2; }
  
	if (!this.isDeleting && this.txt === fullTxt) {
	  delta = this.period;
	  this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
	  this.isDeleting = false;
	  this.loopNum++;
	  delta = 500;
	}
  
	setTimeout(function() {
	  that.tick();
	}, delta);
  };
  
  window.onload = function() {
	var elements = document.getElementsByClassName('txt-rotate');
	for (var i=0; i<elements.length; i++) {
	  var toRotate = elements[i].getAttribute('data-rotate');
	  var period = elements[i].getAttribute('data-period');
	  if (toRotate) {
		new TxtRotate(elements[i], JSON.parse(toRotate), period);
	  }

/* ----------------------------Toggle Animations---------------*/
const	menuBtn = document.querySelector('.menu-btn');
const   service = document.querySelector('#SERVICES');
const   portfolio = document.querySelector('#PORTFOLIO');
const   contact = document.querySelector('#CONTACT');


let menuOpen = false;
menuBtn.addEventListener('click',() => {
  if (!menuOpen) {
	  menuBtn.classList.add('open');
	  service.classList.add('service');
	  portfolio.classList.add('portfolio');
	  contact.classList.add('contact');
	  menuOpen = true;
  } else {
	  menuBtn.classList.remove('open');
	  menuOpen = false;
  }
  });






    //---------------------------------------------Service Slider Anim-----------


	//_-------------------------------CLICK TO TOP---------------------------------//

	$(document).ready(function(){

		$(window).scroll(function(){
		  if( $(this).scrollTop() > 500){
			$('#fixedTop').fadeIn();
		  }else{
			$('#fixedTop').fadeOut();
		  }
		});
	  
	  
		  $("#fixedTop").click(function(){
			  $('html, body').animate({scrollTop : 0}, 200);
		  });
	  });
	  

  
  // ---------------------------------SCROLL DOWN ANMATIONS ---------------------------------


	//------------------------------------SKILLS BAR ANIMATION----------
	let onePointEight = window.innerHeight / 1.8;
	let onePointFive = window.innerHeight / 1.5;
	let onePointThree = window.innerHeight / 1.3;
	let onePointOne = window.innerHeight / 1.1;
	let zeroPointNine = window.innerHeight / 0.9;

	window.addEventListener('scroll',function(){
		const html_bar = document.querySelector('.html_bar');
		const css_bar = document.querySelector('.css_bar');
		const js_bar = document.querySelector('.js_bar');
		
		

		if(html_bar.getBoundingClientRect().top < onePointEight){
			html_bar.classList.add("html_bar_appear")
		}
		
		if(css_bar.getBoundingClientRect().top < onePointFive){
			css_bar.classList.add("css_bar_appear")
		}
		if(js_bar.getBoundingClientRect().top < onePointThree){
			js_bar.classList.add("js_bar_appear")
		}

	})


		//-- Front-End Animation--

	window.addEventListener('scroll',function(){
		const frontEndHeading = document.querySelector('.frontEndHeading');
		const aboutImg = document.querySelector('.aboutImg');
		const aboutText1 = document.querySelector('.aboutText1');
		const aboutText2 = document.querySelector('.aboutText2');
		const aboutFirstList = document.querySelector('.aboutFirstList');
		const aboutSecondList = document.querySelector('.aboutSecondList');
		const card1 = document.querySelector('.card1');
		const card2 = document.querySelector('.card2');
		const card3 = document.querySelector('.card3');
		const card4 = document.querySelector('.card4');
		const card5 = document.querySelector('.card5');
		const card6 = document.querySelector('.card6');

		const Block = document.querySelector('.Block');
		const Email = document.querySelector('.Email');
		const Phone = document.querySelector('.Phone');


		if(frontEndHeading.getBoundingClientRect().top < onePointFive){
			frontEndHeading.classList.add('frontEndHeading_appear')
		}

		if(aboutImg.getBoundingClientRect().top < onePointOne){
			aboutImg.classList.add('aboutImg_appear');
		}
		if(aboutText1.getBoundingClientRect().top < onePointOne){
			aboutText1.classList.add('aboutText1_appear');
		}
		if(aboutText2.getBoundingClientRect().top < onePointOne){
			aboutText2.classList.add('aboutText2_appear');
		}
		if(aboutFirstList.getBoundingClientRect().top < onePointOne){
			aboutFirstList.classList.add('aboutList_appear');
		}
		if(aboutSecondList.getBoundingClientRect().top < onePointOne){
			aboutSecondList.classList.add('aboutList_appear');
		}
		if(aboutSecondList.getBoundingClientRect().top < onePointThree){
			aboutSecondList.classList.add('aboutList_appear');
		}
		if(card1.getBoundingClientRect().top < onePointThree){
			card1.classList.add('card1_appear');
		}
		if(card2.getBoundingClientRect().top < onePointThree){
			card2.classList.add('card2_appear');
		}
		if(card3.getBoundingClientRect().top < onePointThree){
			card3.classList.add('card3_appear');
		}
		if(card4.getBoundingClientRect().top < onePointThree){
			card4.classList.add('card4_appear');
		}
		if(card5.getBoundingClientRect().top < onePointThree){
			card5.classList.add('card5_appear');
		}
		if(card6.getBoundingClientRect().top < onePointThree){
			card6.classList.add('card6_appear');
		}
		if(Block.getBoundingClientRect().top < onePointThree){
			Block.classList.add('Block_appear');
		}
		if(Email.getBoundingClientRect().top < onePointThree){
			Email.classList.add('Email_appear');
		}
		if(Phone.getBoundingClientRect().top < onePointOne){
			Phone.classList.add('Phone_appear');
		}


	})





	$(document).ready(function() {
		var counter = 0;
	  
		// Start the changing images
		setInterval(function() {
		  if(counter == 9) { 
			counter = 0; 
		  }
		}, 3000);
	  
		// Set the percentage off
		loading();
	  });
	  
	  
	  function loading(){
		var num = 0;
	  
		for(i=0; i<=100; i++) {
		  setTimeout(function() { 
			$('.loader span').html(num+'%');
	  
			if(num == 100) {
			}
			num++;
		  },i*20);
		};
	  
	  }



//Pre Loader
const preloader = document.querySelector('.pre_loader');
const mainPage = document.querySelector('.mainPage');


setTimeout(function() {
    preloader.style.display= "none"
    mainPage.style.display= "block"
}, 1000);




// ---------------------------------------- PORTFOLIO --------------------------

const closeLightBox = document.querySelector(".close-lightBox");
const lightBox = document.querySelector(".lightBox");
const lightBoxImg = lightBox.querySelector("img")
console.log(lightBoxImg)

closeLightBox.addEventListener("click",function(){

lightBox.classList.remove("show");
lightBox.classList.add("hide");

})


const item = document.querySelector(".portfolio-gallery").children;

const galleryItem = document.querySelectorAll(".items");
console.log(galleryItem);


galleryItem.forEach(function(element){
  element.querySelector(".fa-plus").addEventListener("click",function(){
	lightBox.classList.remove("hide");
	lightBox.classList.add("show");

	lightBoxImg.src=element.querySelector("img").getAttribute("src")

  })
})










	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #dfe6e9 }";
	document.body.appendChild(css);
  };



