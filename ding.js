// Function to create a 'ding' sound
function createDingSound() {

    // Create an AudioContext
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioContext = new AudioContext();

    // Create an oscillator node to generate the tone
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine'; // You can experiment with different wave types: 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.frequency.value = 1000; // Adjust the frequency for different pitch

    // Connect the oscillator to the AudioContext destination (the speakers)
    oscillator.connect(audioContext.destination);

    // Start the oscillator to play the sound
    oscillator.start();

    // Stop the oscillator after a short duration (e.g., 300 milliseconds)
    setTimeout(() => {
        oscillator.stop();
    }, 300); // Adjust the duration to control how long the 'ding' sound plays
}

// Event listener for checkbox change
function onCheckboxChange(event) {
    
    // Check if the checkbox is checked or unchecked
    // Apply appropriate styles and move the item to the bottom of the list
    const checkbox = event.target;
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
        listItem.classList.add('checked'); // Apply the CSS class for line-through style
        todoList.appendChild(listItem); // Move the item to the bottom of the list

        // Play the 'ding' sound
        createDingSound();
    } else {
        listItem.classList.remove('checked'); // Remove the line-through style
    }
}
