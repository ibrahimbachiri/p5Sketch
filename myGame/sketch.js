let img;
let pg;  // Graphics buffer

function preload() {
    img = loadImage('basket.png');
}

function setup() {
    createCanvas(800, 600);
    pg = createGraphics(img.width, img.height);  // Create a buffer of the same size as the image
    pg.image(img, 0, 0);  // Draw the image onto the buffer
}

function draw() {
    background(220);
    image(img, 0, 0);  // Optionally draw the image onto the canvas for display
}

function keyPressed() {
    pg.save('myImage.png');  // Save the buffer content as a PNG file
}
