module.exports = {
  spark: {
    plan: {
      name: "Elite",
      description:
        "If you have special needs, let us craft a customized plan for your business.",
      priceLabel: "Speak with a Spark Representative",
      featureGroups: [
        {
          name: "Basic features",
          features: [
            {
              id: "01",
              name: "Cash basis accounting",
              tag: {
                id: "1",
                name: "Cash-flow",
              },
            },
            {
              id: "02",
              name: "Daily revenue, and expense categorization",
              tag: {
                id: "1",
                name: "Cash-flow",
              },
            },
            {
              id: "03",
              name: "Real time bank reconciliation, and credit card reconciliation",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
            {
              id: "04",
              name: "Multiple users",
              tag: {
                id: "2",
                name: "Users",
              },
            },
            {
              id: "05",
              name: "Receipt storage, and document storage",
              tag: {
                id: "3",
                name: "Document management",
              },
            },
            {
              id: "06",
              name: "Financial reports on demand",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "07",
              name: "Communication by video, text, email, phone",
              tag: {
                id: "5",
                name: "Communication",
              },
            },
          ],
        },
        {
          name: "Essential features",
          features: [
            {
              id: "11",
              name: "Accounting services from a dedicated team",
              tag: {
                id: "6",
                name: "Services",
              },
            },
            {
              id: "12",
              name: "Project accounting",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
            {
              id: "13",
              name: "Customer invoicing, and invoicing scheduling",
            },
            {
              id: "14",
              name: "Schedule payments",
              tag: {
                id: "9",
                name: "Scheduling",
              },
            },
            {
              id: "15",
              name: "Customize access by role",
              tag: {
                id: "2",
                name: "Users",
              },
            },
            {
              id: "16",
              name: "Customize chart of accounts",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
          ],
        },
        {
          name: "Professional features",
          features: [
            {
              id: "21",
              name: "Accrual basis accounting",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
            {
              id: "22",
              name: "Cash flow statement",
              tag: {
                id: "1",
                name: "Cash-flow",
              },
            },
            {
              id: "23",
              name: "Budgeting and budget-to-actual reconciliation",
              tag: {
                id: "10",
                name: "Others",
              },
            },
          ],
        },
        {
          name: "Premium features",
          features: [
            {
              id: "31",
              name: "Financial analysis reporting",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "32",
              name: "Quarterly consultation",
              tag: {
                id: "6",
                name: "Services",
              },
            },
          ],
        },
        {
          name: "Elite features",
          features: [
            {
              id: "41",
              name: "Inventory tracking",
              tag: {
                id: "8",
                name: "Tracking",
              },
            },
            {
              id: "42",
              name: "Custom reporting",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "43",
              name: "Consolidated reporting",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "44",
              name: "Quarterly reconciliation with investment manager",
            },
            {
              id: "45",
              name: "Investment tracking for partnerships",
              tag: {
                id: "8",
                name: "Tracking",
              },
            },
            {
              id: "46",
              name: "Trust tracking",
              tag: {
                id: "8",
                name: "Tracking",
              },
            },
            {
              id: "47",
              name: "Private foundation required distribution",
              tag: {
                id: "10",
                name: "Others",
              },
            },
            {
              id: "48",
              name: "Charity support schedule",
              tag: {
                id: "9",
                name: "Scheduling",
              },
            },
            {
              id: "49",
              name: "Annual business planning review",
              tag: {
                id: "6",
                name: "Services",
              },
            },
          ],
        },
      ],
      billing: {
        pricing: "Flat pricing",
        currency: "USD",
        cycles: [
          {
            period: "Yearly",
            price: 100,
          },
          {
            period: "Monthly",
            price: 10,
          },
          {
            period: "Weekly",
            price: 4,
          },
        ],
      },
      discount: {
        name: "Discount15",
        type: "percentage",
        amount: 15,
        duration: 0,
        redeemable: "2021-11-02T12:39:58.017Z",
        quantity: 500,
        voucher: false,
        status: "active",
      },
    },
    features: [
      {
        id: "01",
        name: "Cash basis accounting",
        tag: {
          id: "1",
          name: "Cash-flow",
        },
      },
      {
        id: "02",
        name: "Daily revenue, and expense categorization",
        tag: {
          id: "1",
          name: "Cash-flow",
        },
      },
      {
        id: "03",
        name: "Real time bank reconciliation, and credit card reconciliation",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "04",
        name: "Multiple users",
        tag: {
          id: "2",
          name: "Users",
        },
      },
      {
        id: "05",
        name: "Receipt storage, and document storage",
        tag: {
          id: "3",
          name: "Document management",
        },
      },
      {
        id: "06",
        name: "Financial reports on demand",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "07",
        name: "Communication by video, text, email, phone",
        tag: {
          id: "5",
          name: "Communication",
        },
      },
      {
        id: "11",
        name: "Accounting services from a dedicated team",
        tag: {
          id: "6",
          name: "Services",
        },
      },
      {
        id: "12",
        name: "Project accounting",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "13",
        name: "Customer invoicing, and invoicing scheduling",
      },
      {
        id: "14",
        name: "Schedule payments",
        tag: {
          id: "9",
          name: "Scheduling",
        },
      },
      {
        id: "15",
        name: "Customize access by role",
        tag: {
          id: "2",
          name: "Users",
        },
      },
      {
        id: "16",
        name: "Customize chart of accounts",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "21",
        name: "Accrual basis accounting",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "22",
        name: "Cash flow statement",
        tag: {
          id: "1",
          name: "Cash-flow",
        },
      },
      {
        id: "23",
        name: "Budgeting and budget-to-actual reconciliation",
        tag: {
          id: "10",
          name: "Others",
        },
      },
      {
        id: "31",
        name: "Financial analysis reporting",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "32",
        name: "Quarterly consultation",
        tag: {
          id: "6",
          name: "Services",
        },
      },
      {
        id: "41",
        name: "Inventory tracking",
        tag: {
          id: "8",
          name: "Tracking",
        },
      },
      {
        id: "42",
        name: "Custom reporting",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "43",
        name: "Consolidated reporting",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "44",
        name: "Quarterly reconciliation with investment manager",
      },
      {
        id: "45",
        name: "Investment tracking for partnerships",
        tag: {
          id: "8",
          name: "Tracking",
        },
      },
      {
        id: "46",
        name: "Trust tracking",
        tag: {
          id: "8",
          name: "Tracking",
        },
      },
      {
        id: "47",
        name: "Private foundation required distribution",
        tag: {
          id: "10",
          name: "Others",
        },
      },
      {
        id: "48",
        name: "Charity support schedule",
        tag: {
          id: "9",
          name: "Scheduling",
        },
      },
      {
        id: "49",
        name: "Annual business planning review",
        tag: {
          id: "6",
          name: "Services",
        },
      },
    ],
    tags: [
      {
        id: "1",
        name: "Cash-flow",
      },
      {
        id: "7",
        name: "Accounting",
      },
      {
        id: "2",
        name: "Users",
      },
      {
        id: "3",
        name: "Document management",
      },
      {
        id: "4",
        name: "Reports",
      },
      {
        id: "5",
        name: "Communication",
      },
      {
        id: "6",
        name: "Services",
      },
      {
        id: "9",
        name: "Scheduling",
      },
      {
        id: "10",
        name: "Others",
      },
      {
        id: "8",
        name: "Tracking",
      },
    ],
  },
  elite: {
    plan: {
      name: "Elite",
      description:
        "If you have special needs, let us craft a customized plan for your business.",
      priceLabel: "Speak with a Spark Representative",
      featureGroups: [
        {
          name: "Basic features",
          features: [
            {
              id: "01",
              name: "Cash basis accounting",
              tag: {
                id: "1",
                name: "Cash-flow",
              },
            },
            {
              id: "02",
              name: "Daily revenue, and expense categorization",
              tag: {
                id: "1",
                name: "Cash-flow",
              },
            },
            {
              id: "03",
              name: "Real time bank reconciliation, and credit card reconciliation",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
            {
              id: "04",
              name: "Multiple users",
              tag: {
                id: "2",
                name: "Users",
              },
            },
            {
              id: "05",
              name: "Receipt storage, and document storage",
              tag: {
                id: "3",
                name: "Document management",
              },
            },
            {
              id: "06",
              name: "Financial reports on demand",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "07",
              name: "Communication by video, text, email, phone",
              tag: {
                id: "5",
                name: "Communication",
              },
            },
          ],
        },
        {
          name: "Essential features",
          features: [
            {
              id: "11",
              name: "Accounting services from a dedicated team",
              tag: {
                id: "6",
                name: "Services",
              },
            },
            {
              id: "12",
              name: "Project accounting",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
            {
              id: "13",
              name: "Customer invoicing, and invoicing scheduling",
            },
            {
              id: "14",
              name: "Schedule payments",
              tag: {
                id: "9",
                name: "Scheduling",
              },
            },
            {
              id: "15",
              name: "Customize access by role",
              tag: {
                id: "2",
                name: "Users",
              },
            },
            {
              id: "16",
              name: "Customize chart of accounts",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
          ],
        },
        {
          name: "Professional features",
          features: [
            {
              id: "21",
              name: "Accrual basis accounting",
              tag: {
                id: "7",
                name: "Accounting",
              },
            },
            {
              id: "22",
              name: "Cash flow statement",
              tag: {
                id: "1",
                name: "Cash-flow",
              },
            },
            {
              id: "23",
              name: "Budgeting and budget-to-actual reconciliation",
              tag: {
                id: "10",
                name: "Others",
              },
            },
          ],
        },
        {
          name: "Premium features",
          features: [
            {
              id: "31",
              name: "Financial analysis reporting",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "32",
              name: "Quarterly consultation",
              tag: {
                id: "6",
                name: "Services",
              },
            },
          ],
        },
        {
          name: "Elite features",
          features: [
            {
              id: "41",
              name: "Inventory tracking",
              tag: {
                id: "8",
                name: "Tracking",
              },
            },
            {
              id: "42",
              name: "Custom reporting",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "43",
              name: "Consolidated reporting",
              tag: {
                id: "4",
                name: "Reports",
              },
            },
            {
              id: "44",
              name: "Quarterly reconciliation with investment manager",
            },
            {
              id: "45",
              name: "Investment tracking for partnerships",
              tag: {
                id: "8",
                name: "Tracking",
              },
            },
            {
              id: "46",
              name: "Trust tracking",
              tag: {
                id: "8",
                name: "Tracking",
              },
            },
            {
              id: "47",
              name: "Private foundation required distribution",
              tag: {
                id: "10",
                name: "Others",
              },
            },
            {
              id: "48",
              name: "Charity support schedule",
              tag: {
                id: "9",
                name: "Scheduling",
              },
            },
            {
              id: "49",
              name: "Annual business planning review",
              tag: {
                id: "6",
                name: "Services",
              },
            },
          ],
        },
      ],
      billing: {
        pricing: "Flat pricing",
        currency: "USD",
        cycles: [
          {
            period: "Yearly",
            price: 100,
          },
          {
            period: "Monthly",
            price: 10,
          },
          {
            period: "Weekly",
            price: 4,
          },
        ],
      },
      discount: {
        name: "Discount15",
        type: "percentage",
        amount: 15,
        duration: 0,
        redeemable: "2021-11-02T12:39:58.017Z",
        quantity: 500,
        voucher: false,
        status: "active",
      },
    },
    features: [
      {
        id: "01",
        name: "Cash basis accounting",
        tag: {
          id: "1",
          name: "Cash-flow",
        },
      },
      {
        id: "02",
        name: "Daily revenue, and expense categorization",
        tag: {
          id: "1",
          name: "Cash-flow",
        },
      },
      {
        id: "03",
        name: "Real time bank reconciliation, and credit card reconciliation",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "04",
        name: "Multiple users",
        tag: {
          id: "2",
          name: "Users",
        },
      },
      {
        id: "05",
        name: "Receipt storage, and document storage",
        tag: {
          id: "3",
          name: "Document management",
        },
      },
      {
        id: "06",
        name: "Financial reports on demand",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "07",
        name: "Communication by video, text, email, phone",
        tag: {
          id: "5",
          name: "Communication",
        },
      },
      {
        id: "11",
        name: "Accounting services from a dedicated team",
        tag: {
          id: "6",
          name: "Services",
        },
      },
      {
        id: "12",
        name: "Project accounting",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "13",
        name: "Customer invoicing, and invoicing scheduling",
      },
      {
        id: "14",
        name: "Schedule payments",
        tag: {
          id: "9",
          name: "Scheduling",
        },
      },
      {
        id: "15",
        name: "Customize access by role",
        tag: {
          id: "2",
          name: "Users",
        },
      },
      {
        id: "16",
        name: "Customize chart of accounts",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "21",
        name: "Accrual basis accounting",
        tag: {
          id: "7",
          name: "Accounting",
        },
      },
      {
        id: "22",
        name: "Cash flow statement",
        tag: {
          id: "1",
          name: "Cash-flow",
        },
      },
      {
        id: "23",
        name: "Budgeting and budget-to-actual reconciliation",
        tag: {
          id: "10",
          name: "Others",
        },
      },
      {
        id: "31",
        name: "Financial analysis reporting",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "32",
        name: "Quarterly consultation",
        tag: {
          id: "6",
          name: "Services",
        },
      },
      {
        id: "41",
        name: "Inventory tracking",
        tag: {
          id: "8",
          name: "Tracking",
        },
      },
      {
        id: "42",
        name: "Custom reporting",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "43",
        name: "Consolidated reporting",
        tag: {
          id: "4",
          name: "Reports",
        },
      },
      {
        id: "44",
        name: "Quarterly reconciliation with investment manager",
      },
      {
        id: "45",
        name: "Investment tracking for partnerships",
        tag: {
          id: "8",
          name: "Tracking",
        },
      },
      {
        id: "46",
        name: "Trust tracking",
        tag: {
          id: "8",
          name: "Tracking",
        },
      },
      {
        id: "47",
        name: "Private foundation required distribution",
        tag: {
          id: "10",
          name: "Others",
        },
      },
      {
        id: "48",
        name: "Charity support schedule",
        tag: {
          id: "9",
          name: "Scheduling",
        },
      },
      {
        id: "49",
        name: "Annual business planning review",
        tag: {
          id: "6",
          name: "Services",
        },
      },
    ],
    tags: [
      {
        id: "1",
        name: "Cash-flow",
      },
      {
        id: "7",
        name: "Accounting",
      },
      {
        id: "2",
        name: "Users",
      },
      {
        id: "3",
        name: "Document management",
      },
      {
        id: "4",
        name: "Reports",
      },
      {
        id: "5",
        name: "Communication",
      },
      {
        id: "6",
        name: "Services",
      },
      {
        id: "9",
        name: "Scheduling",
      },
      {
        id: "10",
        name: "Others",
      },
      {
        id: "8",
        name: "Tracking",
      },
    ],
  },
  empty: {
    plan: {
      name: "new plan",
      description: "",
      priceLabel: "no price specified",
      featureGroups: [],
      billing: {
        pricing: "Flat pricing",
        currency: "USD",
        cycles: [
          {
            period: "",
            price: "",
          },
        ],
      },
      discount: {
        name: "Discount15",
        type: "percentage",
        amount: 15,
        duration: 0,
        redeemable: "2021-11-02T12:56:10.055Z",
        quantity: 500,
        voucher: false,
        status: "active",
      },
    },
    features: [],
    tags: [],
  },
};

