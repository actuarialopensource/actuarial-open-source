// log the pageview with their URL
export const gaPageview = (url) => {
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const gaEvent = ({ action, params }) => {
  window.gtag("event", action, params);
};
