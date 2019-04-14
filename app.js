let circles = document.querySelectorAll('.circle')

let navigation = document.querySelector('.navigation');

navigation.addEventListener('click', function(e){
    document.querySelector('.' + e.target.innerHTML.toLowerCase()).scrollIntoView();
});

setInterval(function(){
    circles.forEach(function(circle){
        //console.log(circle)
        circle.classList.toggle('leftward');
    });
}, 3000);