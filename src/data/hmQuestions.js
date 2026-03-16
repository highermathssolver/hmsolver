export const hmQuestions = [

{
id:1,
question:"Evaluate: \\( \\int e^{\\sqrt{x}} \\, dx \\)",

plan:[
"Substitute to simplify √x",
"Convert integral to t variable",
"Factor constant",
"Apply integration by parts",
"Evaluate integral",
"Substitute back x"
],

steps:[
{
planIndex:0,
why:"The expression e^(√x) becomes simpler if we substitute √x with a new variable.",
question:"What substitution simplifies \\(e^{\\sqrt{x}}\\)?",
correct:"\\(x = t^2\\)",
options:[
"\\(x = t^2\\)",
"\\(x = \\sqrt{t}\\)",
"\\(t = x^2\\)",
"\\(t = e^x\\)"
]
},
{
planIndex:1,
why:"We differentiate the substitution x = t² to convert dx into t variables.",
question:"If \\(x = t^2\\), what is \\(dx\\)?",
correct:"\\(dx = 2t \\, dt\\)",
options:[
"\\(dx = t^2 dt\\)",
"\\(dx = 2t \\, dt\\)",
"\\(dx = \\frac{1}{2t} dt\\)",
"\\(dx = dt\\)"
]
},
{
planIndex:1,
why:"Substitute x = t² and dx = 2t dt into the integral.",
question:"After substitution, what does the integral become?",
correct:"\\(\\int e^t (2t \\, dt)\\)",
options:[
"\\(\\int e^{t^2} dt\\)",
"\\(\\int e^t (2t \\, dt)\\)",
"\\(\\int t e^t dt\\)",
"\\(\\int e^t dt\\)"
]
},
{
planIndex:2,
why:"The constant 2 can be factored outside the integral.",
question:"Factor out the constant from the integral",
correct:"\\(2 \\int t e^t dt\\)",
options:[
"\\(\\int t e^t dt\\)",
"\\(2 \\int t e^t dt\\)",
"\\(2 \\int e^t dt\\)",
"\\(t \\int e^t dt\\)"
]
},
{
planIndex:3,
why:"Product of t and e^t suggests using integration by parts.",
question:"Which method is suitable to solve \\( \\int t e^t dt \\) now?",
correct:"Integration by parts",
options:[
"Substitution method",
"Integration by parts",
"Partial fractions",
"Trigonometric substitution"
]
},
{
planIndex:3,
why:"Integration by parts formula is required to proceed.",
question:"Which of the following represents integration by parts?",
correct:"\\(\\int a b\\,dx = a\\int b\\,dx - \\int \\left(\\frac{da}{dx}\\int b\\,dx\\right)dx\\)",
options:[
"\\(\\int a b\\,dx = a\\int b\\,dx - \\int \\left(\\frac{da}{dx}\\int b\\,dx\\right)dx\\)",
"\\(\\int a b\\,dx = ab + \\int a\\,db\\)",
"\\(\\int a b\\,dx = \\frac{a}{b}\\)",
"\\(\\int a b\\,dx = \\ln(ab)\\)"
]
},
{
planIndex:3,
why:"Substitute a = t and b = e^t into integration by parts formula.",
question:"Substitute into the integration by parts formula",
correct:"\\(2\\left\\{t\\int e^t dt - \\int\\left[\\frac{dt}{dt}\\int e^t dt\\right]dt\\right\\}\\)",
options:[
"\\(2\\left\\{t\\int e^t dt - \\int\\left[\\frac{dt}{dt}\\int e^t dt\\right]dt\\right\\}\\)",
"\\(2\\left\\{t\\int e^t dt + \\int\\left[\\frac{dt}{dt}\\int e^t dt\\right]dt\\right\\}\\)",
"\\(2\\left\\{\\int e^t dt - t\\int e^t dt\\right\\}\\)",
"\\(2\\left\\{t\\int e^t dt - e^t\\right\\}\\)"
]
},
{
planIndex:4,
why:"Simplify the expression obtained from integration by parts.",
question:" What is the simplified form of above integration?",
correct:"\\(t e^t - \\int e^t dt\\)",
options:[
"\\(t e^t - \\int e^t dt\\)",
"\\(t^2 e^t\\)",
"\\(e^t - t\\)",
"\\(t e^t\\)"
]
},
{
planIndex:4,
why:"The integral of e^t is simply e^t.",
question:"Evaluate \\( \\int e^t dt \\)",
correct:"\\(e^t\\)",
options:[
"\\(t e^t\\)",
"\\(e^t\\)",
"\\(\\ln t\\)",
"\\(e^{t^2}\\)"
]
},
{
planIndex:4,
why:"Substitute the evaluated integral into the expression.",
question:"What is the complete expression after evaluating the integral?",
correct:"\\(2[te^t - e^t] + C\\)",
options:[
"\\(2[te^t - e^t] + C\\)",
"\\(2[te^t + e^t] + C\\)",
"\\(te^t - e^t + C\\)",
"\\(2e^t + C\\)"
]
},
{
planIndex:5,
why:"Replace t with √x to return to the original variable.",
question:"Substitute back to get the final answer in terms of \\(x\\)",
correct:"\\(2[\\sqrt{x}e^{\\sqrt{x}} - e^{\\sqrt{x}}] + C\\)",
options:[
"\\(2[\\sqrt{x}e^{\\sqrt{x}} - e^{\\sqrt{x}}] + C\\)",
"\\(2e^{\\sqrt{x}} + C\\)",
"\\(\\sqrt{x}e^{\\sqrt{x}} + C\\)",
"\\(2\\sqrt{x}e^x + C\\)"
]
}
]
},

{
id:2,
question:"If f(x) = x³ - 3x² + 4x - 2, find f'(2)",

plan:[
"Apply differentiation rule",
"Find derivative",
"Substitute value"
],

steps:[
{
planIndex:0,
why:"Differentiation of polynomial functions uses the power rule.",
question:"What is the first step to differentiate?",
correct:"Apply power rule",
options:[
"Substitute x=2",
"Apply power rule",
"Factor expression",
"Integrate function"
]
},
{
planIndex:1,
why:"Apply power rule term by term to compute derivative.",
question:"What is f'(x)?",
correct:"3x² - 6x + 4",
options:[
"x²",
"3x² - 6x + 4",
"6x",
"x³"
]
},
{
planIndex:2,
why:"Substitute x=2 into the derivative to get the final value.",
question:"Find f'(2)",
correct:"4",
options:["2","4","6","8"]
}
]
},

{
id:3,
question:"Evaluate: \\( \\lim_{x \\to 0} \\frac{\\sin(x^\\circ)}{x} \\)",

plan:[
"Convert degrees to radians",
"Rewrite expression",
"Apply standard limit"
],

steps:[
{
planIndex:0,
why:"Standard limits require angles in radians.",
question:"Convert \\(1^\\circ\\) into radians",
correct:"\\(\\frac{\\pi}{180}\\)",
options:[
"\\(\\frac{180}{\\pi}\\)",
"\\(\\frac{\\pi}{180}\\)",
"\\(\\frac{\\pi}{360}\\)",
"\\(\\frac{1}{180}\\)"
]
},
{
planIndex:0,
why:"Convert x° into radians so the limit formula can be used.",
question:"Express \\(x^\\circ\\) in radians",
correct:"\\(\\frac{x\\pi}{180}\\)",
options:[
"\\(\\frac{x}{180}\\)",
"\\(\\frac{x\\pi}{180}\\)",
"\\(\\frac{180x}{\\pi}\\)",
"\\(x\\pi\\)"
]
},
{
planIndex:1,
why:"Substitute the radian form into the limit expression.",
question:"Substitute into the limit",
correct:"\\(\\lim_{x \\to 0} \\frac{\\sin(\\frac{x\\pi}{180})}{x}\\)",
options:[
"\\(\\lim_{x \\to 0} \\frac{\\sin(x)}{x}\\)",
"\\(\\lim_{x \\to 0} \\frac{\\sin(\\frac{x\\pi}{180})}{x}\\)",
"\\(\\lim_{x \\to 0} \\frac{\\sin(x\\pi)}{180x}\\)",
"\\(\\lim_{x \\to 0} \\frac{\\sin(\\frac{x}{180})}{x}\\)"
]
},
{
planIndex:2,
why:"Using the standard limit sin(u)/u → 1 as u→0.",
question:"what is the limit of \\(\\frac{\\sin u}{u}\\) as \\(u \\to 0\\)?",
correct:"\\(1\\)",
options:[
"\\(0\\)",
"\\(1\\)",
"\\(\\pi\\)",
"\\(\\infty\\)"
]
},
{
planIndex:2,
why:"Multiply and divide appropriately to match the standard limit form.",
question:"Multiply and divide by the same value to use the standard limit",
correct:"\\(\\frac{\\pi}{180}\\)",
options:[
"\\(\\frac{\\pi}{180}\\)",
"\\(\\frac{180}{\\pi}\\)",
"\\(\\pi\\)",
"\\(\\frac{1}{180}\\)"
]
},
{
planIndex:2,
why:"Using the standard limit gives the final value.",
question:"Using above statement find Final value of the limit",
correct:"\\(\\frac{\\pi}{180}\\)",
options:[
"\\(\\frac{\\pi}{360}\\)",
"\\(\\frac{\\pi}{180}\\)",
"\\(\\frac{180}{\\pi}\\)",
"\\(1\\)"
]
}
]
},

{
id:4,
question:"Given the differential equation \\(\\frac{dx}{dy} + \\frac{1}{y^2}x = \\frac{1}{y^3}\\) with the initial condition \\(x=1\\) when \\(y=1\\), find the value of \\(x\\) when \\(y=\\frac{1}{2}\\).",

plan:[
"Find integrating factor",
"Convert equation to derivative form",
"Integrate both sides",
"Apply substitution",
"Apply initial condition"
],

steps:[

{
question:"Identify the integrating factor (I.F.) of the differential equation \\(\\frac{dx}{dy}+\\frac{1}{y^2}x=\\frac{1}{y^3}\\).",
correct:"\\(e^{-\\frac{1}{y}}\\)",
options:[
"\\(e^{-\\frac{1}{y}}\\)",
"\\(e^{\\frac{1}{y}}\\)",
"\\(y\\)",
"\\(e^{-\\frac{1}{2y^2}}\\)"
],
planIndex:0,
why:"For linear differential equation dx/dy + P(y)x = Q(y), integrating factor is e^(∫P(y)dy)."
},

{
question:"Multiply the differential equation by the integrating factor \\(e^{-1/y}\\). What equation is obtained?",
correct:"\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y^2}xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
options:[
"\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y^2}xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
"\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y}xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
"\\(e^{-1/y}\\frac{dx}{dy}+xe^{-1/y}=\\frac{e^{-1/y}}{y^3}\\)",
"\\(e^{-1/y}\\frac{dx}{dy}+\\frac{1}{y^2}xe^{-1/y}=\\frac{1}{y^3}\\)"
],
planIndex:1,
why:"Multiplying by the integrating factor converts the left side into derivative form."
},

{
question:"Recognize the left side as a derivative. Which derivative is obtained?",
correct:"\\(\\frac{d}{dy}(x e^{-1/y})\\)",
options:[
"\\(\\frac{d}{dy}(x e^{-1/y})\\)",
"\\(\\frac{d}{dy}(x e^{1/y})\\)",
"\\(\\frac{d}{dy}(x/y)\\)",
"\\(\\frac{d}{dy}(xe^{-y})\\)"
],
planIndex:1,
why:"Product rule shows that this expression equals derivative of x·e^{-1/y}."
},

{
question:"Integrate both sides. What equation is obtained?",
correct:"\\(x e^{-1/y}=\\int e^{-1/y}\\frac{1}{y^3}dy\\)",
options:[
"\\(x e^{-1/y}=\\int e^{-1/y}\\frac{1}{y^3}dy\\)",
"\\(x e^{-1/y}=\\int e^{-1/y}\\frac{1}{y^2}dy\\)",
"\\(x e^{-1/y}=\\int \\frac{1}{y^3}dy\\)",
"\\(x e^{-1/y}=\\int e^{-1/y}dy\\)"
],
planIndex:2,
why:"Once left side becomes derivative, integrate both sides."
},

{
question:"Use substitution \\(t=-\\frac{1}{y}\\). What is \\(dt\\)?",
correct:"\\(dt=\\frac{1}{y^2}dy\\)",
options:[
"\\(dt=\\frac{1}{y^2}dy\\)",
"\\(dt=-\\frac{1}{y^2}dy\\)",
"\\(dt=\\frac{1}{y}dy\\)",
"\\(dt=-\\frac{1}{y}dy\\)"
],
planIndex:3,
why:"Substitution simplifies exponential expression."
},

{
question:"After substitution, the integral becomes",
correct:"\\(-\\int t e^{t}dt\\)",
options:[
"\\(-\\int t e^{t}dt\\)",
"\\(\\int t e^{t}dt\\)",
"\\(\\int e^{t}dt\\)",
"\\(-\\int e^{t}dt\\)"
],
planIndex:3,
why:"Substituting transforms integral into polynomial × exponential."
},

{
question:"Evaluate \\(-\\int t e^{t}dt\\).",
correct:"\\(-t e^{t}+e^{t}+C\\)",
options:[
"\\(-t e^{t}+e^{t}+C\\)",
"\\(-t e^{t}-e^{t}+C\\)",
"\\(t e^{t}+e^{t}+C\\)",
"\\(t e^{t}-e^{t}+C\\)"
],
planIndex:3,
why:"Integration by parts is used."
},

{
question:"Apply the condition \\(x=1, y=1\\). What is the value of \\(C\\)?",
correct:"\\(-\\frac{1}{e}\\)",
options:[
"\\(-\\frac{1}{e}\\)",
"\\(\\frac{1}{e}\\)",
"\\(-1\\)",
"\\(0\\)"
],
planIndex:4,
why:"Initial condition determines constant of integration."
},

{
question:"Substitute \\(y=\\frac{1}{2}\\). What is the value of \\(x\\)?",
correct:"\\(3-e\\)",
options:[
"\\(3-e\\)",
"\\(3+e\\)",
"\\(e-3\\)",
"\\(\\frac{3}{e^2}-\\frac{1}{e}\\)"
],
planIndex:4,
why:"Final substitution gives required value of x."
}

]
},
{
id:7,
question:"The product of all solutions of the equation \\(e^{5(\\ln x)^2+3}=x^8\\) with \\(x>0\\) is",

plan:[
"Take logarithm",
"Convert to quadratic",
"Solve quadratic",
"Convert back to x"
],

steps:[
{
question:"To simplify the equation \\(e^{5(\\ln x)^2+3}=x^8\\) which operation should be applied first",
correct:"Take natural logarithm on both sides",
options:[
"Differentiate both sides",
"Take natural logarithm on both sides",
"Multiply both sides by ln x",
"Expand the exponent directly"
],
planIndex:0,
why:"Taking log simplifies exponential equations."
},

{
question:"After taking natural logarithm on both sides of \\(e^{5(\\ln x)^2+3}=x^8\\) what equation do we obtain",
correct:"\\(\\ln(e^{5(\\ln x)^2+3}) = \\ln(x^8)\\)",
options:[
"\\(\\ln(e^{5(\\ln x)^2+3}) = \\ln(x^8)\\)",
"\\(e^{\\ln(5(\\ln x)^2+3)} = 8\\ln x\\)",
"\\(\\ln(e^{5(\\ln x)^2}) = x^8\\)",
"\\(\\ln(e^{5(\\ln x)^2}) = 8x\\)"
],
planIndex:0,
why:"Logarithm applied to both sides."
},

{
question:"Using the property \\(\\ln(e^a)=a\\) and \\(\\ln(x^n)=n\\ln x\\) simplify the equation",
correct:"\\(5(\\ln x)^2 + 3 = 8\\ln x\\)",
options:[
"\\(5(\\ln x)^2 + 3 = 8\\ln x\\)",
"\\(5(\\ln x)^2 + 3 = x^8\\)",
"\\(5(\\ln x)^2 + 3 = \\ln(8x)\\)",
"\\(5(\\ln x)^2 = 8x + 3\\)"
],
planIndex:1,
why:"Using logarithmic identities."
},

{
question:"To convert the equation into quadratic form which substitution is useful",
correct:"Let ln x = t",
options:[
"Let x = t",
"Let ln x = t",
"Let x squared = t",
"Let e power x = t"
],
planIndex:1,
why:"Substitution converts equation into quadratic."
},

{
question:"After substituting t = ln x what equation is obtained",
correct:"\\(5t^2 - 8t + 3 = 0\\)",
options:[
"\\(5t^2 - 8t + 3 = 0\\)",
"\\(5t^2 + 8t + 3 = 0\\)",
"\\(5t^2 - 8t - 3 = 0\\)",
"\\(t^2 - 8t + 5 = 0\\)"
],
planIndex:2,
why:"Replacing ln x with t simplifies equation."
},

{
question:"For the quadratic equation \\(5t^2 - 8t + 3 = 0\\) what is the value of \\(t_1 + t_2\\)",
correct:"\\(\\frac{8}{5}\\)",
options:[
"\\(-\\frac{8}{5}\\)",
"\\(\\frac{8}{5}\\)",
"\\(\\frac{3}{5}\\)",
"\\(\\frac{5}{8}\\)"
],
planIndex:2,
why:"Using formula sum of roots = -b/a."
},

{
question:"If t = ln x then (t1 + t2) = (ln x1 + ln x2) which becomes",
correct:"\\(\\ln(x_1 x_2) = \\frac{8}{5}\\)",
options:[
"\\(\\ln(x_1 x_2) = \\frac{8}{5}\\)",
"\\(\\ln(x_1 + x_2) = \\frac{8}{5}\\)",
"\\(x_1 x_2 = \\frac{8}{5}\\)",
"\\(\\ln(x_1 x_2) = \\frac{5}{8}\\)"
],
planIndex:3,
why:"Using log multiplication property."
},

{
question:"If \\(\\ln(x_1 x_2) = \\frac{8}{5}\\) what is the value of \\(x_1 x_2\\)",
correct:"\\(e^{\\frac{8}{5}}\\)",
options:[
"\\(e^{\\frac{5}{8}}\\)",
"\\(e^{\\frac{8}{5}}\\)",
"\\(\\frac{8}{5}\\)",
"\\(e^8\\)"
],
planIndex:3,
why:"Exponentiate both sides."
},

{
question:"What is the product of all solutions(x_1x_2 = ?)",
correct:"\\(e^{\\frac{8}{5}}\\)",
options:[
"\\(e^{\\frac{6}{5}}\\)",
"\\(e^{\\frac{8}{5}}\\)",
"\\(e^2\\)",
"\\(e\\)"
],
planIndex:3,
why:"Final product of roots."
}

]
},
{
id: 8,

question: "Let \\(a_1, a_2, a_3, \\ldots\\) be a G P of increasing positive terms If \\(a_1 a_5 = 28\\) and \\(a_2 + a_4 = 29\\) then \\(a_6\\) is equal to",

plan:[
"Express GP terms using a and r",
"Use given conditions to form equations",
"Eliminate variable a",
"Find common ratio r",
"Compute required term"
],

steps: [

{
question: "In a geometric progression if first term is a and common ratio is r what is \\(a_5\\)",
correct: "\\(ar^4\\)",
options: [
"\\(ar^4\\)",
"\\(ar^5\\)",
"\\(a^5 r\\)",
"\\(a + 4r\\)"
],
planIndex:0,
why:"In a GP the nth term is a r^(n−1). Therefore a₅ = a r⁴."
},

{
question: "Using \\(a_1 a_5 = 28\\) substitute \\(a_1 = a\\) and \\(a_5 = ar^4\\) What equation is obtained",
correct: "\\(a^2 r^4 = 28\\)",
options: [
"\\(a^2 r^4 = 28\\)",
"\\(ar^4 = 28\\)",
"\\(a^2 r^5 = 28\\)",
"\\(a r^2 = 28\\)"
],
planIndex:1,
why:"Substituting a₁ = a and a₅ = ar⁴ into the given condition."
},

{
question: "In the same G P what are \\(a_2\\) and \\(a_4\\)",
correct: "\\(ar\\) and \\(ar^3\\)",
options: [
"\\(ar\\) and \\(ar^3\\)",
"\\(ar^2\\) and \\(ar^4\\)",
"\\(a + r\\) and \\(a + r^3\\)",
"\\(a\\) and \\(ar^3\\)"
],
planIndex:0,
why:"Using general term formula aₙ = ar^(n−1)."
},

{
question: "Using \\(a_2 + a_4 = 29\\) substitute \\(ar\\) and \\(ar^3\\) What equation is obtained",
correct: "\\(ar + ar^3 = 29\\)",
options: [
"\\(ar + ar^3 = 29\\)",
"\\(ar^2 + ar^4 = 29\\)",
"\\(a + ar^3 = 29\\)",
"\\(ar + ar^4 = 29\\)"
],
planIndex:1,
why:"Substitute values of a₂ and a₄ into the given equation."
},

{
question: "Factor the expression \\(ar + ar^3\\)",
correct: "\\(ar(1 + r^2) = 29\\)",
options: [
"\\(ar(1 + r^2) = 29\\)",
"\\(a(1 + r^3) = 29\\)",
"\\(ar^2(1 + r) = 29\\)",
"\\(ar(1 + r^3) = 29\\)"
],
planIndex:1,
why:"Factor common term ar from both terms."
},

{
question: "Square both sides of \\(ar(1 + r^2) = 29\\) What equation is obtained",
correct: "\\(a^2 r^2 (1 + r^2)^2 = 29^2\\)",
options: [
"\\(a^2 r^2 (1 + r^2)^2 = 29^2\\)",
"\\(a^2 r^4 (1 + r^2) = 29^2\\)",
"\\(a^2 r^2 (1 + r) = 29^2\\)",
"\\(ar(1 + r^2)^2 = 29^2\\)"
],
planIndex:2,
why:"Squaring helps match powers of a and r for elimination."
},

{
question: "To eliminate a, divide the above obtained equations by \\(a^2 r^4 = 28\\) we get",
correct: "\\(\\frac{r^2}{(1 + r^2)^2} = \\frac{28}{29^2}\\)",
options: [
"\\(\\frac{r^2}{(1 + r^2)^2} = \\frac{28}{29^2}\\)",
"\\(\\frac{r^4}{(1 + r^2)^2} = \\frac{28}{29}\\)",
"\\(\\frac{r}{1 + r^2} = \\frac{28}{29}\\)",
"\\(\\frac{1}{(1 + r^2)^2} = \\frac{28}{29^2}\\)"
],
planIndex:2,
why:"Dividing the two equations removes variable a."
},

{
question: "Taking square root what relation is obtained",
correct: "\\(\\frac{r}{1 + r^2} = \\frac{\\sqrt{28}}{29}\\)",
options: [
"\\(\\frac{r}{1 + r^2} = \\frac{\\sqrt{28}}{29}\\)",
"\\(\\frac{r^2}{1 + r^2} = \\frac{\\sqrt{28}}{29}\\)",
"\\(\\frac{r}{1 + r} = \\frac{\\sqrt{28}}{29}\\)",
"\\(\\frac{r}{1 + r^2} = \\frac{28}{29}\\)"
],
planIndex:3,
why:"Taking square root simplifies the equation."
},

{
question: "Solve the relation to find r",
correct: "\\(r = \\sqrt{28}\\)",
options: [
"\\(r = \\sqrt{28}\\)",
"\\(r = 28\\)",
"\\(r = \\frac{1}{\\sqrt{28}}\\)",
"\\(r = 14\\)"
],
planIndex:3,
why:"Solving the equation gives the common ratio."
},

{
question: "Substitute \\(r = \\sqrt{28}\\) in \\(a^2 r^4 = 28\\) What is a",
correct: "\\(a = \\frac{1}{\\sqrt{28}}\\)",
options: [
"\\(a = \\frac{1}{\\sqrt{28}}\\)",
"\\(a = \\sqrt{28}\\)",
"\\(a = \\frac{1}{28}\\)",
"\\(a = 28\\)"
],
planIndex:4,
why:"Substitute value of r into earlier equation."
},

{
question: "Using \\(a_6 = ar^5\\) compute \\(a_6\\)",
correct: "\\(784\\)",
options: [
"\\(628\\)",
"\\(526\\)",
"\\(784\\)",
"\\(812\\)"
],
planIndex:4,
why:"Using GP formula a₆ = ar⁵."
}

]
},
{
id: 6,

question:"The number of non-empty equivalence relations on the set \\(\\{1,2,3\\}\\) is:",

plan:[
"Recall properties of equivalence relation",
"Identify reflexive pairs",
"Consider equivalence classes",
"Count partitions of set"
],

steps:[

{
question:"What property must every equivalence relation on a set satisfy?",
correct:"Reflexive, symmetric, and transitive",
options:[
"Reflexive, symmetric, and transitive",
"Only reflexive",
"Only symmetric and transitive",
"Reflexive and antisymmetric"
],
planIndex:0,
why:"Equivalence relations require reflexive, symmetric and transitive properties."
},

{
question:"For the set \\(\\{1,2,3\\}\\), which set of ordered pairs must be present due to the reflexive property?",
correct:"\\(A = \\{(1,1),(2,2),(3,3)\\}\\)",
options:[
"\\(A = \\{(1,1),(2,2),(3,3)\\}\\)",
"\\(A = \\{(1,2),(2,3),(3,1)\\}\\)",
"\\(A = \\{(1,1),(2,2)\\}\\)",
"\\(A = \\{(1,2),(2,1)\\}\\)"
],
planIndex:1,
why:"Reflexive property requires (a,a) for every element."
},

{
question:"If \\(R=A\\), what is the number of ordered pairs in the relation?",
correct:"\\(|R|=3\\)",
options:[
"\\(|R|=3\\)",
"\\(|R|=2\\)",
"\\(|R|=5\\)",
"\\(|R|=9\\)"
],
planIndex:1,
why:"There are three reflexive pairs."
},

{
question:"If elements \\(1\\) and \\(2\\) are equivalent, which additional pairs must be included due to symmetry?",
correct:"\\((1,2),(2,1)\\)",
options:[
"\\((1,2),(2,1)\\)",
"\\((1,2),(1,3)\\)",
"\\((2,3),(3,2)\\)",
"\\((1,3),(3,1)\\)"
],
planIndex:2,
why:"Symmetry requires if (a,b) then (b,a)."
},

{
question:"In this case, what is the size of the relation \\(R = A \\cup \\{(1,2),(2,1)\\}\\)?",
correct:"\\(|R|=5\\)",
options:[
"\\(|R|=5\\)",
"\\(|R|=4\\)",
"\\(|R|=6\\)",
"\\(|R|=7\\)"
],
planIndex:2,
why:"Add two symmetric pairs to reflexive set."
},

{
question:"If all elements \\(1,2,3\\) are equivalent, what is the resulting relation?",
correct:"\\(R = \\{1,2,3\\} \\times \\{1,2,3\\}\\)",
options:[
"\\(R = \\{1,2,3\\} \\times \\{1,2,3\\}\\)",
"\\(R = \\{(1,1),(2,2),(3,3)\\}\\)",
"\\(R = \\{(1,2),(2,3),(3,1)\\}\\)",
"\\(R = \\{(1,2),(2,1)\\}\\)"
],
planIndex:3,
why:"If all are equivalent, every pair exists."
},

{
question:"Equivalence relations correspond to the number of partitions of the set \\(\\{1,2,3\\}\\). How many such partitions exist?",
correct:"\\(5\\)",
options:[
"\\(6\\)",
"\\(7\\)",
"\\(5\\)",
"\\(4\\)"
],
planIndex:3,
why:"Number of equivalence relations equals number of partitions (Bell number B₃=5)."
}

]
}
];