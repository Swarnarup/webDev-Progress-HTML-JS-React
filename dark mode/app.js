const moonpath = "M11.5554 20.5C11.5554 31.5457 17 36 20.0554 40.5C9.00971 40.5 0.0554029 31.5457 0.0554029 20.5C0.0554029 9.4543 9.00971 0.5 20.0554 0.5C16.5 5 11.5554 9.4543 11.5554 20.5Z";
const sunpath = "M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"

const darkmode = document.querySelector('#darkmode');

let toggle = true;

darkmode.addEventListener('click', () => {
    const timeline = anime.timeline({
        duration: 700,
        easing: "easeOutExpo"
    });
    timeline.add({
        targets:".sun",
        d: [{value: toggle ? moonpath : sunpath}],
        fill: [{value : "#FFDA57"}]
    })
    .add({
        targets:"#darkmode",
        rotate: 300
    }, '-=500')
    .add({
        targets:"section",
        backgroundColor: toggle ? "rgb(22,22,22)" : "#cfcece",
        color: toggle ? "rgb(255, 255, 255)" : "rgb(22,22,22)"
    }, '-=500')

    if(toggle){
        toggle = false;
    }else{
        toggle = true;
    }

});
