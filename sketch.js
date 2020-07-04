function setup() {
 	createCanvas(1000,1000);//creating canvas or work space//
	
//Building walls for frame 1//
	fill(0,0,0);
	rect(50,100,50,300);
	rect(950,100,50,300);
//**************************//	
	
}
//initializing variables//
	var x = 150; //x cordinate of ellipse//
	var y = 250; //y cordinate of ellipse//
	var z = 1; //variable to check if ellipse has reached the wall//

//variables for fill for ellipse//
	var c_red = 0;
	var c_green = 0;
	var c_blue = 0;
//******************************//

	var i = 0; //counter for changing the colour of ellipse//

function draw() {
//Code to change colour of ellipse after every 20 frames//
	if(i<=19)
	{
		c_red = 255;
		c_green = 0;
		c_blue = 0;
		i=i+1;
	}
	else if(i<=39 && i>19)
	{
		c_red = 0;
		c_green = 255;
		c_blue = 0;
		i = i + 1;
	}
	else if(i<=59 && i >39)
	{
		c_red = 0;
		c_green = 0;
		c_blue = 255;
		i = i +1;
	}
	
	fill(c_red,c_green,c_blue);
	
	if(i>59)
	{
		i = 0;
	}
//****************************************************//
	
	strokeWeight(1.5); //increasing the boundary thickness//
	
//code to move ellipse from left ball to right ball//
	if(z==1 && x<901)
	{
		background(255);
		ellipse(x,y,100,100);
		x= x+5;
	}
	else
	{
		z = 0;
	}
//************************************************//
	
//code to move ellipse from right to left//
	if(z==0 && x>149)
	{
		background(255);
		ellipse(x,y,100,100);
		x= x-5;	
	}
	else
	{
		z = 1;
	}
//***************************************//

//redrawing left and right walls for the next frame//
	fill(0,0,0);
	rect(50,100,50,300);
	rect(950,100,50,300);
//*************************************************//
}