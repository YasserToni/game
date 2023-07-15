document.querySelector(".control-button span").onclick = function () {
    let yourName = prompt("What Is Your Name ?")
    if (yourName == null || yourName == "") {
        document.querySelector(".name span").innerHTML = "Unknown"
    } else {
        document.querySelector(".name span").innerHTML = yourName;
    }
    document.querySelector(".control-button").remove();
}
// Efect duration 
let duration = 1000;
// Select block container
let containerBlock = document.querySelector(".game-memory-bloks");
// create array from game block 
let blocks = Array.from(containerBlock.children);

// create range of keys 

let orderRange = [...Array(blocks.length).keys()]; // =  Array.from(Array(blocks.length).keys())

// Add order css properity to game block
// console.log(orderRange)
shuffle(orderRange);
// console.log(orderRange)

blocks.forEach((block, index) => {
    
    block.style.order = orderRange[index];

    // add click event 
    block.addEventListener('click', function () {

        // Trigger the flip block function 
        flipBlock(block)
    })
});
// Flip block function 
function flipBlock(SelectedBlock) {
    // add class is-filpped
    SelectedBlock.classList.add('is-filpped');

    // colect all flipped cards 
    let allFilppedBlocks = blocks.filter(filppedBlocked => filppedBlocked.classList.contains('is-filpped'))
    // If there two blocks selected
    if (allFilppedBlocks.length === 2) {
        // console.log("Two flipped blocks selected ")
        // Stop clicking function 
        stopclick();
        // check matched block function 
        mathcedBlocks(allFilppedBlocks[0],allFilppedBlocks[1]);
    }
    // Stop clicking function 
    // check matched block function 
};
// Check Matched blocks function 
function mathcedBlocks(firstBlock,secondBlock) {
    let triesElement = document.querySelector(".tries span ")
    if (firstBlock.dataset.technolagy === secondBlock.dataset.technolagy) {
        
        firstBlock.classList.remove('is-filpped')
        secondBlock.classList.remove('is-filpped')

        firstBlock.classList.add('is-matched')
        secondBlock.classList.add('is-matched')
        document.getElementById('succes').play();
    } else {
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;
        setTimeout(() => {

            firstBlock.classList.remove('is-filpped')
            secondBlock.classList.remove('is-filpped')
            
        }, duration)
        document.getElementById('wrong').play();
        

    }
}

// Stop clicking function 
function stopclick(){
    containerBlock.classList.add('no-clicking')
    
    // Remove class no clicking after the duration
    setTimeout(() => {
        containerBlock.classList.remove('no-clicking')
    },duration)
}

//shuffle function 
function shuffle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        // Get random number 
        random = Math.floor(Math.random() * current)
        // Decrease number by one
        current--;
       //[1] save current element in stach 
        temp = array[current]
        // [2] Current elment = Random elemnt 
        array[current] = array[random]
        // [3] Random elment = Get emlemnt form stach
        array[random] = temp;

    }
    return array;
    
}
