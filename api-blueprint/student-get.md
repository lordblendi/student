# Message [/student/{userid}/general]
## Get student general informations [GET]
+ Response 200 (application/json)
   {
      "name" : "Teszt Hallgató",
      "neptun" : "Neptun",
      "id" : "1"
   }


# Message [/student/{userid}/results]
## Get student results [GET]
+ Response 200 (application/json)
   {
        "results": [{
            "entry": "5",
            "report": "4",
            "lab": "4"
        }, {
            "entry": "5",
            "report": "4",
            "lab": "5"
        }, {
            "entry": "5",
            "report": "5",
            "lab": "5"
        }, {
            "entry": "4",
            "report": "4",
            "lab": "4"
        }, {
            "entry": "-",
            "report": "-",
            "lab": "-"
        }]
   }

# Message [/student/{userid}/laboratory]
## Get student laboratory details example for full lab  [GET]
+ Response 200 (application/json)
   {
      "labid" : "1",
      "description" : "1. Labor",
      "statusCode" : "after",
      "location" : "IL105",
      "time" : "2015.11.21. 16:15",
      "demonstrator" : "Teszt Oktató 1",
      "deadline" : "2015.12.11. 12:00",
      "repository" : "git@gitlab.db.bme.hu:pelda/pelda.git",
      "entrytest" : "5",
      "finalcommit" : "3",
      "commits" : ["Branch1/1","Branch1/2","Branch2/3","Branch2/4"],
      "report" : {
        "grade" : "4",
        "evaluator" : "Teszt Oktató 2",
        "review" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
      },
      "laboratory" : {
        "grade" : "4",
        "review" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
      }
   }
    
# Message [/student/{userid}/settings]
## Get student settings [GET]
+ Response 200 (application/json)
   {
      "email" : "teszt@teszt.hu",
      "notification" : true,
      "mailingList" : false,
      "sshPublicKey" : "ssh-rsa AAAB3nZaC1aycAAEU+/ZdulUJoeuchOUU02/j18L7fo+ltQ0f322+Au/9yy9oaABBRCrHN/yo88BC0AB3nZaC1aycAAEU+/ZdulUJoeuchOUU02/j18L7fo+ltQ0f322AB3nZaC1aycAAEU+/ZdulUJoeuchOUU02/j18L7fo+ltQ0f322AB3nZaC1aycAAEU+/ZdulUJoeuchOUU02/j18L7fo+ltQ0f322AB3nZaC1aycAAEU+/ZdulUJoeuchOUU02/j18L7fo+ltQ0f322klCi0/aEBBc02N+JJP teszt@teszt.hu"
    }