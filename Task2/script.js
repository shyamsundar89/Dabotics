let string = " ";
let buttons = document.querySelectorAll(".col1");
let value = document.querySelectorAll(".col1").values;
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e) => {
        try {
            if(e.target.innerHTML == '=') {
                string = eval(string);
                if (string === Infinity || string === -Infinity) {
                    document.querySelector('input').value = "DIVISION BY ZERO";
                } else {
                    document.querySelector('input').value = string;
                } 
            }
            else if(e.target.innerHTML == 'AC') {
                string = "";
                document.querySelector('input').value = string; 
            }
            else if(e.target.innerHTML == '√') {
                if (string < 0) {
                    document.querySelector('input').value = "INVALID INPUT";
                } else {
                    string = Math.sqrt(string);
                    document.querySelector('input').value = string;
                }; 
            }
            else if(e.target.innerHTML == 'Del') {
                string = string.slice(0, string.length - 1)
                document.querySelector('input').value = string; 
            }
            else {
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        }
        catch {
            document.querySelector('input').value = "SYNTAX ERROR"
        }
    })
}
)
