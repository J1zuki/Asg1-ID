const members = [
    {
        name: "Kwon Eunbi",
        stage: "Eunbi",
        birthday: "27th September 1995",
        zodiac: "Libra",
        height: "160 cm (5'3”)",
        weight: "46 kg (101 lbs)",
        blood: "A",
        instagram: "https://instagram.com/@eunbi",
        facts: "Eunbi was born in Siheung-dong, Geumcheon-gu, Seoul, and she has an older brother born in 1993. Before joining IZONE, she first debuted in 2014 with the group Ye-A under the stage name “Kazoo.” Known as the “mother” of IZONE, she is praised for her leadership, and even Woollim trainees say she feels like a caring mother figure. Eunbi enjoys running, shopping, discovering dessert cafés, and she can also play the guitar. She is talented in dancing, sports, impersonations, and even POP Art, and she once worked part-time at Paris Baguette. Eunbi has been a back dancer for Lovelyz, was part of the dance team PLAY, and is close friends with HaeYoon from Cherry Bullet. She later debuted as a solo artist under Woollim Entertainment on August 24, 2021 with her EP Open.",
        img: "./images/kwoneunbi.jpg"
    },
    {
        name: "Miyawaki Sakura",
        stage: "Sakura",
        birthday: "19th March 1998",
        zodiac: "Pisces",
        height: "163 cm (5'4”)",
        weight: "45 kg (99 lbs)",
        blood: "A",
        instagram: "https://instagram.com/@39saku_chan",
        facts: "Sakura was born in Kagoshima City, Japan, and grew up with a younger brother. She studied at Shigakukan Middle School and later trained for almost seven years before debuting in 2011 as part of HKT48’s first generation. Over the years, she became one of the most popular members in the 48-groups, holding roles like AKB48 Team A concurrent member, HKT48 Team KIV sub-captain, and even ranking in the famous Kami7. Sakura is known for her unique charms—like sleeping with her eyes open, drawing funny pictures, loving video games, and having a funny running style. After graduating from HKT48 in 2021, she joined Produce48, became IZ*ONE’s “Father,” launched her brand CRAN BY MOLAK, and is now a member of LE SSERAFIM under Source Music.",
        img: "./images/miyawakisakura.jpg"
    },
];

const container = document.getElementById("view-container");

members.forEach(m => {
    container.innerHTML += `
        <div class="view-box">

            <img src="${m.img || './images/placeholder.png'}" class="view-photo">

            <div class="view-info">
                <p><b>Name:</b> ${m.name}</p>
                <p><b>Stage Name:</b> ${m.stage}</p>
                <p><b>Birthday:</b> ${m.birthday}</p>
                <p><b>Zodiac Sign:</b> ${m.zodiac}</p>
                <p><b>Height:</b> ${m.height}</p>
                <p><b>Weight:</b> ${m.weight}</p>
                <p><b>Blood Type:</b> ${m.blood}</p>
                <p><b>Instagram:</b> 
                    <a href="${m.instagram}" target="_blank" class="insta-link">
                        ${m.instagram}
                    </a>
                </p>
                <p><b>Facts:</b><br>${m.facts}</p>
            </div>

        </div>
    `;
});
