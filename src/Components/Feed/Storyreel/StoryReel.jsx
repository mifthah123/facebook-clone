import React from "react";
import "./StoryReel.css";
import Story from "./Story/Story";

function StoryReel() {
  return (
    <div className="story-reel">
      <Story image='https://images.unsplash.com/photo-1621615578530-cbf3c443165f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWNsYXJlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' title='mcLaren' profileSrc='https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/95143/exterior-left-front-three-quarter.jpeg?q=80'  />
      <Story image='https://img.bleacherreport.net/img/images/photos/003/827/230/hi-res-38e513d9cdcd534515a60279acf9531d_crop_exact.jpg?w=1200&h=1200&q=75' title='Neymar jr' profileSrc='https://upload.wikimedia.org/wikipedia/commons/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg'  />
      <Story image='https://imagenes.elpais.com/resizer/Lp_xeWwO3UZIF-l2fBXfe5_XVgU=/980x980/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Y6FGO7VMXJTZYVWLQWGGPBYROQ.jpg' title='Liam payne' profileSrc='https://m.media-amazon.com/images/M/MV5BMjM1NTA0NDYzM15BMl5BanBnXkFtZTgwNzg5OTYyNjM@._V1_.jpg'  />
      <Story image='https://pbs.twimg.com/profile_images/1322781586513895425/G_stL2vh_400x400.jpg' title='khabeeb' profileSrc='https://upload.wikimedia.org/wikipedia/commons/3/34/Khabib_nurmagomedov.jpg'  />
      <Story image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMLe9DcmAfmqs-UH6O5EHDxzRolyGB0_s7JYnMg9aDzXDKj5SfCxOkVsb1v3SADrnfLOM&usqp=CAU' title='Mario maurer' profileSrc='https://i.pinimg.com/736x/d3/4f/60/d34f60b7ba73ccb6890ce28821f7267e.jpg'  />
      
    </div>
  );
}

export default StoryReel;
