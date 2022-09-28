
            
    var home='<div id="box"><div id="left"><h2>Hi, my name is Tobiasz Tudrej.<br> I am an IT specialist.</h2></div><div id="t"><img src="img/Tobiasz_Tudrej.png"class="t"></div></div></div>';
    var about='<div id="left"><h2>About Me<br><br>I graduated from the IT Technical School.<br> I like my job, I enjoy creating websites.<br> I want to gain new experience.\
I am <br>a person willing to learn new information, open to new challenges.</h2></div><div id="right"><div id="t"><img src="img/Tobiasz_Tudrej.png"class="t"></div></div>'
    var skills=
    '<div id="box">\
                <div id="left">\
                    <h1>My skills</h1>\
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
                        <h1>My pages</h1>\
                        <ul>\
                            <li><a href=""><h3>Portfolio</h3></a></li>\
                            <li><a href=""><h3>ROCK_PAPER_SCISSORS</h3></a></li>\
                            <li><a href=""><h3>TIC_TAK_TOE</h3></a></li>\
                        </ul>\
                        <h2>OTHER</h2>\
                        <ul>\
                            <li><h3>GIT</h3></li>\
                            <li><h3>LINUX</h3></li>\
                            <li><h3>SQL</h3></li>\
                        </ul>\
                    </div>\
                </div>';
     var interested='<div class="container">\
        <div class="img">\
            <div class="box-bee">\
                <h1>Bee</h1>\
            </div>\
        </div>\
        \
        <div class="img">\
            <div class="box-chees">\
                <h1>Chess</h1>\
            </div>\
        </div>\
        \
        <div class="img">\
            <div class="box-farm">\
                <h1>Farm</h1>\
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

