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
                afirmacao: " Os drones permitem uma análise rápida e detalhada das áreas, coletando dados sobre saúde das plantas, umidade e outros fatores ambientais.",
            },
            {
                texto: " Sensores de solo",
                afirmacao: " Sensores instalados no solo monitoram continuamente a umidade e os nutrientes, fornecendo dados precisos para ajustes imediatos no cultivo.",
            }
        ]
    },
    {
        enunciado: " Você acha que a aplicação de insumos em pequenas quantidades, de forma localizada, é mais vantajosa?",
        alternativas: [
            {
                texto: "  Sim, a agricultura de precisão permite uma aplicação mais eficiente, reduzindo desperdícios e custos. ",
                afirmacao: " Com a tecnologia, insumos são aplicados apenas onde são necessários, o que também minimiza o impacto ambiental. ",
            },
            {
                texto: " Não, a distribuição uniforme dos insumos ainda é a melhor forma de garantir uma produção homogênea. ",
                afirmacao: " A aplicação generalizada garante que todas as plantas recebam os mesmos nutrientes e tratamentos, sem variações no crescimento. ",
            }
        ]
    },
    {
        enunciado: " Você acredita que a utilização de mapas de variabilidade na lavoura pode melhorar a produtividade?",
        alternativas: [
            {
                texto: " Sim, eles ajudam a identificar zonas de alta e baixa produtividade, possibilitando ajustes localizados na gestão agrícola. ",
                afirmacao: " Mapas de variabilidade são essenciais para personalizar o manejo das culturas, aproveitando ao máximo o potencial de cada área. ",
            },
            {
                texto: " Não, é mais eficiente focar apenas no manejo tradicional das lavouras, sem dividir a área em zonas específicas. ",
                afirmacao: " A prática convencional de aplicar um manejo único para toda a área é mais simples e menos dispendiosa. ",
            }
        ]
    },
    {
        enunciado: " Você acha que o uso de inteligência artificial na agricultura pode contribuir para a previsão de doenças e pragas?",
        alternativas: [
            {
                texto: " Sim, algoritmos podem analisar grandes volumes de dados para prever surtos antes que eles aconteçam, permitindo ações rápidas. ",
                afirmacao: " A IA pode processar imagens de satélite e dados climáticos para antecipar problemas nas culturas e sugerir tratamentos. ",
            },
            {
                texto: " Não, a previsão de doenças e pragas ainda depende mais da observação manual e conhecimento empírico do agricultor. ",
                afirmacao: " A experiência do agricultor é insubstituível na identificação de problemas, e a tecnologia ainda não consegue substituir o toque humano nesse aspecto. ",
            }
        ]
    },
    {
        enunciado: " Você considera a integração de máquinas autônomas na agricultura de precisão uma boa solução?",
        alternativas: [
            {
                texto: " Sim, elas oferecem maior precisão e podem operar de forma contínua, reduzindo custos com mão-de-obra e aumentando a eficiência. ",
                afirmacao: "Máquinas autônomas como tratores e colheitadeiras são capazes de operar de forma mais eficaz, economizando tempo e recursos.",
            },
            {
                texto: " Não, a dependência de máquinas pode aumentar os custos iniciais e a manutenção, sem garantir resultados tão superiores. ",
                afirmacao: " Embora interessantes, as máquinas autônomas exigem investimentos altos e podem não ser viáveis em pequenas propriedades. ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){

    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = " ";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } 
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Se fosse possível traduzir sua forma de aprender em palavras, diríamos que...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPergunta();