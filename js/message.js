window.onload=() => {
    const element = document.getElementsByClassName("backImg")[0];
    element.addEventListener('click',()=>{
        document.getElementsByClassName('chatLayout')[0].classList.toggle('unvisible');
        document.getElementsByClassName('chatRoomLayout')[0].classList.toggle('visible');
    })
}