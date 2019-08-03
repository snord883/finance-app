export default function(){
  return {
    1: { name: "ALL", isIncluded: true,
          subItems: [
            { name: "Income", isIncluded: true,
                  subItems: [
                    { name: "Income (Steve)", isIncluded: true },
                    { name: "Income (Sarah)", isIncluded: true },
                    { name: "Tax Refund", isIncluded: true },
                    { name: "Interest", isIncluded: true }
                  ]
            },
            { name: "Expense", isIncluded: true,
                  subItems: [
                    { name: "Car", isIncluded: true,
                      subItems: [
                        { name: "Auto Insurance", isIncluded: true },
                        { name: "Car Payments", isIncluded: true },
                        { name: "Car Repairs", isIncluded: true },
                        { name: "Gas", isIncluded: true },
                        { name: "Parking", isIncluded: true },
                        { name: "Public Transportation", isIncluded: true }
                      ]
                    },
                    { name: "Charity", isIncluded: true },
                    { name: "Education", isIncluded: true },
                    { name: "Entertainment", isIncluded: true },
                    { name: "Fitness", isIncluded: true },
                    { name: "Food", isIncluded: true,
                      subItems: [
                        { name: "Meals Out", isIncluded: true,
                          subItems: [
                            { name: "Beer", isIncluded: true },
                            { name: "Dessert", isIncluded: true },
                            { name: "Meals (Food)", isIncluded: true },
                          ]
                        },
                        { name: "Groceries", isIncluded: true }
                      ]
                    },
                    { name: "Gifts", isIncluded: true,
                      subItems: [
                        { name: "Anniversary", isIncluded: true },
                        { name: "Birthday", isIncluded: true },
                        { name: "Christmas", isIncluded: true },
                        { name: "Gift (Misc)", isIncluded: true },
                        { name: "Wedding", isIncluded: true }
                      ]
                    },
                    { name: "Hair Cuts", isIncluded: true },
                    { name: "Housing",  isIncluded: true,
                      subItems: [
                        { name: "Electricity", isIncluded: true },
                        { name: "Home Gas", isIncluded: true },
                        { name: "Internet", isIncluded: true },
                        { name: "Laundry", isIncluded: true },
                        { name: "Rent", isIncluded: true },
                        { name: "Renters Insurance", isIncluded: true }
                      ]
                    },
                    { name: "Life Insurance", isIncluded: true },
                    { name: "Materistic", isIncluded: true },
                    { name: "Medical", isIncluded: true,
                      subItems: [
                        { name: "Chiropratic", isIncluded: true },
                        { name: "Dentist", isIncluded: true },
                        { name: "General Care", isIncluded: true },
                        { name: "Naturopathic", isIncluded: true }
                      ]
                    },
                    { name: "Miscellaneous", isIncluded: true,
                      subItems: [
                        { name: "Miscellaneous", isIncluded: true },
                        { name: "Reimbursement", isIncluded: true },
                        { name: "Unknown", isIncluded: true },
                        { name: "UPDATE", isIncluded: true }
                      ]
                    },
                    { name: "Phone", isIncluded: true },
                    { name: "Student Loans", isIncluded: true },
                    { name: "Travel", isIncluded: true,
                      subItems: [
                        { name: "Accomodation", isIncluded: true },
                        { name: "Excursions", isIncluded: true },
                        { name: "Meals (Travel)", isIncluded: true },
                        { name: "Souvenirs", isIncluded: true },
                        { name: "Transportation", isIncluded: true }
                      ]
                    },
                    { name: "Work Expense", isIncluded: true },
                    { name: "Taxes", isIncluded: true }
                  ]
            }
          ]
    }
  };
}
