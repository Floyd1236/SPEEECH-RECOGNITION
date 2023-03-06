// * Variable x & y * //
x = 0;
y = 0;

// * Variable draw_rect & draw_circle * //
draw_rect = "";
draw_circle = "";

// * Variable SpeechRecognition * //
var SpeechRecognition = window.webkitSpeechRecognition;

// * Variable recognition * //
var recognition = new SpeechRecognition;

// * Function start() * //
function start()
{
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

// * recognition.onresult = function (event)  * //
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "Speech is recognized as : "+ content;
    if (content == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing Circle";
        draw_circle = "set";
    }

    if (content == "rectangle")
    {
        x = Math.floor(Math.random()* 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing Rectangle";
        draw_rect = "set";
    }
}

// * Function setup() * //
function setup()
{
    canvas = createCanvas(900, 600);
}

// * Function draw() * //
function draw()
{
    if (draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn";
        draw_circle = "";
    }

    if (draw_rect == "set")
    {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML = "Rectangle is drawn";
        draw_rect = "";
    }
}