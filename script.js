const input = document.getElementById('string');
const button = document.getElementById('convert');
const another = document.getElementById('new_number');
const output = document.getElementById('result');

button.addEventListener('click', () => {
    if(input.value === ''){
        return;
    }
    const string = input.value;
    input.value = '';
    const result = convert(string);
    display(result);
    console.log(result);
});

another.addEventListener('click', () => {
    new_number();
    input.value = '';
});
function display(result) {
    input.classList.add('hidden');
    button.classList.add('hidden');
    another.classList.remove('hidden');
    output.classList.remove('hidden');
    output.innerText = result;
}

function new_number(){
    input.classList.remove('hidden');
    button.classList.remove('hidden');
    another.classList.add('hidden');
    output.classList.add('hidden');
}

const numbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19,
    'twenty': 20,
    'thirty': 30,
    'fourty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90,
    'hundred': 100,
    'thousand': 1000,
    'million': 1000000,
    'billion': 1000000000,
    'trillion': 1000000000000,
}

function convert(string) {
    let result = 0;
    const words = string.split(' ');
    for(let i = 0; i < words.length; i++){
        if(words[i] in numbers){
            if(numbers[words[i]] >= 100){
                result *= numbers[words[i]];
            }
            else{
                result += numbers[words[i]];
            }
        }
    }
    return result;
}