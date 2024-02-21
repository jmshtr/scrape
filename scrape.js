import fetch from 'node-fetch';

async function scrapeWebsite(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        return html;
    } catch (error) {
        console.error('Error fetching website:', error);
        return null;
    }
}

// Extract the URL from command-line arguments
const args = process.argv.slice(2); // Exclude "node" and script name
const websiteUrl = args[0];

if (!websiteUrl) {
    console.error('Please provide a URL.');
    process.exit(1);
}

// Scrape the specified website
scrapeWebsite(websiteUrl)
    .then(html => {
        if (html) {
            console.log('HTML content:', html);
            // You can now parse and extract data from the HTML content
        } else {
            console.log('Failed to fetch HTML content.');
        }
    })
    .catch(error => console.error('Error:', error));
