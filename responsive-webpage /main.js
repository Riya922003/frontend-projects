




function  head_animation(){
        let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
    });
    }
    let sidebar = document.querySelector(".sidebar");
    let sidebarBtn = document.querySelector(".bx-menu");
    console.log(sidebarBtn);
    sidebarBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("close");
    });
    }

head_animation();






// Select the sidebar and other containers
const sidebar = document.querySelector('.sidebar');
const containers = document.querySelectorAll('.main, .side_bar, .page1, .page2');

// Function to handle sidebar hover
function handleSidebarHover() {
  // Add a class to the containers to move them up
  containers.forEach(container => {
    container.classList.toggle('hovered');
  });
}

// Event listener for sidebar hover
sidebar.addEventListener('mouseenter', handleSidebarHover);
sidebar.addEventListener('mouseleave', handleSidebarHover);




// image animation

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
	let stt = 0;
	items[active].style.transform = `none`;
	items[active].style.zIndex = 1;
	items[active].style.filter = 'none';
	items[active].style.opacity = 1;
	for(var i = active + 1; i < items.length; i++){
		stt++;
		items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
		items[i].style.zIndex = -stt;
		items[i].style.filter = 'blur(5px)';
		items[i].style.opacity = stt > 2 ? 0 : 0.6;
	}
	stt = 0;
	for(var i = active - 1; i >= 0; i--){
		stt++;
		items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
		items[i].style.zIndex = -stt;
		items[i].style.filter = 'blur(5px)';
		items[i].style.opacity = stt > 2 ? 0 : 0.6;
	}
}
loadShow();
next.onclick = function(){
	active = active + 1 < items.length ? active + 1 : active;
	loadShow();
}
prev.onclick = function(){
	active = active - 1 >= 0 ? active - 1 : active;
	loadShow();
}
