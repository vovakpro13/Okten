const lButton = document.getElementById("left");
const rButton = document.getElementById("right");
const slider = document.getElementById("r-blocks");

const SetSlide = (s) => {
    slider.style.marginLeft = ((-s * 470) + 480) + "px";
    for (i = 1; i <=4; i+=1 ){
        let slide_el = document.getElementById(("slide" + i)).style;
        let point = document.getElementById(("point_nav_" + i)).style;
        if (i === s) {
            slide_el = slide_el.borderColor = "#F53838";
            point.width = "45px";
            point.backgroundColor = "#F53838";
        } else{
            slide_el.borderColor = "#DDDDDD";
            point.width = "15px";
            point.backgroundColor = "#DDE0E4";
        }

    }
};

let slide = 1;
SetSlide(slide);

lButton.onclick = () => {
    (slide < 4) ? slide += 1 : slide = 1;
    SetSlide(slide);
};

rButton.onclick = () =>{
    (slide >  1) ? slide -= 1 : slide = 4;
    SetSlide(slide);
};


