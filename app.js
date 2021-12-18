const submitBtn = document.querySelector('[data-submit-Btn]');

 let feetValue = document.getElementById('ft');
 let inchValue = document.getElementById('inch');

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
				 span.textContent = parseInt((inch * 2.54)).toFixed(1) + 'cm';				
		};
}


function calculatedValue() { 
		//checking if the feet and cm values aren't empty
if (isNaN(feetValue.value) || isNaN(inchValue.value)) {
				alert('Enter a number value');
		} else if (feetValue.value == '' && inchValue.value == '') {
				alert('Enter a number');
		}
				feetAndInchToCm(feetValue.value, inchValue.value);
				//append the calculated value
				form.appendChild(span);
				feetValue.value = '';
				inchValue.value = '';				
}

submitBtn.addEventListener('click', (event) => {
		event.preventDefault();
		calculatedValue();
});
