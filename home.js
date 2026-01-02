const toggleImg = document.querySelector('.expandIcon');
const title = document.querySelector('.journeyBoardTitleClass');
const container = document.querySelector('.journeyBoardContainerClass');
const JBTop = document.querySelector('.journeyBoardTopClass');
const JBBody = document.querySelector('.journeyBoardBodyClass');

const expandIcon = "./Icons/expandIcon.png";
const minimizeIcon = "./Icons/minimizeIcon.png";

const handleClick = (e) =>{
    console.log("hi");
    
    if(toggleImg.getAttribute('src') === expandIcon){
        toggleImg.setAttribute('src', minimizeIcon);
        title.style.display = "";
        container.style.width = "20%";
        JBTop.style.justifyContent = "space-between";
        JBTop.style.width = "96%";
        JBBody.style.display = "";
        
    }else{
        toggleImg.setAttribute('src', expandIcon);
        title.style.display = "none"
        container.style.width = "8%"
        JBTop.style.justifyContent = "end";
        JBTop.style.width = "90%";
        JBBody.style.display = "none";

    }
}


document.addEventListener('click', handleClick);







// const fetchData = async () =>{
//     try {
//         const response = await fetch("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json");
//         const data = await response.json(); // You need to parse the JSON
//         console.log(data);
//     } catch (error) {
//         console.error("Fetch error:", error);
//     }
// }

// fetchData();


//it is not working beacuse the server did not include this header
//"Access-Control-Allow-Origin", so browser is refusing my GET request.
//to solve this we have to add headers by ourself using Node/Express.