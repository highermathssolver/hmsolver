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
{
  id: 4,
  question: "Given the differential equation \\(\\frac{dx}{dy} + \\frac{1}{y^2}x = \\frac{1}{y^3}\\) with the initial condition \\(x=1\\) when \\(y=1\\), find the value of \\(x\\) when \\(y=\\frac{1}{2}\\).",

  steps: [
    {
      question: "Identify the integrating factor (I.F.) of the differential equation \\(\\frac{dx}{dy}+\\frac{1}{y^2}x=\\frac{1}{y^3}\\).",
      correct: "\\(e^{-\\frac{1}{y}}\\)",
      options: [
        "\\(e^{-\\frac{1}{y}}\\)",
        "\\(e^{\\frac{1}{y}}\\)",
        "\\(y\\)",
        "\\(e^{-\\frac{1}{2y^2}}\\)"
      ]
    },
    {
      question: "Multiply the differential equation by the integrating factor \\(e^{-1/y}\\). What equation is obtained?",
      correct: "\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y^2}xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
      options: [
        "\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y^2}xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
        "\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y}xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
        "\\(e^{-1/y}\\frac{dx}{dy}+xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
        "\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y^2}xe^{-1/y}=\\frac{1}{y^3}\\)"
      ]
    },
    {
      question: "Recognize the left side as a derivative. Which derivative is obtained?",
      correct: "\\(\\frac{d}{dy}(x e^{-1/y})\\)",
      options: [
        "\\(\\frac{d}{dy}(x e^{-1/y})\\)",
        "\\(\\frac{d}{dy}(x e^{1/y})\\)",
        "\\(\\frac{d}{dy}(x/y)\\)",
        "\\(\\frac{d}{dy}(xe^{-y})\\)"
      ]
    },
    {
      question: "Integrate both sides. What equation is obtained?",
      correct: "\\(x e^{-1/y}=\\int e^{-1/y}\\frac{1}{y^3}dy\\)",
      options: [
        "\\(x e^{-1/y}=\\int e^{-1/y}\\frac{1}{y^3}dy\\)",
        "\\(x e^{-1/y}=\\int e^{-1/y}\\frac{1}{y^2}dy\\)",
        "\\(x e^{-1/y}=\\int \\frac{1}{y^3}dy\\)",
        "\\(x e^{-1/y}=\\int e^{-1/y}dy\\)"
      ]
    },
    {
      question: "Use substitution \\(t=-\\frac{1}{y}\\). What is \\(dt\\)?",
      correct: "\\(dt=\\frac{1}{y^2}dy\\)",
      options: [
        "\\(dt=\\frac{1}{y^2}dy\\)",
        "\\(dt=-\\frac{1}{y^2}dy\\)",
        "\\(dt=\\frac{1}{y}dy\\)",
        "\\(dt=-\\frac{1}{y}dy\\)"
      ]
    },
    {
      question: "After substitution, the integral becomes",
      correct: "\\(-\\int t e^{t}dt\\)",
      options: [
        "\\(-\\int t e^{t}dt\\)",
        "\\(\\int t e^{t}dt\\)",
        "\\(\\int e^{t}dt\\)",
        "\\(-\\int e^{t}dt\\)"
      ]
    },
    {
      question: "Evaluate \\(-\\int t e^{t}dt\\).",
      correct: "\\(-t e^{t}+e^{t}+C\\)",
      options: [
        "\\(-t e^{t}+e^{t}+C\\)",
        "\\(-t e^{t}-e^{t}+C\\)",
        "\\(t e^{t}+e^{t}+C\\)",
        "\\(t e^{t}-e^{t}+C\\)"
      ]
    },
    {
      question: "Apply the condition \\(x=1, y=1\\). What is the value of \\(C\\)?",
      correct: "\\(-\\frac{1}{e}\\)",
      options: [
        "\\(-\\frac{1}{e}\\)",
        "\\(\\frac{1}{e}\\)",
        "\\(-1\\)",
        "\\(0\\)"
      ]
    },
    {
      question: "Substitute \\(y=\\frac{1}{2}\\). What is the value of \\(x\\)?",
      correct: "\\(3-e\\)",
      options: [
        "\\(3-e\\)",
        "\\(3+e\\)",
        "\\(e-3\\)",
        "\\(\\frac{3}{e^2}-\\frac{1}{e}\\)"
      ]
    }
  ]
},

{
  id: 7,
  question: "The product of all solutions of the equation \\(e^{5(\\ln x)^2+3}=x^8\\) with \\(x>0\\) is",

  steps: [
    {
      question: "To simplify the equation \\(e^{5(\\ln x)^2+3}=x^8\\) which operation should be applied first",
      correct: "Take natural logarithm on both sides",
      options: [
        "Differentiate both sides",
        "Take natural logarithm on both sides",
        "Multiply both sides by ln x",
        "Expand the exponent directly"
      ]
    },
    {
      question: "After taking natural logarithm on both sides of \\(e^{5(\\ln x)^2+3}=x^8\\) what equation do we obtain",
      correct: "\\(\\ln(e^{5(\\ln x)^2+3}) = \\ln(x^8)\\)",
      options: [
        "\\(\\ln(e^{5(\\ln x)^2+3}) = \\ln(x^8)\\)",
        "\\(e^{\\ln(5(\\ln x)^2+3)} = 8\\ln x\\)",
        "\\(\\ln(e^{5(\\ln x)^2}) = x^8\\)",
        "\\(\\ln(e^{5(\\ln x)^2}) = 8x\\)"
      ]
    },
    {
      question: "Using the property \\(\\ln(e^a)=a\\) and \\(\\ln(x^n)=n\\ln x\\) simplify the equation",
      correct: "\\(5(\\ln x)^2 + 3 = 8\\ln x\\)",
      options: [
        "\\(5(\\ln x)^2 + 3 = 8\\ln x\\)",
        "\\(5(\\ln x)^2 + 3 = x^8\\)",
        "\\(5(\\ln x)^2 + 3 = \\ln(8x)\\)",
        "\\(5(\\ln x)^2 = 8x + 3\\)"
      ]
    },
    {
      question: "To convert the equation into quadratic form which substitution is useful",
      correct: "Let ln x = t",
      options: [
        "Let x = t",
        "Let ln x = t",
        "Let x squared = t",
        "Let e power x = t"
      ]
    },
    {
      question: "After substituting t = ln x what equation is obtained",
      correct: "\\(5t^2 - 8t + 3 = 0\\)",
      options: [
        "\\(5t^2 - 8t + 3 = 0\\)",
        "\\(5t^2 + 8t + 3 = 0\\)",
        "\\(5t^2 - 8t - 3 = 0\\)",
        "\\(t^2 - 8t + 5 = 0\\)"
      ]
    },
    {
      question: "For the quadratic equation \\(5t^2 - 8t + 3 = 0\\) what is the value of \\(t_1 + t_2\\) where \\(t_1\\) and \\(t_2\\) are the roots",
      correct: "\\(\\frac{8}{5}\\)",
      options: [
        "\\(-\\frac{8}{5}\\)",
        "\\(\\frac{8}{5}\\)",
        "\\(\\frac{3}{5}\\)",
        "\\(\\frac{5}{8}\\)"
      ]
    },
    {
      question: "If t = ln x then (t1 + t2) = (ln x1 + ln x2) which becomes",
      correct: "\\(\\ln(x_1 x_2) = \\frac{8}{5}\\)",
      options: [
        "\\(\\ln(x_1 x_2) = \\frac{8}{5}\\)",
        "\\(\\ln(x_1 + x_2) = \\frac{8}{5}\\)",
        "\\(x_1 x_2 = \\frac{8}{5}\\)",
        "\\(\\ln(x_1 x_2) = \\frac{5}{8}\\)"
      ]
    },
    {
      question: "If \\(\\ln(x_1 x_2) = \\frac{8}{5}\\) what is the value of \\(x_1 x_2\\)",
      correct: "\\(e^{\\frac{8}{5}}\\)",
      options: [
        "\\(e^{\\frac{5}{8}}\\)",
        "\\(e^{\\frac{8}{5}}\\)",
        "\\(\\frac{8}{5}\\)",
        "\\(e^8\\)"
      ]
    },
    {
      question: "What is the product of all solutions(x_1x_2 = ?)",
      correct: "\\(e^{\\frac{8}{5}}\\)",
      options: [
        "\\(e^{\\frac{6}{5}}\\)",
        "\\(e^{\\frac{8}{5}}\\)",
        "\\(e^2\\)",
        "\\(e\\)"
      ]
    }
  ]
},


{
  id: 6,
  question: "The number of non-empty equivalence relations on the set \\(\\{1,2,3\\}\\) is:",

  steps: [
    {
      question: "What property must every equivalence relation on a set satisfy?",
      correct: "Reflexive, symmetric, and transitive",
      options: [
        "Reflexive, symmetric, and transitive",
        "Only reflexive",
        "Only symmetric and transitive",
        "Reflexive and antisymmetric"
      ]
    },
    {
      question: "For the set \\(\\{1,2,3\\}\\), which set of ordered pairs must be present due to the reflexive property?",
      correct: "\\(A = \\{(1,1),(2,2),(3,3)\\}\\)",
      options: [
        "\\(A = \\{(1,1),(2,2),(3,3)\\}\\)",
        "\\(A = \\{(1,2),(2,3),(3,1)\\}\\)",
        "\\(A = \\{(1,1),(2,2)\\}\\)",
        "\\(A = \\{(1,2),(2,1)\\}\\)"
      ]
    },
    {
      question: "If \\(R=A\\), what is the number of ordered pairs in the relation?",
      correct: "\\(|R|=3\\)",
      options: [
        "\\(|R|=3\\)",
        "\\(|R|=2\\)",
        "\\(|R|=5\\)",
        "\\(|R|=9\\)"
      ]
    },
    {
      question: "If elements \\(1\\) and \\(2\\) are equivalent, which additional pairs must be included due to symmetry?",
      correct: "\\((1,2),(2,1)\\)",
      options: [
        "\\((1,2),(2,1)\\)",
        "\\((1,2),(1,3)\\)",
        "\\((2,3),(3,2)\\)",
        "\\((1,3),(3,1)\\)"
      ]
    },
    {
      question: "In this case, what is the size of the relation \\(R = A \\cup \\{(1,2),(2,1)\\}\\)?",
      correct: "\\(|R|=5\\)",
      options: [
        "\\(|R|=5\\)",
        "\\(|R|=4\\)",
        "\\(|R|=6\\)",
        "\\(|R|=7\\)"
      ]
    },
    {
      question: "If all elements \\(1,2,3\\) are equivalent, what is the resulting relation?",
      correct: "\\(R = \\{1,2,3\\} \\times \\{1,2,3\\}\\)",
      options: [
        "\\(R = \\{1,2,3\\} \\times \\{1,2,3\\}\\)",
        "\\(R = \\{(1,1),(2,2),(3,3)\\}\\)",
        "\\(R = \\{(1,2),(2,3),(3,1)\\}\\)",
        "\\(R = \\{(1,2),(2,1)\\}\\)"
      ]
    },
    {
      question: "Equivalence relations correspond to the number of partitions of the set \\(\\{1,2,3\\}\\). How many such partitions exist?",
      correct: "\\(5\\)",
      options: [
        "\\(6\\)",
        "\\(7\\)",
        "\\(5\\)",
        "\\(4\\)"
      ]
    }
  ]
},

{
  id: 7,
  question: "Let the triangle \\(PQR\\) be the image of the triangle with vertices \\((1,3), (3,1)\\) and \\((2,4)\\) in the line \\(x + 2y = 2\\). If the centroid of \\(\\triangle PQR\\) is the point \\((\\alpha, \\beta)\\), then \\(15(\\alpha - \\beta)\\) is equal to:",

  steps: [
    {
      question: "First find the centroid of the triangle with vertices \\((1,3), (3,1), (2,4)\\). What is the x-coordinate of the centroid?",
      correct: "\\(2\\)",
      options: [
        "\\(2\\)",
        "\\(\\frac{5}{3}\\)",
        "\\(3\\)",
        "\\(\\frac{8}{3}\\)"
      ]
    },
    {
      question: "What is the y-coordinate of the centroid?",
      correct: "\\(\\frac{8}{3}\\)",
      options: [
        "\\(\\frac{7}{3}\\)",
        "\\(\\frac{8}{3}\\)",
        "\\(3\\)",
        "\\(\\frac{5}{3}\\)"
      ]
    },
    {
      question: "Thus the centroid \\(G\\) of the original triangle is",
      correct: "\\(\\left(2, \\frac{8}{3}\\right)\\)",
      options: [
        "\\(\\left(2, \\frac{8}{3}\\right)\\)",
        "\\(\\left(\\frac{8}{3},2\\right)\\)",
        "\\((2,3)\\)",
        "\\(\\left(\\frac{5}{3},\\frac{8}{3}\\right)\\)"
      ]
    },
    {
      question: "The centroid of the image triangle is the reflection of \\(G\\) in the line \\(x+2y-2=0\\). For reflection in \\(ax+by+c=0\\), the parameter is \\(-\\frac{2(ax_0+by_0+c)}{a^2+b^2}\\). What is \\(ax_0+by_0+c\\) for \\(G(2,\\frac{8}{3})\\)?",
      correct: "\\(\\frac{16}{3}\\)",
      options: [
        "\\(\\frac{10}{3}\\)",
        "\\(\\frac{16}{3}\\)",
        "\\(\\frac{14}{3}\\)",
        "\\(6\\)"
      ]
    },
    {
      question: "Compute \\(-\\frac{2(ax_0+by_0+c)}{a^2+b^2}\\) for the reflection.",
      correct: "\\(-\\frac{32}{15}\\)",
      options: [
        "\\(-\\frac{16}{15}\\)",
        "\\(-\\frac{32}{15}\\)",
        "\\(\\frac{32}{15}\\)",
        "\\(-\\frac{16}{5}\\)"
      ]
    },
    {
      question: "Using the reflection formula, what is \\(\\alpha\\) (the x-coordinate of the reflected point)?",
      correct: "\\(-\\frac{2}{15}\\)",
      options: [
        "\\(-\\frac{2}{15}\\)",
        "\\(\\frac{2}{15}\\)",
        "\\(-\\frac{4}{15}\\)",
        "\\(\\frac{4}{15}\\)"
      ]
    },
    {
      question: "What is \\(\\beta\\) (the y-coordinate of the reflected point)?",
      correct: "\\(-\\frac{24}{15}\\)",
      options: [
        "\\(-\\frac{24}{15}\\)",
        "\\(-\\frac{16}{15}\\)",
        "\\(\\frac{24}{15}\\)",
        "\\(-\\frac{8}{15}\\)"
      ]
    },
    {
      question: "Finally compute \\(15(\\alpha-\\beta)\\).",
      correct: "\\(22\\)",
      options: [
        "\\(24\\)",
        "\\(19\\)",
        "\\(21\\)",
        "\\(22\\)"
      ]
    }
  ]
}


];