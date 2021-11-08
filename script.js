
function getPath(currEl){
	let arr = [];

	function eachElements(el){
		if(el === document.body) {
			return arr.reverse();
		}
		arr.push(el.tagName.toLowerCase() + getNthPosition(el));
		return eachElements(el.parentElement);
	}

	function getNthPosition(el){

		let previousEl = el.previousElementSibling,
			count = 1,
			result = '';


		while(previousEl){
			++count;
			previousEl = previousEl.previousElementSibling;
		}

		result = ':nth-child(' + count + ')';

		return result;

    }

    let strOut = eachElements(currEl).join('>');
    console.log(currEl);
	alert(strOut);
}