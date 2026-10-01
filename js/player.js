/**
 * Melodies of Grace (MOG) - Audio Player & Visualizer
 * Provides an interactive choral audio preview engine using Web Audio API
 * and real-time canvas visualizer with luxury gold waveform styling.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMOGAudioPlayer();
});

function initMOGAudioPlayer() {
  const playerCard = document.querySelector('.master-player-card');
  if (!playerCard || !window.mogData || !window.mogData.music) return;

  const tracks = window.mogData.music;
  let currentTrackIndex = 0;
  let isPlaying = false;
  let playbackSeconds = 0;
  let trackDuration = 280; // Default simulated length in seconds
  let playbackInterval = null;

  // DOM Elements
  const playBtn = document.getElementById('player-play-btn');
  const prevBtn = document.getElementById('player-prev-btn');
  const nextBtn = document.getElementById('player-next-btn');
  const thumb = document.getElementById('player-thumb');
  const title = document.getElementById('player-title');
  const subtitle = document.getElementById('player-subtitle');
  const currentTimeEl = document.getElementById('player-current-time');
  const durationEl = document.getElementById('player-duration');
  const progressFill = document.getElementById('player-progress-fill');
  const progressBar = document.getElementById('player-progress-bar');
  const canvas = document.getElementById('audio-canvas');
  const trackRows = document.querySelectorAll('.track-row');

  // Web Audio Context & Synthesizer for Harmonic Choral Preview
  let audioCtx = null;
  let synthOscillators = [];
  let masterGain = null;
  let analyser = null;
  let animFrameId = null;

  function initAudioEngine() {
    if (audioCtx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.15, audioCtx.currentTime);

      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 64;
      masterGain.connect(analyser);
      analyser.connect(audioCtx.destination);
    } catch (e) {
      console.warn("Web Audio not supported or blocked:", e);
    }
  }

  // Harmonic chord frequency definitions for each track
  const chordPresets = {
    "C_Maj_Choral": [261.63, 329.63, 392.00, 523.25], // C4, E4, G4, C5
    "G_Maj_Worship": [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4
    "D_Min_Soul": [146.83, 220.00, 261.63, 293.66], // D3, A3, C4, D4
    "F_Maj_Joy": [174.61, 220.00, 261.63, 349.23]   // F3, A3, C4, F4
  };

  function startChoralSynth(presetKey) {
    stopChoralSynth();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const freqs = chordPresets[presetKey] || chordPresets["C_Maj_Choral"];
    synthOscillators = [];

    freqs.forEach((freq, idx) => {
      // Create two detuned oscillators for lush choral ensemble warmth
      [-3, 3].forEach(detuneCents => {
        const osc = audioCtx.createOscillator();
        const oscGain = audioCtx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.detune.setValueAtTime(detuneCents, audioCtx.currentTime);

        // Gentle attack
        oscGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        oscGain.gain.exponentialRampToValueAtTime(0.12 / freqs.length, audioCtx.currentTime + 1.2);

        osc.connect(oscGain);
        oscGain.connect(masterGain);
        osc.start();

        synthOscillators.push({ osc, gain: oscGain });
      });
    });
  }

  function stopChoralSynth() {
    if (!synthOscillators.length || !audioCtx) return;
    const now = audioCtx.currentTime;
    synthOscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.setValueAtTime(gain.gain.value, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
        setTimeout(() => {
          try { osc.stop(); osc.disconnect(); } catch (e) {}
        }, 500);
      } catch (e) {}
    });
    synthOscillators = [];
  }

  // Visualizer drawing
  function startVisualizer() {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    function renderFrame() {
      animFrameId = requestAnimationFrame(renderFrame);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;

      if (!isPlaying) {
        // Subtle resting golden horizon line
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.2)';
        ctx.lineWidth = 2;
        ctx.stroke();
        return;
      }

      // Read frequency data or generate dynamic rhythmic choral waves
      const barCount = 32;
      const barWidth = (width / barCount) - 3;
      const time = Date.now() * 0.004;

      for (let i = 0; i < barCount; i++) {
        // Multi-frequency wave simulation
        const wave = Math.sin(time + i * 0.25) * 0.5 + 0.5;
        const subWave = Math.cos(time * 0.8 + i * 0.15) * 0.5 + 0.5;
        const barHeight = Math.max(6, (wave * 0.6 + subWave * 0.4) * (height * 0.85));

        const x = i * (barWidth + 3);
        const y = (height - barHeight) / 2;

        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, '#FBF0CC');
        gradient.addColorStop(0.5, '#D4AF37');
        gradient.addColorStop(1, '#8C6D1F');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
      }
    }
    renderFrame();
  }

  function formatTime(totalSec) {
    const min = Math.floor(totalSec / 60);
    const sec = Math.floor(totalSec % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  }

  function loadTrack(index) {
    currentTrackIndex = index;
    const track = tracks[currentTrackIndex];
    if (!track) return;

    if (thumb) thumb.src = track.cover;
    if (thumb) thumb.alt = track.title;
    if (title) title.textContent = track.title;
    if (subtitle) subtitle.textContent = `${track.subtitle} • ${track.releaseYear}`;
    if (durationEl) durationEl.textContent = track.duration;

    // Convert duration mm:ss to seconds
    const parts = track.duration.split(':');
    trackDuration = (parseInt(parts[0], 10) * 60) + parseInt(parts[1], 10);
    playbackSeconds = 0;
    updateProgressUI();

    // Update active row
    trackRows.forEach((row, i) => {
      row.classList.toggle('active', i === currentTrackIndex);
    });

    if (isPlaying) {
      startChoralSynth(track.previewChord);
    }
  }

  function updateProgressUI() {
    if (currentTimeEl) currentTimeEl.textContent = formatTime(playbackSeconds);
    const pct = Math.min(100, (playbackSeconds / trackDuration) * 100);
    if (progressFill) progressFill.style.width = `${pct}%`;
  }

  function togglePlay() {
    initAudioEngine();
    isPlaying = !isPlaying;

    if (isPlaying) {
      if (playBtn) playBtn.innerHTML = '&#10074;&#10074;'; // Pause icon
      const track = tracks[currentTrackIndex];
      startChoralSynth(track.previewChord);

      playbackInterval = setInterval(() => {
        playbackSeconds += 1;
        if (playbackSeconds >= trackDuration) {
          nextTrack();
        } else {
          updateProgressUI();
        }
      }, 1000);
    } else {
      if (playBtn) playBtn.innerHTML = '&#9658;'; // Play icon
      stopChoralSynth();
      clearInterval(playbackInterval);
    }
  }

  function nextTrack() {
    const nextIdx = (currentTrackIndex + 1) % tracks.length;
    loadTrack(nextIdx);
  }

  function prevTrack() {
    const prevIdx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(prevIdx);
  }

  // Event Listeners
  playBtn?.addEventListener('click', togglePlay);
  nextBtn?.addEventListener('click', nextTrack);
  prevBtn?.addEventListener('click', prevTrack);

  // Click on progress bar to scrub
  progressBar?.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    playbackSeconds = Math.floor(pct * trackDuration);
    updateProgressUI();
  });

  // Track list row clicks
  trackRows.forEach((row, index) => {
    row.addEventListener('click', () => {
      loadTrack(index);
      if (!isPlaying) togglePlay();
    });
  });

  // Initialize first track and start canvas
  loadTrack(0);
  startVisualizer();
}
