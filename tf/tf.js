import * as tf from '@tensorflow/tfjs';
let img_in = document.getElementById("img");
let img_tf = new Image();
let send = document.getElementById("sendbtn");
//const tfmodel = tf.sequential();
send.addEventListener("click",function(){
    img_tf.src = img_in.src;
})
