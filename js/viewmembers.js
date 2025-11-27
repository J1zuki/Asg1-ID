const members = [
    {
        name: "Kwon Eunbi",
        stage: "Eunbi",
        birthday: "27 September 1995",
        zodiac: "Libra",
        height: "160 cm (5'3”)",
        weight: "46 kg (101 lbs)",
        blood: "A",
        instagram: "https://instagram.com/somsomi_jeong",
        facts: "Leader of IZ*ONE known for charisma, control, and stable vocals. Former Woollim trainee.",
        img: "./images/kwoneunbi.jpg"
    },
    {
        name: "Miyawaki Sakura",
        stage: "Sakura",
        birthday: "19 March 1998",
        zodiac: "Pisces",
        height: "163 cm (5'4”)",
        weight: "46 kg (101 lbs)",
        blood: "A",
        instagram: "https://instagram.com/39saku_chan",
        facts: "Japanese idol with strong visuals. Former HKT48 member and known for expressive performances.",
        img: "./images/miyawakisakura.jpg"
    },
    {
        name: "Kang Hyewon",
        stage: "Hyewon",
        birthday: "5 July 1999",
        zodiac: "Cancer",
        height: "163 cm (5'4”)",
        weight: "43 kg (94 lbs)",
        blood: "B",
        instagram: "https://instagram.com/hyemhyemu",
        facts: "Known for gentle tone and elegant visuals. Often called 'Innocent Rapper'.",
        img: "./images/kanghyewon.jpg"
    },
    {
        name: "Choi Yena",
        stage: "Yena",
        birthday: "29 September 1999",
        zodiac: "Libra",
        height: "163 cm (5’4”)",
        weight: "45 kg (99 lbs)",
        blood: "A",
        instagram: "https://instagram.com/yena.jigumina",
        facts: "Main entertainer of the group. Known for bright energy, comedic personality, and strong dance skills.",
        img: "./images/choiyena.jpg"
    },
    {
        name: "Lee Chaeyeon",
        stage: "Chaeyeon",
        birthday: "11 January 2000",
        zodiac: "Capricorn",
        height: "165 cm (5’5”)",
        weight: "47 kg (104 lbs)",
        blood: "A",
        instagram: "https://instagram.com/chaestival_",
        facts: "Known as the 'Dancing Queen' of IZ*ONE. Sister of ITZY’s Chaeryeong.",
        img: "./images/leechaeyeon.jpg"
    },
    {
        name: "Kim Chaewon",
        stage: "Chaewon",
        birthday: "1 August 2000",
        zodiac: "Leo",
        height: "164 cm (5’5”)",
        weight: "42 kg (93 lbs)",
        blood: "B",
        instagram: "https://instagram.com/chaewon_ssa",
        facts: "Lead vocalist with a clean, fairy-like tone. Known for her soft visuals.",
        img: "./images/kimchaewon.jpg"
    },
    {
        name: "Kim Minju",
        stage: "Minju",
        birthday: "5 February 2001",
        zodiac: "Aquarius",
        height: "166 cm (5’5”)",
        weight: "45 kg (99 lbs)",
        blood: "A",
        instagram: "https://instagram.com/immingki",
        facts: "Visual of IZ*ONE. Known for elegant looks and warm voice. Now pursuing acting.",
        img: "./images/kimminju.jpg"
    },
    {
        name: "Yabuki Nako",
        stage: "Nako",
        birthday: "18 June 2001",
        zodiac: "Gemini",
        height: "150 cm (4’11”)",
        weight: "40 kg (88 lbs)",
        blood: "A",
        instagram: "https://instagram.com/75_yabuki",
        facts: "Smallest member with strong vocals and high notes. Former HKT48 center.",
        img: "./images/yabukinako.jpg"
    },
    {
        name: "Honda Hitomi",
        stage: "Hitomi",
        birthday: "6 October 2001",
        zodiac: "Libra",
        height: "158 cm (5’2”)",
        weight: "44 kg (97 lbs)",
        blood: "O",
        instagram: "https://instagram.com/10_hitomi_06",
        facts: "Loved for her cheeks, bright personality, and excellent dancing. Former AKB48 member.",
        img: "./images/hondahitomi.jpg"
    },
    {
        name: "Jo Yuri",
        stage: "Yuri",
        birthday: "22 October 2001",
        zodiac: "Libra",
        height: "160 cm (5’3”)",
        weight: "45 kg (99 lbs)",
        blood: "AB",
        instagram: "https://instagram.com/zo__glasss",
        facts: "Main vocalist with powerful vocals and emotional delivery. Known for OSTs.",
        img: "./images/joyuri.jpg"
    },
    {
        name: "Ahn Yujin",
        stage: "Yujin",
        birthday: "1 September 2003",
        zodiac: "Virgo",
        height: "172 cm (5’8”)",
        weight: "48 kg (106 lbs)",
        blood: "A",
        instagram: "https://instagram.com/_yujin_an",
        facts: "Tallest member. Known for leadership, strong dancing, and hosting skills.",
        img: "./images/ahnyujin.jpg"
    },
    {
        name: "Jang Wonyoung",
        stage: "Wonyoung",
        birthday: "31 August 2004",
        zodiac: "Virgo",
        height: "173 cm (5’8”)",
        weight: "47 kg (104 lbs)",
        blood: "O",
        instagram: "https://instagram.com/for_everyoung10",
        facts: "Center of IZ*ONE. Famous for her height, visuals, and model-like proportions.",
        img: "./images/jangwonyoung.jpg"
    }
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
