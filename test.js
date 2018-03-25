function reverse(str) {
	if (str.length === ''){
		console.log (str);
	    return '';
	  } else {
	    return  str[str.length - 1] + reverse(str.substr(0, str.length - 1));
	  }
}

alert("thi is not going to work");
console.log('Before calling functions');
reverse('reverse');