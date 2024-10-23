import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  TikTokIcon,
  YouTubeIcon,
  GitHubIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    "I'm Gaya Oudjit, a web developer and digital nomad based in Bali, designing and developing innovative web applications.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Gaya Oudjit. I currently live in Bali, where I design and develop innovative web applications.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;ve been passionate about technology and creativity for as long as I can remember. I wrote my first program when I was 12, and since then, I&apos;ve explored a wide range of fields—from full-stack web development to video editing and crypto trading.
            </p>
            <p>
              Whether it&apos;s crafting dynamic websites, solving problems with clean, efficient code, or helping businesses grow their online presence, I am always pushing the boundaries to create the future.
            </p>
            <p>
              Join my Telegram channel for updates and insights: <a href="https://t.me/Gaiaou" className="text-teal-500 hover:text-teal-600">t.me/Gaiaou</a>
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://www.instagram.com/two_nomade" icon={InstagramIcon}>
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://t.me/gue_ou" icon={TelegramIcon} className="mt-4">
              Follow on Telegram
            </SocialLink>
            <SocialLink href="https://www.tiktok.com/@aneckalovee" icon={TikTokIcon} className="mt-4">
              Follow on TikTok
            </SocialLink>
            <SocialLink href="https://www.youtube.com/@GaiaOudjit" icon={YouTubeIcon} className="mt-4">
              Subscribe on YouTube
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/gaiaoudjit" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://github.com/gueyaou" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="mailto:gaiaoudjit@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              gaiaoudjit@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
