// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  menu:[
    {name:"About Me", icon:"account_circle", url:"#about-me"},
    {name:"Jobs", icon:"work_outline", url:"#jobs"},
    {name:"Education", icon:"school", url:"#education"},
    {name:"Projects", icon:"devices_other", url:"#projects"},
  ],
  name:"Riccardo Bernucci",
  profileImage: "./assets/images/profile-image.jpeg",
  logo: "./assets/images/logo.svg",
  profession:"Software Engineer",
  about:{
    title: "Riccardo Bernucci",
    subtitle: "",
    content: "I'm a friendly, determined and scrupulous guy.\
    I consider myself available and open to any suggestion, always looking for the smartest solutions for solving problems.\n\
    Since I wrote the first \"Hello world\" in HTML, the creation of web applications has always fascinated me. I know various programming languages, but I'm always ready to learn new ones (my favourites are Javascript and Typescript).\n\
    I recently discovered the potential of SPA frameworks so much that I decided to learn Angular by myself and to take the initiative to apply it to a work-related project (which has been very successful).\n\
    Everyday I like to find space for myself, having a break dedicated to read manga or keep me updated on the latest IT related stuff.",
    id:"about-me"
  },
  education:[{
      title:"BsC in Computer Science @ University of Padua",
      subtitle: "October 2015- September 2019",
      content: "I have also attended the following additional courses: \n \
      - Web Information Management \n \
      - Startup in ITC \n \n \
      Final score: 95/110 \n \n \
      Thesis: \"Instant Developer: Projected and implemented a catalog / product configurator\" "
    },
    {
      title:"Diploma in Corporate IT Systems @ ITC P.F. Calvi",
      subtitle: "September 2010 - June 2015",
      content: "I have attended the following additional courses: \n \
      - ECDL \n \
      - Cambridge FCE \n \n \
      Final score: 95/110"
    }
  ]

  
  
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
