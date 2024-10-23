import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'
import fs from 'fs'
import path from 'path'
import { getAllArticles } from '@/lib/articles'

export async function GET(req) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Gaya Oudjit',
    email: 'gaiaoudjit@gmail.com',
  }

  let feed = new Feed({
    title: author.name,
    description: 'Your blog description',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articles = await getAllArticles()

  for (let article of articles) {
    let url = `${siteUrl}/articles/${article.slug}`
    let publicUrl = url

    feed.addItem({
      title: article.title,
      id: publicUrl,
      link: publicUrl,
      content: article.description,
      author: [author],
      contributor: [author],
      date: new Date(article.date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
