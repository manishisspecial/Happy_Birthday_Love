import React, { useState, useEffect, useRef } from 'react';

const RomanticBirthdayPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showKiss, setShowKiss] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const [showStars, setShowStars] = useState(false);
  const [showButterflies, setShowButterflies] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Auto-play background music when component mounts
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      
      // Function to start music
      const startMusic = () => {
        if (!isPlaying && audioRef.current) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            console.log('Music started successfully!');
            // Remove all listeners once music starts
            removeAllListeners();
          }).catch(err => {
            console.log('Music start failed:', err);
          });
        }
      };
      
      // Function to remove all event listeners
      const removeAllListeners = () => {
        document.removeEventListener('mousedown', startMusic);
        document.removeEventListener('mousemove', startMusic);
        document.removeEventListener('click', startMusic);
        document.removeEventListener('touchstart', startMusic);
        document.removeEventListener('keydown', startMusic);
        document.removeEventListener('scroll', startMusic);
        document.removeEventListener('wheel', startMusic);
        window.removeEventListener('focus', startMusic);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
      
      // Handle visibility change
      const handleVisibilityChange = () => {
        if (!document.hidden && !isPlaying && audioRef.current) {
          startMusic();
        }
      };
      
      // Try immediate autoplay first
      startMusic();
      
      // If immediate autoplay fails, set up interaction listeners
      if (!isPlaying) {
        // Add event listeners for immediate music start on any interaction
        document.addEventListener('mousedown', startMusic);
        document.addEventListener('mousemove', startMusic);
        document.addEventListener('click', startMusic);
        document.addEventListener('touchstart', startMusic);
        document.addEventListener('keydown', startMusic);
        document.addEventListener('scroll', startMusic);
        document.addEventListener('wheel', startMusic);
        window.addEventListener('focus', startMusic);
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // Also try to start music when the page becomes visible
        if (document.visibilityState === 'visible') {
          setTimeout(startMusic, 100);
        }
        
        // Try multiple times with delays (sometimes helps with autoplay)
        setTimeout(startMusic, 500);
        setTimeout(startMusic, 1000);
        setTimeout(startMusic, 2000);
        
        // Try to start music when window gains focus
        window.addEventListener('focus', startMusic);
        
        // Try to start music on any DOM interaction
        document.addEventListener('pointerdown', startMusic);
        document.addEventListener('pointermove', startMusic);
        
        // Try to start music on hover events (very aggressive approach)
        const allElements = document.querySelectorAll('button, div, span, p, h1, h2, h3');
        allElements.forEach(element => {
          element.addEventListener('mouseenter', startMusic);
        });
        
        // Try to start music on any mouse movement anywhere on the page
        document.addEventListener('mouseover', startMusic);
        
        // Very aggressive approach - try to start music on every mouse movement
        let mouseMoveAttempts = 0;
        const aggressiveMouseMove = () => {
          mouseMoveAttempts++;
          if (mouseMoveAttempts <= 10) { // Limit attempts to avoid performance issues
            startMusic();
          }
          if (mouseMoveAttempts > 10) {
            document.removeEventListener('mousemove', aggressiveMouseMove);
          }
        };
        document.addEventListener('mousemove', aggressiveMouseMove);
        
        // Try to start music when page is fully loaded
        if (document.readyState === 'complete') {
          setTimeout(startMusic, 100);
        } else {
          window.addEventListener('load', () => {
            setTimeout(startMusic, 100);
          });
        }
      }
    }
  }, []);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      console.log('Music paused');
    } else {
      forceStartMusic();
    }
  };

  // Helper function to start music if not already playing
  const ensureMusicPlaying = () => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        console.log('Music started via button interaction');
      }).catch(err => console.log('Music start failed:', err));
    }
  };

  // Enhanced function that tries multiple times to start music
  const forceStartMusic = () => {
    if (!isPlaying && audioRef.current) {
      // Try multiple times with different approaches
      const tryStart = () => {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          console.log('Music started via force start!');
        }).catch(err => {
          console.log('Force start failed, trying again...');
          // Try again after a short delay
          setTimeout(() => {
            if (!isPlaying && audioRef.current) {
              audioRef.current.play().then(() => {
                setIsPlaying(true);
                console.log('Music started on retry!');
              }).catch(err2 => console.log('Retry failed:', err2));
            }
          }, 100);
        });
      };
      
      tryStart();
    }
  };

  const handleHug = () => {
    forceStartMusic();
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 3000);
  };

  const handleKiss = () => {
    forceStartMusic();
    setShowKiss(true);
    setTimeout(() => setShowKiss(false), 2000);
  };

  const handleLove = () => {
    forceStartMusic();
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 4000);
  };

  const handleFlowers = () => {
    forceStartMusic();
    setShowFlowers(true);
    setTimeout(() => setShowFlowers(false), 3500);
  };

  const handleStars = () => {
    forceStartMusic();
    setShowStars(true);
    setTimeout(() => setShowStars(false), 4000);
  };

  const handleButterflies = () => {
    forceStartMusic();
    setShowButterflies(true);
    setTimeout(() => setShowButterflies(false), 3000);
  };

  const handleFireworks = () => {
    forceStartMusic();
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-red-50 to-pink-200 relative overflow-hidden">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/Titanic-Theme.mp3"
        preload="auto"
      />
      
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 3D Dancing Couple Background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Subtle Gradient Overlays for Romantic Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/10 via-transparent to-red-200/10 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-200/5 via-transparent to-pink-200/5 pointer-events-none"></div>
          
          {/* Subtle dancing area highlight */}
          <div className="absolute inset-0 bg-gradient-radial from-pink-100/20 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative w-full h-full">
            {/* Dancing Couple - Multiple layers for 3D effect - MADE MUCH MORE VISIBLE */}
            <div className="absolute top-1/4 left-1/4 text-8xl opacity-70 animate-dance transform -rotate-12 z-10">
              💃
            </div>
            <div className="absolute top-1/3 right-1/4 text-8xl opacity-70 animate-dance transform rotate-12 z-10">
              🕺
            </div>
            
            {/* Additional dancing couples for depth */}
            <div className="absolute top-1/2 left-1/3 text-7xl opacity-65 animate-danceSlow transform -rotate-6 z-10">
              💃
            </div>
            <div className="absolute top-2/3 right-1/3 text-7xl opacity-65 animate-danceSlow transform rotate-6 z-10">
              🕺
            </div>
            
            {/* Smaller dancing figures for more depth */}
            <div className="absolute top-1/6 left-1/2 text-6xl opacity-60 animate-danceReverse z-10">
              💃
            </div>
            <div className="absolute top-3/4 left-1/6 text-6xl opacity-60 animate-danceReverse z-10">
              🕺
            </div>
            
            {/* Additional prominent dancing couples */}
            <div className="absolute top-1/5 right-1/5 text-7xl opacity-75 animate-dance transform rotate-15 z-10">
              💃
            </div>
            <div className="absolute top-2/5 left-1/5 text-7xl opacity-75 animate-dance transform -rotate-15 z-10">
              🕺
            </div>
            <div className="absolute top-4/5 left-1/3 text-6xl opacity-70 animate-danceSlow transform rotate-20 z-10">
              💃
            </div>
            <div className="absolute top-1/3 right-1/6 text-6xl opacity-70 animate-danceSlow transform -rotate-20 z-10">
              🕺
            </div>
            
            {/* More dancing couples for better visibility */}
            <div className="absolute top-1/2 right-1/2 text-8xl opacity-80 animate-dance transform rotate-25 z-10">
              💃
            </div>
            <div className="absolute top-1/3 left-1/2 text-8xl opacity-80 animate-dance transform -rotate-25 z-10">
              🕺
            </div>
            
            {/* Special dancing area highlight */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-200/20 rounded-full animate-pulse pointer-events-none z-5"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-red-200/20 rounded-full animate-pulse pointer-events-none z-5"></div>
            <div className="absolute top-1/2 left-1/3 w-28 h-28 bg-purple-200/20 rounded-full animate-pulse pointer-events-none z-5"></div>
            
            {/* Floating love symbols around the dancers - MADE MORE VISIBLE */}
            <div className="absolute top-1/5 left-1/6 text-4xl opacity-65 animate-float z-10">
              💕
            </div>
            <div className="absolute top-2/3 right-1/6 text-4xl opacity-65 animate-float z-10">
              💕
            </div>
            <div className="absolute top-1/2 left-1/6 text-3xl opacity-60 animate-float z-10">
              💖
            </div>
            <div className="absolute top-1/3 right-1/6 text-3xl opacity-60 animate-float z-10">
              💖
            </div>
            
            {/* Floating Rose Petals - MADE MORE VISIBLE */}
            <div className="absolute top-1/4 right-1/3 text-3xl opacity-70 animate-roseFloat z-10">
              🌹
            </div>
            <div className="absolute top-3/4 left-1/4 text-3xl opacity-70 animate-roseFloat z-10">
              🌹
            </div>
            <div className="absolute top-1/2 right-1/6 text-2xl opacity-65 animate-roseFloat z-10">
              🌹
            </div>
            
            {/* Romantic Symbols - MADE MORE VISIBLE */}
            <div className="absolute top-1/6 right-1/2 text-3xl opacity-60 animate-float z-10">
              ✨
            </div>
            <div className="absolute top-5/6 left-1/2 text-3xl opacity-60 animate-float z-10">
              ✨
            </div>
            <div className="absolute top-1/2 right-1/3 text-2xl opacity-55 animate-float z-10">
              💫
            </div>
            
            {/* Floating Candles for Romantic Lighting - MADE MORE VISIBLE */}
            <div className="absolute top-1/5 left-1/2 text-3xl opacity-70 animate-candleFloat z-10">
              🕯️
            </div>
            <div className="absolute top-4/5 right-1/2 text-3xl opacity-70 animate-candleFloat z-10">
              🕯️
            </div>
            <div className="absolute top-1/2 left-1/5 text-2xl opacity-65 animate-candleFloat z-10">
              🕯️
            </div>
            
            {/* Romantic Moon and Stars - MADE MORE VISIBLE */}
            <div className="absolute top-1/8 left-1/8 text-4xl opacity-60 animate-moonGlow z-10">
              🌙
            </div>
            <div className="absolute top-1/8 right-1/8 text-3xl opacity-55 animate-starTwinkle z-10">
              ⭐
            </div>
            <div className="absolute top-1/6 right-1/6 text-2xl opacity-60 animate-starTwinkle z-10">
              ⭐
            </div>
            
            {/* CENTER STAGE - MAIN DANCING COUPLE - IMPOSSIBLE TO MISS */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-90 animate-dance z-20 pointer-events-none dancing-couple">
              💃
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl opacity-90 animate-danceSlow z-20 pointer-events-none dancing-couple" style={{marginLeft: '80px'}}>
              🕺
            </div>
            
            {/* Dancing couple spotlight effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-pink-300/30 via-pink-200/20 to-transparent rounded-full animate-pulse pointer-events-none z-5"></div>
            
            {/* EDGE DANCERS - VISIBLE FROM ALL ANGLES */}
            <div className="absolute top-0 left-0 text-6xl opacity-75 animate-dance transform rotate-45 z-10">
              💃
            </div>
            <div className="absolute top-0 right-0 text-6xl opacity-75 animate-dance transform -rotate-45 z-10">
              🕺
            </div>
            <div className="absolute bottom-0 left-0 text-6xl opacity-75 animate-danceSlow transform -rotate-45 z-10">
              💃
            </div>
            <div className="absolute bottom-0 right-0 text-6xl opacity-75 animate-danceSlow transform rotate-45 z-10">
              🕺
            </div>
            
            {/* Corner dancers */}
            <div className="absolute top-1/4 left-0 text-5xl opacity-70 animate-danceReverse z-10">
              💃
            </div>
            <div className="absolute top-1/4 right-0 text-5xl opacity-70 animate-danceReverse z-10">
              🕺
            </div>
            <div className="absolute bottom-1/4 left-0 text-5xl opacity-70 animate-dance z-10">
              🕺
            </div>
            <div className="absolute bottom-1/4 right-0 text-5xl opacity-70 animate-dance z-10">
              💃
            </div>
            
         
          </div>
        </div>
        
        {/* Original Floating Hearts */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            ❤️
          </div>
        ))}
        
        {/* Music Indicator - Show when music is playing */}
        {isPlaying && (
          <div className="absolute top-8 right-8 text-pink-400 opacity-60 animate-pulse">
            🎵
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          {/* Main Card */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 text-center transform hover:scale-105 transition-all duration-500">
            
            {/* Music Control - Only show when music is not playing */}
            {!isPlaying && (
              <div className="absolute top-4 right-4">
                <button
                  onClick={toggleMusic}
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
                  title="Click to start the romantic Titanic theme music"
                >
                  🎵 Start Music 🎵
                </button>
              </div>
            )}

            {/* Main Heading */}
            <div className="mb-8 animate-fadeIn">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
                Happy Birthday Sameer
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-pink-600 mb-2">
                My Love ❤️
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                from <span className="font-semibold text-pink-500">Matina – Your Darling</span>
              </p>
            </div>

            {/* Blessings Section */}
            <div className="mb-10 animate-fadeIn animation-delay-500">
              <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl p-6 border border-pink-200">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  "May your day be filled with endless joy, love, and laughter. 
                  You are my heart, my life, my everything. Every moment with you 
                  is a blessing, and I'm grateful for every smile, every laugh, 
                  and every precious memory we share. Happy Birthday, my love ❤️"
                </p>
              </div>
            </div>

            {/* Interactive Buttons - First Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 animate-fadeIn animation-delay-1000">
              <button
                onClick={handleHug}
                className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-4 px-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Come 🤗
              </button>
              
              <button
                onClick={handleKiss}
                className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold py-4 px-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Let's 💋
              </button>
              
              <button
                onClick={handleLove}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 px-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                My Love ❤️
              </button>

              <button
                onClick={handleFlowers}
                className="bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-4 px-4 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Bloom like 🌸
              </button>
            </div>

            {/* Interactive Buttons - Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 animate-fadeIn animation-delay-1200">
              <button
                onClick={handleStars}
                className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Shine like ⭐
              </button>
              
              <button
                onClick={handleButterflies}
                className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Fly like 🦋
              </button>
              
              <button
                onClick={handleFireworks}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-white font-semibold py-4 px-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
              >
                Sparkle like 🎆
              </button>
            </div>

            {/* Special Message */}
            <div className="animate-fadeIn animation-delay-1500">
              <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-2xl p-6 border-2 border-pink-300">
                <p className="text-xl md:text-2xl font-bold text-pink-700 mb-2">
                  🎂 Happy Birthday, My Dearest Sameer! 🎂
                </p>
                <p className="text-lg text-gray-700">
                  May this year bring you all the happiness, success, and love you deserve. 
                  You make my world complete! 🌟
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Effects */}
      
      {/* Hug Hearts Effect */}
      {showHearts && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-500 text-2xl animate-heartFloat"
              style={{
                left: `${50 + (Math.random() - 0.5) * 40}%`,
                top: `${50 + (Math.random() - 0.5) * 40}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {/* Kiss Effect */}
      {showKiss && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-red-500 text-3xl animate-kissFloat"
              style={{
                left: `${50 + (Math.random() - 0.5) * 60}%`,
                top: `${50 + (Math.random() - 0.5) * 60}%`,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              💋
            </div>
          ))}
        </div>
      )}

      {/* Love Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: ['#ff69b4', '#ff1493', '#ff69b4', '#ff1493', '#ff69b4'][i % 5],
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Flowers Effect */}
      {showFlowers && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-flowerFloat"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {['🌸', '🌺', '🌹', '🌷', '🌼'][i % 5]}
            </div>
          ))}
        </div>
      )}

      {/* Stars Effect */}
      {showStars && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-400 text-xl animate-starTwinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      )}

      {/* Butterflies Effect */}
      {showButterflies && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-purple-400 text-2xl animate-butterflyFloat"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              🦋
            </div>
          ))}
        </div>
      )}

      {/* Fireworks Effect */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-firework"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              <div className="w-1 h-1 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RomanticBirthdayPage;
