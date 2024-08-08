//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let FlowerScale = 1;//changes size of flower 
let Circlescale = .4;//changes size of circles on side
let Squarescale = 1;//changes size of background squares
let FlowerX = 1;//moves all the petals to the X axis
let FlowerY = 1;//moves all the petals to the Y axis
let circleX = 1;//moves all side cricles to the X axis 
let circleY = 1;//moves all side circles to the Y axis
let SquareX = 1;//moves all the squares to the X axis 
let SquareY = 1;//moves all the squares to the Y axis

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}



function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 

//draw outer outer outer square
fill(171,235,198);//darkgreen
rect(1*SquareX,1*SquareY,199*Squarescale,199*Squarescale);
//draw outer outer square
fill(130,224,170);//light green
rect(23*SquareX,30*SquareY,154*Squarescale,145*Squarescale);
//draw outer square
fill(88,214,141);//darkdarkgreen
rect(50*SquareX,50*SquareY,100*Squarescale,100*Squarescale);

//draw circle
fill(213,245,227);
ellipse(20,20,20*Circlescale ,20*Circlescale);//top left
ellipse(20,185,20*Circlescale ,20*Circlescale);//bottom left
ellipse(185,22,20*Circlescale ,20*Circlescale);//top right
ellipse(185,183,20*Circlescale ,20*Circlescale);//bottom right

 //draw petal
fill(215,189,226)//lavander
ellipse(100*FlowerX,70*FlowerY,15*FlowerScale,30*FlowerScale);//top petal
ellipse(100*FlowerX,130*FlowerY,15*FlowerScale,30*FlowerScale);//bottom petal
ellipse(130*FlowerX,100*FlowerY,30*FlowerScale,15*FlowerScale);//right side
ellipse(70*FlowerX,100*FlowerY,30*FlowerScale,15*FlowerScale);//left side

//draw flower centre
fill(249,231,159)//yellow
ellipse(100*circleX,100*circleY,20*FlowerScale,20*FlowerScale);//centre

if (Circlescale > .4 ){

//draw outer outer outer square
fill(251, 238, 230  ); //light orange
rect(1*SquareX,1*SquareY,199*Squarescale,199*Squarescale);
//draw outer outer square
fill(246, 221, 204);//orange
rect(23*SquareX,30*SquareY,154*Squarescale,145*Squarescale);
//draw outer square
fill(237, 187, 153  );//dark orange
rect(50*SquareX,50*SquareY,100*Squarescale,100*Squarescale);

//draw circle
fill(229, 152, 102  );//orange
ellipse(20,20,20*Circlescale ,20*Circlescale);//top left
ellipse(20,185,20*Circlescale ,20*Circlescale);//bottom left
ellipse(185,22,20*Circlescale ,20*Circlescale);//top right
ellipse(185,183,20*Circlescale ,20*Circlescale);//bottom right


fill(227, 63, 209)// hot pink
ellipse(100*FlowerX,70*FlowerY,15*FlowerScale,30*FlowerScale);//top petal
ellipse(100*FlowerX,130*FlowerY,15*FlowerScale,30*FlowerScale);//bottom petal
ellipse(130*FlowerX,100*FlowerY,30*FlowerScale,15*FlowerScale);//right side
ellipse(70*FlowerX,100*FlowerY,30*FlowerScale,15*FlowerScale);//left side

//draw flower centre
fill(249,231,159)//yellow
ellipse(100*circleX,100*circleY,20*FlowerScale,20*FlowerScale)//centre
    }

}
