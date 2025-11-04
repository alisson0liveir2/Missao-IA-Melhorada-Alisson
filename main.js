const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: " Qual tecnologia você acredita ser mais eficiente para o monitoramento de lavouras?",
        alternativas: [
            {
                texto: " Drones",
                afirmacao: [
                    " Os drones permitem uma análise rápida e detalhada das áreas, coletando dados sobre saúde das plantas, umidade e outros fatores ambientais.",
                    " Eles podem cobrir grandes áreas rapidamente, diminuindo o tempo de coleta de dados.",
                    " Além disso, os drones ajudam a identificar problemas em tempo real, permitindo ações corretivas imediatas."
                ]

            },
            {
                texto: " Sensores de solo",
                afirmacao: [
                    " Sensores instalados no solo monitoram continuamente a umidade e os nutrientes, fornecendo dados precisos para ajustes imediatos no cultivo.",
                    " Esses sensores oferecem dados em tempo real, o que ajuda a tomar decisões de forma mais rápida e assertiva.",
                    " Eles permitem uma análise mais detalhada e localizada das condições do solo, o que pode melhorar o manejo da irrigação e fertilização."
                ]

            }
        ]
    },
    {
        enunciado: " Você acha que a aplicação de insumos em pequenas quantidades, de forma localizada, é mais vantajosa?",
        alternativas: [
            {
                texto: "  Sim, a agricultura de precisão permite uma aplicação mais eficiente, reduzindo desperdícios e custos. ",
                afirmacao: [
                    " Com a tecnologia, insumos são aplicados apenas onde são necessários, o que também minimiza o impacto ambiental. ",
                    " A aplicação localizada reduz o desperdício de fertilizantes e pesticidas, promovendo um uso mais sustentável dos recursos.",
                    " Isso também pode melhorar a saúde do solo e das culturas, uma vez que se evita a aplicação excessiva de produtos químicos."
                ]
            },
            {
                texto: " Não, a distribuição uniforme dos insumos ainda é a melhor forma de garantir uma produção homogênea. ",
                afirmacao: [
                    " A aplicação generalizada garante que todas as plantas recebam os mesmos nutrientes e tratamentos, sem variações no crescimento. ",
                    " Essa abordagem é mais simples de implementar e não requer um sistema complexo de monitoramento.",
                    " Além disso, pode ser mais acessível para agricultores que não possuem as tecnologias de precisão."
                ]
            }
        ]
    },
    {
        enunciado: " Você acredita que a utilização de mapas de variabilidade na lavoura pode melhorar a produtividade?",
        alternativas: [
            {
                texto: " Sim, eles ajudam a identificar zonas de alta e baixa produtividade, possibilitando ajustes localizados na gestão agrícola. ",
                afirmacao: [
                    " Mapas de variabilidade são essenciais para personalizar o manejo das culturas, aproveitando ao máximo o potencial de cada área. ",
                    " Ao identificar essas zonas, o agricultor pode aplicar insumos e cuidados de maneira mais eficiente, reduzindo custos e melhorando a produtividade.",
                    " A utilização de mapas também permite monitorar a evolução das áreas ao longo do tempo, ajudando a prever padrões de produtividade."
                ]
            },
            {
                texto: " Não, é mais eficiente focar apenas no manejo tradicional das lavouras, sem dividir a área em zonas específicas. ",
                afirmacao: [
                    " A prática convencional de aplicar um manejo único para toda a área é mais simples e menos dispendiosa. ",
                    " Esse modelo evita a complexidade e o custo adicional de coletar e analisar grandes volumes de dados.",
                    " Pode ser adequado em situações onde a variabilidade entre as áreas da lavoura é pequena."
                ]
            }
        ]
    },
    {
        enunciado: " Você acha que o uso de inteligência artificial na agricultura pode contribuir para a previsão de doenças e pragas?",
        alternativas: [
            {
                texto: " Sim, algoritmos podem analisar grandes volumes de dados para prever surtos antes que eles aconteçam, permitindo ações rápidas. ",
                afirmacao: [
                    " A IA pode processar imagens de satélite e dados climáticos para antecipar problemas nas culturas e sugerir tratamentos. ",
                    " Ela consegue identificar padrões que são difíceis de perceber pelo olho humano, permitindo a previsão precoce de doenças e pragas.",
                    " Além disso, pode recomendar tratamentos personalizados e eficazes, melhorando o manejo de pragas de maneira sustentável."
                ]
            },
            {
                texto: " Não, a previsão de doenças e pragas ainda depende mais da observação manual e conhecimento empírico do agricultor. ",
                afirmacao: [
                    " A experiência do agricultor é insubstituível na identificação de problemas, e a tecnologia ainda não consegue substituir o toque humano nesse aspecto. ",
                    " Embora a IA seja útil, os agricultores têm um conhecimento profundo da dinâmica de suas lavouras, o que muitas vezes é fundamental para um diagnóstico preciso.",
                    " A observação constante e a análise empírica são mais adaptáveis às variações locais e às condições específicas de cada safra."
                ]
            }
        ]
    },
    {
        enunciado: " Você considera a integração de máquinas autônomas na agricultura de precisão uma boa solução?",
        alternativas: [
            {
                texto: " Sim, elas oferecem maior precisão e podem operar de forma contínua, reduzindo custos com mão-de-obra e aumentando a eficiência. ",
                afirmacao: [
                    " Máquinas autônomas como tratores e colheitadeiras são capazes de operar de forma mais eficaz, economizando tempo e recursos.",
                    " Elas podem trabalhar 24 horas por dia, sem a necessidade de descanso, o que aumenta a capacidade de produção.",
                    " A precisão das máquinas autônomas reduz erros humanos, melhorando a qualidade do trabalho e evitando desperdícios."
                ]
            },
            {
                texto: " Não, a dependência de máquinas pode aumentar os custos iniciais e a manutenção, sem garantir resultados tão superiores. ",
                afirmacao: [
                    " Embora interessantes, as máquinas autônomas exigem investimentos altos e podem não ser viáveis em pequenas propriedades. ",
                    " A manutenção dessas máquinas pode ser dispendiosa, especialmente em regiões onde o acesso a peças e profissionais qualificados é limitado.",
                    " Além disso, a implementação de tecnologias autônomas pode criar uma dependência tecnológica que nem todos os agricultores estão prontos para enfrentar."
                ]
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se fosse possível traduzir sua forma de aprender em palavras, diríamos que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();