const text = `
I don’t know how to write perfect words,
but I know how you make me feel.

You make normal days brighter,
small moments special,
and my heart happier.

With you, smiles come easily,
and silence feels comfortable.

Isha, this letter is simple,
just like my promise —
to care for you,
to choose you,
and to keep smiling with you.

Always,
I 💕
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
