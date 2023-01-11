const sliderInfo = [
	{
		apartmentImageUrl: './images/apartment-image.png',
		apartmentArea: 81,
		apartmentCity: 'Rostov-on-Don, admiral',
		apartmentRepearTime: 3.5,
		apartmentCost: 'upon request'
	},
	{
		apartmentImageUrl: './images/apartment-image2.png',
		apartmentArea: 105,
		apartmentCity: 'Sochi Thieves',
		apartmentRepearTime: 4,
		apartmentCost: 'upon request'
	},
	{
		apartmentImageUrl: './images/apartment-image3.png',
		apartmentArea: 93,
		apartmentCity: 'Rostov-on-Don Patriotic',
		apartmentRepearTime: 3,
		apartmentCost: 'upon request'
	}
]

const sliderArrows = document.querySelector('.apartment-nav-arrows')
const nextButton = document.querySelector('.apartment-next-button');
const prevButton = document.querySelector('.apartment-prev-button');
let sliderImage = document.querySelector('.apartment-images');
let sliderDots = document.querySelector('.slider-dots');
let areaInfo = document.querySelector('.area-info');
let cityInfo = document.querySelector('.city-info');
let repearTimeInfo = document.querySelector('.repear-time-info');
let repearCostInfo = document.querySelector('.repear-cost-info');
let apartmentNavDiv = document.querySelector('.apartment-nav-div').querySelector('.apartment-nav');

// nextButton.addEventListener('click', () => {
// 	alert('you clicked nextButton');
// })
// 
// prevButton.addEventListener('click', () => {
// 	alert('you clicked prevButton');
// })

function initSlider(options) {
	if (!sliderInfo || !sliderInfo.length) return;
  
	options = options || {
		desc: false,
		dots: true,
		autoplay: false
	}
	
	initImages();
	initArrows();
	initNav();
	  
	if (options.dots) {
	initDots();
	}
	
	if (options.titles) {
	initInfo();
	}
	
	if (options.autoplay) {
	initAutoplay();
	}
	
	function initImages() {
		sliderInfo.forEach((option, index) => {
		  let imageDiv = `<img src="${sliderInfo[index].apartmentImageUrl}" class="apartment-image n${index} ${index === 0? "active" : ""}" style="background-image:url(${sliderInfo[index].apartmentImageUrl});" data-index="${index}"></div>`;
		  sliderImage.innerHTML += imageDiv;
		});
	};
	
	function initArrows() {
		sliderArrows.querySelectorAll(".apartment-nav-button").forEach(arrow => {
	  		arrow.addEventListener("click", function() {
				let curNumber = +sliderImage.querySelector(".active").dataset.index;
				let nextNumber;
				if (arrow.classList.contains("apartment-prev-button")) {
		  		nextNumber = curNumber === 0? sliderInfo.length - 1 : curNumber - 1;
				} else {
		  		nextNumber = curNumber === sliderInfo.length - 1? 0 : curNumber + 1;
				}
				moveSlider(nextNumber);
	  		});
		});
	};
	
	function initNav() {
		sliderInfo.forEach((option, index) => {
			let cityName = sliderInfo[index].apartmentCity.toUpperCase();
		  	let navItem = `<li class="nav-item apartment-nav-item apartment-item${index} n${index} ${index === 0? "active" : ""}" data-index="${index}">${cityName}</li>`;
		  	apartmentNavDiv.innerHTML += navItem;
		  	console.log(navItem);
		});
		
		apartmentNavDiv.querySelectorAll('.apartment-nav-item').forEach(item => {
			console.log(this);
			item.addEventListener("click", function() {
				moveSlider(this.dataset.index);
			})
		})
	};
	
 
function initDots() {
	sliderInfo.forEach((option, index) => {
		let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
		sliderDots.innerHTML += dot;
	});
	sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
		dot.addEventListener("click", function() {
			moveSlider(this.dataset.index);
		})
	})
}
  
function moveSlider(num) {
	  sliderImage.querySelector(".active").classList.remove("active");
	  sliderImage.querySelector(".n" + num).classList.add("active");
	  apartmentNavDiv.querySelector(".active").classList.remove("active");
	  apartmentNavDiv.querySelector(".n" + num).classList.add("active");
	  if (options.dots) {
		sliderDots.querySelector(".active").classList.remove("active");
		sliderDots.querySelector(".n" + num).classList.add("active");
	  }
	  if (options.desc) changeInfo(num);
}

function initInfo() {
	let apartmentAreaText = `${sliderInfo[0].apartmentArea} m2`;
	areaInfo.textContent += apartmentAreaText;
	
	let apartmentCityText = `${sliderInfo[0].apartmentCity}`;
	cityInfo.textContent += apartmentCityText;
	
	let apartmentRepearTimeText = `${sliderInfo[0].apartmentRepearTime} month`;
	repearTimeInfo.textContent += apartmentRepearTimeText;
	
	let apartmentRepearCostText = `${sliderInfo[0].apartmentCost}`;
	repearCostInfo.textContent += apartmentRepearCostText;
}

function changeInfo(num) {
	if (!sliderInfo[num].apartmentArea) return;
	areaInfo.innerText = `${sliderInfo[num].apartmentArea} m2`;
	
	if (!sliderInfo[num].apartmentCity) return;
	cityInfo.innerText = sliderInfo[num].apartmentCity;
	
	if (!sliderInfo[num].apartmentRepearTime) return;
	repearTimeInfo.innerText = `${sliderInfo[num].apartmentRepearTime} month`;
	
	if (!sliderInfo[num].apartmentCost) return;
	repearCostInfo.innerText = sliderInfo[num].apartmentCost;
  }
  
  function initAutoplay() {
	  setInterval(() => {
		let curNumber = +sliderImage.querySelector(".active").dataset.index;
		let nextNumber = curNumber === sliderInfo.length - 1? 0 : curNumber + 1;
		moveSlider(nextNumber);
	  }, options.autoplayInterval);
	}
}
  
  let sliderOptions = {
	dots: true,
	desc: true,
	autoplay: true,
	autoplayInterval: 5000
  };
  
  document.addEventListener("DOMContentLoaded", function() {
	initSlider(sliderOptions);
  });
  
  // apartmentNavDiv.forEach(item) => {
	//   item.addEventListener("click", () => {
	// 	  
	//   })
  // }