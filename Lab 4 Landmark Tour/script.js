function changelandmark(landmark) {
   const image = document.getElementById("landmarkimage");
   const description = document.getElementById("description");
   const mapframe = document.getElementById("mapframe");
   
   if(landmark==="snow"){
       image.src="snow.jpg";
       description.innerHTML="Snowy Mountain in Vermont";
       mapframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2844.39952223294!2d-72.78649692394865!3d44.52745157107409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb5917b8faaea15%3A0xa2fbbf1f063d7b3d!2sStowe%20Mountain%20Resort!5e0!3m2!1sen!2sus!4v1759161455172!5m2!1sen!2sus";

} else if(landmark==="grand"){
       image.src="grand.webp";
       description.innerHTML="Grand Canyon in Arizona";
       mapframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12894.9703990349!2d-112.12278434236187!3d36.0997621592778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80cc0654bd27e08d%3A0xb1c2554442d42e8d!2sGrand%20Canyon!5e0!3m2!1sen!2sus!4v1759161530794!5m2!1sen!2sus";

} else if(landmark==="leaf"){
       image.src="Leaf.webp";
       description.innerHTML="Fall Leafs in Vermont";
       mapframe.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45707.88412880484!2d-72.60996662597671!3d44.274111596049984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb5a78cc44dea05%3A0x4891e094ceb5836!2sMontpelier%2C%20VT%2005602!5e0!3m2!1sen!2sus!4v1759161691722!5m2!1sen!2sus";
}
}