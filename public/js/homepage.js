
document.addEventListener('DOMContentLoaded', () => {

	console.log('index.hbs is loaded for subtitle');
	
	const bannerSubtitle = document.querySelector('.banner-subtitle');

	window.onload = () => {
		const bannerArray = [ 'Be smart', 'Be healthy', 'Be nuts', 'Be kind' ];
		let index = 1;

		setInterval(() => {

			bannerSubtitle.innerText = bannerArray[index++];

			if(index === bannerArray.length){
				index = 0;
			}

		}, 2500);

	}

});


