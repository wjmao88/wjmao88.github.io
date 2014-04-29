window.myData = {
  skills: {
    big: ["Full Stack", "Javascript"],
    medium: ["Angular", "d3", "jQuery", "Node", "Express", "SQL", "mongodb", "neo4j/cypher"],
    small: ["socket.io", "backbone", "python", "scikit-learn", "html", "css/sass", "java/jsp", "ruby/rails"]
  },
    
  projects: [{
    name: 'Twenty Project',
    time: '2014',
    details: [
      'Professional networking app',
      'Native mobile app using Ionic and Phonegap with full touch controls',
      'Continuously improving recommendation system using scikit-learn and python',
      'Real time messaging',
    ]
  }, {
    name: 'Waterbase Project',
    time: '2014',
    details: [
      'Backend as a service',
      'One click to create a new custom server, deployed and running on Heroku with MongoHQ database',
      'Control panel in Angular allowing full control over server status',
      'Full restful api in node and express, with built in authentication in passport',
      'Client library using socket.io to achieve built in data binding to custom server with all its clients',
      'Client library with easy integration, allowing libraries that has their own data binding mechanism to easily achieve three way data binding',
      'Dynamic mongoose schema updates itself as iteractions are made with the custom server',
    ]
  },{
    name: 'Data Structures Visualizations',
    time: '2014',
    details: [
      'Red black tree and dynamic directed acyclic word graph',
      'Rendering both in d3 and in native browser function',
      'layout using d3 layouts and self written layout algorithm',
      'options with delayed animation or step through using a promise-like structure'
    ]
  }, {
    name: 'Project ShootStuff',
    time: '2014',
    details: [
      'Realtime Multiplayer using socket.io',
      'All logic runs on server in node and express',
      'Angular client renders using position data from server',
      'Relative coordinate rendering allowing very large world with fixed size viewport',
      'Smooth wrap around over edge and corners'
    ]
  }, {
    name: 'Contract work for HKR',
    time: '2014',
    details: [
      'Website and menu ordering system in angular',
      'Angular control panel to view and edit orders and menus with mongo persistence',
      'Node and express server using built-in Heroku SSL while maintaining a custom domain name for most pages',
      'HTML5 and CSS3 Responsive layout with animation supporting mobile and desktop'
    ]
  }],
    
  educations: [{
    name: 'Software Engineering Immersion at Hack Reactor',
    time: '2014'
  }, {
    name: 'Computer Science at University of Waterloo',
    time: '2006 - 2008'
  }]

}