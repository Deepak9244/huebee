<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DKWebMart - Premium Logo Design</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background: #0a0a0a;
            padding: 40px 20px;
            min-height: 100vh;
        }

        .container {
            max-width: 1500px;
            margin: 0 auto;
        }

        h1 {
            text-align: center;
            background: linear-gradient(135deg, #FF6B6B, #FFD93D, #6BCF7F);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 15px;
            font-size: 52px;
            font-weight: 900;
        }

        .subtitle {
            text-align: center;
            color: #888;
            margin-bottom: 60px;
            font-size: 18px;
            letter-spacing: 2px;
        }

        .logo-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
            gap: 35px;
            margin-bottom: 50px;
        }

        .logo-card {
            background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
            border-radius: 25px;
            padding: 45px;
            box-shadow: 0 15px 50px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.05);
            transition: all 0.4s;
        }

        .logo-card:hover {
            transform: translateY(-8px);
            border-color: rgba(255,107,107,0.3);
            box-shadow: 0 20px 60px rgba(255,107,107,0.2);
        }

        .logo-title {
            font-size: 14px;
            color: #FFD93D;
            margin-bottom: 30px;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-weight: 700;
            text-align: center;
        }

        .logo-display {
            min-height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
            border-radius: 20px;
            padding: 35px;
            background: #0a0a0a;
        }

        .light-display {
            background: #ffffff;
        }

        .gradient-display {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .tag {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(255,215,0,0.1);
            border: 1px solid rgba(255,215,0,0.3);
            border-radius: 20px;
            color: #FFD93D;
            font-size: 11px;
            margin-top: 15px;
            letter-spacing: 1px;
            font-weight: 600;
        }

        @keyframes glow {
            0%, 100% { filter: drop-shadow(0 0 10px rgba(255,107,107,0.5)); }
            50% { filter: drop-shadow(0 0 20px rgba(255,107,107,0.8)); }
        }

        .featured {
            animation: glow 2s infinite;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>DKWebMart</h1>
        <p class="subtitle">NEXT-GEN E-COMMERCE BRANDING</p>

        <div class="logo-grid">
            <!-- Version 1: Modern 3D Style -->
            <div class="logo-card">
                <div class="logo-title">3D Premium Logo</div>
                <div class="logo-display">
                    <svg width="350" height="140" viewBox="0 0 350 140" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#FFD93D;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#6BCF7F;stop-opacity:1" />
                            </linearGradient>
                            <filter id="shadow1">
                                <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#FF6B6B" flood-opacity="0.5"/>
                            </filter>
                        </defs>
                        
                        <!-- 3D Box/Package Icon -->
                        <g transform="translate(15, 30)">
                            <path d="M 40 0 L 80 20 L 80 60 L 40 80 L 0 60 L 0 20 Z" fill="url(#grad1)" opacity="0.9"/>
                            <path d="M 40 0 L 40 80" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
                            <path d="M 0 20 L 40 0 L 80 20" stroke="rgba(255,255,255,0.5)" stroke-width="2" fill="none"/>
                            <circle cx="40" cy="35" r="8" fill="white" opacity="0.8"/>
                            <text x="40" y="42" font-family="Poppins, sans-serif" font-size="12" font-weight="900" fill="#FF6B6B" text-anchor="middle">DK</text>
                        </g>
                        
                        <!-- Text -->
                        <text x="115" y="60" font-family="Poppins, sans-serif" font-size="42" font-weight="900" fill="url(#grad1)" filter="url(#shadow1)">DKWebMart</text>
                        <text x="115" y="85" font-family="Poppins, sans-serif" font-size="12" font-weight="600" fill="#888" letter-spacing="3">SHOP EVERYTHING</text>
                    </svg>
                </div>
                <span class="tag">⭐ RECOMMENDED</span>
            </div>

            <!-- Version 2: Neon Style -->
            <div class="logo-card">
                <div class="logo-title">Neon Glow Style</div>
                <div class="logo-display">
                    <svg width="350" height="140" viewBox="0 0 350 140" xmlns="http://www.w3.org/2000/svg" class="featured">
                        <defs>
                            <filter id="neon">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                </feMerge>
                            </filter>
                            <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#FFD93D;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        
                        <!-- Shopping Cart Neon -->
                        <g transform="translate(20, 35)">
                            <rect x="5" y="5" width="50" height="45" rx="5" fill="none" stroke="url(#neonGrad)" stroke-width="4" filter="url(#neon)"/>
                            <circle cx="15" cy="58" r="5" fill="url(#neonGrad)" filter="url(#neon)"/>
                            <circle cx="45" cy="58" r="5" fill="url(#neonGrad)" filter="url(#neon)"/>
                            <path d="M 20 15 L 20 35 L 40 35 L 40 15" fill="none" stroke="url(#neonGrad)" stroke-width="3" filter="url(#neon)"/>
                        </g>
                        
                        <!-- Neon Text -->
                        <text x="95" y="65" font-family="Poppins, sans-serif" font-size="46" font-weight="900" fill="url(#neonGrad)" filter="url(#neon)">DKWebMart</text>
                    </svg>
                </div>
                <span class="tag">🔥 TRENDING</span>
            </div>

            <!-- Version 3: Geometric Modern -->
            <div class="logo-card">
                <div class="logo-title">Geometric Style</div>
                <div class="logo-display">
                    <svg width="350" height="140" viewBox="0 0 350 140" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#6BCF7F;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#4A90E2;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        
                        <!-- Hexagon Logo -->
                        <g transform="translate(40, 45)">
                            <polygon points="30,0 60,17 60,51 30,68 0,51 0,17" fill="url(#geoGrad)"/>
                            <polygon points="30,10 50,21 50,47 30,58 10,47 10,21" fill="rgba(255,255,255,0.2)"/>
                            <text x="30" y="45" font-family="Poppins, sans-serif" font-size="24" font-weight="900" fill="white" text-anchor="middle">DK</text>
                        </g>
                        
                        <!-- Modern Text -->
                        <text x="115" y="55" font-family="Poppins, sans-serif" font-size="38" font-weight="800" fill="#ffffff">DKWebMart</text>
                        <rect x="115" y="65" width="150" height="3" fill="url(#geoGrad)"/>
                        <text x="115" y="85" font-family="Poppins, sans-serif" font-size="11" font-weight="600" fill="#6BCF7F" letter-spacing="2">ONLINE SHOPPING</text>
                    </svg>
                </div>
                <span class="tag">💎 MODERN</span>
            </div>

            <!-- Version 4: Minimal Clean -->
            <div class="logo-card">
                <div class="logo-title">Minimal Clean</div>
                <div class="logo-display light-display">
                    <svg width="350" height="120" viewBox="0 0 350 120" xmlns="http://www.w3.org/2000/svg">
                        <!-- Simple shopping bag -->
                        <g transform="translate(25, 25)">
                            <rect x="0" y="20" width="50" height="60" rx="4" fill="none" stroke="#FF6B6B" stroke-width="3"/>
                            <path d="M 12 20 C 12 12 17 5 25 5 C 33 5 38 12 38 20" fill="none" stroke="#FF6B6B" stroke-width="3"/>
                            <line x1="15" y1="40" x2="35" y2="40" stroke="#FFD93D" stroke-width="2"/>
                        </g>
                        
                        <!-- Clean Typography -->
                        <text x="95" y="60" font-family="Poppins, sans-serif" font-size="44" font-weight="700" fill="#1a1a1a">DKWebMart</text>
                        <circle cx="320" cy="55" r="4" fill="#FF6B6B"/>
                    </svg>
                </div>
                <span class="tag">✨ CLEAN</span>
            </div>

            <!-- Version 5: App Icon Square -->
            <div class="logo-card">
                <div class="logo-title">App Icon / Favicon</div>
                <div class="logo-display">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="appGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FF6B6B;stop-opacity:1" />
                                <stop offset="50%" style="stop-color:#FFD93D;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#6BCF7F;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        
                        <!-- Rounded square -->
                        <rect width="200" height="200" rx="45" fill="url(#appGrad)"/>
                        
                        <!-- Shopping bag icon -->
                        <g transform="translate(55, 50)">
                            <rect x="0" y="25" width="90" height="100" rx="8" fill="rgba(255,255,255,0.95)"/>
                            <path d="M 20 25 C 20 10 32 0 45 0 C 58 0 70 10 70 25" fill="none" stroke="url(#appGrad)" stroke-width="6"/>
                            <text x="45" y="90" font-family="Poppins, sans-serif" font-size="38" font-weight="900" fill="url(#appGrad)" text-anchor="middle">DK</text>
                        </g>
                    </svg>
                </div>
                <span class="tag">📱 APP READY</span>
            </div>

            <!-- Version 6: Badge Style -->
            <div class="logo-card">
                <div class="logo-title">Badge / Emblem Style</div>
                <div class="logo-display">
                    <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style="stop-color:#FFD93D;stop-opacity:1" />
                                <stop offset="100%" style="stop-color:#FF6B6B;stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        
                        <!-- Outer circle -->
                        <circle cx="100" cy="100" r="95" fill="none" stroke="url(#badgeGrad)" stroke-width="4"/>
                        <circle cx="100" cy="100" r="85" fill="none" stroke="url(#badgeGrad)" stroke-width="2" opacity="0.5"/>
                        
                        <!-- Center -->
                        <circle cx="100" cy="100" r="70" fill="url(#badgeGrad)"/>
                        
                        <!-- Text -->
                        <text x="100" y="90" font-family="Poppins, sans-serif" font-size="38" font-weight="900" fill="white" text-anchor="middle">DK</text>
                        <text x="100" y="115" font-family="Poppins, sans-serif" font-size="16" font-weight="700" fill="white" text-anchor="middle" opacity="0.9">WebMart</text>
                        
                        <!-- Stars -->
                        <text x="55" y="65" font-size="20" fill="white">★</text>
                        <text x="135" y="65" font-size="20" fill="white">★</text>
                    </svg>
                </div>
                <span class="tag">🏆 PREMIUM</span>
            </div>

            <!-- Version 7: Tech Minimal -->
            <div class="logo-card">
                <div class="logo-title">Tech Minimal - Light BG</div>
                <div class="logo-display light-display">
                    <svg width="320" height="100" viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg">
                        <!-- Circuit style icon -->
                        <g transform="translate(15, 25)">
                            <rect x="0" y="0" width="60" height="50" rx="5" fill="none" stroke="#4A90E2" stroke-width="2.5"/>
                            <circle cx="15" cy="15" r="4" fill="#6BCF7F"/>
                            <circle cx="45" cy="15" r="4" fill="#FFD93D"/>
                            <circle cx="30" cy="35" r="4" fill="#FF6B6B"/>
                            <line x1="15" y1="15" x2="30" y2="35" stroke="#4A90E2" stroke-width="1.5"/>
                            <line x1="45" y1="15" x2="30" y2="35" stroke="#4A90E2" stroke-width="1.5"/>
                        </g>
                        
                        <!-- Typography -->
                        <text x="95" y="55" font-family="Poppins, sans-serif" font-size="36" font-weight="700" fill="#1a1a1a" letter-spacing="1">DKWebMart</text>
                    </svg>
                </div>
                <span class="tag">⚡ TECH</span>
            </div>

            <!-- Version 8: Colorful Playful -->
            <div class="logo-card">
                <div class="logo-title">Colorful & Playful</div>
                <div class="logo-display">
                    <svg width="340" height="130" viewBox="0 0 340 130" xmlns="http://www.w3.org/2000/svg">
                        <!-- Multiple colored circles -->
                        <circle cx="35" cy="65" r="25" fill="#FF6B6B" opacity="0.8"/>
                        <circle cx="60" cy="45" r="20" fill="#FFD93D" opacity="0.8"/>
                        <circle cx="60" cy="85" r="20" fill="#6BCF7F" opacity="0.8"/>
                        <circle cx="50" cy="65" r="15" fill="white"/>
                        <text x="50" y="72" font-family="Poppins, sans-serif" font-size="16" font-weight="900" fill="#FF6B6B" text-anchor="middle">DK</text>
                        
                        <!-- Playful text -->
                        <text x="95" y="72" font-family="Poppins, sans-serif" font-size="40" font-weight="800" fill="#ffffff">DKWebMart</text>
                        <circle cx="300" cy="68" r="6" fill="#FF6B6B"/>
                        <circle cx="320" cy="68" r="6" fill="#FFD93D"/>
                    </svg>
                </div>
                <span class="tag">🎨 PLAYFUL</span>
            </div>
        </div>
    </div>
</body>
</html>
