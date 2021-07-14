var canvas = new fabric.Canvas("myCanvas");

var block_image_width = 30;
var block_image_height = 30;

var player_x = 10;
var player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(player_object);
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);

        block_image_object.set({
            top: player_y,
            left: player_x
        });

        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == 80) {
        console.log("P and shift pressed together");
        block_image_width += 10;
        block_image_height += 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (e.shiftKey == true && keyPressed == 77) {
        console.log("M and shift pressed together");
        block_image_width -= 10;
        block_image_height -= 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if (keyPressed == 38) {
        up();
        console.log("Up");
    }

    if (keyPressed == 39) {
        right();
        console.log("Right");
    }

    if (keyPressed == 37) {
        left();
        console.log("Left");
    }

    if (keyPressed == 40) {
        down();
        console.log("Down");
    }

    if (keyPressed == 84) {
        new_image("trunk.jpg");
        console.log("Trunk");
    }

    if (keyPressed == 68) {
        new_image("dark_green.png");
        console.log("Dark green");
    }

    if (keyPressed == 76) {
        new_image("light_green.png");
        console.log("Light green");
    }

    if (keyPressed == 71) {
        new_image("ground.png");
        console.log("Ground");
    }

    if (keyPressed == 87) {
        new_image("wall.jpg");
        console.log("Wall");
    }

    if (keyPressed == 89) {
        new_image("yellow_wall.png");
        console.log("Yellow wall");
    }

    if (keyPressed == 82) {
        new_image("roof.jpg");
        console.log("Roof");
    }

    if (keyPressed == 67) {
        new_image("cloud.jpg");
        console.log("Cloud");
    }

    if (keyPressed == 85) {
        new_image("unique.png");
        console.log("Unique");
    }
}

function up() {
    if (player_y >= 0) {
        player_y -= block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When up arrow key is pressed, X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y += block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When down arrow key is pressed, X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x -= block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When left arrow key is pressed, X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 900) {
        player_x += block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When right arrow key is pressed, X = " + player_x + " and Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}