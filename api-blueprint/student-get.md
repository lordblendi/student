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
      "name" : "Hallgato Neve",
      "neptun" : "Neptun",
      "results" : {
         "1" : {
            "entry" : "5",
            "report" : "4", 
            "lab" : "4"
            },
         "2" : {
            "entry" : "5",
            "report" : "4", 
            "lab" : "4"
            },
         "3" : {
            "entry" : "5",
            "report" : "4", 
            "lab" : "4"
            },
         "4" : {
            "entry" : "5",
            "report" : "4", 
            "lab" : "4"
            },
         "5" : {
            "entry" : "-",
            "report" : "-", 
            "lab" : "-"
            }
      }
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
      "demonstrator" : "Gajdi Pajti",
      "deadline" : "2015.12.11. 12:00",
      "repository" : "git@gitlab.db.bme.hu:pelda/pelda.git",
      "entrytest" : "5",
      "finalcommit" : "3",
      "commits" : ["Branch1/1","Branch1/2","Branch2/3","Branch2/4"],
      "report" : {
        "grade" : "5",
        "evaluator" : "Nori",
        "review" : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
      },
      "laboratory" : {
        "grade" : "5",
        "review" : "Gag ipsum dolar sit amet cool rainbow bottom cookie monster monday. Facepalm rebecca black russia jackie chan unlock the avengers loki finals not bad yao. People morbi elephant cereal guy sit thor diablo 3 twitter male keyboard. Portfolio luke one does not simply charlie sheen le friend college sandwich too mainstream architect drink search. Lois hammer friendzoned le derp on y u no donut fun dummies bacon. Genius party geek venenatis sister phone forever alone win read grin nap not okay. Essay impossibru hulk left le girlfriend creepy me gusta good guy tank. Puking Rainbows monocle happy money 140% computer lose derpina scared strangers. Poker face cuteness overload if you know what i mean a amet no bad basic math food why in class mom. House brother right collection top for 9000 students that steve jobs face okay. Eat on always i'm watching u super rage in blizzard joke high school."
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