export default function(){
  return {
    1: { name: 'Auto Insurance', isIncluded: true },
    2: { name: 'Car Payments', isIncluded: true },
    3: { name: 'Car Repairs', isIncluded: true },
    4: { name: 'Charity', isIncluded: true },
    5: { name: 'Education', isIncluded: true },
    6: { name: 'Electricity', isIncluded: true },
    7: { name: 'Entertainment', isIncluded: true },
    8: { name: 'Food',
          subItems: [
            { name: 'Beer', isIncluded: true },
            { name: 'Dessert', isIncluded: false },
            { name: 'Meals (Food)', isIncluded: true }
          ]
    },
    9: { name: 'Gas', isIncluded: true },
    10: { name: 'Gifts',
          subItems: [
            { name: 'Anniversary', isIncluded: false },
            { name: 'Birthday', isIncluded: true },
            { name: 'Christmas', isIncluded: false },
            { name: 'Wedding', isIncluded: true }
          ]
    },
    11: { name: 'Groceries', isIncluded: true },
    12: { name: 'Home Gas', isIncluded: true },
    13: { name: 'Income', isIncluded: true },
    14: { name: 'Interest', isIncluded: true },
    15: { name: 'Life Insurance', isIncluded: true },
    16: { name: 'Materistic', isIncluded: true },
    17: { name: 'Medical',
          subItems: [
            { name: 'Chiropratic', isIncluded: true },
            { name: 'Dentist', isIncluded: true },
            { name: 'General', isIncluded: true },
            { name: 'Naturopathic', isIncluded: true }
          ]
    },
    18: { name: 'Miscellaneous',
          subItems: [
            { name: 'Miscellaneous', isIncluded: true },
            { name: 'Unknown', isIncluded: true },
            { name: 'UPDATE', isIncluded: true }
          ]
    },
    19: { name: 'Phone', isIncluded: true },
    20: { name: 'Rent', isIncluded: true },
    21: { name: 'Renters Insurance', isIncluded: true },
    22: { name: 'Student Loans', isIncluded: true },
    23: { name: 'Taxes', isIncluded: true },
    24: { name: 'Travel',
          subItems: [
            { name: 'Accomodation', isIncluded: true },
            { name: 'Excursions', isIncluded: true },
            { name: 'Meals (Travel)', isIncluded: true },
            { name: 'Transportation', isIncluded: true }
          ]
    }
  };
}
