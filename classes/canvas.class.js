class Canvas {

    // Everything inside constructor() method will be executed whenever a new Canvas object is created.
    // TODO: Give the constructor 2 parameters: width and height.
    //       Use these parameters to give the fields values.
    constructor(width, height) {
        // Fields for the class
        this.width = width;
        this.height = height;

        // Create a new field that will store the context of the canvas (set the value to undefined for now)
        this.context = undefined;
    }

    // Methods are functions unique for this class
    createElement() {
        // TODO:
        // 1] Create a new element <canvas> and store it in a local constant/variable "ele"
        // 2] Set the width and height of this element using the class fields
        // 3] Add the element to the div ".app"
        let ele = document.createElement("canvas");
        ele.width = this.width;
        ele.height = this.height;
        document.querySelector(".app").append(ele);

        // TODO: Get the context of the <canvas> element and assign it to context field. !20:04!
        this.context = ele.getContext("2d");
    }

    // TODO: Create a method clear() that will erase the entire canvas.
    clear() {
        this.clearRect(0, 0, this.width, this.height)
    }
}