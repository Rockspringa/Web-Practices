(() => {
    const speakWord = "Hello";

    window.helloSpeaker = {
        speak: (name) => console.log(speakWord + " " + name),
    };
})();
