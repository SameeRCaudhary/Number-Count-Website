let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
        const style = e.currentTarget.classList;
        if(style.contains("decrease")){
            count--;
        }
        else if(style.contains("increase")){
            count++;
        }
        else{
            count =0;
        }
        if(count<0){
            value.style.color = '#B22222';
        }
        if(count>0){
            value.style.color='#008000';
        }
        if(count==0){
            value.style.color='#2F4F4F';
        }
        value.textContent=count;
    
    });
})