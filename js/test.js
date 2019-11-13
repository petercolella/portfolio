// $(document).ready(function() {
console.log('Page Loaded!');
const aboutImg = document.getElementById('about-img');
console.log('About Img: ', aboutImg);
// 
console.log('About Img Height: ', aboutImg.clientHeight);
console.log('About Img Width: ', aboutImg.clientWidth);
const aboutImgHeight = aboutImg.clientHeight;
const aboutImgWidth = aboutImg.clientWidth;
const aboutImgDivCopy = document.getElementById('about-img-div-copy');
aboutImgDivCopy.style.height = `${aboutImgHeight}px`;
aboutImgDivCopy.style.width = `${aboutImgWidth}px`;
console.log('About Img Height Const: ', aboutImgHeight);
console.log('About Img Width Const: ', aboutImgWidth);