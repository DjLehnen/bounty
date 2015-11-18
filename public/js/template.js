// Handlebars template for the programs list viewpage. Do Not Touch!

var response = [
      {
        school: "Bradford Tech Center",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        phone: "555-555-5555",
        location: "Gainesville, FL"
      },
      {
        school: "CSI Academy",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        phone: "555-555-5555",
        location: "Gainesville, FL"
      }
    ];

$.handlebars({
    templatePath: 'templates'
});

// now this will fetch <path/to/templates/content.hbs>
$('#viewpage').render('viewpage', {
    employer: 'Hello',
    field2: 'world!',
    programs: response
});
