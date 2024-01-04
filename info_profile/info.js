document.addEventListener('scroll',() => {
    const header =document.querySelector('header');
    if(window.scrollY>0){
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled')
    }
})

if (location.pathname.match(/fullcpgrid/i) ? true : false) {
    document.documentElement.style.fontSize = "32px"
      document.querySelector(".secondnav").style.display = "flex";
      setTimeout(function() {
          document.querySelector(".mainnav").classList.add("demoanim");
    }, 500);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const forme = document.querySelector("form");
    const nextBtn = forme.querySelector(".nextBtn");
    const backBtn = forme.querySelector(".backBtn");
    const nextBtn2 = forme.querySelector(".nextBtn2");
    const backBtn2 = forme.querySelector(".backBtn2");
    

    const allInput=forme.querySelectorAll(".first input");
    nextBtn.addEventListener("click",()=>{
        allInput.forEach(input=>{
            if(input.value != ""){
                forme.classList.add('secActive');
            }else{
                forme.classList.remove('secActive');
            
            }
        })
    })
    backBtn.addEventListener("click",()=>{
        forme.classList.remove('secActive');
    })

})
   /* const allInput2=forme.querySelectorAll(".second input");
    nextBtn2.addEventListener("click",()=>{
        allInput2.forEach(input=>{
            if(input.value != ""){
                forme.classList.add('secActive2');
            }else{
                forme.classList.remove('secActive2');
            
            }
        })
    })
    backBtn2.addEventListener("click",()=>{
        forme.classList.remove('secActive2');
    })

})
*/
/*document.addEventListener('DOMContentLoaded', () => {
    
const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})
})
/*document.addEventListener('DOMContentLoaded', () => {
const firebaseConfig = {
    apiKey: "AIzaSyDZWOTCQhfVcgg6wpbGChU5y764uwUkNWE",
    authDomain: "um5s-3a7a7.firebaseapp.com",
    databaseURL: "https://um5s-3a7a7-default-rtdb.firebaseio.com",
    projectId: "um5s-3a7a7",
    storageBucket: "um5s-3a7a7.appspot.com",
    messagingSenderId: "726053879511",
    appId: "1:726053879511:web:678eaf165ef3814a1a7a92",
    measurementId: "G-R6N43CFYND"
};

var fileName
var fileItem
function getFile(e){
fileItem=e.target.files[0];
fileName=fileItem.name;

}
function uploadImage(){
    let storageRef= firebase.storage().ref("images/"+fileName);
    let uploadTask=storageRef.put(fileItem);
    uploadTask.on("state_changed",(snapshot)=>{
        console.log(snapshot);

    },(error)=>{
        console.log("erroe is ",error)
    },()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
            console.log("URL",url)
        })
    })
}
}*/