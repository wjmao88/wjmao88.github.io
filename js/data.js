window.myData = {
  skills: {
    big: ["Full Stack", "Javascript"],
    medium: ["Angular", "D3", "JQuery", "Node", "Express", "SQL", "Mongodb", "Neo4j/Cypher"],
    small: ["Socket.io", "Backbone", "Python", "HTML", "CSS/SASS", "Java/JSP", "Ruby"]
  },
    
  projects: [{
    name: 'Twenty Project',
    time: '2014',
    description: 'Professional networking app',
    links: [{
          name: '20app.co',
          url: 'http://20app.co'
        }],
    techs: ["Angular", "Node", "Express", "Neo4j/Cypher", "Python"],
    details: [
      'Native mobile app using Ionic and Phonegap with full touch controls',
      'Continuously self improving recommendation system using Python\'s Scikit-Learn library',
      'Real time messaging'
    ]
  }, {
    name: 'Waterbase Project',
    time: '2014',
    description: 'Backend as a service',
    links: [{
          name: 'waterbase.io',
          url: 'http://waterbase.io'
        }],
    techs: ["Angular", "Node", "Express", "Mongodb"],
    details: [
      'One click to create a new custom server, deployed and running on Heroku with MongoHQ database',
      'Control panel in Angular allowing full control over server status',
      'Full restful api in node and express, with built in authentication in passport',
      'Client library using socket.io to achieve built in data binding to custom server with all its clients',
      'Client library with easy integration, allowing libraries that has their own data binding mechanism to easily achieve three way data binding',
      'Dynamic mongoose schema updates itself as iteractions are made with the custom server'
    ]
  }, {
    name: 'Data Structures Visualizations',
    time: '2014',
    //description: '',
    links: [{
      name: 'Red Black Tree',
      url: 'http://wesley.cat/ds-viewer'
    },{
      name: 'Directed Acyclic Word Graph',
      url: 'http://wesley.cat/dawg'
    }],
    techs: ["Angular", "Node", "Express", "Mongodb"],
    details: [
      'Rendering both in d3 and in native browser function',
      'layout using d3 layouts and self written layout algorithm',
      'options with delayed animation or step through using a promise-like structure'
    ]
  }, {
    name: 'Project ShootStuff',
    time: '2014',
    description: 'Realtime multiplayer game',
    links: [{
          name: 'shootstuff.azurewebsites.net',
          url: 'http://shootstuff.azurewebsites.net'
        }],
    techs: ["Angular", "Socket.io", "Node", "Express", "Mongodb"],
    details: [
      'Realtime using socket.io',
      'All logic runs on server in node and express',
      'Angular client renders using position data from server',
      'Relative coordinate rendering allowing very large world with fixed size viewport',
      'Smooth wrap around over edge and corners'
    ]
  }, {
    name: 'Contract work for HKR',
    time: '2014',
    description: 'Restaurant website and ordering system',
    links:[ {
          name: 'hkr20147.com',
          url: 'http://hkr20147.com'
        }],
    techs: ["Angular", "SASS", "Node", "Express", "Mongodb"],
    details: [
      'Website and menu ordering system in angular',
      'Angular control panel to view and edit orders and menus with mongo persistence',
      'Node and express server using built-in Heroku SSL while maintaining a custom domain name for most pages',
      'HTML5 and CSS3 Responsive layout with animation supporting mobile and desktop'
    ]
  }, {
    name: 'Software Developer, iSoftStone/Huawei',
    time: '2014',
    description: 'Data Warehousing developement with Oracle 11g database',
    techs: ["PL/SQL"],
    details: [
      'Designed financial report formats with accountants and business analysts.',
      'Designed dimensional schema for storing large data efficiently in oracle 11g databases.',
      'Developed procedures in PLSQL to transform monthly operational data into financial data.'
    ]
  }],
    
  educations: [{
    name: 'Software Engineering Immersion at Hack Reactor',
    time: '2013'
  }, {
    name: 'Computer Science at University of Waterloo',
    time: '2006 - 2008'
  }]

};