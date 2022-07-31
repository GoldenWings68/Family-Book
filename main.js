var images = ["https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2O0DJ_yAq1d4uB3Juz0vld7tp3KHYv1GsuA&usqp=CAU", "https://i.postimg.cc/JnL6wtrd/sister.jpg"];
var names = ["Bharat Dhall","Asher Varughese", "Aanya Dhall", "Neha Kanaujia"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
