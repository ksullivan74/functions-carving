const createWoodBlock = () => 
{
    // Return an object with 4 properties.
    const woodBlock = 
    {
        type: "Wood Block",
        length: 10,
        material: "Pine",
        purpose: "Flute"
    }
    return woodBlock                         
}

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const carvingString = (`The ${woodObject.length} ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}.`)
    return carvingString
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)