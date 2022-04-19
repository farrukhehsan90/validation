export const Schema = {
  fields: [
    {
      type: "Select",
      name: "Food",
      options: ["Select Food", "Lentil", "Rice", "Milk", "Vegetables"],
      id: "1",
      Lentil:{options:['Select Lentil',"Masoor Dal","Toor/Arhar Dal","Lobia","Chickpea"],unit:'Kg'},
      Milk:{options:['Select Milk',"Slim Milk","Cow Milk"],unit:'Ltr'},
      Rice:{options:['Select Rice',"Basmati Rice","Brown Rice","Jasmine Rice"],unit:'Kg'},
      Vegetables:{options:['Select Veges',"Tomato","Potato","Peas"],unit:'Kg'},


    },
    {
      type: "Select",
      name: "Utensils",
      options: ["Select Utensil", "Tea Sets", "Spoons", "Plates"],
      id: "2",
    },
    
    {
      type: "Select",
      name: "Toys",
      options: [
        "Select Toys",
        "Electric toys",
        "Board games",
        "Card games",
      ],
      id: "3",
    },
  ],
};

