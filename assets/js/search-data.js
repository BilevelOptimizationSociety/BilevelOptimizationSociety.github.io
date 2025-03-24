// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-the-bos",
    title: "The BOS",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-organization",
          title: "Organization",
          description: "Cobos and membership of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cobos/";
          },
        },{id: "nav-membership",
          title: "Membership",
          description: "Cobos and membership of the lab or group",
          section: "Navigation",
          handler: () => {
            window.location.href = "/membership/";
          },
        },{id: "nav-icbo",
          title: "ICBO",
          description: "The international conference on bilevel optimization",
          section: "Navigation",
          handler: () => {
            window.location.href = "/icbo";
          },
        },{id: "post-the-bos-and-its-first-cobos",
      
        title: "The BOS and its first COBOS!",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/welcome/";
        
      },
    },{id: "news-we-have-a-new-webpage",
          title: 'We have a new webpage!',
          description: "",
          section: "News",},{id: "news-open-call-for-the-next-icbo-2026-check-the-icbo-tab-for-the-details-of-the-open-call-to-host-the-next-international-conference-on-bilevel-optimization-in-2026",
          title: 'Open Call for the next ICBO 2026! Check the ICBO tab for the...',
          description: "",
          section: "News",},{id: "news-call-for-nominations-of-chair-elect-call-for-nominations-for-the-position-of-chair-elect-of-the-committee-of-the-bilevel-optimization-society-cobos",
          title: 'Call for nominations of Chair-Elect ! Call for Nominations for the position of...',
          description: "",
          section: "News",},];
