const nome = prompt (`Diga seu nome: `)

console.log (`\nlá ${nome}, você está numa competição de aviãozinhos de papel, onde será o campeão quem jogar o avião mais longe possível, cada pontuação vem com um ranking dela, vamos ver até onde seu ranking chegará e se você será o grande campeão. São seis posições possíveis no jogo, e quem ficar em último terá que pagar uma prenda, e o campeão levará o troféu e 1000 reais para casa. Vamos ver se você tem um incrivel avião de papel para ser campeão, pra isso, responda se você seguiu o passo a passo certinho.`)
		
		let conclusao = 0
		
		const res1 = prompt (`\nVocê dobrou a folha de papel ao meio?[s/n] `).toLowerCase()
		if (res1 == "s") {
		  conclusao++
		  }

		const res2 = prompt (`\nVocê desdobrou a folha e depois dobrou as pontas superiores até a marca no centro?[s/n] `).toLowerCase()
		if (res2 == "s") {
		  conclusao++
	    }

		const res3 = prompt (`\nVocê dobrou as pontas laterais até o centro?[s/n] `).toLowerCase()
		if (res3 == "s") {
		  conclusao++
		  }

		const res4 = prompt (`\nVocê dobrou o aviãozinho ao meio?[s/n] `).toLowerCase()
		if (res4 == "s") {
		  conclusao++
		  }

		const res5 = prompt (`\nVocê dobrou as asas do avião até a parte de baixo em cada lado e depois levantou novamente?[s/n] `).toLowerCase()
		if (res5 == "s") {
		  conclusao++
		  }

    console.log (`\nAgora lance-o para ver onde pode chegar seu aviãozinho.`)

		if (conclusao == 0) {
		  console.log (`\nO seu aviãozinho não voa nem 50 centimetros e você fracassou miseravelmente em sua competição, ficando em último, tendo que pagar sua prenda.
      RANKING: SEXTO LUGAR`)
		} 
    
    if (conclusao == 1) {
		  console.log (`\nO seu aviãozinho voa por 1 metro e você não consegue ganhar o jogo, mas pelo menos não ficou em último, assim se livrando da prenda.
      RANKING: QUINTO LUGAR`)
		} 

    if (conclusao == 2) {
		  console.log (`\nO seu aviãozinho voa por 2 metros e você não consegue ganhar o jogo, mas pelo menos não ficou em último, assim se livrando da prenda.
      RANKING: QUARTO LUGAR`)
		} 
    
    if (conclusao == 3) {
		  console.log (`\nO avião conseguiu voar por 6 metros, voou bem, mas não o suficiente para ser o campeão, mas pelo menos ficou entre os 3 melhores, levando 100 reais pela posição.
      RANKING: TERCEIRO LUGAR`)
		} 
    
    if (conclusao == 4) {
		  console.log (`\nAgora o avião voou bastante, chegando a 9 metros, mas não conseguiu desbancar os 12 metros do primeiro lugar, você quase conseguiu, como prêmio de consolação, leva pra casa 300 reais.
      RANKING: SEGUNDO LUGAR`)
		} 
    
    if (conclusao == 5) {
		  console.log (`\nAgora simmm!!! O seu avião voa como um pássaro, chegando a alcançar 15 metros de voo, se concagrando o grande campeão do Primeiro Torneio de Aviãozinhos de Papel, levando o grande troféu e o prêmio de 1000 reais e sendo celebrado por todos.
      RANKING: PRIMEIRO LUGAR`)
		}