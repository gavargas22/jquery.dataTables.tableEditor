$(document).ready(function () {
    var dataJson = [
        {
            "name": "Tiger Nixon",
            "position": "System Architect",
            "salary": "$320,800",
            "start_date": "2011/04/25",
            "office": "Edinburgh",
            "extn": "5421",
            "status": 1,
            "deleted": 0
        },
        {
            "name": "Garrett Winters",
            "position": "Accountant",
            "salary": "$170,750",
            "start_date": "2011/07/25",
            "office": "Tokyo",
            "extn": "8422",
            "status": 1,
            "deleted": 0
        },
        {
            "name": "Ashton Cox",
            "position": "Junior Technical Author",
            "salary": "$86,000",
            "start_date": "2009/01/12",
            "office": "San Francisco",
            "extn": "1562",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Cedric Kelly",
            "position": "Senior Javascript Developer",
            "salary": "$433,060",
            "start_date": "2012/03/29",
            "office": "Edinburgh",
            "extn": "6224",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Airi Satou",
            "position": "Accountant",
            "salary": "$162,700",
            "start_date": "2008/11/28",
            "office": "Tokyo",
            "extn": "5407",
            "status": 2,
            "deleted": 0
        },
        {
            "name": "Brielle Williamson",
            "position": "Integration Specialist",
            "salary": "$372,000",
            "start_date": "2012/12/02",
            "office": "New York",
            "extn": "4804",
            "status": 2,
            "deleted": 0
        },
        {
            "name": "Herrod Chandler",
            "position": "Sales Assistant",
            "salary": "$137,500",
            "start_date": "2012/08/06",
            "office": "San Francisco",
            "extn": "9608",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Rhona Davidson",
            "position": "Integration Specialist",
            "salary": "$327,900",
            "start_date": "2010/10/14",
            "office": "Tokyo",
            "extn": "6200",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Colleen Hurst",
            "position": "Javascript Developer",
            "salary": "$205,500",
            "start_date": "2009/09/15",
            "office": "San Francisco",
            "extn": "2360",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Sonya Frost",
            "position": "Software Engineer",
            "salary": "$103,600",
            "start_date": "2008/12/13",
            "office": "Edinburgh",
            "extn": "1667",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Jena Gaines",
            "position": "Office Manager",
            "salary": "$90,560",
            "start_date": "2008/12/19",
            "office": "London",
            "extn": "3814",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Quinn Flynn",
            "position": "Support Lead",
            "salary": "$342,000",
            "start_date": "2013/03/03",
            "office": "Edinburgh",
            "extn": "9497",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Charde Marshall",
            "position": "Regional Director",
            "salary": "$470,600",
            "start_date": "2008/10/16",
            "office": "San Francisco",
            "extn": "6741",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Haley Kennedy",
            "position": "Senior Marketing Designer",
            "salary": "$313,500",
            "start_date": "2012/12/18",
            "office": "London",
            "extn": "3597",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Tatyana Fitzpatrick",
            "position": "Regional Director",
            "salary": "$385,750",
            "start_date": "2010/03/17",
            "office": "London",
            "extn": "1965",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Michael Silva",
            "position": "Marketing Designer",
            "salary": "$198,500",
            "start_date": "2012/11/27",
            "office": "London",
            "extn": "1581",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Paul Byrd",
            "position": "Chief Financial Officer (CFO)",
            "salary": "$725,000",
            "start_date": "2010/06/09",
            "office": "New York",
            "extn": "3059",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Gloria Little",
            "position": "Systems Administrator",
            "salary": "$237,500",
            "start_date": "2009/04/10",
            "office": "New York",
            "extn": "1721",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Bradley Greer",
            "position": "Software Engineer",
            "salary": "$132,000",
            "start_date": "2012/10/13",
            "office": "London",
            "extn": "2558",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Dai Rios",
            "position": "Personnel Lead",
            "salary": "$217,500",
            "start_date": "2012/09/26",
            "office": "Edinburgh",
            "extn": "2290",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Jenette Caldwell",
            "position": "Development Lead",
            "salary": "$345,000",
            "start_date": "2011/09/03",
            "office": "New York",
            "extn": "1937",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Yuri Berry",
            "position": "Chief Marketing Officer (CMO)",
            "salary": "$675,000",
            "start_date": "2009/06/25",
            "office": "New York",
            "extn": "6154",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Caesar Vance",
            "position": "Pre-Sales Support",
            "salary": "$106,450",
            "start_date": "2011/12/12",
            "office": "New York",
            "extn": "8330",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Doris Wilder",
            "position": "Sales Assistant",
            "salary": "$85,600",
            "start_date": "2010/09/20",
            "office": "Sidney",
            "extn": "3023",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Angelica Ramos",
            "position": "Chief Executive Officer (CEO)",
            "salary": "$1,200,000",
            "start_date": "2009/10/09",
            "office": "London",
            "extn": "5797",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Gavin Joyce",
            "position": "Developer",
            "salary": "$92,575",
            "start_date": "2010/12/22",
            "office": "Edinburgh",
            "extn": "8822",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Jennifer Chang",
            "position": "Regional Director",
            "salary": "$357,650",
            "start_date": "2010/11/14",
            "office": "Singapore",
            "extn": "9239",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Brenden Wagner",
            "position": "Software Engineer",
            "salary": "$206,850",
            "start_date": "2011/06/07",
            "office": "San Francisco",
            "extn": "1314",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Fiona Green",
            "position": "Chief Operating Officer (COO)",
            "salary": "$850,000",
            "start_date": "2010/03/11",
            "office": "San Francisco",
            "extn": "2947",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Shou Itou",
            "position": "Regional Marketing",
            "salary": "$163,000",
            "start_date": "2011/08/14",
            "office": "Tokyo",
            "extn": "8899",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Michelle House",
            "position": "Integration Specialist",
            "salary": "$95,400",
            "start_date": "2011/06/02",
            "office": "Sidney",
            "extn": "2769",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Suki Burks",
            "position": "Developer",
            "salary": "$114,500",
            "start_date": "2009/10/22",
            "office": "London",
            "extn": "6832",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Prescott Bartlett",
            "position": "Technical Author",
            "salary": "$145,000",
            "start_date": "2011/05/07",
            "office": "London",
            "extn": "3606",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Gavin Cortez",
            "position": "Team Leader",
            "salary": "$235,500",
            "start_date": "2008/10/26",
            "office": "San Francisco",
            "extn": "2860",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Martena Mccray",
            "position": "Post-Sales support",
            "salary": "$324,050",
            "start_date": "2011/03/09",
            "office": "Edinburgh",
            "extn": "8240",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Unity Butler",
            "position": "Marketing Designer",
            "salary": "$85,675",
            "start_date": "2009/12/09",
            "office": "San Francisco",
            "extn": "5384",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Howard Hatfield",
            "position": "Office Manager",
            "salary": "$164,500",
            "start_date": "2008/12/16",
            "office": "San Francisco",
            "extn": "7031",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Hope Fuentes",
            "position": "Secretary",
            "salary": "$109,850",
            "start_date": "2010/02/12",
            "office": "San Francisco",
            "extn": "6318",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Vivian Harrell",
            "position": "Financial Controller",
            "salary": "$452,500",
            "start_date": "2009/02/14",
            "office": "San Francisco",
            "extn": "9422",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Timothy Mooney",
            "position": "Office Manager",
            "salary": "$136,200",
            "start_date": "2008/12/11",
            "office": "London",
            "extn": "7580",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Jackson Bradshaw",
            "position": "Director",
            "salary": "$645,750",
            "start_date": "2008/09/26",
            "office": "New York",
            "extn": "1042",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Olivia Liang",
            "position": "Support Engineer",
            "salary": "$234,500",
            "start_date": "2011/02/03",
            "office": "Singapore",
            "extn": "2120",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Bruno Nash",
            "position": "Software Engineer",
            "salary": "$163,500",
            "start_date": "2011/05/03",
            "office": "London",
            "extn": "6222",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Sakura Yamamoto",
            "position": "Support Engineer",
            "salary": "$139,575",
            "start_date": "2009/08/19",
            "office": "Tokyo",
            "extn": "9383",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Thor Walton",
            "position": "Developer",
            "salary": "$98,540",
            "start_date": "2013/08/11",
            "office": "New York",
            "extn": "8327",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Finn Camacho",
            "position": "Support Engineer",
            "salary": "$87,500",
            "start_date": "2009/07/07",
            "office": "San Francisco",
            "extn": "2927",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Serge Baldwin",
            "position": "Data Coordinator",
            "salary": "$138,575",
            "start_date": "2012/04/09",
            "office": "Singapore",
            "extn": "8352",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Zenaida Frank",
            "position": "Software Engineer",
            "salary": "$125,250",
            "start_date": "2010/01/04",
            "office": "New York",
            "extn": "7439",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Zorita Serrano",
            "position": "Software Engineer",
            "salary": "$115,000",
            "start_date": "2012/06/01",
            "office": "San Francisco",
            "extn": "4389",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Jennifer Acosta",
            "position": "Junior Javascript Developer",
            "salary": "$75,650",
            "start_date": "2013/02/01",
            "office": "Edinburgh",
            "extn": "3431",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Cara Stevens",
            "position": "Sales Assistant",
            "salary": "$145,600",
            "start_date": "2011/12/06",
            "office": "New York",
            "extn": "3990",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Hermione Butler",
            "position": "Regional Director",
            "salary": "$356,250",
            "start_date": "2011/03/21",
            "office": "London",
            "extn": "1016",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Lael Greer",
            "position": "Systems Administrator",
            "salary": "$103,500",
            "start_date": "2009/02/27",
            "office": "London",
            "extn": "6733",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Jonas Alexander",
            "position": "Developer",
            "salary": "$86,500",
            "start_date": "2010/07/14",
            "office": "San Francisco",
            "extn": "8196",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Shad Decker",
            "position": "Regional Director",
            "salary": "$183,000",
            "start_date": "2008/11/13",
            "office": "Edinburgh",
            "extn": "6373",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Michael Bruce",
            "position": "Javascript Developer",
            "salary": "$183,000",
            "start_date": "2011/06/27",
            "office": "Singapore",
            "extn": "5384",
            "status": 0,
            "deleted": 0
        },
        {
            "name": "Donna Snider",
            "position": "Customer Support",
            "salary": "$112,000",
            "start_date": "2011/01/25",
            "office": "New York",
            "extn": "4226",
            "status": 0,
            "deleted": 0
        }
    ];

    $('#example').DataTable({
        "data": dataJson,

        //"columnDefs": [
        //    {
        //        // The `data` parameter refers to the data for the cell (defined by the
        //        // `data` option, which defaults to the column being worked with, in
        //        // this case `data: 0`.
        //        "render": function (data, type, row) {
        //            return data + ' (' + type + ')';
        //        },
        //        "targets": 0
        //    },
        //    {"visible": false, "targets": [2]}
        //],

        columns: [
            {
                "data": "name",
                "title": "Name",
                "editable": true
            },
            {
                "data": "position",
                "title": "Position",
                "editable": true
            },
            {
                "data": "salary",
                "title": "Salary",
                "editable": true
            },
            {
                "data": "start_date",
                "title": "Start Date",
                "class": "center",
                "template": function () {
                    return $('<input type="text" class="span10" value="hello world">');
                },
                "editable": true
            },
            {
                "data": "office",
                "title": "Office",
                "class": "center"
            },
            {
                "data": "extn",
                "title": "Extension",
                "class": "center"
            },
            {
                "data": "status",
                "visible": false,
                "searchable": false
            },
            {
                "data": "deleted",
                "width": "2em",
                "render": function (data, type, row, meta) {
                    if (row.status == 0 || row.status == null || row.status == "") {
                        return '<i class="icon-trash" data-action="delete">Trash</i>';
                    } else if (row.status == 1) {
                        return '<i class="icon-lock" data-action="unlock">Lock</i>';
                    } else {
                        return '';
                    }
                },
                "defaultContent": 0,
                "searchable": false,
                "sortable": false
            }
        ],

        // tableEditor
        editable: true,
        dirtyData: true,
        lockable: true,
        deletable: true,
        editor: {
            fields: {
                "data": "name",
                "title": "Name",
                "editable": true
            }
        }

    });
});
