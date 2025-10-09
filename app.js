//DOM
const gameMessage = document.getElementById(`gameMessage`);
const spinButton = document.getElementById(`spinButton`);
const wheel = document.getElementById(`wheel`);
const outputDiv = document.getElementById(`output`);
const messageP = document.getElementById(`message`);

//email modal
const emailModal = document.getElementById(`emailModal`);
const emailInput = document.getElementById(`emailInput`);
const emailButton = document.getElementById(`emailButton`)

//setting the state
let isSpinning = false;
let currentRotation = 0; //tracks rotation
const popUpDelay = 1000; //1s delay added for email modal

//Creating a disclaimer modal at the beginning
const firstModal = document.createElement(`div`);
firstModal.className = `firstModal`;
firstModal.style.display = `flex`;

const firstModalContent = document.createElement(`div`);
firstModalContent.className = `modal-content`;

const disclaimerText = document.createElement(`p`);
disclaimerText.className = `disclaimer`;
disclaimerText.textContent = `DISCLAIMER:
This game is for educational purposes, helping users learn about common scam techniques. The first task challenges you to use the inspect element tool to find the button to close a pop-up a safe example of scam tactics. No personal data is collected or stored; all progress remains on your device.`
firstModalContent.appendChild(disclaimerText);

const continueButton = document.createElement(`img`);
continueButton.src = `https://imgs.search.brave.com/YjzvgfxNbCVnYJua-mCyUMjzXD5qaSk8xTssWmuy830/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL3ByZW1p/dW0vcG5nLTI1Ni10/aHVtYi9jb250aW51/ZS1pY29uLXN2Zy1k/b3dubG9hZC1wbmct/MTI5OTI2MTAucG5n/P2Y9d2VicCZ3PTEy/OA`;
continueButton.className = `modal-button`
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
        wheel.style.transform = `rotate(${newRotation}deg)`;

        const spinDurration = 5000;

        setTimeout(() => {
            isSpinning = false;
            spinButton.disabled = false;
            gameMessage.textContent = `BIG WIN!!!!`;

            setTimeout(() => {
                emailModal.classList.add(`show`);
                emailInput.value = ``;
                emailModal.style.display = `flex`;
            }, popUpDelay);
            spinButton.disabled = true;
        }, spinDurration);
    }
});

// function handleEmailSubmission() {
//     const warningModal = document.querySelector(`#emailModal` `.email-modal-content`);
//     if (!warningModal) {
//     //     messageP.innerHTML = `<strong>Warning!!!</strong> Scam sites often use these techniques to trick you into sharing your personal information.`;
//     // }
    
//     warningModal.innerHTML = `<strong>Warning!!!</strong> Scam sites often use these techniques to trick you into sharing your personal information.`;
//     }
// 


