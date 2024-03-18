
function vjkBacker(args = {'class': undefined, 'type': 1, 'size': 1}) {
	if (args.class == undefined) {
		console.log('no class added !');
		return false;
	} else if (document.querySelector('.'+args.class) == null) {
		console.log('bad class added !');
		return false;
	} else {
		var div = document.createElement('div');
		var span = document.createElement('span');
		var img = document.createElement('img');
		var par = document.querySelector('.'+args.class);
		var txt = par.innerText;
		var url = document.location.origin+'/wp-content/themes/rev-7/img';

		par.classList.add('backer');
		par.innerText = "";
		span.innerText = txt;
		par.prepend(span);
		img.id = "img-backer";


		if (args.type == 1) {
			img.setAttribute('src', url+'/png.png');
		} else if (args.type == 2) {
			img.setAttribute('src', url+'/png2.png');
		} else if (args.type == 3) {
			img.setAttribute('src', url+'/png3.png');
		} else if (args.type == 4) {
			img.setAttribute('src', url+'/png4.png');
		} else if (args.type == 5) {
			img.setAttribute('src', url+'/png5.png');
		} else if (args.type == 6) {
			img.setAttribute('src', url+'/png6.png');
		} else {
			console.log('bad type argument !');
			return false;
		}

		if (args.size == 1) {
			img.style.width = (par.offsetWidth + (par.offsetWidth / 2))+'px';
			img.style.left = '-'+((par.offsetWidth / 3) / 2)+'px';
			img.style.height = (par.offsetHeight + 50)+'px';
			img.style.top = '-'+((par.offsetHeight) / 4)+'px';
		} else if (args.size == 2) {
			var size = document.querySelector('.'+args.class+' span');
			//console.log(size.offsetWidth);
			const theWidth = size.offsetWidth + 60;
			const theHeight = size.offsetHeight + 20;
			img.style.width = theWidth+'px';
			img.style.left = '-30px';
			img.style.height = theHeight+'px';
			img.style.top = '-10px';
		} else if (args.size == 3) {
			//var size = document.querySelector('.'+args.class+' #img-backer');
			//console.log(size.offsetWidth);
			img.style.width = (par.offsetWidth + 100)+'px';
			img.style.left = '-'+(par.offsetWidth / 4)+'px';
			img.style.height = (par.offsetHeight + 50)+'px';
			img.style.top = '-'+(par.offsetHeight / 2)+'px';
		} else if (args.size == 4) {
			//var size = document.querySelector('.'+args.class+' #img-backer');
			//console.log(size.offsetWidth);
			img.style.width = (par.offsetWidth + 100)+'px';
			img.style.left = '-'+((par.offsetWidth / 2))+'px';
			img.style.height = (par.offsetHeight + 50)+'px';
			img.style.top = '-'+(par.offsetHeight / 3)+'px';
		} else {
			console.log('Bad size argument !');
			return false;
		}
		par.prepend(img);
	}
}