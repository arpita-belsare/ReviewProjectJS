const reviews=[
    {
        id:1,
        name:"susan smith",
        job:"web developer",
        img:"./susain.avif",
        Text:"Meet Sarah, a passionate web developer with a knack for crafting immersive online experiences. With expertise in HTML, CSS, and JavaScript, she turns creative visions into pixel-perfect reality. From sleek user interfaces to dynamic web applications, Sarah brings innovation to every project she touches. "
    },
    {
        id: 2,
        name: "Glen Maxwell",
        job: "Software Developer",
        img: "xyz.jpg",
        Text: "Meet Glen, a skilled software developer with a passion for crafting innovative digital solutions. With a mastery of programming languages like Java, Python, and C++, Glen creates robust software applications that redefine user experiences. From designing scalable architectures to implementing efficient algorithms, Glen's dedication to excellence shines through in every project. Let Glen elevate your digital presence with his expertise and creativity."
    }
,    
    {
        id:3,
        name:"anna johnson",
        job:"web developer",
        img:"anna.jpg",
        Text:" this is a anna, a web developer with a passion for clean code and creative solutions. With expertise in HTML, CSS, and JavaScript, Alex transforms ideas into engaging online experiences. Whether it's a sleek portfolio or a robust e-commerce platform, Alex's attention to detail ensures every project shines. Let Alex bring your digital vision to life with precision and flair. "
    },
    {
        id:4,
        name:"jannat",
        job:"web developer",
        img:"mateusz-2.jpg",
        Text:" glain maxwell, a talented web developer with a knack for innovation and efficiency. With a mastery of HTML, CSS, and JavaScript, Vini crafts seamless online experiences that captivate audiences. Whether it's building responsive websites or optimizing user interfaces, Vini's dedication to excellence shines through in every project. Let Vini elevate your digital presence with expertise and flair."
    },
    {
        id: 5,
        name: "robin",
        job: "UI/UX Designer",
        img: "yb.jpg",
        Text: "Meet Glen, a talented UI/UX designer with a keen eye for aesthetics and user experience. With expertise in tools like Adobe XD, Sketch, and Figma, Glen creates intuitive interfaces and seamless user journeys. Whether it's wireframing elegant layouts or conducting user research to optimize usability, Glen's dedication to crafting delightful digital experiences shines through in every project. Let Glen transform your digital presence with his passion and creativity."
    }
    
]
const img= document.getElementById("person-img");
const auther=document.getElementById("auther");
const job=document.getElementById("job");
const info =document.getElementById("info");

const prevBtn= document.querySelector('.prev-but');
const nextBtn= document.querySelector('.next-but');
const randomBtn= document.querySelector('.random-but');

let currentItem=0;
window.addEventListener("DOMContentLoaded",function(){
showPerson()    
})

// shhow person based on item
function showPerson(person){
    const item =reviews[person];
    img.src =item.img;
    auther.textContent=item.name;
    job.textContent=item.job;
    info.textContent =item.Text;
}
nextBtn.addEventListener("click", function() {
currentItem++;
if(currentItem > reviews.length -1){
currentItem = 0;
} 
showPerson(currentItem);
} );
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem <0 ){
        currentItem = reviews.length -1 
    }
    showPerson(currentItem);
})

randomBtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem); // Pass currentItem as an argument
});
