export const hmQuestions = [
  {
    id: 1,
    question: "If f(x) = x³ - 3x² + 4x - 2, find f'(2)",

    steps: [
      {
        question: "What is the first step to differentiate?",
        correct: "Apply power rule",
        options: [
          "Substitute x=2",
          "Apply power rule",
          "Factor expression",
          "Integrate function"
        ]
      },
      {
        question: "What is f'(x)?",
        correct: "3x² - 6x + 4",
        options: [
          "x²",
          "3x² - 6x + 4",
          "6x",
          "x³"
        ]
      },
      {
        question: "Find f'(2)",
        correct: "4",
        options: ["2", "4", "6", "8"]
      }
    ]
  },

  {
    id: 2,
    question: "Evaluate: \\( \\lim_{x \\to 0} \\frac{\\ln(5 + x) - \\ln(5 - x)}{x} \\)",

    steps: [
      {
        question: "Rewrite \\(\\ln(5 + x)\\) and \\(\\ln(5 - x)\\)",
        correct: "\\(\\ln[5(1 + \\frac{x}{5})] \\) and \\(\\ln[5(1 - \\frac{x}{5})]\\)",
        options: [
          "\\(\\ln(5x)\\) and \\(\\ln(5/x)\\)",
          "\\(\\ln[5(1 + \\frac{x}{5})] \\) and \\(\\ln[5(1 - \\frac{x}{5})]\\)",
          "\\(\\ln(1 + 5x)\\) and \\(\\ln(1 - 5x)\\)",
          "\\(5\\ln(1 + x)\\) and \\(5\\ln(1 - x)\\)"
        ]
      },
      {
        question: "Apply log property \\(\\ln(ab) = \\ln a + \\ln b\\)",
        correct: "\\(\\ln5 + \\ln(1 + \\frac{x}{5}) - \\ln5 - \\ln(1 - \\frac{x}{5})\\)",
        options: [
          "\\(\\ln5 + \\ln(1 + \\frac{x}{5}) - \\ln5 - \\ln(1 - \\frac{x}{5})\\)",
          "\\(\\ln5 + \\ln(1 + x) - \\ln5 - \\ln(1 - x)\\)",
          "\\(\\ln(5 + x) - \\ln(5 - x)\\)",
          "\\(\\ln5 - \\ln5 + \\ln(1 + x) - \\ln(1 - x)\\)"
        ]
      },
      {
        question: "Simplify the expression",
        correct: "\\(\\frac{\\ln(1 + \\frac{x}{5}) - \\ln(1 - \\frac{x}{5})}{x}\\)",
        options: [
          "\\(\\frac{\\ln(1 + \\frac{x}{5}) + \\ln(1 - \\frac{x}{5})}{x}\\)",
          "\\(\\frac{\\ln(1 + \\frac{x}{5}) - \\ln(1 - \\frac{x}{5})}{x}\\)",
          "\\(\\frac{\\ln(5)}{x}\\)",
          "\\(\\frac{\\ln(1 + x) - \\ln(1 - x)}{5x}\\)"
        ]
      },
      {
        question: "Split the limit into two parts",
        correct: "\\(\\frac{\\ln(1 + \\frac{x}{5})}{x} - \\frac{\\ln(1 - \\frac{x}{5})}{x}\\)",
        options: [
          "\\(\\frac{\\ln(1 + \\frac{x}{5})}{x} - \\frac{\\ln(1 - \\frac{x}{5})}{x}\\)",
          "\\(\\frac{\\ln(1 + \\frac{x}{5})}{x} + \\frac{\\ln(1 - \\frac{x}{5})}{x}\\)",
          "\\(\\frac{\\ln(1 + x)}{x} - \\frac{\\ln(1 - x)}{x}\\)",
          "\\(\\ln(1 + \\frac{x}{5}) - \\ln(1 - \\frac{x}{5})\\)"
        ]
      },
      {
        question: "Convert into standard form using \\(a = \\frac{x}{5}\\)",
        correct: "\\(\\frac{\\ln(1 + \\frac{x}{5})}{\\frac{x}{5}} \\cdot \\frac{1}{5} - \\frac{\\ln(1 - \\frac{x}{5})}{-\\frac{x}{5}} \\cdot \\frac{1}{5}\\)",
        options: [
          "\\(\\frac{\\ln(1 + \\frac{x}{5})}{\\frac{x}{5}} \\cdot \\frac{1}{5} - \\frac{\\ln(1 - \\frac{x}{5})}{-\\frac{x}{5}} \\cdot \\frac{1}{5}\\)",
          "\\(\\frac{\\ln(1 + x)}{x} - \\frac{\\ln(1 - x)}{x}\\)",
          "\\(\\frac{\\ln(1 + \\frac{x}{5})}{x} - \\frac{\\ln(1 - \\frac{x}{5})}{x}\\)",
          "\\(5\\left[\\frac{\\ln(1 + \\frac{x}{5})}{x} - \\frac{\\ln(1 - \\frac{x}{5})}{x}\\right]\\)"
        ]
      },
      {
        question: "Use standard limit \\(\\lim_{a \\to 0} \\frac{\\ln(1+a)}{a} = 1\\)",
        correct: "\\(\\frac{1}{5} - (-\\frac{1}{5})\\)",
        options: [
          "\\(1 - 1\\)",
          "\\(\\frac{1}{5} - (-\\frac{1}{5})\\)",
          "\\(\\frac{1}{5} + \\frac{1}{5}\\)",
          "\\(\\frac{1}{5} - \\frac{1}{5}\\)"
        ]
      },
      {
        question: "Final answer",
        correct: "\\(\\frac{2}{5}\\)",
        options: [
          "\\(\\frac{1}{5}\\)",
          "\\(\\frac{2}{5}\\)",
          "\\(\\frac{1}{10}\\)",
          "\\(\\frac{5}{2}\\)"
        ]
      }
    ]
  },

  {
    id: 3,
    question: "If f(x) = x² + 2x, find f'(1)",

    steps: [
      {
        question: "Differentiate f(x)",
        correct: "2x + 2",
        options: ["x", "2x + 2", "x²", "2"]
      },
      {
        question: "Find f'(1)",
        correct: "4",
        options: ["2", "3", "4", "5"]
      }
    ]
  },

  {
    id: 4,
    question: "Evaluate: \\( \\lim_{x \\to 0} \\frac{\\sin(x^\\circ)}{x} \\)",

    steps: [
      {
        question: "Convert \\(1^\\circ\\) into radians",
        correct: "\\(\\frac{\\pi}{180}\\)",
        options: [
          "\\(\\frac{180}{\\pi}\\)",
          "\\(\\frac{\\pi}{180}\\)",
          "\\(\\frac{\\pi}{360}\\)",
          "\\(\\frac{1}{180}\\)"
        ]
      },
      {
        question: "Express \\(x^\\circ\\) in radians",
        correct: "\\(\\frac{x\\pi}{180}\\)",
        options: [
          "\\(\\frac{x}{180}\\)",
          "\\(\\frac{x\\pi}{180}\\)",
          "\\(\\frac{180x}{\\pi}\\)",
          "\\(x\\pi\\)"
        ]
      },
      {
        question: "Substitute into the limit",
        correct: "\\(\\lim_{x \\to 0} \\frac{\\sin(\\frac{x\\pi}{180})}{x}\\)",
        options: [
          "\\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\)",
          "\\(\\lim_{x \\to 0} \\frac{\\sin(\\frac{x\\pi}{180})}{x}\\)",
          "\\(\\lim_{x \\to 0} \\frac{\\sin(x\\pi)}{180x}\\)",
          "\\(\\lim_{x \\to 0} \\frac{\\sin(\\frac{x}{180})}{x}\\)"
        ]
      },
      {
        question: "Multiply and divide by",
        correct: "\\(\\frac{\\pi}{180}\\)",
        options: [
          "\\(\\frac{\\pi}{180}\\)",
          "\\(\\frac{180}{\\pi}\\)",
          "\\(\\pi\\)",
          "\\(\\frac{1}{180}\\)"
        ]
      },
      {
        question: "Use the standard limit",
        correct: "\\(1\\)",
        options: [
          "\\(0\\)",
          "\\(1\\)",
          "\\(\\pi\\)",
          "\\(\\infty\\)"
        ]
      },
      {
        question: "Final value of the limit",
        correct: "\\(\\frac{\\pi}{180}\\)",
        options: [
          "\\(\\frac{\\pi}{360}\\)",
          "\\(\\frac{\\pi}{180}\\)",
          "\\(\\frac{180}{\\pi}\\)",
          "\\(1\\)"
        ]
      }
    ]
  },
{ 
  id: 5,
  question: "J Singh repays a loan of ₹118000 by paying monthly installments starting with ₹1000 and increasing each month by ₹100. Find the 30th installment and the remaining loan after 30 installments.",

  steps: [
    {
      question: "Identify the correct information given in the question",
      correct: "Total loan = ₹118000, first installment = ₹1000, increase each month = ₹100",
      options: [
        "Total loan = ₹118000, first installment = ₹1000, increase each month = ₹100",
        "Total loan = ₹100000, first installment = ₹1000, increase each month = ₹100",
        "Total loan = ₹118000, first installment = ₹100, increase each month = ₹1000",
        "Total loan = ₹118000, first installment = ₹1100, increase each month = ₹100"
      ]
    },
    {
      question: "What is the first installment?",
      correct: "₹1000",
      options: [
        "₹900",
        "₹1100",
        "₹1000",
        "₹1200"
      ]
    },
    {
      question: "If installment increases by ₹100 every month, what is the second installment?",
      correct: "₹1100",
      options: [
        "₹1000",
        "₹1100",
        "₹1200",
        "₹2100"
      ]
    },
    {
      question: "What is the third installment?",
      correct: "₹1200",
      options: [
        "₹1200",
        "₹1100",
        "₹1300",
        "₹1400"
      ]
    },
    {
      question: "The installments 1000, 1100, 1200,... form which type of sequence?",
      correct: "Arithmetic Progression with a = 1000 and d = 100",
      options: [
        "Geometric Progression",
        "Arithmetic Progression with a = 1100 and d = 100",
        "Arithmetic Progression with a = 1000 and d = 100",
        "Arithmetic Progression with a = 1000 and d = 1100"
      ]
    },
    {
      question: "Identify the first term (a) and common difference (d)",
      correct: "a = 1000, d = 100",
      options: [
        "a = 1000, d = 100",
        "a = 1100, d = 100",
        "a = 1000, d = 1100",
        "a = 100, d = 1000"
      ]
    },
    {
      question: "Which formula gives the nth term of an AP?",
      correct: "T_n = a + (n - 1)d",
      options: [
        "T_n = a + (n - 1)d",
        "T_n = ad^(n - 1)",
        "T_n = a + nd",
        "S_n = n/2(a + l)"
      ]
    },
    {
      question: "Write the expression for the 30th installment",
      correct: "1000 + (30 - 1) × 100",
      options: [
        "1000 + (30 - 1) × 100",
        "1000 + 30 × 100",
        "1000 + 29 × 10",
        "1000 + (30 - 1) × 1000"
      ]
    },
    {
      question: "Calculate the value of the 30th installment",
      correct: "₹3900",
      options: [
        "₹3900",
        "₹4000",
        "₹3000",
        "₹2900"
      ]
    },
    {
      question: "Which formula is used to find the sum of first n terms of an AP when first and last term are known?",
      correct: "S_n = n/2 (a + l)",
      options: [
        "S_n = a + (n - 1)d",
        "S_n = n/2 (a + l)",
        "S_n = ad^(n - 1)",
        "S_n = a + nd"
      ]
    },
    {
      question: "Substitute values to find total paid in 30 installments",
      correct: "S_30 = (30/2)(1000 + 3900)",
      options: [
        "S_30 = (30/2)(1000 + 3900)",
        "S_30 = 30(1000 + 3900)",
        "S_30 = (30/2)(1000 × 3900)",
        "S_30 = (30/2)(1000 - 3900)"
      ]
    },
    {
      question: "Calculate the total amount paid in 30 installments",
      correct: "₹73500",
      options: [
        "₹73500",
        "₹74500",
        "₹72500",
        "₹7350"
      ]
    },
    {
      question: "Find the remaining loan after 30 installments",
      correct: "118000 - 73500",
      options: [
        "118000 - 73500",
        "118000 + 73500",
        "73500 - 118000",
        "118000 - 3900"
      ]
    },
    {
      question: "Calculate the remaining loan",
      correct: "₹44500",
      options: [
        "₹44500",
        "₹43500",
        "₹45500",
        "₹34500"
      ]
    }
  ]
}

];