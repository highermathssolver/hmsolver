export const hmQuestions = [


  {
  id: 1,
  question: "Evaluate: \\( \\int e^{\\sqrt{x}} \\, dx \\)",

  steps: [
    {
      question: "What substitution simplifies \\(e^{\\sqrt{x}}\\)?",
      correct: "\\(x = t^2\\)",
      options: [
        "\\(x = t^2\\)",
        "\\(x = \\sqrt{t}\\)",
        "\\(t = x^2\\)",
        "\\(t = e^x\\)"
      ]
    },
    {
      question: "If \\(x = t^2\\), what is \\(dx\\)?",
      correct: "\\(dx = 2t \\, dt\\)",
      options: [
        "\\(dx = t^2 dt\\)",
        "\\(dx = 2t \\, dt\\)",
        "\\(dx = \\frac{1}{2t} dt\\)",
        "\\(dx = dt\\)"
      ]
    },
    {
      question: "After substitution, what does the integral become?",
      correct: "\\(\\int e^t (2t \\, dt)\\)",
      options: [
        "\\(\\int e^{t^2} dt\\)",
        "\\(\\int e^t (2t \\, dt)\\)",
        "\\(\\int t e^t dt\\)",
        "\\(\\int e^t dt\\)"
      ]
    },
    {
      question: "Factor out the constant from the integral",
      correct: "\\(2 \\int t e^t dt\\)",
      options: [
        "\\(\\int t e^t dt\\)",
        "\\(2 \\int t e^t dt\\)",
        "\\(2 \\int e^t dt\\)",
        "\\(t \\int e^t dt\\)"
      ]
    },
    {
      question: "Which method is suitable to solve \\( \\int t e^t dt \\) now?",
      correct: "Integration by parts",
      options: [
        "Substitution method",
        "Integration by parts",
        "Partial fractions",
        "Trigonometric substitution"
      ]
    },
{
  question: "Which of the following represents integration by parts?",
  correct: "\\(\\int a b\\,dx = a\\int b\\,dx - \\int \\left(\\frac{da}{dx}\\int b\\,dx\\right)dx\\)",
  options: [
    "\\(\\int a b\\,dx = a\\int b\\,dx - \\int \\left(\\frac{da}{dx}\\int b\\,dx\\right)dx\\)",
    "\\(\\int a b\\,dx = ab + \\int a\\,db\\)",
    "\\(\\int a b\\,dx = \\frac{a}{b}\\)",
    "\\(\\int a b\\,dx = \\ln(ab)\\)"
  ]
},

{
  question: "Substitute into the integration by parts formula",
  correct: "\\(2\\left\\{t\\int e^t dt - \\int\\left[\\frac{dt}{dt}\\int e^t dt\\right]dt\\right\\}\\)",
  options: [
    "\\(2\\left\\{t\\int e^t dt - \\int\\left[\\frac{dt}{dt}\\int e^t dt\\right]dt\\right\\}\\)",
    "\\(2\\left\\{t\\int e^t dt + \\int\\left[\\frac{dt}{dt}\\int e^t dt\\right]dt\\right\\}\\)",
    "\\(2\\left\\{\\int e^t dt - t\\int e^t dt\\right\\}\\)",
    "\\(2\\left\\{t\\int e^t dt - e^t\\right\\}\\)"
  ]
},

    {
      question: " What is the simplified form of above integration?",
      correct: "\\(t e^t - \\int e^t dt\\)",
      options: [
        "\\(t e^t - \\int e^t dt\\)",
        "\\(t^2 e^t\\)",
        "\\(e^t - t\\)",
        "\\(t e^t\\)"
      ]
    },
    {
      question: "Evaluate \\( \\int e^t dt \\)",
      correct: "\\(e^t\\)",
      options: [
        "\\(t e^t\\)",
        "\\(e^t\\)",
        "\\(\\ln t\\)",
        "\\(e^{t^2}\\)"
      ]
    },
{
  question: "What is the complete expression after evaluating the integral?",
  correct: "\\(2[te^t - e^t] + C\\)",
  options: [
    "\\(2[te^t - e^t] + C\\)",
    "\\(2[te^t + e^t] + C\\)",
    "\\(te^t - e^t + C\\)",
    "\\(2e^t + C\\)"
  ]
},

    {
      question: "Substitute back to get the final answer in terms of \\(x\\)",
      correct: "\\(2[\\sqrt{x}e^{\\sqrt{x}} - e^{\\sqrt{x}}] + C\\)",
      options: [
        "\\(2[\\sqrt{x}e^{\\sqrt{x}} - e^{\\sqrt{x}}] + C\\)",
        "\\(2e^{\\sqrt{x}} + C\\)",
        "\\(\\sqrt{x}e^{\\sqrt{x}} + C\\)",
        "\\(2\\sqrt{x}e^x + C\\)"
      ]
    }
  ]
},
  {
    id: 2,
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
    id: 3,
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
        question: "what is the limit of \\(\\frac{\\sin u}{u}\\) as \\(u \\to 0\\)?",
        correct: "\\(1\\)",
        options: [
          "\\(0\\)",
          "\\(1\\)",
          "\\(\\pi\\)",
          "\\(\\infty\\)"
        ]
      },
      {
        question: "Multiply and divide by the same value to use the standard limit",
        correct: "\\(\\frac{\\pi}{180}\\)",
        options: [
          "\\(\\frac{\\pi}{180}\\)",
          "\\(\\frac{180}{\\pi}\\)",
          "\\(\\pi\\)",
          "\\(\\frac{1}{180}\\)"
        ]
      },

      {
        question: "Using above statement find Final value of the limit",
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


];