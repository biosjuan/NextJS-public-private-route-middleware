/*
In Next.js, there is a concept of server-side rendering (SSR) and client-side rendering (CSR), which can be important to understand when building web applications. Here are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in the context of Next.js:

**Server-Side Rendering (SSR):**
1. **Initial Rendering on the Server:** With SSR, the initial rendering of the page happens on the server. This means that when a user requests a page, the server generates the HTML for that page with the current data and sends it to the client.
2. **Better SEO:** Since the HTML is already generated on the server, search engines can easily crawl and index the content, leading to improved SEO.
3. **Faster Initial Page Load:** Users see a meaningful page sooner because they receive HTML from the server. This can lead to better perceived performance.
4. **Data Fetching on the Server:** Data fetching can be done on the server before sending the HTML. This can help improve performance for users with slower connections or devices.
5. **Slightly Slower Navigation:** Subsequent navigation involves fetching data from the server, which can be slower compared to client-side navigation in some cases.

**Client-Side Rendering (CSR):**
1. **Initial Rendering on the Client:** With CSR, the initial rendering of the page's shell (HTML structure) happens on the server, but the content is populated on the client side using JavaScript.
2. **Interactivity:** CSR is well-suited for applications with high interactivity as it allows for dynamic updates without full page reloads.
3. **Faster Navigation After Initial Load:** Once the initial page is loaded, navigation within the application is often faster since only data needs to be fetched from the server.
4. **Slower Initial Page Load:** The initial page load might be slower as the browser needs to download the JavaScript bundle and then make additional requests to fetch the data.
5. **SEO Challenges:** Search engine crawlers might have difficulties indexing JavaScript-generated content, although many modern search engines are improving in this regard.
6. **Code Splitting:** CSR naturally lends itself to code splitting, allowing you to load only the necessary JavaScript for a given page, potentially improving performance.

Next.js provides both server-side rendering (SSR) and client-side rendering (CSR) options. By default, Next.js uses SSR for pages, but you can also configure specific pages or parts of pages to use CSR for dynamic updates.

To summarize, SSR is beneficial for better SEO and initial load times, while CSR is great for interactivity and faster navigation after the initial load. The choice between the two depends on your application's requirements and the trade-offs you're willing to make.
*/

import React from 'react';
import UserItem from './_components/UserItem';

export async function getData() {
  try {
    const response = await fetch('http://localhost:3000/api/users', {
      cache: 'no-cache',
    });
    // const response = await fetch('http://localhost:3000/api/users', {
    //   next: { revalidate: 20 },
    // });
    const { data } = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function ServerPage() {
  const users = await getData(); // Await the Promise from getData
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Server Page</h1>
      <ul>
        {users.map((user: any) => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default ServerPage;
