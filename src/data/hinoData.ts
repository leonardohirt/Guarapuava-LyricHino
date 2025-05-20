interface Word {
  text: string;
  startTime: number;
  endTime: number;
}

interface Verse {
  text: string;
  startTime: number;
  endTime: number;
  words?: Word[];
}

interface HinoData {
  title: string;
  composer: string;
  lyricist: string;
  year: string;
  verses: Verse[];
  audioUrl: string;
}

export const hinoGuarapuavaData: HinoData = {
  title: "Hino de Guarapuava",
  composer: "Luiz Eulógio Zilli",
  lyricist: "Gilda Boscardim Todeschini",
  year: "1965",
  audioUrl: "https://www.youtube.com/watch?v=S5LxOCu5TJY",
  verses: [
    {
      text: "O Sol surgiu, um dia, mais brilhante",
      startTime: 10,
      endTime: 17,
      words: [
        { text: "O", startTime: 10, endTime: 10.5 },
        { text: "Sol", startTime: 10.5, endTime: 11.5 },
        { text: "surgiu,", startTime: 11.5, endTime: 13 },
        { text: "um", startTime: 13, endTime: 13.5 },
        { text: "dia,", startTime: 13.5, endTime: 14.5 },
        { text: "mais", startTime: 14.5, endTime: 15.5 },
        { text: "brilhante", startTime: 15.5, endTime: 17 }
      ]
    },
    {
      text: "E foi, risonho as flores acordar.",
      startTime: 18,
      endTime: 25,
      words: [
        { text: "E", startTime: 18, endTime: 18.5 },
        { text: "foi,", startTime: 18.5, endTime: 19.5 },
        { text: "risonho", startTime: 19.5, endTime: 21 },
        { text: "as", startTime: 21, endTime: 21.5 },
        { text: "flores", startTime: 21.5, endTime: 23 },
        { text: "acordar.", startTime: 23, endTime: 25 }
      ]
    },
    {
      text: "O riacho, sobre as pedras, a cantar",
      startTime: 26,
      endTime: 33,
      words: [
        { text: "O", startTime: 26, endTime: 26.5 },
        { text: "riacho,", startTime: 26.5, endTime: 28 },
        { text: "sobre", startTime: 28, endTime: 29 },
        { text: "as", startTime: 29, endTime: 29.5 },
        { text: "pedras,", startTime: 29.5, endTime: 31 },
        { text: "a", startTime: 31, endTime: 31.5 },
        { text: "cantar", startTime: 31.5, endTime: 33 }
      ]
    },
    {
      text: "A cidade que surgia triunfante!",
      startTime: 34,
      endTime: 41,
      words: [
        { text: "A", startTime: 34, endTime: 34.5 },
        { text: "cidade", startTime: 34.5, endTime: 36 },
        { text: "que", startTime: 36, endTime: 36.5 },
        { text: "surgia", startTime: 36.5, endTime: 38.5 },
        { text: "triunfante!", startTime: 38.5, endTime: 41 }
      ]
    },
    {
      text: "Com fervor, nós te saudamos, Guarapuava",
      startTime: 42,
      endTime: 49,
      words: [
        { text: "Com", startTime: 42, endTime: 42.5 },
        { text: "fervor,", startTime: 42.5, endTime: 44 },
        { text: "nós", startTime: 44, endTime: 44.5 },
        { text: "te", startTime: 44.5, endTime: 45 },
        { text: "saudamos,", startTime: 45, endTime: 47 },
        { text: "Guarapuava", startTime: 47, endTime: 49 }
      ]
    },
    {
      text: "Neste hino de Louvor!",
      startTime: 50,
      endTime: 57,
      words: [
        { text: "Neste", startTime: 50, endTime: 51.5 },
        { text: "hino", startTime: 51.5, endTime: 53 },
        { text: "de", startTime: 53, endTime: 54 },
        { text: "Louvor!", startTime: 54, endTime: 57 }
      ]
    },
    {
      text: "Teu vulto sem igual",
      startTime: 58,
      endTime: 65,
      words: [
        { text: "Teu", startTime: 58, endTime: 59 },
        { text: "vulto", startTime: 59, endTime: 61 },
        { text: "sem", startTime: 61, endTime: 62 },
        { text: "igual", startTime: 62, endTime: 65 }
      ]
    },
    {
      text: "Pinheiro magistral",
      startTime: 66,
      endTime: 73,
      words: [
        { text: "Pinheiro", startTime: 66, endTime: 69 },
        { text: "magistral", startTime: 69, endTime: 73 }
      ]
    },
    {
      text: "Eu sempre hei de cantar com ardor!",
      startTime: 74,
      endTime: 81,
      words: [
        { text: "Eu", startTime: 74, endTime: 74.5 },
        { text: "sempre", startTime: 74.5, endTime: 76 },
        { text: "hei", startTime: 76, endTime: 77 },
        { text: "de", startTime: 77, endTime: 77.5 },
        { text: "cantar", startTime: 77.5, endTime: 79 },
        { text: "com", startTime: 79, endTime: 79.5 },
        { text: "ardor!", startTime: 79.5, endTime: 81 }
      ]
    },
    {
      text: "Vaqueiro colossal,",
      startTime: 82,
      endTime: 89,
      words: [
        { text: "Vaqueiro", startTime: 82, endTime: 85 },
        { text: "colossal,", startTime: 85, endTime: 89 }
      ]
    },
    {
      text: "Figura imortal",
      startTime: 90,
      endTime: 97,
      words: [
        { text: "Figura", startTime: 90, endTime: 93 },
        { text: "imortal", startTime: 93, endTime: 97 }
      ]
    },
    {
      text: "Guarapuava é teu grande amor!",
      startTime: 98,
      endTime: 105,
      words: [
        { text: "Guarapuava", startTime: 98, endTime: 100 },
        { text: "é", startTime: 100, endTime: 100.5 },
        { text: "teu", startTime: 100.5, endTime: 101 },
        { text: "grande", startTime: 101, endTime: 103 },
        { text: "amor!", startTime: 103, endTime: 105 }
      ]
    },
    {
      text: "O Sol doura o campo verdejante",
      startTime: 106,
      endTime: 113,
      words: [
        { text: "O", startTime: 106, endTime: 106.5 },
        { text: "Sol", startTime: 106.5, endTime: 107.5 },
        { text: "doura", startTime: 107.5, endTime: 109 },
        { text: "o", startTime: 109, endTime: 109.5 },
        { text: "campo", startTime: 109.5, endTime: 111 },
        { text: "verdejante", startTime: 111, endTime: 113 }
      ]
    },
    {
      text: "A brisa, os trigais a balouçar",
      startTime: 114,
      endTime: 121,
      words: [
        { text: "A", startTime: 114, endTime: 114.5 },
        { text: "brisa,", startTime: 114.5, endTime: 116 },
        { text: "os", startTime: 116, endTime: 116.5 },
        { text: "trigais", startTime: 116.5, endTime: 118 },
        { text: "a", startTime: 118, endTime: 118.5 },
        { text: "balouçar", startTime: 118.5, endTime: 121 }
      ]
    },
    {
      text: "Guarapuava é menina radiante",
      startTime: 122,
      endTime: 129,
      words: [
        { text: "Guarapuava", startTime: 122, endTime: 124 },
        { text: "é", startTime: 124, endTime: 124.5 },
        { text: "menina", startTime: 124.5, endTime: 126 },
        { text: "radiante", startTime: 126, endTime: 129 }
      ]
    },
    {
      text: "Com o ouro dos trigais a se enfeitar!",
      startTime: 130,
      endTime: 137,
      words: [
        { text: "Com", startTime: 130, endTime: 130.5 },
        { text: "o", startTime: 130.5, endTime: 131 },
        { text: "ouro", startTime: 131, endTime: 132 },
        { text: "dos", startTime: 132, endTime: 132.5 },
        { text: "trigais", startTime: 132.5, endTime: 134 },
        { text: "a", startTime: 134, endTime: 134.5 },
        { text: "se", startTime: 134.5, endTime: 135 },
        { text: "enfeitar!", startTime: 135, endTime: 137 }
      ]
    }
  ]
};