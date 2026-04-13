import { useState, useEffect } from 'react'

/**
 * Cycles through an array of strings with a typewriter effect.
 * @param {string[]} words  - Array of words/phrases to cycle through
 * @param {number}   speed  - Typing speed in ms (default 80)
 * @param {number}   pause  - Pause duration when word is complete (default 2000)
 */
export default function useTypingEffect(words = [], speed = 80, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!words.length) return

    const currentWord = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentWord.slice(0, charIndex + 1))
        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setText(currentWord.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setWordIndex(w => (w + 1) % words.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return text
}
