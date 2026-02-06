const text = `
waisa jitna bhi feel krte h batana bhot difficult h pr try kr skte h....
waise hmlog kitne bhi door h pr tum mere dil k bhot kareeb ho...tum mere 
thoughts me ho har choti cjion me ho jisse mujhe achcha lgta h...tumse pyaar hone k 
baad mere me bhot sara chij  aaya patience, understanding, caring, loving...
I wish I could be there today to see your smile, hear your laugh, and celebrate
your birthday together. Until the day comes, please remember that no distance can
ever change what you mean to me. Thank you for being you.Thank you for being mine...
`;

let index = 0;
const speed = 45;
const typing = document.getElementById("typing");

function typeText() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, speed);
    }
}

typeText();
