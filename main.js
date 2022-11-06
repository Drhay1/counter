const value = document.querySelector("#value");
const button = document.querySelectorAll(".btn");

let count = 0;

button.forEach(function (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains("d")){
            count--;
            
        } else if (styles.contains("i")){
            count++;
        } else {
            count = 0;
        }
    
        

        value.textContent = count;
        if (count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        } else{
            value.style.color = "black";
        }



    });
});