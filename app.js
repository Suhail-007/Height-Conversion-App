const submitBtn = document.querySelector('[data-submit-Btn]');

let form = document.querySelector('form');

//this will show the output of converted height
let span = document.createElement('span');


//creating different functions to practice callback function and creating different function for different things
function feetAndInchToCm(feet, inch) {
		if (feet !== '' && inch !== '') {
//	changing string to number and adding toFixed property 
			span.textContent = parseInt((feet * 30.48) + (inch * 2.54)).toFixed(1) + 'cm';
		} else if (feet !== '' && inch == '') {
			span.textContent = parseInt((feet * 30.48)).toFixed(2) + 'cm';
		}	 else if (feet == '' && inch !== '') {
				alert('You c;an\'t be Hobbit, right?');								
		};
}


function calculatedValue() {
 let feetValue = document.getElementById('ft').value;
 let inchValue = document.getElementById('inch').value;
		
		//checking if the feet and cm values aren't empty
		if (isNaN(feetValue) || isNaN(inchValue)) {
				alert('Enter a number value');
		} else if (feetValue == '' && inchValue == '') {
				alert('Enter a number');
		}
				feetAndInchToCm(feetValue, inchValue);
				//append the calculated value
				form.appendChild(span);
				feetValue = '';
				inchValue = '';				
}

submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		calculatedValue();
});
