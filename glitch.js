let counter = document.querySelector('h2');



setInterval(()=>{

	counter.innerText = count;
	count++

},1000)