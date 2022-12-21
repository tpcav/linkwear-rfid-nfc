import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Hero from './Hero'


const files = [
  {
    title: 'ordinarygame.com',
    size: 'Word Guessing Game.',
    source:
      'o-playing.png',
    href: 'https://www.ordinarygame.com/',
  },
  {
    title: 'Rory Creative',
    size: 'Photo Album Concept.',
    source:
      'r-black.png',
    href: 'https://www.ordinarygame.com/',
  },
  {
    title: 'abbatia.info',
    size: 'Windows 98 Emulator.',
    source:
      'a-home.png',
    href: 'https://www.ordinarygame.com/',
  },
  {
    title: 'storyline.live',
    size: 'Story by 25 different people.',
    source:
      'story.png',
    href: 'https://www.ordinarygame.com/',
  },
  // More files...
]

export default function Images() {
  return (
    <ul role="list" className="p-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <img src={file.source} alt="websites-thumbnails" className="pointer-events-none object-cover group-hover:opacity-75" />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
        </li>
      ))}
    </ul>
  )
}
