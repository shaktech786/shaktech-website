"use client"

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Music, 
  VolumeX, 
  Volume2, 
  Play, 
  Pause,
  SkipForward,
  SkipBack,
  X
} from "lucide-react"

const MusicMode = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [volume, setVolume] = useState(0.3)

  // Beatbox tracks - these would be actual audio files in production
  const tracks = [
    {
      title: "Digital Jazz Beat",
      artist: "Shakeel Bhamani",
      duration: "2:45",
      description: "Ambient beatbox loop perfect for coding"
    },
    {
      title: "AI Flow",
      artist: "Shakeel Bhamani", 
      duration: "3:20",
      description: "Rhythmic beats inspired by neural networks"
    },
    {
      title: "Code Symphony",
      artist: "Shakeel Bhamani",
      duration: "2:15", 
      description: "Loopstation composition for focus"
    },
    {
      title: "TEDx Warmup",
      artist: "Shakeel Bhamani",
      duration: "1:30",
      description: "Pre-performance beatbox routine"
    }
  ]

  // Simulate audio playback (in production, this would connect to actual audio elements)
  useEffect(() => {
    if (isPlaying) {
      // Add beat-sync animation to body when music is playing
      document.body.classList.add('music-mode')
    } else {
      document.body.classList.remove('music-mode')
    }

    return () => {
      document.body.classList.remove('music-mode')
    }
  }, [isPlaying])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % tracks.length)
  }

  const previousTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + tracks.length) % tracks.length)
  }

  const toggleVolume = () => {
    setVolume(volume > 0 ? 0 : 0.3)
  }

  // Add CSS for music mode animations
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      .music-mode .beat-sync {
        animation: beat 1.2s ease-in-out infinite !important;
      }
      .music-mode .code-particle {
        animation-duration: 2s !important;
      }
      .music-mode .neural-bg {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  if (!isMounted) {
    return null
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className={`w-14 h-14 rounded-full bg-gradient-to-r from-creative-600 via-accent-500 to-primary-600 hover:from-creative-700 hover:via-accent-600 hover:to-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 group ${isPlaying ? 'beat-sync' : ''}`}
          title="Music Mode - Beatbox Background"
        >
          <Music className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Card className="w-80 bg-gray-900/95 backdrop-blur-md border-gray-700 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 bg-gradient-to-br from-creative-500 to-accent-500 rounded-full flex items-center justify-center ${isPlaying ? 'beat-sync' : ''}`}>
                <Music className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">Music Mode</h3>
                <p className="text-gray-400 text-xs">Beatbox Background</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white w-8 h-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Current Track Info */}
          <div className="mb-4 p-3 bg-gray-800/50 rounded-lg border border-gray-700">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 bg-gradient-to-br from-creative-500 to-accent-500 rounded-lg flex items-center justify-center ${isPlaying ? 'beat-sync' : ''}`}>
                {isPlaying ? <Music className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">
                  {tracks[currentTrack].title}
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {tracks[currentTrack].artist}
                </p>
                <p className="text-gray-500 text-xs">
                  {tracks[currentTrack].description}
                </p>
              </div>
              <div className="text-gray-400 text-xs">
                {tracks[currentTrack].duration}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={previousTrack}
              className="text-gray-400 hover:text-white w-8 h-8"
            >
              <SkipBack className="w-4 h-4" />
            </Button>
            
            <Button
              onClick={togglePlayPause}
              className={`w-10 h-10 rounded-full bg-gradient-to-r from-creative-500 to-accent-500 hover:from-creative-600 hover:to-accent-600 ${isPlaying ? 'beat-sync' : ''}`}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={nextTrack}
              className="text-gray-400 hover:text-white w-8 h-8"
            >
              <SkipForward className="w-4 h-4" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleVolume}
              className="text-gray-400 hover:text-white w-8 h-8"
            >
              {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </Button>
          </div>

          {/* Volume Slider */}
          <div className="flex items-center space-x-2">
            <VolumeX className="w-4 h-4 text-gray-500" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, rgb(245, 158, 11) 0%, rgb(245, 158, 11) ${volume * 100}%, rgb(55, 65, 81) ${volume * 100}%, rgb(55, 65, 81) 100%)`
              }}
            />
            <Volume2 className="w-4 h-4 text-gray-500" />
          </div>

          {/* Track List */}
          <div className="mt-4 max-h-32 overflow-y-auto space-y-1">
            {tracks.map((track, index) => (
              <div
                key={index}
                onClick={() => setCurrentTrack(index)}
                className={`p-2 rounded cursor-pointer transition-colors ${
                  index === currentTrack 
                    ? 'bg-gradient-to-r from-creative-900/30 to-accent-900/30 border border-creative-700' 
                    : 'bg-gray-800/30 hover:bg-gray-800/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-medium truncate">
                      {track.title}
                    </p>
                    <p className="text-gray-400 text-xs truncate">
                      {track.description}
                    </p>
                  </div>
                  <p className="text-gray-500 text-xs ml-2">
                    {track.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-gray-500 text-xs text-center">
              🎵 Original beatbox compositions by Shakeel
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default MusicMode