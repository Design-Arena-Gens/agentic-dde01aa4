'use client'

import { useState, useEffect } from 'react'

interface Chapter {
  id: number
  title: string
  period: string
  description: string
  content: string[]
  keyFigures: string[]
  impact: string
}

const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Dawn of Civilization",
    period: "3500 BCE - 500 BCE",
    description: "The birth of human civilization in Mesopotamia, Egypt, and the Indus Valley",
    content: [
      "Around 3500 BCE, humanity took its greatest leap forward. In the fertile lands between the Tigris and Euphrates rivers, the Sumerians built the world's first cities.",
      "They invented writing—cuneiform—giving voice to human thought across millennia. They developed mathematics, astronomy, and created the first legal codes.",
      "Meanwhile, along the Nile, the Egyptian civilization rose to unprecedented heights, building monuments that would stand for thousands of years.",
      "The Great Pyramids of Giza, constructed around 2560 BCE, remain one of humanity's most remarkable achievements—a testament to human ambition and ingenuity."
    ],
    keyFigures: ["Hammurabi", "Imhotep", "Gilgamesh"],
    impact: "Established writing, law, organized religion, and monumental architecture"
  },
  {
    id: 2,
    title: "Classical Antiquity",
    period: "800 BCE - 476 CE",
    description: "The rise of Greece and Rome, philosophy, democracy, and empire",
    content: [
      "In ancient Greece, democracy was born. In Athens, citizens gathered to debate and decide their fate—a revolutionary concept that would echo through history.",
      "Greek philosophers like Socrates, Plato, and Aristotle asked fundamental questions about existence, ethics, and knowledge that still shape our thinking today.",
      "The Roman Empire emerged as perhaps the greatest political achievement of the ancient world, spanning three continents and lasting over a thousand years.",
      "Roman law, engineering, and governance created structures that survive in modern governments, languages, and infrastructure across the globe."
    ],
    keyFigures: ["Socrates", "Alexander the Great", "Julius Caesar", "Augustus"],
    impact: "Created democracy, philosophy, republic governance, and Western legal systems"
  },
  {
    id: 3,
    title: "The Medieval World",
    period: "476 CE - 1453 CE",
    description: "The Middle Ages, Islamic Golden Age, and the bridge between ancient and modern",
    content: [
      "As Rome fell, new civilizations rose. The Islamic Golden Age brought unprecedented advances in mathematics, astronomy, medicine, and philosophy.",
      "Muslim scholars preserved and expanded upon Greek and Roman knowledge while Europe entered the Dark Ages. They invented algebra, advanced optics, and pioneered experimental science.",
      "In medieval Europe, feudalism structured society. Magnificent cathedrals rose skyward, representing faith and architectural ambition.",
      "The Crusades, the Mongol conquests, and the Silk Road connected East and West, exchanging not just goods but ideas, technologies, and cultures."
    ],
    keyFigures: ["Charlemagne", "Al-Khwarizmi", "Genghis Khan", "Saladin"],
    impact: "Preserved ancient knowledge, advanced science and mathematics, connected global civilizations"
  },
  {
    id: 4,
    title: "Renaissance and Reformation",
    period: "1453 CE - 1648 CE",
    description: "Rebirth of learning, religious revolution, and the birth of modern thought",
    content: [
      "The fall of Constantinople in 1453 sent Greek scholars fleeing to Italy, igniting the Renaissance—a 'rebirth' of classical learning and human potential.",
      "Leonardo da Vinci, Michelangelo, and Raphael created art that captured the human form and spirit with unprecedented realism and beauty.",
      "Gutenberg's printing press democratized knowledge. For the first time, ideas could spread rapidly across continents, empowering the common person.",
      "Martin Luther's 95 Theses challenged religious authority, sparking the Reformation and forever changing humanity's relationship with faith and power."
    ],
    keyFigures: ["Leonardo da Vinci", "Michelangelo", "Martin Luther", "Gutenberg"],
    impact: "Revolutionized art, spread literacy, challenged authority, and sparked scientific inquiry"
  },
  {
    id: 5,
    title: "Age of Enlightenment",
    period: "1648 CE - 1815 CE",
    description: "Reason, science, revolution, and the birth of modern democracy",
    content: [
      "The Age of Enlightenment placed reason and science at the center of human progress. Thinkers like Locke, Voltaire, and Rousseau questioned everything.",
      "Newton's laws explained the universe mathematically. The scientific method became the tool for understanding reality, replacing superstition with evidence.",
      "These ideas sparked revolutions. The American Revolution in 1776 declared that all men are created equal, establishing a government by and for the people.",
      "The French Revolution in 1789 toppled monarchy and aristocracy, proclaiming liberty, equality, and fraternity—ideals that would reshape the world."
    ],
    keyFigures: ["Isaac Newton", "Voltaire", "George Washington", "Napoleon"],
    impact: "Established scientific method, human rights, democratic governance, and individual liberty"
  },
  {
    id: 6,
    title: "Industrial Revolution",
    period: "1760 CE - 1914 CE",
    description: "Machines, factories, and the transformation of human society",
    content: [
      "The Industrial Revolution began in Britain and spread across the world, fundamentally transforming how humans live, work, and interact.",
      "Steam engines, factories, and railroads connected nations and continents. Cities exploded in size as people left farms for factory work.",
      "This era brought unprecedented wealth and progress, but also inequality, exploitation, and environmental damage that still affects us today.",
      "Yet it also sparked labor movements, public education, and technological innovations that would lead to electricity, telecommunications, and modern medicine."
    ],
    keyFigures: ["James Watt", "Karl Marx", "Thomas Edison", "Andrew Carnegie"],
    impact: "Mechanized production, urbanized society, created modern economy and class structures"
  },
  {
    id: 7,
    title: "The World Wars",
    period: "1914 CE - 1945 CE",
    description: "Global conflict, devastation, and the reshaping of world order",
    content: [
      "World War I shattered the old world order. Empires collapsed, millions died, and the map of the world was redrawn in blood and diplomacy.",
      "The war introduced industrial-scale killing: machine guns, tanks, poison gas, and trench warfare that traumatized an entire generation.",
      "The interwar period brought economic depression and the rise of totalitarianism. Fascism in Italy and Germany, Stalinism in the Soviet Union.",
      "World War II was humanity's deadliest conflict: over 70 million dead, the Holocaust, atomic bombs. From its ashes rose the United Nations and a commitment to 'never again.'"
    ],
    keyFigures: ["Woodrow Wilson", "Winston Churchill", "Franklin D. Roosevelt", "Adolf Hitler"],
    impact: "Reshaped global politics, created international cooperation, and demonstrated war's ultimate horror"
  },
  {
    id: 8,
    title: "Modern Era",
    period: "1945 CE - Present",
    description: "Cold War, technology, globalization, and the digital age",
    content: [
      "The Cold War divided the world between capitalism and communism, democracy and authoritarianism, creating a nuclear standoff that threatened human existence.",
      "Yet this era also brought remarkable progress: decolonization freed billions, civil rights movements advanced equality, and technology accelerated exponentially.",
      "The fall of the Berlin Wall in 1989 symbolized the triumph of democracy. The internet connected humanity in ways unimaginable just decades before.",
      "Today we face new challenges: climate change, inequality, pandemics. But we also have unprecedented tools: artificial intelligence, renewable energy, global cooperation. Our story continues, written by each generation."
    ],
    keyFigures: ["Martin Luther King Jr.", "Nelson Mandela", "Tim Berners-Lee", "Malala Yousafzai"],
    impact: "Connected the world, advanced human rights, created digital civilization, and faces existential challenges"
  }
]

export default function Home() {
  const [currentChapter, setCurrentChapter] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            if (currentChapter < chapters.length - 1) {
              setCurrentChapter((c) => c + 1)
              return 0
            } else {
              setIsPlaying(false)
              return 100
            }
          }
          return prev + 0.5
        })
      }, 100)
    }
    return () => clearInterval(interval)
  }, [isPlaying, currentChapter])

  const chapter = chapters[currentChapter]

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

        <div className="relative z-10 text-center px-4 max-w-5xl animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200">
            The Story of Humanity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            A journey through 5,000 years of human civilization, from the first cities to the digital age
          </p>
          <button
            onClick={() => {
              setIsPlaying(true)
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }}
            className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl"
          >
            Begin the Journey
          </button>
        </div>
      </div>

      {/* Timeline Navigation */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">Chapter {currentChapter + 1} of {chapters.length}</h2>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  setCurrentChapter(Math.max(0, currentChapter - 1))
                  setProgress(0)
                }}
                disabled={currentChapter === 0}
                className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 px-4 py-2 rounded transition-colors"
              >
                ← Previous
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-amber-600 hover:bg-amber-700 px-6 py-2 rounded transition-colors"
              >
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
              <button
                onClick={() => {
                  setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))
                  setProgress(0)
                }}
                disabled={currentChapter === chapters.length - 1}
                className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 px-4 py-2 rounded transition-colors"
              >
                Next →
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-amber-500 h-2 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Chapter Content */}
      <div className="max-w-5xl mx-auto px-4 py-16 animate-slide-up">
        <div className="mb-12">
          <div className="text-amber-400 text-sm font-semibold mb-2 uppercase tracking-wider">
            {chapter.period}
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">{chapter.title}</h2>
          <p className="text-xl text-gray-300">{chapter.description}</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none mb-12">
          {chapter.content.map((paragraph, idx) => (
            <p key={idx} className="text-gray-200 leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Key Figures</h3>
            <ul className="space-y-2">
              {chapter.keyFigures.map((figure, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-amber-500">•</span>
                  <span className="text-lg">{figure}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-amber-400">Historical Impact</h3>
            <p className="text-gray-200 text-lg leading-relaxed">{chapter.impact}</p>
          </div>
        </div>

        {/* Chapter Timeline */}
        <div className="mt-16 mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Complete Timeline</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {chapters.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setCurrentChapter(idx)
                  setProgress(0)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  idx === currentChapter
                    ? 'border-amber-500 bg-amber-900/30'
                    : 'border-gray-700 bg-gray-800/30 hover:border-gray-600'
                }`}
              >
                <div className="text-xs text-amber-400 mb-1">{ch.period}</div>
                <div className="text-sm font-semibold">{ch.title}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center text-gray-400">
          <p className="mb-2">An Interactive Documentary Experience</p>
          <p className="text-sm">
            This documentary presents a curated journey through human history,
            highlighting pivotal moments that shaped our civilization.
          </p>
        </div>
      </footer>
    </main>
  )
}
