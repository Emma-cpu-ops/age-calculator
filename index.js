document.getElementById("calcBtn").addEventListener("click", calculateAge);

const ageEmojis = {
    baby: "👶",
    kid: "🧒",
    teen: "🧑",
    adult: "🧑‍🦱",
    old: "🧓"
};

const funnyMessages = [
    "Tu gagnes +1 point de sagesse 🧙‍♂️",
    "Tu montes en niveau ! 🎉",
    "Un boss approche… 👹",
    "Tu deviens une légende vivante ⚔️",
    "Ton XP augmente ! ⭐",
    "Tu débloques une compétence secrète 🤫",
    "Chaque année compte ! ⏳",
    "Tu es une étoile montante ! 🌟",
    "Prépare-toi pour l'aventure ! 🏹",
    "Ton histoire s'écrit jour après jour 📜",
    "Tu es millionaire maintenant ? 💰"
];

function calculateAge() {

    // --- SAISIE MANUELLE ---
    const d = document.getElementById("day").value;
    const m = document.getElementById("month").value;
    const y = document.getElementById("year").value;

    if (!d || !m || !y) return;

    const birth = new Date(`${y}-${m}-${d}`);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    const result = document.getElementById("result");
    result.innerHTML = `${years} ans • ${months} mois • ${days} jours 🎉`;
    result.classList.add("show", "shake");
    setTimeout(() => result.classList.remove("shake"), 500);

    // --- BARRE XP ---
    const xp = Math.min(years, 100);
    document.getElementById("xpBar").style.width = xp + "%";

    // --- EMOJI SELON L'ÂGE ---
    const emoji = document.getElementById("ageEmoji");

    if (years <= 3) emoji.textContent = ageEmojis.baby;
    else if (years <= 12) emoji.textContent = ageEmojis.kid;
    else if (years <= 17) emoji.textContent = ageEmojis.teen;
    else if (years <= 50) emoji.textContent = ageEmojis.adult;
    else emoji.textContent = ageEmojis.old;

    emoji.style.transform = "scale(1.3)";
    setTimeout(() => emoji.style.transform = "scale(1)", 200);

    // Message RPG
    const npc = document.getElementById("npcMessage");
    npc.textContent = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    npc.classList.add("show");

    // LEVEL UP
    if ([10, 13, 16, 18, 20, 25, 30, 40, 50].includes(years)) {
        result.innerHTML += `<br><strong style="color:#ff6600;">LEVEL UP ! 🔥</strong>`;
    }

    // Animation robot
    const robot = document.getElementById("robot3D");
    robot.classList.add("bump");
    setTimeout(() => robot.classList.remove("bump"), 200);
}

/* Suppression watermark Spline */
function removeSplineWatermark() {
    const viewer = document.querySelector("spline-viewer");
    if (!viewer) return;

    const shadow = viewer.shadowRoot;
    if (!shadow) return;

    const footer = shadow.querySelector("footer");
    if (footer) footer.remove();

    const links = shadow.querySelectorAll("a");
    links.forEach(link => {
        if (link.textContent.includes("Spline")) link.remove();
    });
}

setInterval(removeSplineWatermark, 300);

function toggleTheme() {
    document.body.classList.toggle("dark");
}
