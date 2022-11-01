 # starterPackTypeORM

 # more precise README documentation inside the doc folder 
 # check this doc with github for a better render

 # careful, when delete an entity, we have to do a migrations

 # tuto add a new entity :

 ### when add an entity => ex : with user, by copying client entity

 ### !!!! careful lowercase is rly important, it will give us the ability to copy paste whole file and ctrl + h the name of the entity

 ### go to controller, add a user folder

 ### in user folder, add userController.ts and userRoutes.ts
 ### for userController, copy the whole "clientController.ts file" (never mind which controller u copy)
 ### copy paste into userController, the new entity.

 ### select "client" (depends the controller u copied)
### ctrl + h and replace by user (or the new entity that u just created)

###  same stuff to userRoutes

###  then in routes.ts file, add ur new route file in the AppRoutes array.


# things to know

## create Many to one relation.
### we have to precise two column, the foreign key and the entity linked
### Exemple with projet entity which is on a ManyToOne relation with client.

### EX :   @Column()
 ###   clientId : number;

###   @ManyToOne(()=>client, client => client.id,{nullable : false,cascade : true, onDelete : "CASCADE"})
###  @JoinColumn({name : "clientId"})
### client : client


