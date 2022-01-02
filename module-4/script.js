(() => {
    let names = [
        "Yaakov",
        "John",
        "Jen",
        "Jason",
        "Paul",
        "Frank",
        "Larry",
        "Paula",
        "Laura",
        "Jim",
    ];

    for (let name of names) {
        const firstLetter = name.charAt(0).toLowerCase();
        if (firstLetter === "j") window.byeSpeaker.speak(name);
        else window.helloSpeaker.speak(name);
    }
})();
