 function btn() {
            let a = document.getElementById("btn");
            let b = document.getElementById("time");
            if (b.style.display != "block") {
                b.style.display = "block"
                setInterval(() => {
                    let a = new Date();
                    document.getElementById('time').innerHTML = "❣ " + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds() + " ❤ " + a.toLocaleDateString(undefined, { weekday: 'long' }) + "❣";

                }, 1000);
            }
            else {
                b.style.display = "none"
                console.log("clicked2")
            }

        }
        function btn2() {
            let al = Number(prompt("enter a number"));
            let bd = 1;
            for (let i = 1; i <= al; i++) {
                bd *= i;
            }
            document.getElementById("fact").innerHTML = "factorial of " + al + " = " + bd;


        }
        function pat() {
            

            let n = Number(prompt("enter your number"));
            let string = "";
            
            for (let i = 1; i <= n; i++) 
            {
                
                for (let j = 1; j <= n - i; j++) {
                    string += " ";
                }
               
                for (let k = 0; k < 2 * i - 1; k++) {
                    string += "*";
                }
                string += "\n";
            }
            document.getElementById("pattern").innerHTML=string;

        }
