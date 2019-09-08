function setup() {
	createCanvas(700,600); // make an HTML canvas element width x height pixels
    }

function draw() {
	var h = map(hour(), 0, 24, 0, 480);
    var m = map(minute(), 0, 60, 0, 200);
    var s = map(second(), 0, 60, 0, 50);


  //hour

    strokeWeight(16);
	stroke(255);
	noFill();
    rect(125,25,480,480)



    strokeWeight(16);
	stroke(255);
	fill(255, 204, 0);
   	rect(125,25,h,480)

    stroke(100, 100, 100)
    strokeWeight(3)
    line(145, 25, 145, 505) //1
    line(165, 25, 165, 505)
    line(185, 25, 185, 505)
    line(205, 25, 205, 505)
    line(225, 25, 225, 505)
    line(245, 25, 245, 505)
    line(265, 25, 265, 505)//7
    line(285, 25, 285, 505)
    line(305, 25, 305, 505)
    line(325, 25, 325, 505)
    line(345, 25, 345, 505) //11
    line(365, 25, 365, 505)
    line(385, 25, 385, 505)
    line(405, 25, 405, 505)
    line(425, 25, 425, 505)
    line(445, 25, 445, 505)
    line(465, 25, 465, 505) //17
    line(485, 25, 485, 505)
    line(505, 25, 505, 505)
    line(525, 25, 525, 505)
    line(545, 25, 545, 505)
    line(565, 25, 565, 505)
    line(585, 25, 585, 505)
    //minute
    strokeWeight(8)
    stroke(255) //color: pink
    fill(255);
    rect(250, 150, 200, 200)

    strokeWeight(8)
    stroke(255, 100, 150) //color: pink
    noFill();
    rect(250, 150, 200, 200)




    strokeWeight(8)
    stroke(255, 100, 150) //color: pink
    fill(255, 100, 150);
    rect(250, 150, m, 200)

    stroke(225)
    strokeWeight(3)
    line(300, 150, 300, 350)
    line(350, 150, 350, 350)
    line(400, 150, 400, 350)

    //second

    strokeWeight(4)
    stroke(0)
   	noFill();
    rect(325,225,50, 50)


    strokeWeight(4)
    stroke(0)
   	fill(0);
    rect(325,225,s, 50)
  //labels


}
