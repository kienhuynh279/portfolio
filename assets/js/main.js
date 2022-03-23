const audio = document.querySelector("audio")
const avatar = document.querySelector(".home-img img")

avatar.addEventListener('mouseover', (e)=> {
    audio.currentTime = 6;
    audio.play();
})

avatar.addEventListener('mouseleave', (e)=> {
    audio.pause();
})

// arr = [3, 5, 0, 6, 6, -5, -8, 6, 7, -8]

// var arr1 = arr.filter((element) => {
//     return element%2 === 0 && element > 0;
// })

// function maxCount () {
//     let count = 0;
//     let max = arr1[arr1.length - 1]

//     for (i of arr1) {
//         if(i === max){
//             count ++;
//         }
//     }

//     return count;
// }
// console.log(maxCount());





