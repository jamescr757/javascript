function createHTML(tag, className, html="") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (html) element.innerHTML = html;
    return element;
}

const headerDiv = createHTML("div", "header d-flex align-items-center text-white p-4");

const mainDiv = createHTML("div", "main-content");

const span1 = createHTML("span", "h3 mr-5", "HighOnCoding");
const span2 = createHTML("span", "mr-5", "Home");
const span3 = createHTML("span", "", "Categories");

headerDiv.appendChild(span1);
headerDiv.appendChild(span2);
headerDiv.appendChild(span3);

document.body.appendChild(headerDiv);


const grayDiv = createHTML("div", "bg-gray");
const nestedH3 = createHTML("h3", "ml-3 pt-3 mb-5", "Curse of the Current Reviews");
const nestedP = createHTML("p", "ml-3 pb-3", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia dolorum ut aperiam doloribus, repudiandae vitae officia incidunt at assumenda soluta veniam temporibus illum. Beatae autem maiores explicabo illum inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia dolorum ut aperiam doloribus, repudiandae vitae officia incidunt at assumenda soluta veniam temporibus illum. Beatae autem maiores explicabo illum inventore.")

grayDiv.appendChild(nestedH3);
grayDiv.appendChild(nestedP);


const helloP = createHTML("p", "text-primary mb-0", "Hello WatchKit");

const p1 = createHTML("p", "mb-0", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati provident ipsam beatae quod rerum exercitationem repellendus recusandae nobis temporibus doloremque quo distinctio, dolore error odio voluptatum quos aliquam eum! Itaque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia dolorum ut aperiam doloribus, repudiandae vitae officia incidunt at assumenda soluta veniam temporibus illum. Beatae autem maiores explicabo illum inventore.");

const orangeDiv1 = createHTML("div", "bg-orange text-white p-1 mb-4");
let childSpan1 = createHTML("span", "ml-1 mr-4", "12 comments");
let childSpan2 = createHTML("span", "", "124 likes");

orangeDiv1.appendChild(childSpan1);
orangeDiv1.appendChild(childSpan2);


const p3 = createHTML("p", "text-primary mb-0", "Introduction to Swift");

const p4 = createHTML("p", "mb-0", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia dolorum ut aperiam doloribus, repudiandae vitae officia incidunt at assumenda soluta veniam temporibus illum. Beatae autem maiores explicabo illum inventore. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia dolorum ut aperiam doloribus, repudiandae vitae officia incidunt at assumenda soluta veniam temporibus illum. Beatae autem maiores explicabo illum inventore.");


const orangeDiv2 = createHTML("div", "bg-orange text-white p-1");
childSpan1 = createHTML("span", "ml-1 mr-4", "15 comments");
childSpan2 = createHTML("span", "", "45 likes");

orangeDiv2.appendChild(childSpan1);
orangeDiv2.appendChild(childSpan2);


mainDiv.appendChild(grayDiv);
mainDiv.appendChild(helloP);
mainDiv.appendChild(p1);
mainDiv.appendChild(orangeDiv1);
mainDiv.appendChild(p3);
mainDiv.appendChild(p4);
mainDiv.appendChild(orangeDiv2);

document.body.appendChild(mainDiv);

