const { cmd } = require('../command');

cmd({
    pattern: "getpp",
    react: "🖼️",
    desc: "Sends the profile picture of a user by phone number (owner only)",
    category: "owner",
    use: ".getpp <phone number>",
    filename: __filename
}, async (conn, mek, m, {
    from, reply, args, isOwner
}) => {
    try {
        if (!isOwner) return reply("🛑 This command is only for the bot owner!");
        if (!args[0]) return reply("📞 Please provide a phone number (e.g., .getpp 94712345678)");

        const number = args[0].replace(/[^0-9]/g, "");
        const targetJid = number + "@s.whatsapp.net";

        // Validate if number exists on WhatsApp
        const [exists] = await conn.onWhatsApp(targetJid);
        if (!exists?.exists) return reply("🚫 This number is not on WhatsApp.");

        // Try fetching profile picture
        let ppUrl;
        try {
            ppUrl = await conn.profilePictureUrl(targetJid, "image");
        } catch {
            return reply("🛑 Cannot access this user's profile photo. They may have privacy settings preventing it.");
        }

        const displayName = exists.notify || number;

        await conn.sendMessage(from, {
            image: { url: ppUrl },
            caption: `🖼️ Profile picture of ${displayName}`
        });

        await conn.sendMessage(from, { react: { text: "✅", key: mek.key } });

    } catch (err) {
        console.error("Error in getpp:", err);
        reply("⚠️ An unexpected error occurred. Please try again.");
    }
});
