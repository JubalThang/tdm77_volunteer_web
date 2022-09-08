let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  const test = [
      {firstName : "Daniel", lastName: "Longbottom"},
      {firstName : "Jacob", lastName: "Black"}
      ]
      
  const newUsers = users.map(user => 
      test.some(t => t.firstName === user.firstName) ?  {...user, lastName: "Don"} :  user
  )
  // console.log(users.find(user => user.firstName === "Jacob"))
  console.log(users.some(user => user.firstName === "Jacob"))
  console.log(newUsers)