
            
var home='<div id="box">\
    <div id="left">\
        <br><h2>Hi, my name is Tobiasz Tudrej.<br> I am an IT specialist.</h2>\
    </div>\
        <div id="t">\
            <img src="img/Tobiasz_Tudrej.png"class="t">\
        </div>\
</div>';


var about='<div id="left">\
    <h2>\
        About Me\
        <br>\
        <br>\
        Graduated from an IT Technical School in Szczecin.\
        <br>\
        I enjoy programming and learning new coding techniques, methods, and frameworks.\
        <br>\
        I’m open to new challenges and like improving my professional skills.\
    </h2>\
    </div>\
    <div id="right">\
        <div id="t">\
            <img src="img/Tobiasz_Tudrej.png"class="t">\
        </div>\
    </div>'
    

var skills=
    '<div id="box">\
                <div id="left">\
                    <br><h2>Language Expertise</h2>\
                        <div class="skill">\
                            <h3>HTML<br>90%</h3><span class="bar"><span class="html"></span></span>\
                        </div>\
                        <div class="skill">\
                            <h3>CSS<br>70%</h3><span class="bar"><span class="css"></span></span>\
                        </div>\
                        <div class="skill">\
                            <h3>JS<br>60%</h3><span class="bar"><span class="js"></span></span>\
                        </div>\
                        <div class="skill">\
                            <h3>PHP<br>40%</h3><span class="bar"><span class="php"></span></span>\
                        </div>\
                    </div>\
                    <div id="right">\
                        <br><h2>My Web Pages</h2>\
                        <ul>\
                            <li><a href="https://github.com/Tobiasz-T/Portfolio" target="blanket"><h3>Portfolio(this page)</h3></a></li>\
                            <li><a href="https://github.com/Tobiasz-T/Shop" target="blanket"><h3>Shop</h3></a></li>\
                            <li><a href="https://github.com/Tobiasz-T/beekeeper_table" target="blanket"><h3>Beekeeper_table</h3></a></li>\
                            <li><a href="https://github.com/Tobiasz-T/rock_paper_scissors" target="blanket"><h3>ROCK_PAPER_SCISSORS</h3></a></li>\
                            <li><a href="https://github.com/Tobiasz-T/tic_tac_toe_2" target="blanket"><h3>TIC_TAK_TOE</h3></a></li>\
                            <li><a href="https://github.com/Tobiasz-T/Wordpress_code" target="blanket"><h3>Wordpress_code </h3></a></li>\
                        </ul>\
                        <h2>Other Skills</h2>\
                        <ul>\
                            <li><h3>GIT / GitHub</h3></li>\
                            <li><h3>LINUX</h3></li>\
                            <li><h3>SQL</h3></li>\
                        </ul>\
                    </div>\
                </div>';

var interested='<div class="container">\
    <div class="img">\
        <div class="box-bee">\
            <h1 class="bee">Bee Keeping</h1>\
        </div>\
    </div>\
    \
    <div class="img">\
        <div class="box-chees">\
            <h1 class="chess">Chess</h1>\
        </div>\
    </div>\
    \
    <div class="img">\
        <div class="box-farm">\
            <h1 class="farm">Farming</h1>\
        </div>\
    </div>\
    </div>';

function Home(){

    if (home){
        document.getElementById("box").innerHTML = home;
    } 
}

function About(){

    if (about){
        document.getElementById("box").innerHTML = about;
    } 
}

function Skill(){

    if (skills){
        document.getElementById("box").innerHTML = skills;
    } 
}
function Interested(){

    if (interested){
        document.getElementById("box").innerHTML = interested;
    } 
}
