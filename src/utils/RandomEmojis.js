export const RandomEmojis = () => {
    const skillEmojis = [
        "💻",
        "🖥️",
        "📱",
        "🛠️",
        "🎨",
        "✏️",
        "📝",
        "🗣️",
        "📚",
        "🔍",
        "🤝",
        "🧠",
        "📈",
        "🎓",
        "🚀",
        "💬",
        "🔧",
        "💡",
        "🌐",
        "🎯"
    ];

    return skillEmojis[Math.floor(Math.random() * skillEmojis.length)];
}

