import React, { useState, useRef, useEffect } from 'react';
import { PlayCircle, PauseCircle, Music, Mic, Download } from 'lucide-react';
import { hinoGuarapuavaData } from '../data/hinoData';
import YouTube from 'react-youtube';

interface LyricsSectionProps {
  accessibilityMode: {
    highContrast: boolean;
    largeText: boolean;
    narration: boolean;
  };
}

const LyricsSection: React.FC<LyricsSectionProps> = ({ accessibilityMode }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isKaraokeMode, setIsKaraokeMode] = useState(false);
  const [activeVerseIndex, setActiveVerseIndex] = useState(-1);
  const [activeWordIndex, setActiveWordIndex] = useState(-1);
  const [player, setPlayer] = useState<any>(null);

  const togglePlay = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleKaraokeMode = () => {
    setIsKaraokeMode(!isKaraokeMode);
  };

  const onPlayerReady = (event: any) => {
    setPlayer(event.target);
  };

  const onPlayerStateChange = (event: any) => {
    // YouTube player states: -1 (unstarted), 0 (ended), 1 (playing), 2 (paused), 3 (buffering), 5 (video cued)
    setIsPlaying(event.data === 1);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (player && isPlaying) {
      interval = setInterval(() => {
        const time = player.getCurrentTime();
        setCurrentTime(time);

        // Update active verse based on current time
        for (let i = 0; i < hinoGuarapuavaData.verses.length; i++) {
          if (
            time >= hinoGuarapuavaData.verses[i].startTime &&
            time < (hinoGuarapuavaData.verses[i].endTime || Number.MAX_VALUE)
          ) {
            setActiveVerseIndex(i);

            // In karaoke mode, also highlight the current word
            if (isKaraokeMode && hinoGuarapuavaData.verses[i].words) {
              for (let j = 0; j < hinoGuarapuavaData.verses[i].words.length; j++) {
                const word = hinoGuarapuavaData.verses[i].words[j];
                if (time >= word.startTime && time < (word.endTime || Number.MAX_VALUE)) {
                  setActiveWordIndex(j);
                  break;
                }
              }
            }
            break;
          }
        }
      }, 50);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [player, isPlaying, isKaraokeMode]);

  const handleVerseClick = (index: number) => {
    if (player && hinoGuarapuavaData.verses[index].startTime) {
      player.seekTo(hinoGuarapuavaData.verses[index].startTime);
      if (!isPlaying) {
        player.playVideo();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="lyrics" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-emerald-800 dark:text-emerald-300 ${accessibilityMode.largeText ? 'text-4xl md:text-5xl' : ''}`}>
            Letra e Música
          </h2>
          <p className={`text-gray-600 dark:text-gray-300 max-w-2xl mx-auto ${accessibilityMode.largeText ? 'text-xl' : ''}`}>
            Acompanhe a letra do hino enquanto escuta a música, ou cante junto no modo karaokê
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Music Player */}
          <div className="lg:col-span-1 bg-emerald-50 dark:bg-gray-700 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-emerald-700 dark:text-emerald-300">Player de Música</h3>
            
            <div className="mb-8">
              <div className="relative w-full aspect-video bg-emerald-200 dark:bg-gray-600 rounded-lg mb-4 overflow-hidden">
                <YouTube
                  videoId="S5LxOCu5TJY"
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 0,
                      controls: 0,
                      modestbranding: 1,
                    },
                  }}
                  onReady={onPlayerReady}
                  onStateChange={onPlayerStateChange}
                  className="absolute inset-0"
                />
              </div>
              
              <div className="flex justify-center space-x-4 mb-4">
                <button 
                  onClick={togglePlay}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full transition-colors"
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                </button>
                
                <button 
                  onClick={toggleKaraokeMode}
                  className={`p-3 rounded-full transition-colors ${
                    isKaraokeMode 
                      ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-700 dark:text-gray-200'
                  }`}
                  aria-label={isKaraokeMode ? 'Desativar modo karaokê' : 'Ativar modo karaokê'}
                >
                  <Mic size={24} />
                </button>
              </div>
              
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                <span>{Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}</span>
                <span>2:17</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-4">
                <div
                  className="bg-emerald-600 h-2 rounded-full transition-all"
                  style={{ width: `${(currentTime / 137) * 100}%` }}
                ></div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <h4 className="font-medium mb-2 text-gray-700 dark:text-gray-300">Download</h4>
              <a
                href="/hino-guarapuava.pdf"
                download="hino-guarapuava.pdf"
                className="flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                <Download size={16} className="mr-2" />
                <span>Baixar letra (PDF)</span>
              </a>
            </div>
          </div>
          
          {/* Lyrics Display */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
                  {isKaraokeMode ? 'Modo Karaokê' : 'Letra do Hino'}
                </h3>
              </div>
              
              <div className={`space-y-6 ${accessibilityMode.largeText ? 'text-xl' : ''}`}>
                {hinoGuarapuavaData.verses.map((verse, verseIndex) => (
                  <div 
                    key={verseIndex}
                    className={`p-4 rounded-lg transition-colors cursor-pointer ${
                      activeVerseIndex === verseIndex 
                        ? 'bg-emerald-100 dark:bg-emerald-900/30' 
                        : 'hover:bg-gray-50 dark:hover:bg-gray-600/50'
                    }`}
                    onClick={() => handleVerseClick(verseIndex)}
                  >
                    {isKaraokeMode && verse.words ? (
                      <p className="leading-relaxed">
                        {verse.words.map((word, wordIndex) => (
                          <span 
                            key={wordIndex}
                            className={`transition-all ${
                              activeVerseIndex === verseIndex && activeWordIndex === wordIndex
                                ? 'bg-yellow-300 dark:bg-yellow-500 text-black px-1 py-0.5 rounded'
                                : ''
                            }`}
                          >
                            {word.text}{' '}
                          </span>
                        ))}
                      </p>
                    ) : (
                      <p className="leading-relaxed dark:text-gray-200">{verse.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LyricsSection;