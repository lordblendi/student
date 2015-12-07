# Message [/student/{userid}/setfinalcommit]
### Post new final commit for student [POST]
## Automatic response to OPTIONS requests
           
+ Request (application/json)

    + Schema

            {   "type":"object",
                "required": ["finalcommit", "labid"],
                "properties" : {
                    "finalcommit": {"type":"string"},
                    "labid": {"type":"string"}
                }
            
            }

+ Response 201 (application/json;charset=UTF-8)

    + Body

            {
                "status": "ok"
            }
            
            
            
# Message [/student/{userid}/setsettings]
### Post new settings for student [POST]
## Automatic response to OPTIONS requests
           
+ Request (application/json)

    + Schema

            {   "type":"object",
                "required": ["notification", "mailingList"],
                "properties" : {
                    "email": {"type":"string"},
                    "notification": {"type":"boolean"},
                    "mailingList": {"type":"boolean"},
                    "sshPublicKey": {"type":"string"},
                    "oldpwd": {"type":"string"},
                    "newpwd": {"type":"string"}
                }
            
            }

+ Response 201 (application/json;charset=UTF-8)

    + Body

            {
                "status": "ok"
            }
