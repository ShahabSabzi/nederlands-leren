/**
 * Dutch text-to-speech helper.
 * Voices load asynchronously on many devices (including iOS Safari),
 * so the Dutch voice is picked up once the browser reports its voice list.
 */

let cachedDutchVoice: SpeechSynthesisVoice | null = null;
let voicesListenerAttached = false;

function findDutchVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices();
  return (
    voices.find((voice) => voice.lang === 'nl-NL') ||
    voices.find((voice) => voice.lang.toLowerCase().startsWith('nl')) ||
    null
  );
}

function ensureVoicesLoaded() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  if (cachedDutchVoice) return;

  cachedDutchVoice = findDutchVoice();

  if (!voicesListenerAttached) {
    voicesListenerAttached = true;
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      cachedDutchVoice = findDutchVoice();
    });
  }
}

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

export function speakDutch(text: string, rate: number = 0.85, onEnd?: () => void): boolean {
  if (!isSpeechSupported()) return false;

  ensureVoicesLoaded();
  window.speechSynthesis.cancel();

  // Remove blank markers so the voice does not read them aloud.
  const cleanText = text.replace(/\[blank\d*\]/g, '').replace(/_+/g, '').trim();
  if (!cleanText) return false;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'nl-NL';
  utterance.rate = rate;
  if (cachedDutchVoice) {
    utterance.voice = cachedDutchVoice;
  }

  utterance.onend = () => onEnd?.();
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeaking() {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
}

export function isSpeaking(): boolean {
  return isSpeechSupported() && window.speechSynthesis.speaking;
}
