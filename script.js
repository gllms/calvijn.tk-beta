// Vrije dagen en vakanties
let vd1819 = [
    {
        title: "Rapportenvergadering Appelstraat",
        date: "26-03-2019",
    },
    {
        title: "Goede Vrijdag",
        date: "19-03-2019",
    },
    {
        title: "Tweede Paasdag",
        date: "22-04-2019",
    },
    {
        title: "Meivakantie",
        from: "23-04-2019",
        until: "03-05-2019"
    },
    {
        title: "Hemelvaartsdag",
        date: "30-05-2019",
    },
    {
        title: "Vrije dag",
        date: "31-05-2019",
    },
    {
        title: "Tweede Pinksterdag",
        date: "10-06-2019",
    },
    {
        title: "Zomervakantie",
        from: "08-07-2019",
        until: "16-08-2019"
    }
];
let vd1920 = [
    {
        title: "Herstvakantie",
        from: "14-10-2019",
        until: "18-10-2019"
    },
    {
        title: "Dankdag Schouwen-Duivenland",
        date: "06-11-2019"
    },
    {
        title: "Dankdag Tholen",
        date: "20-11-2019"
    },
    {
        title: "Dankdag Bevelanden en Walcheren",
        date: "27-11-2019"
    },
    {
        title: "Dankdag Zeeuws-Vlaanderen",
        date: "28-11-2019"
    },
    {
        title: "Kerstvakantie",
        from: "23-12-2019",
        until: "03-01-2020"
    },
    {
        title: "Bezinningsdag",
        date: "06-01-2020"
    },
    {
        title: "Biddag Tholen",
        date: "26-02-2020"
    },
    {
        title: "Voorjaarsvakantie",
        from: "24-02-2020",
        until: "28-02-2020"
    },
    {
        title: "Biddag",
        date: "11-03-2020"
    },
    {
        title: "Biddag Zeeuws-Vlaanderen",
        date: "12-03-2020"
    },
    {
        title: "Goede Vrijdag",
        date: "10-04-2020"
    },
    {
        title: "Tweede Paasdag",
        date: "13-04-2020"
    },
    {
        title: "Meivakantie",
        from: "20-04-2020",
        until: "01-05-2020"
    },
    {
        title: "Hemelvaartsdag",
        date: "21-05-2020"
    },
    {
        title: "Vrije dag",
        date: "22-05-2020"
    },
    {
        title: "Tweede Pinksterdag",
        date: "01-06-2020"
    },
    {
        title: "Zomervakantie",
        from: "13-07-2020",
        until: "21-08-2020"
    },
];


// als de body is geladen
$(function () {
    moment.locale('nl');
    vulTabel($("#data1819"), vd1819);
    vulTabel($("#data1920"), vd1920);
});

function vulTabel(el, data) {
    // loop door elk element in de array
    data.forEach(function (e) {
        if (e.date) { // als er een datum is
            if (moment(e.date, "DD-MM-YYYY").isSameOrAfter(moment().subtract(1, "days"))) { // als het nog niet gebeurd is
                el.append(`<tr><td>${e.title}</td><td>${moment(e.date, "DD-MM-YYYY").format('dddd')+" "+e.date}</td></tr>`);
            }
        } else { // als er een from en een until is
            if (moment(e.from, "DD-MM-YYYY").isSameOrAfter(moment().subtract(1, "days"))) { // als het nog niet gebeurd is
                el.append(`<tr><td>${e.title}</td><td>${moment(e.from, "DD-MM-YYYY").format('dddd')+" "+e.from} t/m ${moment(e.until, "DD-MM-YYYY").format('dddd')+" "+e.until}</td></tr>`);
            }
        }
    });
}