

module.exports = {
  TOKEN: "",
  language: "th",
  ownerID: ["705260973669482507", ""], 
  mongodbUri : "",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "MIKU-MUSIC-3.0 | NEW SEKAI | ใช้ /play หรือ /search เพื่อเล่นเพลง", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/mTnW4ckkyJ",
  embedTimeout: 10,
  showProgressBar: true,  // Show progress bar in track embed
  showVisualizer: true,  // Show visualizer on music card (disabled for low-memory optimization)
  generateSongCard: true,  // custom song card image, if false uses thumbnail
  // Performance optimizations for low-memory environments (512MB RAM)
  lowMemoryMode: false,  // Enable optimizations for low-memory hosting
  errorLog: "", 
  nodes: [
     {
      name: "Sakura",
      password: "Rikka",
      host: "lavalink.aiko-project.xyz",
      port: 2333,
      secure: false
    }
  ]
}
