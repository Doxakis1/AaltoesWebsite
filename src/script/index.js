let lastIndex = 0;

function rotateQuotes()
{
    let quotes = ['always default to action!',
        'WE ARE RAISING THE NEXT GENERATION OF FOUNDERS BY BUILDING EXCEPTIONAL PROJECTS.', 'Aaltoes is a place, where you can turn your ideas into action.',
        'READY TO BUILD THE NEXT GENERATION OF STARTUPS?', 'HI THERE CHANGE-MAKER! YOU’VE COME TO THE RIGHT PLACE.', 'One can go far, but together we go further. If you’re looking to get sh#t done, you’ve found the right place.'];
    let elem = document.getElementById('quotefield');
    lastIndex = lastIndex + 1;
    lastIndex %= quotes.length;
    if (elem)
        elem.innerText = quotes[lastIndex].toUpperCase();
    return ;
}

function fixImageSize(element){
    let tester1 = document.getElementById("tester1");
    let elem1height = window.getComputedStyle(tester1).height;
    let elem1width = window.getComputedStyle(tester1).width;
    elem1width = elem1width.slice(0, -2);
    elem1height = elem1height.slice(0, -2);
    let heightsize = Number(elem1height);
    let widthsize = Number(elem1width);
    widthsize -= 200;
    heightsize = widthsize;
    element.style.width = widthsize + 'px';
    element.style.height = heightsize + 'px';
}

let fixed = false;
let fixedBoard = false;


function fixBoardimagesSize(){
    if (fixedBoard == true)
        return ;

    let tester1 = document.getElementById("ProjectLogoBase");
    if (!tester1)
        return ;
    console.log('We are fixing the sizes');
    let elem1width = window.getComputedStyle(tester1).width;
    let elem1height = window.getComputedStyle(tester1).height;
    let subImages = document.getElementsByClassName('MemberPic');
    let heightsize = Number(elem1height.slice(0, -2));
    heightsize *= 3;
    let widthsize = Number(elem1width.slice(0, -2));
    widthsize /= 2;
    let check = true;
    for (let i = 0; i < subImages.length; i++) {
        subImages[i].style.maxWidth = widthsize + 'px';
        if(check){
            const heightFinal = subImages[0].style.height;
            check = false;
        }
        subImages[i].style.height =  heightFinal;
    }
    subImages = document.getElementsByClassName('MemberText');
    widthsize -= 20;
    for (let i = 0; i < subImages.length; i++) {
        subImages[i].style.width = widthsize + 'px';
        subImages[i].style.maxWidth = widthsize + 'px';
    }
    fixedBoard = true;
}

function fixLogoImagesSize(){
    if (fixed == true)
        return ;
    let tester1 = document.getElementById("ProjectLogoBase");
    if (!tester1)
        return ;
    console.log('We are fixing the sizes');
    let elem1width = window.getComputedStyle(tester1).width;
    let elem1height = window.getComputedStyle(tester1).height;
    let subImages = document.getElementsByClassName('ProjectLogo');
    let heightsize = Number(elem1height.slice(0, -2));
    heightsize *= 3;
    let widthsize = Number(elem1width.slice(0, -2));
    for (let i = 0; i < subImages.length; i++) {
        subImages[i].style.width = elem1width;
        subImages[i].style.maxHeight = heightsize + 'px';
        subImages[i].style.minHeight = elem1height;
        subImages[i].style.minWidth = widthsize + 'px';
    }
    subImages = document.getElementsByClassName('ProjectText');
    for (let i = 0; i < subImages.length; i++) {
        subImages[i].style.width = elem1width;
        subImages[i].style.maxHeight = heightsize + 'px';
        subImages[i].style.minHeight = elem1height;
        subImages[i].style.minWidth = widthsize + 'px';
    }
    fixed = true;
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight * 0.95
    );
}

function replaceHistoryText()
{
    let elem = document.getElementById("HistoryText");
    elem.innerText = 'In 2008 a university professor in Helsinki told his students that becoming an entrepreneur is the worst decision you can make. At that time, the Finnish mindset wasn’t an entrepreneurial one – taking risks or giving a shot at your idea wasn’t respected. A group of students from Aalto University decided that it was time for a paradigm shift and embarked on a trip that would shape not only Aalto University but the whole of Finland.\n\nThey decided to visit MIT and Bengt Holmström, a Nobel laureate and a professor at MIT.  They grasped onto a lesson from the professor – act on what you learned. They decided to start Aaltoes, to create a grassroots movement around entrepreneurship.\n\nIn 2010, we kickstarted the Startup Sauna accelerator and Summer of Startups.In 2011, Slush was organized the first time by Aaltoes and has evolved from a get-together of a few hundred to Europe’s largest startup event, hosting 17500 guests and funding hundreds of startups already in 2016. In 2011, Startuplifers was founded to connect nordic talent to work in silicon valley and bring back more ambition and knowledge on how to build world-class startups.\n\nJunction Hackathon was organized the first time in 2015. The idea was to build a community around the people who are at the centre of building the products of tomorrow – the programmers and the designers. In 2016 Junction grew to become Europe’s largest hackathon with over 1300 participants and 300 unique projects. In 2017, Dash hackathon was born to bring together multidisciplinary teams to problem solve through design thinking. The same year Kiuas accelerator was born to help early-stage founders build their startups.\n\nIn 2021 the team started thinking about what connects all the successful founders in Finland. They came to the conclusion that those founders have spent a lot of time in Silicon Valley. Hence a program was created to bring Finnish founders to Silicon Valley for 3 months to build their companies and live together in a hacker house.\n\nOut of all these projects started, Slush, Junction, Kiuas, Dash & Silta are still going and have grown into their own companies, still in contact with Aaltoes.';
    let elem2 = document.getElementById("HistoryMore");
    elem2.style.opacity = '0';
    return;
}

function replaceFR8Text(){
    let elem = document.getElementById("FR8Text");
    elem.innerText = 'FR8 is a six-month long residency program launching in Finland, designed for the most potential future changemakers to ship like a MF. In FR8 you are provided with free housing, tools, support and an extraordinary community — so you can fully focus on your own interests with no distractions. Happening in spring 2025.';
    let elem2 = document.getElementById("FR8More");
    let elem3 = document.getElementById("FR8Link");
    elem3.style.opacity = 1;
    elem2.style.opacity = 0;
    return;
}

function replaceStriveText(){
    let elem = document.getElementById("StriveText");
    elem.innerText = 'Changing culture where startups are seen as number 1 place to work at. Strive connects students to work at startups through a recruitment portal. You can apply to the best startups of Finland with one application. Strive also organises a startup crawl, happening 27.9, connecting 1500 participants and 80 startups in Finland\'s biggest excursion.';
    let elem2 = document.getElementById("StriveMore");
    let elem3 = document.getElementById("StriveLink");
    elem3.style.opacity = 1;
    elem2.style.opacity = 0;
    return;
}

function replaceIgniteText(){
    let elem = document.getElementById("IgniteText");
    elem.innerText = 'Ignite is a 10-week summer accelerator where first-time founders find their first customers and launch their businesses. In Ignite you learn everything you need to launch your startup from zero. We facilitate everything around you, so you can focus 100% at building a better future for you and the world. Applications open January 2025.';
    let elem2 = document.getElementById("IgniteMore");
    let elem3 = document.getElementById("IgniteLink");
    elem3.style.opacity = 1;
    elem2.style.opacity = 0;
    return;
}

function replaceFusionText(){
    let elem = document.getElementById("FusionText");
    elem.innerText = 'Fusion is creating the next generation of deep tech founders utilizing pushing students and researchers to commercialize technologies found in labs. Program runs next time in 2025. If you’re interested in participating or joining the organizing team, please contact Tomi.Tan-Roholm@aaltoes.com';
    let elem2 = document.getElementById("FusionMore");
    elem2.style.opacity = 0;
    return;
}

function replaceSIVCText(){
    let elem = document.getElementById("SIVCText");
    elem.innerText = 'Startup idea validation course is a 6-week-long university course where by the end of this course students have a clear product in mind with its demand proven by customers. This course is a great place to start building your company from 0. In the course you will learn how to conduct thorough, in-person market research interviews with users and ask questions that uncover business opportunities, iterate and develop your idea based on data from user interviews. The course will run in period 1.';
    let elem2 = document.getElementById("SIVCMore");
    let elem3 = document.getElementById("SIVCLink");
    elem3.style.opacity = 1;
    elem2.style.opacity = 0;
    return;
}

function animateSlideIn(elem)
{
    if (elem.classList.contains('subIMG'))
        fixImageSize(elem);
    if (isInViewport(elem))
    {
        elem.classList.remove('fromLeft');
        elem.classList.remove('fromRight');
        elem.classList.remove('subIMG');
    }  
}



function animation(){
    let listElems = document.getElementsByClassName('Animated');
    for (let i = 0; i < listElems.length; i++)
        animateSlideIn(listElems[i]);
}

function handleResize(){
    fixed = false;
    fixedBoard = false;
}

setInterval(rotateQuotes, 3500);
window.addEventListener('resize', handleResize);
setInterval(fixLogoImagesSize, 100);
fixLogoImagesSize();
setInterval(fixBoardimagesSize, 100);
fixBoardimagesSize();
setInterval(animation, 100);
animation();
rotateQuotes();