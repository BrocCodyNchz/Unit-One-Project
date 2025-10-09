//------------------------------------------------------------------//
//------------------------------------------------------------------//

//All of the code in this was created and either did not work 
// or I ended up deciding on a different direction

//------------------------------------------------------------------//
//------------------------------------------------------------------//

// const menuToggle = document.getElementById(`menu-toggle`);
// const sideMenu = document.getElementById(`side-menu`);

//Wheel was more complicated to make and work correctly so placed a spinning image instead.
//May go back to this once I work on the rest to make it work.

// const sections = ['Try Again', 'Lose', 'You Win!', 'Free Spin!', `You Win!`];
// const sectionAngle = 360 / sections.length; 

// for (let i = 0; i < sections.length; i++) {
//     const sectionDiv = document.createElement(`div`);
//     sectionDiv.className = `wheel-section`;
//     sectionDiv.textContent = sections[i];
//     sectionDiv.style.transform = `rotate(${i * sectionAngle + sectionAngle / 2}deg) translateY(70px) rotate(90deg)`;
//     wheel.appendChild(sectionDiv);
// }

// function toggleMenu() {
//     sideMenu.classList.toggle(`open`);
// }
// menuToggle.addEventListener(`click`, toggleMenu);

// const menuLinks = sideMenu.querySelectorAll(`a`);
// for (const link of menuLinks) {
//     link.addEventListener(`click`, () => {
//         if (sideMenu.classList.contains(`open`)) {
//             setTimeout(toggleMenu, 100);
//         }
//     })
// }
        //OLD CODE MAY COME BACK TO LATER AND ADD IN

        // const winIndex = 2; //Always set to "You Win"
        // const finalAngle = winIndex * sectionAngle;
        // const extraSpins = 360 * 3; //extra spins added for visual purposes
        // const totalRotation = extraSpins + finalAngle;

        // if (wheel.style.transform === ``) {

                // } else {
        //     wheel.style.transform = `rotate(${totalRotation + 360 * 3}deg)`;
        // }
