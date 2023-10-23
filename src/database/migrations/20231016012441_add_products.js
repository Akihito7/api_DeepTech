exports.up = function(knex) {
    return knex('products').insert([
      { 
        name: 'IPhone 15 Apple (256GB) Rosa, Tela de 6,1, 5G e Câmera de 48 mp',
        information: 'O iPhone 15 da Apple apresenta uma tela de 6,1 polegadas, 5G de alta velocidade e uma câmera de 48 MP para fotos incríveis. Com capacidade de armazenamento de 256GB, este é o dispositivo perfeito para quem busca alto desempenho e qualidade de imagem.',
        price: '8500',
        category: 'Smartphone',
        imagem: "IPhone15.png",
        colors: 'rosa,preto'
      },
      {
        name: 'Samsung Galaxy S21 Ultra (256GB) Preto, Tela de 6,8, 5G e Câmera de 108 MP',
        information: 'O Samsung Galaxy S21 Ultra é um dos smartphones mais avançados da marca, com uma tela AMOLED dinâmica de 6,8 polegadas, processador Snapdragon 888 e uma câmera traseira poderosa com capacidade de zoom de até 100x.',
        price: '1299',
        category: 'Smartphone',
        imagem: "SamsungS21Ultra.png",
        colors: 'preto,prata,azul,bronze'
      },
      {
        name: 'Dell XPS 13 (2022)',
        information: 'O Dell XPS 13 é um notebook ultraportátil com um design premium, tela InfinityEdge de 13,4 polegadas e processadores Intel de 11ª geração.',
        price: '1499',
        category: 'Notebook',
        imagem: "DellXPS13.png",
        colors: 'prata'
      },
      {
        name: 'MacBook Air (M1, 2021)',
        information: 'O MacBook Air com chip M1 da Apple oferece um desempenho surpreendente, uma bateria de longa duração e uma tela Retina de 13,3 polegadas.',
        price: '999',
        category: 'Notebook',
        imagem: "MacBookAirM1.png",
        colors: 'prata,cinza espacial,dourado'
      },
      {
        name: 'NVIDIA GeForce RTX 3080 Ti',
        information: 'A GeForce RTX 3080 Ti oferece um desempenho gráfico excepcional, sendo ideal para jogos em 4K e experiências de realidade virtual.',
        price: '1199',
        category: 'Placa de video',
        imagem: "NvidiaRTX3080Ti.png",
        colors: 'N/A'
      },
      {
        name: 'AMD Radeon RX 6900 XT',
        information: 'A Radeon RX 6900 XT da AMD é uma placa gráfica de alta performance, projetada para gamers entusiastas que buscam a melhor qualidade gráfica.',
        price: '999',
        category: 'Placa de video',
        imagem: "AMDRadeonRX6900XT.png",
        colors: 'N/A'
      },
      {
        name: 'HyperX Cloud Alpha',
        information: 'O HyperX Cloud Alpha é um headset gamer com drivers de alta qualidade, construção resistente e conforto excepcional para longas sessões de jogo.',
        price: '99',
        category: 'Headset',
        imagem: "HyperXCloudAlpha.png",
        colors: 'N/A'
      },
      {
        name: 'SteelSeries Arctis Pro Wireless',
        information: 'O Arctis Pro Wireless oferece áudio de alta resolução e é conhecido pelo seu conforto supremo e conectividade sem fio.',
        price: '329',
        category: 'Headset',
        imagem: "SteelSeriesArctisProWireless.png",
        colors: 'N/A'
      },
      {
        name: 'Logitech G Pro X Superlight',
        information: 'O G Pro X Superlight é um mouse gamer ultraleve com sensor HERO, design ambidestro e switches intercambiáveis.',
        price: '149',
        category: 'mouse',
        imagem: "LogitechGProXSuperlight.png",
        colors: 'N/A'
      },
      {
        name: 'Razer DeathAdder V2',
        information: 'O DeathAdder V2 é um mouse para jogos com sensor óptico de 20.000 DPI, switches ópticos e design ergonômico.',
        price: '69',
        category: 'mouse',
        imagem: "RazerDeathAdderV2.png",
        colors: 'N/A'
      },
      {
        name: 'Alienware Aurora R12 Gaming Desktop',
        information: 'O Alienware Aurora R12 é um computador de mesa para jogos de alta performance, equipado com processadores Intel Core de 11ª geração e opções de GPU poderosas.',
        price: '1999',
        category: 'Computador',
        imagem: "AlienwareAuroraR12.png",
        colors: 'N/A'
      },
      {
        name: 'HP Envy 32 All-in-One',
        information: 'O HP Envy 32 é um computador all-in-one premium com uma tela de 32 polegadas, processadores Intel Core e gráficos NVIDIA GeForce RTX.',
        price: '2499',
        category: 'Computador',
        imagem: "HPEnvy32.png",
        colors: 'N/A'
      },
      {
        name: 'AMD Ryzen 9 5900X',
        information: 'O Ryzen 9 5900X é um processador de última geração da AMD, com 12 núcleos e 24 threads para desempenho excepcional em multitarefa e jogos.',
        price: '549',
        category: 'processador',
        imagem: "AMDRyzen95900X.png",
        colors: 'N/A'
      },
      {
        name: 'Intel Core i9-11900K',
        information: 'O Core i9-11900K é um processador Intel de 11ª geração, otimizado para jogos e tarefas exigentes, com 8 núcleos e 16 threads.',
        price: '539',
        category: 'processador',
        imagem: "IntelCorei911900K.png",
        colors: 'N/A'
      }
    ]);
  };
  
  exports.down = function(knex) {
    
  };
  
