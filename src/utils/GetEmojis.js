export const GetEmojis = (skill) => {
    const interestEmojis = {
        game: "🎮",
        art: "🎨",
        read: "📚",
        music: "🎸",
        travel: "🌍",
        cook: "🍳",
        sport: "🏋️",
        photo: "📸",
        movie: "🎬",
        garden: "🌱",
        cycling: "🚴",
        puzzles: "🧩",
        board: "🎲",
        diy: "🛠️",
        beach: "🏖️",
        space: "🚀",
        history: "🏰",
        mystery: "🕵️‍♂️",
        yoga: "🧘‍♀️",
        invest: "📈",
        default: "🔍",
    };

    return interestEmojis[skill] || interestEmojis.default;

}


