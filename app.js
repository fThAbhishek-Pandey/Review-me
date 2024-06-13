// local reviews data
const reviews = [
  {
    id: "fth1",
    name: 'Devesh Kr Pathak',
    job: 'Software Developer',
    img: '1704554361386.jpeg',
    text: "Abhishek is  good student having a learning attitude and creative mind",
  },
  {
    id: "fth2",
    name: 'Akash Dubey',
    job: 'Full Stack Developer',
    img: '1695983471597.jpeg',
    text: "It is rare to come across standout talent like Abhishek. As my junior, I have had the pleasure of working with him in Software Development Classes (SDC). He is highly devoted to his work and has a strong passion for solving DSA (Data Structures and Algorithms) problems. Abhishek is always open to taking advice from his seniors. What particularly impresses me is his unwavering focus and dedication. From his first year, he has remained committed to his ambitions and goals, continually advancing his DSA journey and upskilling himself.",
  },
  {
    id: "fth3",
    name: 'Vishal',
    job: 'Campus Ambesdor @gfg',
    img: '1704480658338.jpeg',
    text: "Outstanding community integration! This development project not only enhances the physical landscape but also enriches the community spirit. The thoughtful inclusion of green spaces, recreational facilities, and communal areas fosters a sense of belonging and connection among residents. It's truly a testament to the developers' commitment to creating vibrant and sustainable neighborhoods.",
  },
  {
    id: "fth4",
    name: 'Sneha',
    job: 'AI/ML',
    img: 'Sneha.photo.JPG.jpg',
    text: "Impeccable project management and communication! Throughout the entire development process, the team maintained open and transparent communication, keeping stakeholders informed every step of the way. Their professionalism and dedication ensured that the project was completed on time and within budget, without compromising on quality. I couldn't be happier with the results!",
  },
];
// select items
const person_img= document.querySelector(".img-container");
const aurthor = document.querySelector("#author");
const job =document.querySelector("#job");
const info = document.querySelector("#info");
const review = document.querySelector("#review");
const nextBtn = document.querySelector(".next-btn");
const prev = document.querySelector(".prev-btn")
const random = document.querySelector(".random-btn")
// set starting item
let i=0;

// load initial item
function load(j){
  person_img.innerHTML=`<img src=${reviews[j].img} id="person-img" alt="" />` ;
  aurthor.innerHTML= reviews[j].name;
  job.innerHTML= reviews[j].job;
  info.innerHTML= reviews[j].text;
}
// show person based on item

// show next person
nextBtn.addEventListener("click",function(){
  j++;
  if (j>=reviews.length){
     j=0;
  }
  load(j);
})
// show prev person
prev.addEventListener("click",function(){
  j--;
  if (j<0){
     j=0;
  }
  load(j);
})
// show random person
random.addEventListener("click",function(){
  j = Math.floor(Math.random()*reviews.length);
  load(j);
})
