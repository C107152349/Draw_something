//import * as tf from "./tfjs/node_modules/@tensorflow/tfjs"
/*let img_in = document.getElementById("img");
let img_tf = new Image();
let send = document.getElementById("sendbtn");

send.addEventListener("click",function(){
    img_tf.src = img_in.src;
})
*/
let model = tf.sequential();
model.add(tf.layers.conv2d({
    inputShape:[28,28,1],
    kernelSize: 5,
    filters: 8,
    strides: 1,
    activation: 'relu',
    kernelInitializer: 'VarianceScaling'
}));