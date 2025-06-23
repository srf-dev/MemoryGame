# Jogo da Memória
Um jogo da memória simples feito com HTML, CSS e JavaScript puro. O objetivo é encontrar todos os pares de cartas iguais.

![Imagem do Site](GitHubImage.jpg)

## Como funciona
- O jogo embaralha um conjunto de cartas com emojis.
- Cada carta representa um emoji (ex: 🐻, 🍇, 🦀, etc.).
- O jogador deve clicar nas cartas para virá-las e encontrar os pares.
- Se as duas cartas clicadas forem iguais → Elas permanecem abertas.
- Se forem diferentes → Elas viram de volta após 0.5 segundo.
- O jogo termina quando todos os pares forem encontrados.

### Tecnologias utilizadas
- HTML5
- CSS3 (incluindo animações com transform e transition)
- JavaScript puro (Vanilla JS)

### Conceitos usados
- Manipulação de DOM
- Eventos de clique (onclick)
- Classes dinâmicas (classList.add / classList.remove)
- Animação de cartas com CSS Transform (rotateX)
- Uso de pseudoelemento ::after para criar o verso da carta
- Lógica de comparação de elementos (jogo da memória)
- Embaralhamento de array com .sort() e Math.random()

---

## Autor

Feito com 💜 por Shayare 🐈