// 1. Explain how server-side rendering and static generation work in Next.js.
// In Next.js, both Server-Side Rendering (SSR) and Static Generation (SSG) are methods of pre-rendering pages. 
// That means the HTML is generated in advance, not at runtime in the browser, which leads to faster performance and better SEO.

// 1. Static Generation (SSG)
// Static Generation builds HTML at build time. This is best for pages that:

// Don’t change often

// Don’t require user-specific data

// How It Works:
// When you run next build, Next.js:

// Pre-renders the page to static HTML

// Saves it to a .next directory

// Serves it directly when requested

// pages/blog.tsx
export async function getStaticProps() {
    const posts = await fetchPostsFromAPI();
    return {
      props: { posts },
      revalidate: 10 // ISR: regenerate page every 10 seconds
    };
  }
  
  export default function Blog({ posts }) {
    return <BlogList posts={posts} />;
  }

//   Pros:

//   Fast page load (HTML is ready)
  
//   CDN-cached
  
//   Can use ISR (Incremental Static Regeneration)
  
//   ⚠️ Cons:
  
//   Can’t use dynamic user data
  
//   Data may be outdated (unless you revalidate)

// 2. Server-Side Rendering (SSR)
// SSR builds HTML on each request. This is best for:

// User-specific content

// Frequently changing data

// How It Works:
// Every time the user requests the page:

// Next.js runs getServerSideProps

// Generates fresh HTML

// Sends it to the browser

// Example with getServerSideProps:
// pages/profile.tsx
export async function getServerSideProps(context) {
    const user = await fetchUser(context.params.id);
    return { props: { user } };
  }
  
  export default function Profile({ user }) {
    return <UserProfile user={user} />;
  }

//   ✅ Pros:

// Always up-to-date

// Can use dynamic/request-specific data

// ⚠️ Cons:

// Slower (HTML is generated per request)

// No CDN caching
// 💡 Bonus: Incremental Static Regeneration (ISR)
// ISR is an enhancement of SSG:

// You can regenerate pages after deployment

// You define revalidate time (in seconds)
revalidate: 60 // Rebuild page every 60 seconds


// 2.Differences between getServerSideProps, getStaticProps, and getInitialProps

// 🧩 1. getStaticProps – Static Generation
// Purpose:
// Used to fetch data at build time. Ideal for pages with static content that doesn’t change often.

// Runs:

// Only at build time

// Can run again with ISR (Incremental Static Regeneration) if you use revalidate

// Example:
export async function getStaticProps() {
  const data = await fetchData();
  return {
    props: { data },
    revalidate: 60 // (Optional) Regenerate page every 60 seconds
  };
}

// ✅ Pros:

// Extremely fast (HTML generated ahead of time)

// Can be cached by CDN

// Great for SEO

// ⚠️ Cons:

// Cannot use request-specific data (like cookies or headers)

// Content can become stale unless using ISR

// 🔁 2. getServerSideProps – Server-Side Rendering (SSR)
// Purpose:
// Fetches data on every request. Good for dynamic pages with content that changes frequently or needs authentication/session info.

// Runs:

// Every time a request is made to the page

// Example:

export async function getServerSideProps(context) {
  const data = await fetchData();
  return {
    props: { data }
  };
}

// ✅ Pros:

// Always up-to-date data

// Can access request context: cookies, headers, etc.

// Good for SEO

// ⚠️ Cons:

// Slower than static generation (renders on each request)

// Not cacheable by CDN

// 🌀 3. getInitialProps – Legacy / Universal Data Fetching
// Purpose:
// Runs on both server and client. It was introduced before the other two methods and is now discouraged for new apps.

// Runs:

// On the server during the initial request

// On the client during client-side navigation

// Example:

MyPage.getInitialProps = async (context) => {
  const data = await fetchData();
  return { data };
};

// ✅ Pros:

// Works with both custom _app.tsx and individual pages

// Universal behavior

// ⚠️ Cons:

// Adds complexity (runs on client and server)

// Cannot use Static Generation

// Slower, larger bundle (if used in _app.tsx)


// ✅ When to Use Each
// Use getStaticProps for blog posts, landing pages, product listings.

// Use getServerSideProps for dashboards, profile pages, or anything behind auth.

// Avoid getInitialProps unless migrating from older Next.js projects.




  