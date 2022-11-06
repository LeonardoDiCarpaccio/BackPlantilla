# findBy API doc

# EXEMPLE BODY POSSIBLE 
## user with manyToMany relations with role
## finding here by id and name
## getting the entire relations 
## selecting only name from user joining role entity

###     { 
###     "where" : {"id" : 3,"name" : "zoenfkofzennfze" },
###     "relations" : ["role"],
###     "select" : ["name"]
###      }


# EXEMPLE BODY POSSIBLE
## finding here by name with LIKE 

###     { 
###     "like" : {"name" : "us" },
###     }

# EXEMPLE BODY POSSIBLE
## finding here by id IN

###      { 
###        "in" : {"id" : [1,2]}
###      }
     





     