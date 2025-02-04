
const cards = document.querySelectorAll('.card');
const navItems = document.querySelectorAll('.active');

cards.forEach(card => {
    card.addEventListener('mouseover',()=> {
        card.style.transform = "scale(1.05)";
        card.style.transition = "0.3s ease-in-out";
        card.style.cursor = "pointer";
    });
    card.addEventListener('mouseleave',()=>{
        card.style.transform = "scale(1)";
    });
});
// navItems.forEach(item => {
//     item.addEventListener("mouseover", () => {
//         item.style.backgroundColor = 'yellow';
//         item.style.color = 'black';
//         item.style.padding = '7px 20px';
//         item.style.borderRadius = '15px';
//         item.style.transition = 'all 0.3s ease';
//         item.style.cursor = 'pointer';
//     });

    // Remove hover effect when mouse leaves

//     item.addEventListener("mouseout", () => {
//         item.style.backgroundColor = '';
//         item.style.color = '';
//         item.style.padding = '';
//         item.style.borderRadius = '';
//         item.style.transition = '';
//     });
// });
// document.querySelectorAll("nav h3").forEach((item, index) =>
//     item.onclick = () => 
//         document.querySelectorAll("main > div")[index].scrollIntoView({ behavior: "smooth" })
// );

// Function to check viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.left >= 0 &&
        rect.bottom >= 0 &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the fade-in effect
function handleFadeIn() {
    const elements = document.querySelectorAll('.page2-card, .img');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.page2-card, .img');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
});

window.addEventListener('scroll', handleFadeIn);

handleFadeIn();


