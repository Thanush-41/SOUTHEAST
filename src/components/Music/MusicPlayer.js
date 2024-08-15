"use client";

import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './styles.css'; // Make sure to import your CSS file
import { IoCloseOutline } from "react-icons/io5";
export default function MusicPlayer({ track, title, author, onClose }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
          {/* Placeholder for album art */}
          <div className="w-10 h-10 bg-gray-400 rounded-full"></div>
        </div>
        <div className="ml-4">
          <div className="text-xl font-semibold">{title}</div>
          <div className="text-gray-500">{author}</div>
        </div>
      </div>
      <AudioPlayer
        autoPlay
        src={track}
        onPlay={e => console.log("onPlay")}
        onPause={e => console.log("onPause")}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        customProgressBarSection={['PROGRESS_BAR', 'CURRENT_TIME', 'TOTAL_TIME']}
        showJumpControls={false}
        layout="horizontal-reverse"
        className="h5-audio-player"
      />
      <button onClick={onClose} className="ml-4 text-black text-[20px]"><IoCloseOutline /></button>
    </div>
  );
}
