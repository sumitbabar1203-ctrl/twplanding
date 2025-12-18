import { BlogPost } from '@shared/types';

const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || 'AIzaSyAtkth2y4OVoR-cWXsHUTtSnWS_AOo6lqE';
const SHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_ID || '11XBsWylJNhfU1Gd-y81I47fN5Vui78XC8tPTiQk5Yfc';
const SHEET_NAME = 'Sheet1';

export async function fetchBlogsFromSheet(): Promise<BlogPost[]> {
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch from Google Sheets: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.values || data.values.length === 0) {
      return [];
    }

    const headers = data.values[0];
    const titleIndex = headers.indexOf('Title');
    const authorIndex = headers.indexOf('Author');
    const contentIndex = headers.indexOf('Content');

    if (titleIndex === -1 || authorIndex === -1 || contentIndex === -1) {
      throw new Error('Missing required columns: Title, Author, Content');
    }

    const blogs: BlogPost[] = data.values.slice(1).map((row: string[]) => ({
      title: row[titleIndex] || '',
      author: row[authorIndex] || '',
      content: row[contentIndex] || '',
    }));

    return blogs.filter((blog) => blog.title && blog.author && blog.content);
  } catch (error) {
    console.error('Error fetching blogs from Google Sheets:', error);
    throw error;
  }
}
