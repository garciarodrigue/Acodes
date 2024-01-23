const formm = {
    formClic: document.querySelector('.img_img img'),
    formSlide: document.querySelector('.imgf'),
    chatSlide: document.querySelector('.chat-form'),
    chatClic: document.querySelector('.chat-burb'),
    inputImg: document.getElementById('imageInput'),
    
    get camera(){
        return this.inputImg.labels
    
    }
}
formm.chatClic.addEventListener('click',function(){
    if(formm.chatSlide.style.transform === ''){
        console.log('hjj')
        formm.chatSlide.style.transform = 'translateX(0)'
    }else if(formm.chatSlide.style.transform == 'translateX(0px)'){
        formm.chatSlide.style.transform = 'translateX(-100%)'
    }else if(formm.chatSlide.style.transform =='translateX(-100%)'){
        formm.chatSlide.style.transform = 'translateX(0)'
    }

})


formm.formClic.addEventListener('click',()=>{
    if(formm.formSlide.style.transform === ''){
        formm.formSlide.style.transform = 'translateY(0)';
    } else if(formm.formSlide.style.transform =='translateY(0px)'){
        formm.formSlide.style.transform = 'translateY(100%)'
       
    
    }else if(formm.formSlide.style.transform =='translateY(100%)'){
        formm.formSlide.style.transform = 'translateY(0)'
        
    
    }
   
})

console.log(formm.chatClic);