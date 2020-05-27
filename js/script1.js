var image;
function upload(){
  var imgcanvas=document.getElementById("can");
  var fileinput=document.getElementById("finput")
   image=new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
function makegray(){
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  var imgcanvas=document.getElementById("can")
  image.drawTo(imgcanvas);
}
function upload()
{
  fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
  var imgcan=document.getElementById("can");
  image.drawTo(imgcan);
}
function makered(){
  for (var pixel of image.values()) {
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }

  }
  var imgcanvas=document.getElementById("can");
    image.drawTo(imgcanvas);
}
function Rainbow()
{
  var w=image.getHeight();
  for(var pixel of image.values())
  {var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(pixel.getY()<w/7)
      {
        if(avg<128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen((2*avg)-255);
          pixel.setGreen((2*avg)-255);
        }
  }
    if(pixel.getY()>w/7&&pixel.getY()<(2*w/7))
    {
      if(avg<128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(0.8*avg);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen((1.2*avg)-51);
          pixel.setGreen((2*avg)-255);
        }
    }
    if(pixel.getY()>(2*w/7)&&pixel.getY()<(3*w/7))
    {
      if(avg<128)
        {
          pixel.setRed(2*avg);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen(255);
          pixel.setGreen(2*avg-255);
        }
    }
    if(pixel.getY()>(3*w/7)&&pixel.getY()<(4*w/7))
    {
      if(avg<128)
        {
          pixel.setRed(0);
          pixel.setGreen(2*avg);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(2*avg-255);
          pixel.setGreen(255);
          pixel.setGreen((2*avg)-255);
        }
    }
    if(pixel.getY()>(4*w/7)&&pixel.getY()<(5*w/7))
    {
      if(avg<128)
        {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
      else
        {
          pixel.setRed(2*avg-255);
          pixel.setGreen((2*avg)-255);
          pixel.setGreen(255);
        }
    }
    if(pixel.getY()>(5*w/7)&&pixel.getY()<(6*w/7))
    {
      if(avg<128)
        {
          pixel.setRed(0.8*avg);
          pixel.setGreen(0);
          pixel.setBlue(2*avg);
        }
      else
        {
          pixel.setRed(1.2*avg-51);
          pixel.setGreen((2*avg)-255);
          pixel.setGreen(255);
        }
    }
    if(pixel.getY()>(6*w/7))
    {
      if(avg<128)
        {
          pixel.setRed(1.6*avg);
          pixel.setGreen(0);
          pixel.setBlue(1.6*avg);
        }
      else
        {
          pixel.setRed(0.4*avg+153);
          pixel.setGreen((2*avg)-255);
          pixel.setGreen(0.4*avg+153);
        }
    }
    }
    image.drawTo(can);
}
