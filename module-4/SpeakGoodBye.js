(() => {
    const speakWord = "Good Bye";

    window.byeSpeaker = {
        speak: (name) => console.log(speakWord + " " + name),
    };
})();
