//DOM
const gameMessage = document.getElementById(`gameMessage`);
const spinButton = document.getElementById(`spinButton`);
const wheel = document.getElementById(`wheel`);
const outputDiv = document.getElementById(`output`);
const messageP = document.getElementById(`message`);


//Wheel was more complicated to make and work correctly so placed a spinning image instead.
//May go back to this once I work on the rest to make it work.

// const sections = [`You WIN!!!`];
// const sectionAngle = 360 / sections.length; 

// for (let i = 0; i < sections.length; i++) {
//     const sectionDiv = document.createElement(`div`);
//     sectionDiv.className = `wheel-section`;
//     sectionDiv.textContent = sections[i];
//     sectionDiv.style.transform = `rotate(${i * sectionAngle + sectionAngle / 2}deg) translateY(70px) rotate(90deg)`;
//     wheel.appendChild(sectionDiv);
// }

//setting the state
let isSpinning = false;
let currentRotation = 0; //tracks rotation

//Creating a disclaimer modal at the beginning
const firstModal = document.createElement(`div`);
firstModal.className = `modal`;
firstModal.style.display = `flex`;

const firstModalContent = document.createElement(`div`);
firstModalContent.className = `modal-content`;

const disclaimerText = document.createElement(`p`);
disclaimerText.className = `disclaimer`;
disclaimerText.textContent = `Disclaimer:
This game is intended for educational purposes only. All activities, simulations, and information presented within the game are designed to support learning and skill development. No personal data or user information is collected, stored, or shared by the developer.
By playing this game, you acknowledge and agree that all progress and data remain local to your device, and that the developer assumes no responsibility for any misuse or interpretation of the educational content provided.`
firstModalContent.appendChild(disclaimerText);

const continueButton = document.createElement(`button`);
continueButton.textContent = `Continue`;
continueButton.addEventListener(`click`, () => {
    firstModal.style.display = `none`;
    spinButton.disabled = false; //Turns the Spin Button on once Modal closes
});

firstModalContent.appendChild(continueButton);

firstModal.appendChild(firstModalContent);
document.body.appendChild(firstModal);

spinButton.disabled = true; //Disabled spin button until Modal tells it to turn on. 

//Spin the wheel
spinButton.addEventListener(`click`, function() {
    if (isSpinning) {
        gameMessage.textContent = `Be patient, the wheel is spinning!`;
        return;
    } else {
        isSpinning = true;
        gameMessage.textContent = `Spinning...`;
        spinButton.disabled = true; //added ability to disable the button
        outputDiv.style.display = `none`;

        const targetAngle = 0;
        const minFullRotation = 3;
        const extraAngle = minFullRotation * 360;
        const adjCurrentRotation = currentRotation % 360;
        const rotationNeed = (targetAngle - adjCurrentRotation + 360) % 36;

        const newRotation = currentRotation + extraAngle + rotationNeed;



        //OLD CODE MAY COME BACK TO LATER AND ADD IN

        // const winIndex = 2; //Always set to "You Win"
        // const finalAngle = winIndex * sectionAngle;
        // const extraSpins = 360 * 3; //extra spins added for visual purposes
        // const totalRotation = extraSpins + finalAngle;

        // if (wheel.style.transform === ``) {
            wheel.style.transform = `rotate(${newRotation}deg)`;
        // } else {
        //     wheel.style.transform = `rotate(${totalRotation + 360 * 3}deg)`;
        // }

        const spinDurration = 5000;

        setTimeout(() => {
            if (isSpinning) {
                gameMessage.textContent = `You WIN!!!! But....`;
                outputDiv.style.display = `block`;
                messageP.innerHTML = `<strong>Warning!!!</strong> Scam sites often use these techniques to trick you into sharing your personal information.`;
            }          
            }, spinDurration);
    }
});