console.log (`Vamos criar um incrivel avião de papel, pra isso, responde se você seguiu o passo a passo certinho em.`)
		
		let conclusao = 0
		
		const res1 = prompt (`\nVocê dobrou a folha de papel ao meio?`)
		if (res1 == "sim") {
		  conclusao++
		  }

		const res2 = prompt (`\nVocê desdobrou a folha e depois dobrou as pontas superiores até a marca no centro? `)
		if (res2 == "sim") {
		  conclusao++
	    }

		const res3 = prompt (`\nVocê dobrou as pontas laterais até o centro? `)
		if (res3 == "sim") {
		  conclusao++
		  }

		const res4 = prompt (`\nVocê dobrou o aviãozinho ao meio? `)
		if (res4 == "sim") {
		  conclusao++
		  }

		const res5 = prompt (`\nVocê dobrou as asas do avião até a parte de baixo em cada lado e depois levantou novamente? `)
		if (res5 == "sim") {
		  conclusao++
		  }

      console.log (conclusao)

		if (conclusao == 0) {
		  console.log (`\nCara, isso é só uma folha de papel lisa, não parece em nada um avião kkkkk, isso nem voa, você falhou miseravelmente...`)
		} 
    
    if (conclusao == 1) {
		  console.log (`\nÉ, ainda é só um pedaço de papel todo dobrado, mas ainda da pra pelo menos embolar ele e fazer uma bolinha de papel e catapultar ela, deve acertar alguém pelo menos.`)
		} 

    if (conclusao == 2) {
		  console.log (`\nÉ, ainda é só um pedaço de papel todo dobrado, mas ainda da pra pelo menos embolar ele e fazer uma bolinha de papel e catapultar ela, deve acertar alguém pelo menos.`)
		} 
    
    if (conclusao == 3) {
		  console.log (`\nCara, você quase consegiu, serío campeão, faltou pouco mesmo, quem sabe na proxíma você faça mais umas dobradoras aqui outras ali e dê certo.`)
		} 
    
    if (conclusao == 4) {
		  console.log (`\nDessa vez você conseguiu... em partes, ainda falta algo pra ser digno de ser chamado de O incrível aviãzinho de papel, você chega lá, eu acredito ;)`)
		} 
    
    if (conclusao == 5) {
		  console.log (`\nAgora simmm!!! Isso sim é um aviãozinho de papel de respeito meu camarada, parabéns, você é o Santos Dumont dos aviãozinhos de papel, aposto 10 conto que esse aviãozinho chega uns 100 metros de distância.`)
		}