function spinWords(string) {
    const words = string.split(" ");
    words.map((word, index) => {
        if (word.length >= 5) {
            words[index] = word.split("").reverse().join("");
        }
    });
    return words.join(" ");
}

spinWords('Hey fellow warriors');

// String
// Number
// Array
// JSON
// Date
// Object
// Map
// Set
// Boolean
// Math

// Undefined
// Null
// Symbol
// BigInt
// Function
// RegExp
// Error
// WeakMap
// WeakSet
// Promise
// Intl
// Reflect
// Proxy
// URL
// URLSearchParams
// Blob
// File
// FileList
// FormData
// ImageBitmap
// ImageData
// AudioBuffer
// CanvasRenderingContext2D
// CanvasGradient
// CanvasPattern
// CanvasImageSource
// AudioContext
// OfflineAudioContext
// MediaStream
// MediaStreamTrack
// MediaStreamAudioSourceNode
// MediaStreamAudioDestinationNode
// MediaStreamAudioProcessorNode